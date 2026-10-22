const JFTEngine = {
    unlockedLevel: parseInt(localStorage.getItem('jft_unlocked_level')) || 1,
    currentLevel: 1,
    currentPool: [], 
    learningQueue: [], // අලුත්: පාඩම් කිරීමට ඇති වචන
    newWordsCurrentLevel: [],
    questionQueue: [],
    currentQ: null,
    
    init: function() {
        this.renderLevels();
        this.updateProgress();
    },

    updateProgress: function() {
        const totalWords = jftVocab.length;
        const learned = Math.min((this.unlockedLevel - 1) * 10, totalWords);
        document.getElementById('jft-progress-text').textContent = `${learned}/${totalWords}`;
    },

    renderLevels: function() {
        const container = document.getElementById('jft-levels-grid');
        if(!container) return;
        container.innerHTML = '';
        
        const totalLevels = Math.ceil(jftVocab.length / 10);
        
        for(let i = 1; i <= totalLevels; i++) {
            const btn = document.createElement('button');
            btn.className = 'jft-level-btn';
            
            if (i < this.unlockedLevel) {
                btn.classList.add('completed');
                btn.innerHTML = `Lvl ${i} <br>⭐`;
                btn.onclick = () => this.startLevel(i);
            } else if (i === this.unlockedLevel) {
                btn.classList.add('unlocked');
                btn.innerHTML = `Lvl ${i} <br>▶️`;
                btn.onclick = () => this.startLevel(i);
            } else {
                btn.classList.add('locked');
                btn.innerHTML = `Lvl ${i} <br>🔒`;
                btn.onclick = () => alert("පළමුව කලින් Level එක සමත් වන්න!");
            }
            container.appendChild(btn);
        }
    },

    goBack: function() {
        document.getElementById('jft-dashboard').classList.remove('hidden');
        document.getElementById('jft-game-area').classList.add('hidden');
        document.getElementById('jft-learn-area').classList.add('hidden'); // අලුත්
        this.init();
    },

    // 1. Level එක ආරම්භ කළ විට Learning Mode එකට යොමු කිරීම
    startLevel: function(level) {
        this.currentLevel = level;
        document.getElementById('jft-level-display').textContent = level;
        
        // මේ level එකේ අලුත් වචන 10 ලබා ගැනීම
        const startIndex = (level - 1) * 10;
        this.newWordsCurrentLevel = jftVocab.slice(startIndex, startIndex + 10);
        
        // ඉගෙනගන්න Queue එකට දැමීම
        this.learningQueue = [...this.newWordsCurrentLevel];
        
        document.getElementById('jft-dashboard').classList.add('hidden');
        document.getElementById('jft-game-area').classList.add('hidden');
        document.getElementById('jft-learn-area').classList.remove('hidden');
        
        this.showNextLearnWord();
    },

    // 2. එකින් එක වචන පෙන්වීම (Flashcards)
    showNextLearnWord: function() {
        if (this.learningQueue.length === 0) {
            // වචන 10ම ඉගෙනගෙන ඉවරයි. දැන් Practice එකට යන්න බොත්තම පෙන්වීම.
            document.getElementById('jft-learn-next').classList.add('hidden');
            document.getElementById('jft-learn-start-quiz').classList.remove('hidden');
            return;
        }

        document.getElementById('jft-learn-next').classList.remove('hidden');
        document.getElementById('jft-learn-start-quiz').classList.add('hidden');

        const currentLearnW = this.learningQueue.shift();
        
        document.getElementById('jft-learn-jp').textContent = currentLearnW.jp;
        document.getElementById('jft-learn-kana').textContent = `${currentLearnW.kana} (${currentLearnW.romaji})`;
        document.getElementById('jft-learn-si').textContent = currentLearnW.si;
        
        const audioBtn = document.getElementById('jft-learn-audio');
        audioBtn.onclick = () => AudioService.speak(currentLearnW.kana);
        
        AudioService.speak(currentLearnW.kana); // ඔටෝ ප්ලේ

        document.getElementById('jft-learn-next').onclick = () => this.showNextLearnWord();
        document.getElementById('jft-learn-start-quiz').onclick = () => this.startPracticePhase();
    },

    // 3. වචන පාඩම් කිරීමෙන් පසු Games (Practice) ආරම්භ කිරීම
    startPracticePhase: function() {
        document.getElementById('jft-learn-area').classList.add('hidden');
        document.getElementById('jft-game-area').classList.remove('hidden');

        // මතකය අලුත් කිරීමට පැරණි වචන 5ක් ගැනීම (Spaced Repetition)
        let reviewWords = [];
        if (this.currentLevel > 1) {
            const startIndex = (this.currentLevel - 1) * 10;
            const allPastWords = jftVocab.slice(0, startIndex);
            reviewWords = allPastWords.sort(() => 0.5 - Math.random()).slice(0, 5);
        }
        
        this.currentPool = [...this.newWordsCurrentLevel, ...reviewWords];
        
        // Queue එක සෑදීම
        this.questionQueue = [];
        this.currentPool.forEach(word => {
            const gameType = Math.floor(Math.random() * 8) + 1; 
            this.questionQueue.push({ word: word, type: gameType });
        });
        
        this.questionQueue.sort(() => 0.5 - Math.random());
        this.nextQuestion();
    },

    nextQuestion: function() {
        if (this.questionQueue.length === 0) {
            // Level එක ඉවරයි!
            alert(`නියමයි! ඔබ Level ${this.currentLevel} සාර්ථකව නිම කළා! 🎉`);
            if (this.currentLevel === this.unlockedLevel) {
                this.unlockedLevel++;
                localStorage.setItem('jft_unlocked_level', this.unlockedLevel);
            }
            this.goBack();
            return;
        }

        this.currentQ = this.questionQueue.shift();
        this.renderGameUI(this.currentQ);
    },

    // ක්‍රීඩා 10 සඳහා ඇන්ජිම
    renderGameUI: function(q) {
        const titleEl = document.getElementById('jft-game-title');
        const subEl = document.getElementById('jft-game-subtitle');
        const qLarge = document.getElementById('jft-q-large');
        const qSmall = document.getElementById('jft-q-small');
        const optGrid = document.getElementById('jft-options-grid');
        const btnNext = document.getElementById('jft-btn-next');
        const btnAudio = document.getElementById('jft-btn-audio');

        optGrid.innerHTML = '';
        btnNext.classList.add('hidden');
        qSmall.textContent = "";
        btnAudio.onclick = () => AudioService.speak(q.word.kana);

        const w = q.word;

        // පිළිතුරු 4ක් සෑදීමේ පොදු ෆන්ක්ෂන් එකක්
        const generateOptions = (correctVal, keyToFetch) => {
            let opts = [correctVal];
            while (opts.length < 4) {
                let r = jftVocab[Math.floor(Math.random() * jftVocab.length)][keyToFetch];
                if (!opts.includes(r)) opts.push(r);
            }
            return opts.sort(() => 0.5 - Math.random());
        };

        const createButtons = (options, correctVal) => {
            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = opt;
                btn.onclick = () => {
                    Array.from(optGrid.children).forEach(b => b.disabled = true);
                    if (opt === correctVal) {
                        btn.classList.add('correct');
                        btnNext.classList.remove('hidden');
                    } else {
                        btn.classList.add('wrong');
                        Array.from(optGrid.children).forEach(b => {
                            if (b.textContent === correctVal) b.classList.add('correct');
                        });
                        this.questionQueue.push(q);
                        btnNext.classList.remove('hidden');
                    }
                };
                optGrid.appendChild(btn);
            });
        };

        btnNext.onclick = () => this.nextQuestion();

        switch (q.type) {
            case 1:
                titleEl.textContent = "Game 1: Meaning";
                subEl.textContent = "සිංහල තේරුම තෝරන්න";
                qLarge.textContent = w.jp;
                qSmall.textContent = w.romaji;
                createButtons(generateOptions(w.si, 'si'), w.si);
                AudioService.speak(w.kana);
                break;
            case 2:
                titleEl.textContent = "Game 2: Translate";
                subEl.textContent = "ගැලපෙන ජපන් වචනය තෝරන්න";
                qLarge.textContent = w.si;
                createButtons(generateOptions(w.jp, 'jp'), w.jp);
                break;
            case 3:
                titleEl.textContent = "Game 3: Listen & Translate";
                subEl.textContent = "ශබ්දය අසා තේරුම තෝරන්න";
                qLarge.textContent = "🔊";
                createButtons(generateOptions(w.si, 'si'), w.si);
                AudioService.speak(w.kana);
                break;
            case 4:
                titleEl.textContent = "Game 4: Dictation";
                subEl.textContent = "අසා අකුරු තෝරන්න";
                qLarge.textContent = "🔊";
                createButtons(generateOptions(w.kana, 'kana'), w.kana);
                AudioService.speak(w.kana);
                break;
            case 5:
                titleEl.textContent = "Game 5: Reading";
                subEl.textContent = "නිවැරදි කියවීම තෝරන්න";
                qLarge.textContent = w.jp;
                createButtons(generateOptions(w.romaji, 'romaji'), w.romaji);
                break;
            case 6:
                titleEl.textContent = "Game 6: True or False?";
                subEl.textContent = "මේ තේරුම නිවැරදිද?";
                const isTrue = Math.random() > 0.5;
                let displaySi = w.si;
                if (!isTrue) {
                    displaySi = jftVocab[Math.floor(Math.random() * jftVocab.length)].si;
                }
                qLarge.textContent = w.jp;
                qSmall.textContent = `තේරුම: "${displaySi}" ?`;
                
                ['✔ නිවැරදියි (True)', '✖ වැරදියි (False)'].forEach(opt => {
                    const btn = document.createElement('button');
                    btn.className = 'option-btn';
                    btn.textContent = opt;
                    btn.onclick = () => {
                        Array.from(optGrid.children).forEach(b => b.disabled = true);
                        const userSaidTrue = opt.includes('True');
                        if (userSaidTrue === isTrue) {
                            btn.classList.add('correct');
                        } else {
                            btn.classList.add('wrong');
                            qSmall.textContent = `වැරදියි! නිවැරදි තේරුම: ${w.si}`;
                            qSmall.style.color = "var(--danger)";
                            this.questionQueue.push(q);
                        }
                        btnNext.classList.remove('hidden');
                    };
                    optGrid.appendChild(btn);
                });
                break;
            case 7:
            case 8:
                titleEl.textContent = "Game 7: Speed Match";
                subEl.textContent = "ගැලපෙන ජපන් වචනය තෝරන්න";
                qLarge.textContent = w.si;
                createButtons(generateOptions(w.kana, 'kana'), w.kana);
                break;
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => JFTEngine.init(), 500); 
});