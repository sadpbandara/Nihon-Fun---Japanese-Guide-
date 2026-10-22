const PronounVocabEngine = {
    currentCategory: 'Items',
    currentWord: null,

    filterVocab: function(category) {
        this.currentCategory = category;
        const container = document.getElementById('pv-list');
        container.innerHTML = '';

        const filtered = pronounVocab.filter(w => w.category === category);
        
        filtered.forEach(w => {
            const card = document.createElement('div');
            card.className = 'kana-card';
            card.style.padding = "15px 10px";
            card.innerHTML = `
                <div class="japanese-large" style="font-size:1.8rem;">${w.jp}</div>
                <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:5px;">${w.romaji}</div>
                <div style="font-weight:bold; color:var(--secondary); font-size:1rem;">${w.si}</div>
            `;
            card.onclick = () => AudioService.speak(w.jp);
            container.appendChild(card);
        });

        // බොත්තම් වල වර්ණ මාරු කිරීම
        const btns = document.querySelectorAll('#pv-dashboard .btn-secondary');
        btns.forEach(b => {
            b.style.background = 'transparent';
            b.style.color = 'var(--primary)';
        });
        event.target.style.background = '#E8F0F4';
    },

    showDashboard: function() {
        document.getElementById('pv-dashboard').classList.remove('hidden');
        document.getElementById('pv-game-area').classList.add('hidden');
    },

    startFlashcards: function() {
        document.getElementById('pv-dashboard').classList.add('hidden');
        document.getElementById('pv-game-area').classList.remove('hidden');
        this.nextQuestion();
    },

    nextQuestion: function() {
        // අහඹු වචනයක් තේරීම
        this.currentWord = pronounVocab[Math.floor(Math.random() * pronounVocab.length)];
        
        document.getElementById('pv-game-jp').textContent = this.currentWord.jp;
        document.getElementById('pv-game-romaji').textContent = this.currentWord.romaji;
        
        const audioBtn = document.getElementById('pv-game-audio');
        audioBtn.onclick = () => AudioService.speak(this.currentWord.jp);
        AudioService.speak(this.currentWord.jp); // ස්වයංක්‍රීයව ඇසීම

        // පිළිතුරු 4ක් සෑදීම
        const optionsGrid = document.getElementById('pv-options-grid');
        optionsGrid.innerHTML = '';

        let options = [this.currentWord.si];
        while(options.length < 4) {
            let randomOpt = pronounVocab[Math.floor(Math.random() * pronounVocab.length)].si;
            if(!options.includes(randomOpt)) options.push(randomOpt);
        }
        options.sort(() => 0.5 - Math.random());

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => {
                Array.from(optionsGrid.children).forEach(b => b.disabled = true);
                if(opt === this.currentWord.si) {
                    btn.classList.add('correct');
                    Storage.addXP(5);
                    setTimeout(() => this.nextQuestion(), 1000);
                } else {
                    btn.classList.add('wrong');
                    Array.from(optionsGrid.children).forEach(b => {
                        if(b.textContent === this.currentWord.si) b.classList.add('correct');
                    });
                    setTimeout(() => this.nextQuestion(), 2000);
                }
            };
            optionsGrid.appendChild(btn);
        });
    }
};

const PronounEngine = {
    selectedRoot: null,
    selectedSuffix: null,
    currentScenario: null,
    
    // Matrix Data for Learning Area
    matrixData: [
        { label: "こ (Ko)<br><small>මට ළඟ (This)</small>", color: "#3498DB", items: [
            { jp: "これ", romaji: "kore", si: "මේක" }, { jp: "この", romaji: "kono", si: "මේ..." },
            { jp: "ここ", romaji: "koko", si: "මෙතන" }, { jp: "こちら", romaji: "kochira", si: "මේ පැත්ත" }
        ]},
        { label: "そ (So)<br><small>ඔයාට ළඟ (That)</small>", color: "#E67E22", items: [
            { jp: "それ", romaji: "sore", si: "ඒක" }, { jp: "その", romaji: "sono", si: "ඒ..." },
            { jp: "そこ", romaji: "soko", si: "එතන" }, { jp: "そちら", romaji: "sochira", si: "ඒ පැත්ත" }
        ]},
        { label: "あ (A)<br><small>ඈත (Over there)</small>", color: "#9B59B6", items: [
            { jp: "あれ", romaji: "are", si: "අරක" }, { jp: "あの", romaji: "ano", si: "අර..." },
            { jp: "あそこ", romaji: "asoko", si: "අතන" }, { jp: "あちら", romaji: "achira", si: "අර පැත්ත" }
        ]},
        { label: "ど (Do)<br><small>ප්‍රශ්නයක් (Question)</small>", color: "#E74C3C", items: [
            { jp: "どれ", romaji: "dore", si: "කෝකද" }, { jp: "どの", romaji: "dono", si: "කොයි..." },
            { jp: "どこ", romaji: "doko", si: "කොහෙද" }, { jp: "どちら", romaji: "dochira", si: "කොයි පැත්තද" }
        ]}
    ],

    // Game Scenarios (Contexts)
    scenarios: [
        { root: "こ", suffix: "れ", target: "これ", text: "ඔබේ අතේ ඇති පොතක් අනිත් කෙනාට පෙන්වමින් 'මේක මගේ පොත' යැයි කීමට අවශ්‍යයි. 'මේක' සඳහා කුමක් භාවිතා කරයිද?" },
        { root: "そ", suffix: "れ", target: "それ", text: "ඔබ සමග කතා කරන මිතුරාගේ අතේ ඇති පෑනක් පෙන්වමින් 'ඒක ලස්සනයි' යැයි කිව යුතුය. 'ඒක' සඳහා කුමක් භාවිතා කරයිද?" },
        { root: "あ", suffix: "れ", target: "あれ", text: "ඔබ දෙදෙනාටම ඈතින් පෙනෙන ගොඩනැගිල්ලක් පෙන්වමින් 'අරක මොකක්ද?' යැයි ඇසිය යුතුය." },
        { root: "ど", suffix: "れ", target: "どれ", text: "මේසය උඩ පෑන් ගොඩක් ඇත. 'ඔයාගේ පෑන කෝකද?' කියා ඇසීමට 'කෝකද' යන්න සකසන්න." },
        { root: "こ", suffix: "の", target: "この", text: "ඔබ ළඟම ඇති කාරයක් පෙන්වමින් 'මේ කාරය' (This car) යැයි කිව යුතුය. මෙහිදී 'කාරය' යනු නාම පදයක් බව මතක තබාගන්න." },
        { root: "そ", suffix: "の", target: "その", text: "ඔබේ මිතුරා ළඟ ඇති පොතක් පෙන්වා 'ඒ පොත' (That book) යැයි කිව යුතුය." },
        { root: "あ", suffix: "の", target: "あの", text: "ඈතින් ඇවිදගෙන යන පුද්ගලයෙක් පෙන්වමින් 'අර පුද්ගලයා' යැයි කිව යුතුය." },
        { root: "ど", suffix: "の", target: "どの", text: "වාහන ගොඩක් අතරින් 'කොයි වාහනයද?' කියා ප්‍රශ්න කළ යුතුය." },
        { root: "こ", suffix: "こ", target: "ここ", text: "ඔබ දැනට සිටින ස්ථානය පෙන්වමින් 'මෙතන පාසලයි' කියා කිව යුතුය. 'මෙතන' සාදන්න." },
        { root: "そ", suffix: "こ", target: "そこ", text: "ඔබ සමග කතාකරන කෙනාට කිට්ටුවෙන් ඇති තැනක් පෙන්වමින් 'එතන තියෙනවා' කිව යුතුය." },
        { root: "あ", suffix: "こ", target: "あそこ", text: "ඈතින් පෙනෙන ස්ථානයක් පෙන්වමින් 'අතන බැංකුවක් තියෙනවා' කිව යුතුය. (සැ.යු: මෙහිදී 'あ' + 'こ' එකතු වී විශේෂ ආකාරයකින් 'あそこ' සෑදේ)" },
        { root: "ど", suffix: "こ", target: "どこ", text: "මිතුරාගෙන් 'වැසිකිළිය තියෙන්නේ කොහෙද?' කියා ඇසිය යුතුය. 'කොහෙද' සාදන්න." },
        { root: "こ", suffix: "ちら", target: "こちら", text: "ඔබ අසල සිටින ඔබේ ගුරුවරයාව තවත් කෙනෙකුට හඳුන්වා දෙමින් ගෞරවාන්විතව 'මෙතුමා' යැයි කිව යුතුය." },
        { root: "ど", suffix: "ちら", target: "どちら", text: "යම් කෙනෙකුගෙන් ඉතා ගෞරවාන්විතව 'ඔබ කොහේ ඉඳන්ද එන්නේ?' (කොයි පැත්තෙන්ද) කියා ප්‍රශ්න කළ යුතුය." }
    ],

    init: function() {
        this.renderMatrix();
        this.bindTabs();
        
        // Load initial vocab
        if(typeof PronounVocabEngine !== 'undefined') {
            PronounVocabEngine.filterVocab('Items');
        }
    },

    bindTabs: function() {
        const tabs = [
            { btn: 'tab-pro-learn', content: 'content-pro-learn' },
            { btn: 'tab-pro-vocab', content: 'content-pro-vocab' }, // අලුත් Tab එක
            { btn: 'tab-pro-game', content: 'content-pro-game' },
            { btn: 'tab-pro-100', content: 'content-pro-100' }
        ];

        tabs.forEach(tab => {
            const btnEl = document.getElementById(tab.btn);
            if(btnEl) {
                btnEl.onclick = () => {
                    // අනෙක් සියලුම Tabs සහ අන්තර්ගතයන් වසා දැමීම
                    tabs.forEach(t => {
                        const b = document.getElementById(t.btn);
                        const c = document.getElementById(t.content);
                        if(b) b.classList.remove('active');
                        if(c) {
                            c.classList.remove('active');
                            c.classList.add('hidden');
                        }
                    });
                    
                    // තේරූ Tab එක පමණක් පෙන්වීම
                    btnEl.classList.add('active');
                    const activeContent = document.getElementById(tab.content);
                    if(activeContent) {
                        activeContent.classList.add('active');
                        activeContent.classList.remove('hidden');
                    }

                    // Triggers
                    if(tab.btn === 'tab-pro-game') this.startNewGame();
                    if(tab.btn === 'tab-pro-100' && typeof PronounQuizEngine !== 'undefined') {
                        PronounQuizEngine.showDashboard();
                    }
                    if(tab.btn === 'tab-pro-vocab' && typeof PronounVocabEngine !== 'undefined') {
                        PronounVocabEngine.showDashboard();
                    }
                };
            }
        });
    },

    // Render the Logic Table
    renderMatrix: function() {
        const container = document.getElementById('pronoun-matrix');
        if(!container) return;
        container.innerHTML = '';

        const headers = [
            "දුර ⬇", 
            "දේවල්<br><small>(+れ/re)</small>", 
            "නාම පද<br><small>(+の/no)</small>", 
            "ස්ථාන<br><small>(+こ/ko)</small>", 
            "දිශාව<br><small>(+ちら/chira)</small>"
        ];
        headers.forEach(h => {
            let div = document.createElement('div');
            div.className = 'matrix-header';
            div.innerHTML = h;
            container.appendChild(div);
        });

        this.matrixData.forEach(row => {
            let rootDiv = document.createElement('div');
            rootDiv.className = 'matrix-root';
            rootDiv.style.background = row.color + "15";
            rootDiv.style.color = row.color;
            rootDiv.innerHTML = row.label;
            container.appendChild(rootDiv);
            
            row.items.forEach(item => {
                let cell = document.createElement('div');
                cell.className = 'matrix-cell';
                cell.innerHTML = `
                    <div class="japanese-large" style="font-size: 1.6rem; color: var(--text); margin-bottom:0;">${item.jp}</div>
                    <div class="text-muted" style="font-size: 0.85rem;">${item.romaji}</div>
                    <div class="si-text" style="font-weight: bold; color: var(--secondary); margin-top: 5px;">${item.si}</div>
                `;
                cell.onclick = () => AudioService.speak(item.jp);
                container.appendChild(cell);
            });
        });
    },

    // --- LOGIC GAME ENGINE ---
    startNewGame: function() {
        this.selectedRoot = null;
        this.selectedSuffix = null;
        
        document.querySelectorAll('#pro-root-options .option-btn, #pro-suffix-options .option-btn').forEach(btn => {
            btn.classList.remove('correct', 'wrong');
            btn.disabled = false;
        });
        document.getElementById('pro-result-area').classList.add('hidden');

        this.currentScenario = this.scenarios[Math.floor(Math.random() * this.scenarios.length)];
        document.getElementById('pro-situation-text').textContent = this.currentScenario.text;
    },

    selectRoot: function(root) {
        if(this.selectedRoot && this.selectedSuffix) return;
        this.selectedRoot = root;
        
        const buttons = document.querySelectorAll('#pro-root-options .option-btn');
        buttons.forEach(b => {
            b.style.borderColor = "var(--border)";
            b.style.background = "var(--surface)";
            if(b.textContent.includes(root)) {
                b.style.borderColor = "var(--primary)";
                b.style.background = "#E8F4F8";
            }
        });
        this.checkCombination();
    },

    selectSuffix: function(suffix) {
        if(this.selectedRoot && this.selectedSuffix) return;
        this.selectedSuffix = suffix;

        const buttons = document.querySelectorAll('#pro-suffix-options .option-btn');
        buttons.forEach(b => {
            b.style.borderColor = "var(--border)";
            b.style.background = "var(--surface)";
            if(b.textContent.includes(suffix)) {
                b.style.borderColor = "#9b59b6";
                b.style.background = "#F4ECF7";
            }
        });
        this.checkCombination();
    },

    checkCombination: function() {
        if(!this.selectedRoot || !this.selectedSuffix) return;

        const resultArea = document.getElementById('pro-result-area');
        const wordDisplay = document.getElementById('pro-combined-word');
        const msgDisplay = document.getElementById('pro-feedback-msg');
        
        let combinedWord = this.selectedRoot + this.selectedSuffix;
        if(this.selectedRoot === 'あ' && this.selectedSuffix === 'こ') {
            combinedWord = 'あそこ'; 
        }

        resultArea.classList.remove('hidden');
        wordDisplay.textContent = combinedWord;

        const isCorrect = (combinedWord === this.currentScenario.target);

        if(isCorrect) {
            AudioService.speak(combinedWord);
            wordDisplay.style.color = "var(--success)";
            msgDisplay.textContent = "නියමයි! ඔබේ තර්කය සම්පූර්ණයෙන්ම නිවැරදියි! 🎉";
            msgDisplay.style.color = "var(--success)";
            Storage.addXP(15);
            document.getElementById('pro-score').textContent = `${Storage.get().xp} XP`;
            document.getElementById('pro-next-btn').onclick = () => this.startNewGame();
        } else {
            wordDisplay.style.color = "var(--danger)";
            msgDisplay.innerHTML = `අයියෝ වැරදියි!<br><span style="font-size:1.1rem; color:var(--text-muted);">නිවැරදි පිළිතුර: <b>${this.currentScenario.target}</b></span>`;
            msgDisplay.style.color = "var(--danger)";
            document.getElementById('pro-next-btn').onclick = () => this.startNewGame();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => PronounEngine.init(), 500);
});