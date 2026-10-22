const KataJourneyEngine = {
    unlockedRowIdx: parseInt(localStorage.getItem('kata_unlocked_row')) || 0,
    charMemory: JSON.parse(localStorage.getItem('kata_memory')) || {}, 
    
    currentRow: null,
    quizQueue: [],
    currentQ: null,
    
    init: function() {
        this.bindTabs();
        this.renderFullAlphabet();
        this.renderGarden();
        this.renderExtendedKatakana(); // අලුතින් එක් කළ පේළිය (නව කතකන සඳහා)
    },

    bindTabs: function() {
        // අලුත් Extended Katakana Tab එකද ඇතුළුව Tabs 3ම මෙහි ඇත
        const tabs = [
            { btn: 'tab-kata-alphabet', content: 'content-kata-alphabet' },
            { btn: 'tab-kata-journey', content: 'content-kata-journey' },
            { btn: 'tab-kata-extended', content: 'content-kata-extended' } 
        ];

        tabs.forEach(tab => {
            const btnEl = document.getElementById(tab.btn);
            if(btnEl) {
                btnEl.onclick = () => {
                    tabs.forEach(t => {
                        document.getElementById(t.btn).classList.remove('active');
                        document.getElementById(t.content).classList.remove('active');
                        document.getElementById(t.content).classList.add('hidden');
                    });
                    btnEl.classList.add('active');
                    document.getElementById(tab.content).classList.add('active');
                    document.getElementById(tab.content).classList.remove('hidden');
                };
            }
        });

        const hintToggleBtn = document.getElementById('btn-toggle-kata-full-hints');
        if (hintToggleBtn) {
            hintToggleBtn.onclick = () => {
                document.getElementById('full-katakana-list').classList.toggle('show-hints');
            };
        }
    },

    renderFullAlphabet: function() {
        const container = document.getElementById('full-katakana-list');
        if(!container) return;
        container.innerHTML = '';
        
        katakanaData.rows.forEach(row => {
            row.chars.forEach(c => {
                const btn = document.createElement('div');
                btn.className = 'kana-card';
                btn.innerHTML = `
                    <div class="kana-large">${c.kana}</div>
                    <div class="kana-romaji">${c.romaji}</div>
                    <div class="kana-hint" style="color: #E67E22;">${c.hint}</div>
                `;
                btn.onclick = () => AudioService.speak(c.kana);
                container.appendChild(btn);
            });
        });
    },

    // අලුත්: විදේශීය ශබ්ද සහිත නව කතකන අක්ෂර පෙන්වීමේ ෆන්ක්ෂන් එක
    renderExtendedKatakana: function() {
        const container = document.getElementById('extended-katakana-list');
        if(!container) return;
        container.innerHTML = '';
        
        if (!appData.extendedKatakana) return; // දත්ත නොමැති නම් error වීම වළක්වයි
        
        appData.extendedKatakana.forEach(group => {
            const section = document.createElement('div');
            section.className = 'card';
            section.style.marginBottom = '20px';
            
            section.innerHTML = `<h3 style="color: var(--primary); margin-bottom: 15px;">${group.group}</h3>`;
            
            const grid = document.createElement('div');
            grid.className = 'kana-grid';
            
            group.chars.forEach(c => {
                const btn = document.createElement('div');
                btn.className = 'kana-card';
                btn.innerHTML = `
                    <div class="kana-large">${c.kana}</div>
                    <div class="kana-romaji">${c.romaji}</div>
                    <div class="kana-hint" style="color: #E67E22; display: block; margin-top: 8px;">${c.hint}</div>
                `;
                btn.onclick = () => AudioService.speak(c.kana);
                grid.appendChild(btn);
            });
            
            section.appendChild(grid);
            container.appendChild(section);
        });
    },

    saveMemory: function() {
        localStorage.setItem('kata_memory', JSON.stringify(this.charMemory));
        localStorage.setItem('kata_unlocked_row', this.unlockedRowIdx);
    },

    // 1. Garden UI (Visual Progress)
    renderGarden: function() {
        document.getElementById('kata-journey-dashboard').classList.remove('hidden');
        document.getElementById('kata-observe-area').classList.add('hidden');
        document.getElementById('kata-quiz-area').classList.add('hidden');
        
        const grid = document.getElementById('kata-garden-grid');
        if(!grid) return;
        grid.innerHTML = '';

        katakanaData.rows.forEach((row, index) => {
            const card = document.createElement('div');
            card.className = 'card text-center';
            card.style.padding = "10px";
            card.style.cursor = index <= this.unlockedRowIdx ? "pointer" : "not-allowed";
            
            // ගසේ වැඩීම ගණනය කිරීම
            let totalHearts = 0;
            row.chars.forEach(c => totalHearts += (this.charMemory[c.kana] || 0));
            const maxHearts = row.chars.length * 5;
            const health = maxHearts === 0 ? 0 : (totalHearts / maxHearts);

            let icon = "🔒";
            let status = "Locked";
            if (index === this.unlockedRowIdx) {
                icon = "🌱"; status = "Learning";
            } else if (index < this.unlockedRowIdx) {
                if (health > 0.8) { icon = "🌳"; status = "Mastered"; }
                else if (health > 0.5) { icon = "🌿"; status = "Growing"; }
                else { icon = "🥀"; status = "Needs Water!"; }
            }

            card.innerHTML = `
                <div style="font-size: 3rem; margin-bottom: 10px;">${icon}</div>
                <h4 style="margin: 0; color: var(--primary);">${row.name}</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 5px;">${status}</p>
            `;

            if (index <= this.unlockedRowIdx) {
                card.onclick = () => this.startObservePhase(index);
            }
            grid.appendChild(card);
        });
    },

    // 2. Observe Phase
    startObservePhase: function(rowIdx) {
        this.currentRow = katakanaData.rows[rowIdx];
        document.getElementById('kata-journey-dashboard').classList.add('hidden');
        document.getElementById('kata-observe-area').classList.remove('hidden');
        
        document.getElementById('kata-obs-title').textContent = `${this.currentRow.name} ඉගෙන ගනිමු`;
        const charContainer = document.getElementById('kata-obs-chars');
        charContainer.innerHTML = '';

        this.currentRow.chars.forEach(c => {
            if(this.charMemory[c.kana] === undefined) this.charMemory[c.kana] = 0;
            
            const btn = document.createElement('div');
            btn.className = 'kana-card';
            btn.innerHTML = `
                <div class="kana-large">${c.kana}</div>
                <div class="kana-romaji">${c.romaji}</div>
                <div class="kana-hint" style="color: #E67E22; display: block; margin-top: 8px;">${c.hint}</div>
            `;
            btn.onclick = () => AudioService.speak(c.kana);
            charContainer.appendChild(btn);
        });
        this.saveMemory();
    },

    // 3. Smart Quiz Generation
    startQuiz: function() {
        document.getElementById('kata-observe-area').classList.add('hidden');
        document.getElementById('kata-quiz-area').classList.remove('hidden');

        let pool = [...this.currentRow.chars];

        let weakOldChars = [];
        Object.keys(this.charMemory).forEach(kanaKey => {
            const hearts = this.charMemory[kanaKey];
            const isCurrentRow = this.currentRow.chars.some(c => c.kana === kanaKey);
            
            if (!isCurrentRow && hearts < 4) {
                for(let r of katakanaData.rows) {
                    let match = r.chars.find(c => c.kana === kanaKey);
                    if(match) { weakOldChars.push(match); break; }
                }
            }
        });

        weakOldChars.sort(() => 0.5 - Math.random());
        pool = [...pool, ...weakOldChars.slice(0, 5)];

        this.quizQueue = [];
        pool.forEach(charObj => {
            this.quizQueue.push({ char: charObj, type: 'audio' });
            this.quizQueue.push({ char: charObj, type: 'romaji' });
        });
        this.quizQueue.sort(() => 0.5 - Math.random());
        
        this.nextQuestion();
    },

    nextQuestion: function() {
        if(this.quizQueue.length === 0) {
            alert("නියමයි! අදියර සම්පූර්ණයි 🎉");
            const currentIdx = katakanaData.rows.findIndex(r => r.id === this.currentRow.id);
            if (currentIdx === this.unlockedRowIdx && currentIdx < katakanaData.rows.length - 1) {
                this.unlockedRowIdx++;
                this.saveMemory();
            }
            this.renderGarden();
            return;
        }

        this.currentQ = this.quizQueue.shift();
        this.renderQuestionUI();
    },

    renderQuestionUI: function() {
        const q = this.currentQ;
        const qDisplay = document.getElementById('kata-q-display');
        const optGrid = document.getElementById('kata-options-grid');
        const nextBtn = document.getElementById('kata-btn-next');
        const audioBtn = document.getElementById('kata-btn-audio');
        const heartsDisplay = document.getElementById('kata-hearts-display');

        optGrid.innerHTML = '';
        nextBtn.classList.add('hidden');
        audioBtn.classList.add('hidden');
        qDisplay.style.color = "var(--text)";

        const heartsCount = this.charMemory[q.char.kana] || 0;
        heartsDisplay.innerHTML = '❤️'.repeat(heartsCount) + '🤍'.repeat(5 - heartsCount);

        let correctAns = q.char.kana;
        
        let allKana = [];
        katakanaData.rows.forEach(r => r.chars.forEach(c => allKana.push(c.kana)));
        let opts = [correctAns];
        while(opts.length < 4) {
            let r = allKana[Math.floor(Math.random() * allKana.length)];
            if(!opts.includes(r)) opts.push(r);
        }
        opts.sort(() => 0.5 - Math.random());

        if (q.type === 'audio') {
            document.getElementById('kata-quiz-title').textContent = "Listen & Pick";
            qDisplay.textContent = "🔊";
            audioBtn.classList.remove('hidden');
            audioBtn.onclick = () => AudioService.speak(q.char.kana);
            AudioService.speak(q.char.kana);
        } else {
            document.getElementById('kata-quiz-title').textContent = "Find Character";
            qDisplay.textContent = q.char.romaji;
        }

        opts.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => {
                Array.from(optGrid.children).forEach(b => b.disabled = true);
                
                if(opt === correctAns) {
                    btn.classList.add('correct');
                    this.charMemory[correctAns] = Math.min(5, (this.charMemory[correctAns] || 0) + 1);
                } else {
                    btn.classList.add('wrong');
                    Array.from(optGrid.children).forEach(b => {
                        if(b.textContent === correctAns) b.classList.add('correct');
                    });
                    this.charMemory[correctAns] = Math.max(0, (this.charMemory[correctAns] || 0) - 1);
                    this.quizQueue.push(q);
                }
                
                this.saveMemory();
                
                const newHearts = this.charMemory[correctAns];
                heartsDisplay.innerHTML = '❤️'.repeat(newHearts) + '🤍'.repeat(5 - newHearts);
                
                nextBtn.classList.remove('hidden');
            };
            optGrid.appendChild(btn);
        });

        nextBtn.onclick = () => this.nextQuestion();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => KataJourneyEngine.init(), 500);
});