const app = {
    init: function() {
        this.bindNavigation();
        this.bindSettings();
        this.bindTabs();       
        this.bindHintsToggle(); 
        this.loadDashboard();
        this.renderVocabList();
        this.renderHiragana();  
        this.renderParticles(); 
        this.renderSimilarKana(); 
        this.renderLongVowels();
        this.renderCombinedKana();
        this.renderStructureVocab();
        
        // අලුතින්ම එකතු කළ පේළි 3 පහත දැක්වේ
        if (typeof VideoEngine !== 'undefined') {
            VideoEngine.init(); 
        }

        const state = Storage.get();
        if(state.theme === 'dark') document.body.setAttribute('data-theme', 'dark');

        this.router.navigate('dashboard');
    },

    router: {
        navigate: function(pageId) {
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.target === pageId);
            });
            document.querySelectorAll('.page').forEach(page => {
                page.classList.toggle('active', page.id === pageId);
            });
            
            if(pageId === 'practice') {
                document.getElementById('practice-menu').classList.remove('hidden');
                document.getElementById('practice-menu').classList.add('active');
                
                const areasToHide = ['training-intro', 'quiz-area', 'word-builder-area', 'particle-quiz-area', 'quiz-result'];
                areasToHide.forEach(id => {
                    const el = document.getElementById(id);
                    if(el) el.classList.add('hidden');
                });
            }
            if(pageId === 'dashboard') app.loadDashboard();
        }
    },

    renderCombinedKana: function() {
        const container = document.getElementById('combined-list');
        if(!container) return;
        container.innerHTML = ''; 
        
        appData.combinedKana.forEach(char => {
            const card = document.createElement('div');
            card.className = 'kana-card';
            card.innerHTML = `
                <div class="kana-large">${char.kana}</div>
                <div class="kana-romaji">${char.romaji}</div>
                <div class="kana-hint">${char.hint}</div>
            `;
            card.addEventListener('click', () => {
                AudioService.speak(char.kana);
            });
            container.appendChild(card);
        });
    },
    renderStructureVocab: function() {
        const container = document.getElementById('struct-vocab-list');
        if(!container) return;
        container.innerHTML = '';

        // වාක්‍ය ආකෘති පෙන්වීම
        let html = '<div class="card" style="border: 2px solid var(--primary); margin-bottom: 30px;">';
        html += '<h2 style="color:var(--primary); margin-bottom: 15px;">🎯 මූලික වාක්‍ය ආකෘති</h2>';
        
        appData.sentencePatterns.forEach(p => {
            html += `<div style="background:var(--background); padding:15px; margin-bottom:10px; border-radius:8px;">
                <div style="font-size:1.2rem; font-weight:bold; color:var(--text); margin-bottom:5px;">${p.formula}</div>
                <div style="color:var(--text-muted); font-size:1rem;">උදා: <span style="color:var(--secondary); font-weight:bold;">${p.exampleJp}</span> (${p.exampleSi})</div>
            </div>`;
        });
        html += '</div>';

        // කාණ්ඩ වශයෙන් වචන සහ ඉඟි පෙන්වීම
        appData.structuredVocabWithHints.forEach(category => {
            html += `<div class="card" style="margin-bottom: 20px;">`;
            html += `<h2 style="color:var(--secondary); border-bottom: 2px solid var(--border); padding-bottom: 10px; margin-bottom: 15px;">${category.title}</h2>`;
            html += `<div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));">`;
            
            category.words.forEach(w => {
                html += `
                    <div style="background:var(--background); padding:15px; border-radius:10px; position:relative; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <h3 class="japanese-large" style="font-size:1.8rem; margin:0; color:var(--primary)">${w.jp}</h3>
                        <div style="font-size:1rem; color:var(--text-muted); font-weight:bold; margin-bottom: 10px;">${w.kana} | ${w.si}</div>
                        <div style="font-size:0.95rem; color:#D35400; font-weight:bold; background:#FDEBD0; padding:8px; border-radius:5px;">💡 ${w.hint}</div>
                        <button class="btn-audio" style="position:absolute; top:10px; right:10px; padding:5px 10px; min-width:unset;" onclick="AudioService.speak('${w.kana}')">🔊</button>
                    </div>
                `;
            });
            html += `</div></div>`;
        });

        container.innerHTML = html;
    },
    
    bindNavigation: function() {
        document.getElementById('mainNav').addEventListener('click', (e) => {
            const btn = e.target.closest('.nav-btn');
            if (btn) this.router.navigate(btn.dataset.target);
        });
    },

    bindTabs: function() {
        // දැන් Tabs 4ක් ඇත
        const tabs = [
            { btn: 'tab-hiragana', content: 'content-hiragana' },
            { btn: 'tab-similar', content: 'content-similar' }, // අලුත් Tab එක
            { btn: 'tab-vocab', content: 'content-vocab' },
            { btn: 'tab-particles', content: 'content-particles' },
            { btn: 'tab-long-vowels', content: 'content-long-vowels' },
            { btn: 'tab-combined', content: 'content-combined' },
            { btn: 'tab-struct-vocab', content: 'content-struct-vocab' },
        ];

        tabs.forEach(tab => {
            const btnEl = document.getElementById(tab.btn);
            if(btnEl) {
                btnEl.addEventListener('click', () => {
                    tabs.forEach(t => {
                        document.getElementById(t.btn).classList.remove('active');
                        document.getElementById(t.content).classList.remove('active');
                        document.getElementById(t.content).classList.add('hidden');
                    });
                    btnEl.classList.add('active');
                    document.getElementById(tab.content).classList.add('active');
                    document.getElementById(tab.content).classList.remove('hidden');
                });
            }
        });
    },

    renderLongVowels: function() {
        const container = document.getElementById('long-vowels-list');
        if(!container) return;
        container.innerHTML = '';
        
        appData.longVowels.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2 class="japanese-large" style="color: var(--primary);">${item.word}</h2>
                <p style="font-size:1.1rem; margin-bottom: 5px;"><strong>${item.meaning}</strong> (${item.romaji})</p>
                <div style="background: var(--background); padding: 12px; border-radius: 8px; margin-top: 10px;">
                    <p style="font-size: 0.95rem; color: var(--secondary);">💡 ${item.hint}</p>
                </div>
                <button class="btn-audio" data-text="${item.word}" style="margin-top: 10px;">🔊 Listen</button>
            `;
            container.appendChild(card);
        });

        container.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-audio')) {
                AudioService.speak(e.target.dataset.text);
            }
        });
    },
    bindHintsToggle: function() {
        const toggleBtn = document.getElementById('btn-toggle-hints');
        const list = document.getElementById('hiragana-list');
        if(toggleBtn && list) {
            toggleBtn.addEventListener('click', () => {
                list.classList.toggle('show-hints');
            });
        }
    },

    loadDashboard: function() {
        const state = Storage.get();
        const xpDisplay = document.getElementById('xp-display');
        if (xpDisplay) {
            xpDisplay.textContent = state.xp;
            document.getElementById('streak-display').textContent = `${state.streak} Days`;
            document.getElementById('words-display').textContent = state.wordsLearned || 0;
            
            const accuracy = state.totalAnswers > 0 ? Math.round((state.correctAnswers / state.totalAnswers) * 100) : 0;
            document.getElementById('accuracy-display').textContent = `${accuracy}%`;
        }
    },

    renderHiragana: function() {
        const container = document.getElementById('hiragana-list');
        if(!container) return;
        
        container.innerHTML = ''; 
        
        appData.hiragana.forEach(char => {
            const card = document.createElement('div');
            card.className = 'kana-card';
            card.innerHTML = `
                <div class="kana-large">${char.kana}</div>
                <div class="kana-romaji">${char.romaji}</div>
                <div class="kana-hint">${char.hint}</div>
            `;
            card.addEventListener('click', () => {
                AudioService.speak(char.kana);
            });
            container.appendChild(card);
        });
    },

    // අලුත්: පැටලෙන අකුරු ලැයිස්තුව UI එකට දැමීම
    renderSimilarKana: function() {
        const container = document.getElementById('similar-list');
        if(!container) return;
        container.innerHTML = '';
        
        appData.similarKanaGroups.forEach(group => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.borderTop = "4px solid var(--danger)";
            
            let charsHtml = group.chars.map(c => `<span class="japanese-large" style="margin:0 10px; cursor:pointer;" onclick="AudioService.speak('${c.kana}')">${c.kana}</span>`).join('<span style="color:#999; font-weight:bold;">VS</span>');
            
            card.innerHTML = `
                <div style="text-align:center; margin-bottom:15px; background:var(--background); padding:10px; border-radius:8px;">
                    ${charsHtml}
                </div>
                <h3 style="font-size:1.1rem; text-align:center; color:var(--primary); margin-bottom:5px;">${group.title}</h3>
                <p class="text-muted" style="text-align:center; font-size: 0.95rem;">${group.hint}</p>
            `;
            container.appendChild(card);
        });
    },

    renderVocabList: function() {
        const container = document.getElementById('vocab-list');
        if(!container) return;
        
        container.innerHTML = '';
        
        appData.vocabulary.forEach(word => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2 class="japanese-large">${word.japanese}</h2>
                <p class="text-muted">${word.kana} (${word.romaji})</p>
                <p><strong>${word.sinhala}</strong> - ${word.english}</p>
                <button class="btn-audio" data-text="${word.japanese}">🔊 Listen</button>
            `;
            container.appendChild(card);
        });

        container.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-audio')) {
                AudioService.speak(e.target.dataset.text);
            }
        });
    },

    renderParticles: function() {
        const container = document.getElementById('particles-list');
        if(!container) return;
        container.innerHTML = '';
        
        appData.particles.forEach(p => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2 class="japanese-large" style="color: var(--primary);">${p.kana} <span style="font-size:1.2rem; color:var(--text-muted)">(${p.romaji})</span></h2>
                <p style="font-size:1.1rem; margin-bottom: 5px;"><strong>${p.usage}</strong></p>
                <p class="text-muted" style="margin-bottom: 15px;">${p.desc}</p>
                <div style="background: var(--background); padding: 12px; border-radius: 8px;">
                    <p class="japanese-large" style="font-size: 1.2rem; margin-bottom: 5px;">${p.exampleJp}</p>
                    <p style="font-size: 0.95rem; color: var(--secondary);">${p.exampleSi}</p>
                </div>
            `;
            container.appendChild(card);
        });
    },

    bindSettings: function() {
        const btnExport = document.getElementById('btn-export');
        if(btnExport) {
            btnExport.addEventListener('click', () => Storage.export());
            
            document.getElementById('btn-reset').addEventListener('click', () => {
                if(confirm('ඔබට විශ්වාසද? (Are you sure you want to reset all progress?)')) {
                    localStorage.removeItem(Storage.key);
                    localStorage.removeItem('unlockedRow'); 
                    location.reload();
                }
            });

            document.getElementById('btn-theme').addEventListener('click', () => {
                const isDark = document.body.getAttribute('data-theme') === 'dark';
                document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
                Storage.update({ theme: isDark ? 'light' : 'dark' });
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());