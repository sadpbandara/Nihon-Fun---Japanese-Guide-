const QuizEngine = {
    currentQuiz: null,
    mode: 'random', 
    targetRow: parseInt(localStorage.getItem('unlockedRow')) || 1,
    questionsDoneInRow: 0,
    wbTargetWord: null,
    wbCurrentInput: [],
    typingTargetWord: null,
    
    hideAllPracticeAreas: function() {
        document.getElementById('practice-menu').classList.add('hidden');
        document.getElementById('training-intro').classList.add('hidden');
        document.getElementById('quiz-result').classList.add('hidden');
        document.getElementById('quiz-area').classList.add('hidden');
        document.getElementById('word-builder-area').classList.add('hidden');
        document.getElementById('particle-quiz-area').classList.add('hidden');
        document.getElementById('typing-area').classList.add('hidden');
    },

    startRandom: function() {
        this.mode = 'random';
        this.hideAllPracticeAreas();
        document.getElementById('quiz-area').classList.remove('hidden');
        this.generateAndShowQuestion();
    },

    startProgressive: function() {
        this.mode = 'progressive';
        this.questionsDoneInRow = 0;
        this.hideAllPracticeAreas();
        
        const introArea = document.getElementById('training-intro');
        introArea.classList.remove('hidden');
        document.getElementById('current-row-num').textContent = this.targetRow;
        
        const charsArea = document.getElementById('training-row-chars');
        charsArea.innerHTML = '';
        
        const rowChars = appData.hiragana.filter(h => h.row === this.targetRow);
        rowChars.forEach(char => {
            charsArea.innerHTML += `
                <div class="kana-card" onclick="AudioService.speak('${char.kana}')">
                    <div class="kana-large">${char.kana}</div>
                    <div class="kana-romaji">${char.romaji}</div>
                </div>
            `;
        });
    },

    startProgressiveQuestions: function() {
        this.hideAllPracticeAreas();
        document.getElementById('quiz-area').classList.remove('hidden');
        this.generateAndShowQuestion();
    },

    // අලුත්: පැටලෙන අකුරු Quiz ආරම්භ කිරීම
    startSimilarKanaQuiz: function() {
        this.mode = 'similar';
        this.hideAllPracticeAreas();
        document.getElementById('quiz-area').classList.remove('hidden');
        this.generateAndShowQuestion();
    },
    // අලුත්: දීර්ඝ අක්ෂර Quiz ආරම්භ කිරීම
    startLongVowelQuiz: function() {
        this.mode = 'longVowel';
        this.hideAllPracticeAreas();
        document.getElementById('quiz-area').classList.remove('hidden');
        this.generateAndShowQuestion();
    },
    // අලුත්: පැටලෙන අකුරු Quiz ආරම්භ කිරීම
    startCombinedQuiz: function() {
        this.mode = 'combined';
        this.hideAllPracticeAreas();
        document.getElementById('quiz-area').classList.remove('hidden');
        this.generateAndShowQuestion();
    },
    startDoubleConsonantQuiz: function() {
        this.mode = 'doubleConsonant';
        this.hideAllPracticeAreas();
        document.getElementById('quiz-area').classList.remove('hidden');
        this.generateAndShowQuestion();
    },

    startKataLongVowelQuiz: function() {
        this.mode = 'kataLongVowel';
        this.hideAllPracticeAreas();
        document.getElementById('quiz-area').classList.remove('hidden');
        this.generateAndShowQuestion();
    },
   

    // --- ADVANCED WORD BUILDER VARIABLES ---
    wbTargetWord: null,
    wbCurrentInput: [],
    wbHintLevel: 0,
    wbKeyboardType: 'hiragana', // 'hiragana', 'katakana', 'extra'
    
    startWordBuilder: function() {
        this.mode = 'word-builder';
        this.hideAllPracticeAreas();
        document.getElementById('word-builder-area').classList.remove('hidden');
        this.initVirtualKeyboard();
        this.generateWordBuilder();
    },

    initVirtualKeyboard: function() {
        const kbContainer = document.getElementById('wb-keyboard');
        kbContainer.innerHTML = '';
        
        // Build base 46 Hiragana grid
        const baseHira = appData.hiragana.filter(h => h.row <= 10);
        baseHira.forEach(char => {
            const btn = document.createElement('div');
            btn.className = 'kana-card kb-key-hiragana';
            btn.textContent = char.kana;
            btn.onclick = () => this.handleKbInput(char.kana);
            kbContainer.appendChild(btn);
        });

        // Build Extra Hiragana (Dakuten/Yoon)
        const extraHira = appData.hiragana.filter(h => h.row > 10).concat(appData.combinedKana);
        extraHira.forEach(char => {
            const btn = document.createElement('div');
            btn.className = 'kana-card kb-key-hira-extra hidden-key';
            btn.textContent = char.kana;
            btn.onclick = () => this.handleKbInput(char.kana);
            kbContainer.appendChild(btn);
        });

        // Keyboard Toggles
        document.getElementById('wb-kb-extra').onclick = (e) => {
            const isExtra = e.target.textContent.includes('Show');
            e.target.textContent = isExtra ? 'Hide Dakuten/Yōon' : 'Show Dakuten/Yōon (゛/ ゃ)';
            document.querySelectorAll('.kb-key-hira-extra').forEach(el => el.classList.toggle('hidden-key', !isExtra));
            // To prevent clutter, hide base keys when showing extra
            document.querySelectorAll('.kb-key-hiragana').forEach(el => el.classList.toggle('hidden-key', isExtra));
        };
        
        // Katakana toggle logic can be added later if needed based on the word.
    },

    handleKbInput: function(kanaChar) {
        // If it's a combined character (e.g., きゃ), we might need to handle it as two slots depending on how we want to teach it.
        // For simplicity and alignment with standard IME, we treat it as one input action that fills necessary slots.
        
        const charsArray = Array.from(this.wbTargetWord.kana); // Correctly splits unicode
        if(this.wbCurrentInput.length < charsArray.length) {
            // Handle combined chars like 'き' + 'ゃ' if user clicks them separately, or if they click the combined key 'きゃ'.
            // If they click 'きゃ', we push 'き' and 'ゃ'.
            const parts = Array.from(kanaChar); 
            parts.forEach(p => {
                if(this.wbCurrentInput.length < charsArray.length) {
                    this.wbCurrentInput.push(p);
                }
            });
            this.updateWordBuilderSlots();
        }
    },

   
    applyHint: function() {
        this.wbHintLevel++;
        const chars = Array.from(this.wbTargetWord.kana);
        
        if (this.wbHintLevel === 1) {
            // Hint 1: Show first character in slot
            this.wbCurrentInput = [chars[0]];
            this.updateWordBuilderSlots();
        } else if (this.wbHintLevel === 2) {
            // Hint 2: Show Romaji
            document.getElementById('wb-target-romaji').classList.remove('hidden');
            document.getElementById('wb-toggle-romaji').textContent = '🙈 Hide Romaji';
        } else if (this.wbHintLevel === 3) {
            // Hint 3: Play Audio
            AudioService.speak(this.wbTargetWord.kana);
        } else if (this.wbHintLevel >= 4) {
            // Hint 4: Reveal Answer
            document.getElementById('wb-target-jp').classList.remove('hidden');
            document.getElementById('wb-toggle-jp').textContent = '🙈 Hide JP';
            this.wbCurrentInput = []; // Force user to type it even after reveal
            this.updateWordBuilderSlots();
            alert("අකුරු බලාගෙන Type කරන්න.");
        }
    },

    updateWordBuilderSlots: function() {
        const slots = document.querySelectorAll('.wb-slot');
        slots.forEach((slot, index) => {
            if(this.wbCurrentInput[index]) {
                slot.textContent = this.wbCurrentInput[index];
                slot.classList.add('filled');
                slot.classList.remove('hinted');
            } else {
                slot.textContent = '';
                slot.classList.remove('filled');
            }
        });
    },

    generateWordBuilder: function() {
        document.getElementById('quiz-result').classList.add('hidden');
        document.getElementById('word-builder-area').classList.remove('hidden'); 
        document.getElementById('wb-context-area').classList.add('hidden');
        
        this.wbCurrentInput = [];
        this.wbHintLevel = 0;
        
        // Reset UI Toggles
        document.getElementById('wb-target-jp').classList.add('hidden');
        document.getElementById('wb-target-romaji').classList.add('hidden');
        document.getElementById('wb-toggle-jp').textContent = '👁 Japanese';
        document.getElementById('wb-toggle-romaji').textContent = '👁 Romaji';
        
        // වචනයක් තේරීම
        this.wbTargetWord = jftVocab[Math.floor(Math.random() * jftVocab.length)];
        
        // Set Mastery Badge (ආරක්ෂිත පියවරක් සහිතව)
        const state = Storage.get();
        if (!state.wordMastery) state.wordMastery = {}; // <--- මේ පේළිය අලුතින් දැම්මේ
        
        const mastery = state.wordMastery[this.wbTargetWord.id] || { level: 'New' };
        const badge = document.getElementById('wb-mastery-badge');
        badge.textContent = mastery.level;
        badge.style.background = mastery.level === 'Mastered' ? 'var(--success)' : (mastery.level === 'New' ? 'var(--text-muted)' : 'var(--secondary)');

        // Display Meaning
        document.getElementById('wb-sinhala').textContent = this.wbTargetWord.si;
        
        // Setup Hidden Targets
        document.getElementById('wb-target-jp').textContent = this.wbTargetWord.kana; 
        document.getElementById('wb-target-romaji').textContent = this.wbTargetWord.romaji;
        
        // Setup Audio
        document.getElementById('wb-listen-btn').onclick = () => AudioService.speak(this.wbTargetWord.kana);

        // Setup Slots
        const chars = Array.from(this.wbTargetWord.kana); 
        const slotsContainer = document.getElementById('wb-slots');
        slotsContainer.innerHTML = '';
        chars.forEach(() => {
            slotsContainer.innerHTML += `<div class="wb-slot"></div>`;
        });

        // Setup Toggles
        document.getElementById('wb-toggle-jp').onclick = (e) => {
            const el = document.getElementById('wb-target-jp');
            el.classList.toggle('hidden');
            e.target.textContent = el.classList.contains('hidden') ? '👁 Japanese' : '🙈 Hide JP';
        };
        document.getElementById('wb-toggle-romaji').onclick = (e) => {
            const el = document.getElementById('wb-target-romaji');
            el.classList.toggle('hidden');
            e.target.textContent = el.classList.contains('hidden') ? '👁 Romaji' : '🙈 Hide Romaji';
        };

        // Setup Hint Button Progression
        document.getElementById('wb-hint-btn').onclick = () => this.applyHint();

        document.getElementById('wb-clear-btn').onclick = () => {
            this.wbCurrentInput.pop(); // අන්තිම අකුර මකන්න
            this.updateWordBuilderSlots();
        }; 
        
        document.getElementById('wb-clear-btn').ondblclick = () => {
             this.wbCurrentInput = [];
             this.updateWordBuilderSlots();
        };

        document.getElementById('wb-check-btn').onclick = () => this.checkWordBuilder();
    },

    checkWordBuilder: function() {
        const userWord = this.wbCurrentInput.join('');
        const isCorrect = (userWord === this.wbTargetWord.kana);
        
        if(userWord.length === 0) return;
        
        const btn = document.getElementById('wb-check-btn');
        
        if (isCorrect) {
            AudioService.speak(this.wbTargetWord.kana);
            btn.style.background = "var(--success)";
            btn.textContent = "නිවැරදියි! Next ➔";
            
            // Update Mastery (ආරක්ෂිත පියවරක් සහිතව)
            const state = Storage.get();
            if (!state.wordMastery) state.wordMastery = {}; // <--- මේ පේළිය අලුතින් දැම්මේ
            
            if(!state.wordMastery[this.wbTargetWord.id]) {
                state.wordMastery[this.wbTargetWord.id] = { level: 'Learning', score: 0 };
            }
            
            if(this.wbHintLevel === 0) state.wordMastery[this.wbTargetWord.id].score += 2;
            else if (this.wbHintLevel < 3) state.wordMastery[this.wbTargetWord.id].score += 1;
            
            let score = state.wordMastery[this.wbTargetWord.id].score;
            if(score > 5) state.wordMastery[this.wbTargetWord.id].level = 'Familiar';
            if(score > 10) state.wordMastery[this.wbTargetWord.id].level = 'Strong';
            if(score > 20) state.wordMastery[this.wbTargetWord.id].level = 'Mastered';
            
            state.xp += (20 - (this.wbHintLevel * 2)); 
            Storage.save(state);
            document.getElementById('quiz-score').textContent = `Score: ${state.xp}`;

            btn.onclick = () => {
                btn.style.background = "var(--secondary)";
                btn.textContent = "Check Answer";
                this.generateWordBuilder();
            };

        } else {
            btn.style.background = "var(--danger)";
            btn.textContent = "වැරදියි! Try Again";
            setTimeout(() => {
                btn.style.background = "var(--secondary)";
                btn.textContent = "Check Answer";
                this.applyHint(); 
            }, 1500);
        }
    },

    startParticleQuiz: function() {
        this.mode = 'particle';
        this.hideAllPracticeAreas();
        document.getElementById('particle-quiz-area').classList.remove('hidden');
        this.generateParticleQuiz();
    },

    generateParticleQuiz: function() {
        document.getElementById('quiz-result').classList.add('hidden');
        document.getElementById('particle-quiz-area').classList.remove('hidden');

        this.currentQuiz = appData.particleQuizzes[Math.floor(Math.random() * appData.particleQuizzes.length)];

        const formattedQuestion = this.currentQuiz.question.replace('___', '<span style="color:var(--primary); border-bottom:2px dashed var(--primary); padding:0 15px;">___</span>');
        
        document.getElementById('pq-question').innerHTML = formattedQuestion;
        document.getElementById('pq-meaning').textContent = this.currentQuiz.meaning;

        const optionsGrid = document.getElementById('pq-options');
        optionsGrid.innerHTML = '';

        const options = [...this.currentQuiz.options].sort(() => 0.5 - Math.random());

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => this.checkParticleAnswer(btn, opt);
            optionsGrid.appendChild(btn);
        });
    },

    checkParticleAnswer: function(btn, selected) {
        const buttons = document.querySelectorAll('#pq-options .option-btn');
        buttons.forEach(b => b.disabled = true);

        const isCorrect = selected === this.currentQuiz.correct;
        const resultMsg = document.getElementById('result-message');
        const resultDisplay = document.getElementById('result-word-display');

        if (isCorrect) {
            btn.classList.add('correct');
            Storage.addXP(15);
            resultMsg.textContent = 'නියමයි! නිවැරදියි 🎉 (+15 XP)';
            resultMsg.style.color = "var(--success)";
            document.getElementById('quiz-score').textContent = `Score: ${Storage.get().xp}`;
        } else {
            btn.classList.add('wrong');
            resultMsg.textContent = `වැරදියි! නිවැරදි පිළිතුර: ${this.currentQuiz.correct}`;
            resultMsg.style.color = "var(--danger)";
            buttons.forEach(b => {
                if(b.textContent === this.currentQuiz.correct) b.classList.add('correct');
            });
        }

        const completedSentence = this.currentQuiz.question.replace('___', `<span style="color:var(--primary); font-weight:bold;">${this.currentQuiz.correct}</span>`);
        resultDisplay.innerHTML = completedSentence;

        document.getElementById('quiz-result').classList.remove('hidden');
        document.getElementById('particle-quiz-area').classList.add('hidden');

        document.getElementById('btn-next').onclick = () => this.generateParticleQuiz();
    },

    // අලුත්: Sentence Builder Variables
    sbCurrentInput: [],
    sbTargetArray: [],
    sbPoolWords: [],

    startSentenceBuilder: function() {
        this.mode = 'sentence-builder';
        this.hideAllPracticeAreas(); // මේ function එක ඇතුලෙ 'sentence-builder-area' hide වෙන්නත් හදන්න.
        document.getElementById('sentence-builder-area').classList.remove('hidden');
        this.generateSentence();
    },

    generateSentence: function() {
        document.getElementById('quiz-result').classList.add('hidden');
        document.getElementById('sentence-builder-area').classList.remove('hidden');

        const sbData = appData.sentenceBuilderData;
        
        // 1. අහඹු ලෙස උක්තය සහ කර්මය තේරීම
        const subject = sbData.subjects[Math.floor(Math.random() * sbData.subjects.length)];
        const obj = sbData.objects[Math.floor(Math.random() * sbData.objects.length)];
        const verbObj = sbData.verbs.find(v => v.jp === obj.verb);
        const particle = obj.particle || "を"; 
        
        // 2. ප්‍රශ්නයක් ද නැද්ද යන්න තීරණය කිරීම
        const isQuestion = Math.random() > 0.5;

        // 3. සිංහල වාක්‍යය ගොඩනැගීම සහ "නවා" -> "නවද?" ලෙස වෙනස් කිරීම
        let siTranslation = `${subject.si} ${obj.si} ${verbObj.si}`;
        if(isQuestion) {
            siTranslation = siTranslation.replace("නවා", "නවද?");
        }
        
        document.getElementById('sb-sinhala').textContent = siTranslation;
        
        // තාර්කික ඉඟිය (Mnemonic Hint)
        document.getElementById('sb-hint').textContent = `💡 ඉඟිය: ක්‍රියාපදය මතකද? [ ${verbObj.hint} ]`;

        // 4. නිවැරදි ජපන් වාක්‍යය Array එකක් ලෙස සෑදීම
        this.sbTargetArray = [subject.jp, "は", obj.jp, particle, verbObj.jp];
        if(isQuestion) this.sbTargetArray.push("か");

        this.sbCurrentInput = new Array(this.sbTargetArray.length).fill(null);

        // 5. වචන මිශ්‍ර කිරීම (Shuffle)
        this.sbPoolWords = [...this.sbTargetArray].sort(() => 0.5 - Math.random());

        this.renderSentenceBuilderUI();
    },

    renderSentenceBuilderUI: function() {
        const slotsContainer = document.getElementById('sb-slots');
        const poolContainer = document.getElementById('sb-word-pool');
        
        slotsContainer.innerHTML = '';
        poolContainer.innerHTML = '';

        // Slots රෙන්ඩර් කිරීම
        this.sbCurrentInput.forEach((word, index) => {
            const slot = document.createElement('div');
            slot.className = 'sb-slot';
            if(word) {
                slot.textContent = word;
                slot.classList.add('filled');
            }
            slot.onclick = () => {
                if(word) {
                    this.sbCurrentInput[index] = null;
                    this.renderSentenceBuilderUI(); // යළි සකසන්න
                }
            };
            slotsContainer.appendChild(slot);
        });

        // Word Pool රෙන්ඩර් කිරීම
        this.sbPoolWords.forEach((word) => {
            const btn = document.createElement('button');
            btn.className = 'sb-word-btn';
            btn.textContent = word;
            
            // භාවිතා කර ඇත්දැයි පරීක්ෂා කිරීම
            let countInInput = this.sbCurrentInput.filter(w => w === word).length;
            let countInPool = this.sbPoolWords.filter(w => w === word).length;
            if(countInInput >= countInPool) {
                btn.classList.add('used');
            }

            btn.onclick = () => {
                const emptyIndex = this.sbCurrentInput.findIndex(w => w === null);
                if(emptyIndex !== -1) {
                    this.sbCurrentInput[emptyIndex] = word;
                    this.renderSentenceBuilderUI();
                }
            };
            poolContainer.appendChild(btn);
        });
    },

    checkSentenceBuilder: function() {
        // සම්පූර්ණ කර නොමැති නම්
        if(this.sbCurrentInput.includes(null)) return;

        const isCorrect = JSON.stringify(this.sbCurrentInput) === JSON.stringify(this.sbTargetArray);
        
        const resultMsg = document.getElementById('result-message');
        const resultDisplay = document.getElementById('result-word-display');
        
        if (isCorrect) {
            Storage.addXP(25);
            resultMsg.textContent = 'විශිෂ්ටයි! වාක්‍යය නිවැරදියි 🎉 (+25 XP)';
            resultMsg.style.color = "var(--success)";
            resultDisplay.textContent = this.sbTargetArray.join(' ');
            document.getElementById('quiz-score').textContent = `Score: ${Storage.get().xp}`;
            AudioService.speak(this.sbTargetArray.join(' ')); // නිවැරදි වාක්‍යය ශබ්ද කිරීම
        } else {
            resultMsg.textContent = 'වැරදියි! නිවැරදි වාක්‍යය පහතින්:';
            resultMsg.style.color = "var(--danger)";
            resultDisplay.textContent = this.sbTargetArray.join(' ');
        }
        
        document.getElementById('quiz-result').classList.remove('hidden');
        document.getElementById('sentence-builder-area').classList.add('hidden');
        
        document.getElementById('btn-next').onclick = () => this.generateSentence();
    },
    // ==========================================
    // NATIVE KEYBOARD TYPING PRACTICE ENGINE
    // ==========================================
    startTypingPractice: function() {
        this.mode = 'typing';
        this.hideAllPracticeAreas();
        document.getElementById('typing-area').classList.remove('hidden');
        
        // Enter බොත්තම එබූ විට පිළිතුර පරීක්ෂා කිරීම
        const input = document.getElementById('tp-input');
        input.onkeypress = (e) => {
            if (e.key === 'Enter') {
                this.checkTypingAnswer();
            }
        };
        
        this.generateTypingQuestion();
    },

    startExtendedKatakanaQuiz: function() {
        this.mode = 'extendedKatakana';
        this.hideAllPracticeAreas();
        document.getElementById('quiz-area').classList.remove('hidden');
        this.generateAndShowQuestion();
    },

    generateTypingQuestion: function() {
        document.getElementById('quiz-result').classList.add('hidden');
        document.getElementById('typing-area').classList.remove('hidden');
        
        // JFT වචන ගබඩාවෙන් අහඹු වචනයක් තේරීම
        this.typingTargetWord = jftVocab[Math.floor(Math.random() * jftVocab.length)];
        
        document.getElementById('tp-sinhala').textContent = this.typingTargetWord.si;
        document.getElementById('tp-romaji-display').textContent = this.typingTargetWord.romaji;
        document.getElementById('tp-romaji-display').classList.add('hidden'); // මුලින් Romaji සඟවා තැබීම
        
        const input = document.getElementById('tp-input');
        input.value = ''; // පරණ පිළිතුර මකා දැමීම
        
        // UI බොත්තම් යථා තත්ත්වයට පත් කිරීම
        const btn = document.getElementById('tp-check-btn');
        btn.style.background = "#8E44AD";
        btn.textContent = "Check Answer";
        btn.onclick = () => this.checkTypingAnswer();

        // Hints බොත්තම්
        document.getElementById('tp-hint-audio').onclick = () => AudioService.speak(this.typingTargetWord.kana);
        document.getElementById('tp-hint-romaji-btn').onclick = () => {
            document.getElementById('tp-romaji-display').classList.toggle('hidden');
        };
        
        // Mobile එකේදී ස්වයංක්‍රීයව Keyboard එක open වීම සඳහා
        setTimeout(() => input.focus(), 300);
    },

    checkTypingAnswer: function() {
        const inputEl = document.getElementById('tp-input');
        const userWord = inputEl.value.trim();
        
        // පරිශීලකයා Hiragana Type කළත්, Kanji Type කළත් නිවැරදි යැයි සැලකීම
        const isCorrect = (userWord === this.typingTargetWord.kana || userWord === this.typingTargetWord.jp); 
        
        if(userWord.length === 0) return;
        
        const btn = document.getElementById('tp-check-btn');
        
        if (isCorrect) {
            AudioService.speak(this.typingTargetWord.kana);
            btn.style.background = "var(--success)";
            btn.textContent = "නිවැරදියි! Next ➔";
            
            Storage.addXP(20);
            document.getElementById('quiz-score').textContent = `Score: ${Storage.get().xp}`;
            
            inputEl.blur(); // Keyboard එක පහළට දැමීම
            
            btn.onclick = () => this.generateTypingQuestion();
        } else {
            btn.style.background = "var(--danger)";
            btn.textContent = "වැරදියි! Try Again";
            
            setTimeout(() => {
                btn.style.background = "#8E44AD";
                btn.textContent = "Check Answer";
                inputEl.value = ''; // වැරදුණු විට කොටුව හිස් කිරීම
                inputEl.focus();
            }, 1500);
        }
    },

    generateAndShowQuestion: function() {
        document.getElementById('quiz-result').classList.add('hidden');
        
        if(this.mode === 'progressive') {
            document.getElementById('quiz-progress-text').textContent = `පේළිය ${this.targetRow} | ප්‍රශ්නය: ${this.questionsDoneInRow + 1}/10`;
            this.currentQuiz = this.createProgressiveQuiz();
        } else if (this.mode === 'similar') {
            // අලුත් Similar Quiz
            document.getElementById('quiz-progress-text').textContent = "පැටලෙන අකුරු (Quick Match)";
            this.currentQuiz = this.createSimilarKanaQuiz();
        } else if (this.mode === 'longVowel') {
            document.getElementById('quiz-progress-text').textContent = "දීර්ඝ අක්ෂර පුහුණුව";
            this.currentQuiz = this.createLongVowelQuiz();
        } else if (this.mode === 'combined') {
            document.getElementById('quiz-progress-text').textContent = "බැඳී අකුරු පුහුණුව";
            this.currentQuiz = this.createCombinedQuiz();
        } else if (this.mode === 'doubleConsonant') {
            document.getElementById('quiz-progress-text').textContent = "ද්විත්ව ව්‍යංජන (Sokuon) පුහුණුව";
            this.currentQuiz = this.createDoubleConsonantQuiz();
        } else if (this.mode === 'kataLongVowel') {
            document.getElementById('quiz-progress-text').textContent = "කතකන දීර්ඝ අක්ෂර පුහුණුව";
            this.currentQuiz = this.createKataLongVowelQuiz();
        }  else if (this.mode === 'extendedKatakana') {
            document.getElementById('quiz-progress-text').textContent = "නව කතකන අක්ෂර පුහුණුව";
            this.currentQuiz = this.createExtendedKatakanaQuiz();
        }
        else {
            document.getElementById('quiz-progress-text').textContent = "මිශ්‍ර ප්‍රශ්න";
            this.currentQuiz = this.createRandomQuiz();
        }

        const questionEl = document.getElementById('quiz-question');
        questionEl.textContent = this.currentQuiz.question;

        // අකුරු ප්‍රමාණය ස්වයංක්‍රීයව පාලනය කිරීම (දෝෂය නිවැරදි කර ඇත)
        if (this.currentQuiz.question.length > 5) {
            // වාක්‍යයක් හෝ දිගු වචනයක් නම් (උදා: Random Quiz හි සිංහල තේරුම්)
            questionEl.style.fontSize = "1.8rem";
        } else {
            // තනි හිරගනා/කතකනා අකුරක් නම් පමණක් විශාලව පෙන්වීම
            questionEl.style.fontSize = "4rem";
        }

        document.getElementById('quiz-hint').textContent = this.currentQuiz.hintText || "";
                
        const optionsGrid = document.getElementById('quiz-options');
        optionsGrid.innerHTML = '';
        
        this.currentQuiz.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => this.checkAnswer(btn, opt);
            optionsGrid.appendChild(btn);
        });

        document.getElementById('btn-listen').onclick = () => {
            AudioService.speak(this.currentQuiz.audioText);
        };
        
        AudioService.speak(this.currentQuiz.audioText);
        
    },

    // අලුත්: පැටලෙන අකුරු ප්‍රශ්න සෑදීමේ කේතය
    createSimilarKanaQuiz: function() {
        // අහඹු ලෙස පැටලෙන කාණ්ඩයක් තේරීම (උදා: ね, れ, わ)
        const group = appData.similarKanaGroups[Math.floor(Math.random() * appData.similarKanaGroups.length)];
        
        // ඉන් එක අකුරක් ප්‍රශ්නය ලෙස තේරීම
        const targetChar = group.chars[Math.floor(Math.random() * group.chars.length)];

        // උත්තර විදිහට දෙන්නේ අර පැටලෙන අකුරු ටික විතරයි! (ඔවුන්ට ඒකෙන් එකක් තෝරන්න වෙනවා)
        const options = group.chars.map(c => c.kana).sort(() => 0.5 - Math.random());

        return {
            question: `'${targetChar.romaji}' අකුර තෝරන්න`,
            hintText: "ඉඟිය: " + group.hint, // මතක් කරගන්න ඉඟියත් දෙනවා
            correct: targetChar.kana,
            options: options,
            audioText: targetChar.kana
        };
    },

    createProgressiveQuiz: function() {
        const availableChars = appData.hiragana.filter(h => h.row <= this.targetRow);
        const char = availableChars[Math.floor(Math.random() * availableChars.length)];
        const isSoundToChar = Math.random() > 0.5;
        let question, correct, hintText, audioText, optionKey;

        if(isSoundToChar) {
            question = char.romaji;
            correct = char.kana;
            hintText = "අකුර තෝරන්න";
            audioText = char.kana;
            optionKey = 'kana';
        } else {
            question = char.kana;
            correct = char.romaji;
            hintText = "ශබ්දය තෝරන්න";
            audioText = char.kana;
            optionKey = 'romaji';
        }

        const wrongOptions = availableChars
            .filter(h => h.id !== char.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(h => h[optionKey]);
            
        const options = [...wrongOptions, correct].sort(() => 0.5 - Math.random());
        return { question, correct, options, audioText, hintText };
    },

    createRandomQuiz: function() {
        const char = appData.hiragana[Math.floor(Math.random() * appData.hiragana.length)];
        const wrongOptions = appData.hiragana
            .filter(h => h.id !== char.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(h => h.kana);
        const options = [...wrongOptions, char.kana].sort(() => 0.5 - Math.random());
        return {
            question: `'${char.romaji}' අකුර තෝරන්න`,
            hintText: "",
            correct: char.kana,
            options: options,
            audioText: char.kana
        };
    },
     // අලුත්: දීර්ඝ අක්ෂර ප්‍රශ්න සෑදීමේ කේතය
    createLongVowelQuiz: function() {
        const targetWord = appData.longVowels[Math.floor(Math.random() * appData.longVowels.length)];
        const options = [targetWord.word];
        
        // අහඹු ලෙස වෙනත් වචන උත්තර ලෙස ලබා දීම
        while(options.length < 4) {
            let randomWord = appData.longVowels[Math.floor(Math.random() * appData.longVowels.length)].word;
            if(!options.includes(randomWord)) options.push(randomWord);
        }
        
        return {
            question: `'${targetWord.meaning}' සඳහා අදාල ජපන් වචනය තෝරන්න`,
            hintText: "ඉඟිය: " + targetWord.hint,
            correct: targetWord.word,
            options: options.sort(() => 0.5 - Math.random()),
            audioText: targetWord.word
        };
    },

    // අලුත්: බැඳී අකුරු ප්‍රශ්න සෑදීමේ කේතය
    createCombinedQuiz: function() {
        const targetChar = appData.combinedKana[Math.floor(Math.random() * appData.combinedKana.length)];
        const isSoundToChar = Math.random() > 0.5;
        let question, correct, hintText, audioText, optionKey;

        if(isSoundToChar) {
            question = targetChar.romaji;
            correct = targetChar.kana;
            hintText = "අකුර තෝරන්න";
            audioText = targetChar.kana;
            optionKey = 'kana';
        } else {
            question = targetChar.kana;
            correct = targetChar.romaji;
            hintText = "රෝමජි ශබ්දය තෝරන්න";
            audioText = targetChar.kana;
            optionKey = 'romaji';
        }

        const options = [correct];
        while(options.length < 4) {
            let randomOpt = appData.combinedKana[Math.floor(Math.random() * appData.combinedKana.length)][optionKey];
            if(!options.includes(randomOpt)) options.push(randomOpt);
        }

        return { 
            question, correct, 
            options: options.sort(() => 0.5 - Math.random()), 
            audioText, hintText 
        };
    },
    createDoubleConsonantQuiz: function() {
        const targetWord = appData.doubleConsonants[Math.floor(Math.random() * appData.doubleConsonants.length)];
        const options = [targetWord.word];
        
        while(options.length < 4) {
            let randomWord = appData.doubleConsonants[Math.floor(Math.random() * appData.doubleConsonants.length)].word;
            if(!options.includes(randomWord)) options.push(randomWord);
        }
        
        return {
            question: `'${targetWord.meaning}' සඳහා අදාල ජපන් වචනය තෝරන්න`,
            hintText: "ඉඟිය: " + targetWord.hint,
            correct: targetWord.word,
            options: options.sort(() => 0.5 - Math.random()),
            audioText: targetWord.word
        };
    },

    createKataLongVowelQuiz: function() {
        const targetWord = appData.kataLongVowels[Math.floor(Math.random() * appData.kataLongVowels.length)];
        const options = [targetWord.word];
        
        while(options.length < 4) {
            let randomWord = appData.kataLongVowels[Math.floor(Math.random() * appData.kataLongVowels.length)].word;
            if(!options.includes(randomWord)) options.push(randomWord);
        }
        
        return {
            question: `'${targetWord.meaning}' සඳහා අදාල කතකන වචනය තෝරන්න`,
            hintText: "ඉඟිය: " + targetWord.hint,
            correct: targetWord.word,
            options: options.sort(() => 0.5 - Math.random()),
            audioText: targetWord.word
        };
    },
    createExtendedKatakanaQuiz: function() {
        // සියලුම නව අක්ෂර එකම ලැයිස්තුවකට ගැනීම
        let allExtended = [];
        appData.extendedKatakana.forEach(g => {
            allExtended = allExtended.concat(g.chars);
        });

        const targetChar = allExtended[Math.floor(Math.random() * allExtended.length)];
        const isSoundToChar = Math.random() > 0.5;
        let question, correct, hintText, audioText, optionKey;

        if(isSoundToChar) {
            question = targetChar.romaji;
            correct = targetChar.kana;
            hintText = targetChar.hint;
            audioText = targetChar.kana;
            optionKey = 'kana';
        } else {
            question = targetChar.kana;
            correct = targetChar.romaji;
            hintText = targetChar.hint;
            audioText = targetChar.kana;
            optionKey = 'romaji';
        }

        const options = [correct];
        while(options.length < 4) {
            let randomOpt = allExtended[Math.floor(Math.random() * allExtended.length)][optionKey];
            if(!options.includes(randomOpt)) options.push(randomOpt);
        }

        return { 
            question, correct, 
            options: options.sort(() => 0.5 - Math.random()), 
            audioText, hintText 
        };
    },
    
    checkAnswer: function(btn, selected) {
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(b => b.disabled = true);
        
        const isCorrect = selected === this.currentQuiz.correct;
        const resultMsg = document.getElementById('result-message');
        const resultDisplay = document.getElementById('result-word-display');
        
        if (isCorrect) {
            btn.classList.add('correct');
            Storage.addXP(10);
            resultMsg.textContent = 'නියමයි! 🎉';
            resultMsg.style.color = "var(--success)";
            document.getElementById('quiz-score').textContent = `Score: ${Storage.get().xp}`;
            this.questionsDoneInRow++;
        } else {
            btn.classList.add('wrong');
            resultMsg.textContent = `වැරදියි! නිවැරදි පිළිතුර: ${this.currentQuiz.correct}`;
            resultMsg.style.color = "var(--danger)";
            buttons.forEach(b => {
                if(b.textContent === this.currentQuiz.correct) b.classList.add('correct');
            });
        }
        
        document.getElementById('quiz-result').classList.remove('hidden');
        resultDisplay.textContent = ""; 
        
        document.getElementById('btn-next').onclick = () => {
            if(this.mode === 'progressive' && this.questionsDoneInRow >= 10) {
                this.targetRow++;
                if(this.targetRow > 15) this.targetRow = 15;
                localStorage.setItem('unlockedRow', this.targetRow);
                alert(`සුභ පැතුම්! අපි ඊළඟ පේළියට යමු!`);
                this.startProgressive();
            } else {
                this.generateAndShowQuestion();
            }
        };
    }
};

// ============================================================================
// HIRAGANA TRUE MASTERY ENGINE (ACTIVITIES 1 TO 10)
// ============================================================================

const MasteryEngine = {
    currentActivityType: 1,
    targetChar: null,
    timer: null,
    timeLeft: 30,
    
    hideAllPracticeAreas: function() {
        document.getElementById('practice-menu').classList.add('hidden');
        document.getElementById('training-intro').classList.add('hidden');
        document.getElementById('quiz-result').classList.add('hidden');
        document.getElementById('quiz-area').classList.add('hidden');
        document.getElementById('word-builder-area').classList.add('hidden');
        document.getElementById('particle-quiz-area').classList.add('hidden');
        document.getElementById('mastery-area').classList.add('hidden');
        document.getElementById('sentence-builder-area').classList.add('hidden');
    },

    startSession: function() {
        app.router.navigate('practice');
        this.hideAllPracticeAreas();
        document.getElementById('mastery-area').classList.remove('hidden');
        // අහඹු ලෙස 1 සිට 10 දක්වා ක්‍රියාකාරකමක් තෝරයි
        this.currentActivityType = Math.floor(Math.random() * 10) + 1; 
        this.loadActivity();
        
    },

    loadActivity: function() {
        // UI Reset කිරීම
        document.getElementById('quiz-result').classList.add('hidden');
        document.getElementById('mastery-options').innerHTML = '';
        document.getElementById('mastery-options').classList.remove('hidden');
        document.getElementById('mastery-next-btn').classList.add('hidden');
        document.getElementById('mastery-display-box').classList.remove('hidden');
        document.getElementById('mastery-memory-grid').classList.add('hidden');
        document.getElementById('mastery-timer').classList.add('hidden');
        document.getElementById('mastery-subtitle').textContent = '';
        document.getElementById('mastery-question').textContent = '';
        
        clearInterval(this.timer);
        
        // අහඹු අකුරක් ලබා ගැනීම
        this.targetChar = appData.hiragana[Math.floor(Math.random() * appData.hiragana.length)];
        
        const titleEl = document.getElementById('mastery-title');
        const qEl = document.getElementById('mastery-question');
        const audioBtn = document.getElementById('mastery-listen-btn');
        const optionsGrid = document.getElementById('mastery-options');

        audioBtn.onclick = () => AudioService.speak(this.targetChar.kana);

        // Activity Switcher (ක්‍රියාකාරකම් 10)
        switch(this.currentActivityType) {
            case 1: // Activity 01 – LOOK & LISTEN
                titleEl.textContent = "Activity 01: Look & Listen";
                qEl.textContent = this.targetChar.kana;
                document.getElementById('mastery-subtitle').textContent = `${this.targetChar.romaji} / ${this.targetChar.hint}`;
                AudioService.speak(this.targetChar.kana);
                document.getElementById('mastery-next-btn').classList.remove('hidden');
                document.getElementById('mastery-next-btn').onclick = () => this.startSession();
                break;

            case 2: // Activity 02 – HIDE THE ROMAJI
                titleEl.textContent = "Activity 02: Hide Romaji";
                qEl.textContent = this.targetChar.kana;
                document.getElementById('mastery-subtitle').textContent = "මේ අකුරේ ශබ්දය කුමක්ද?";
                this.generateOptions(this.targetChar.romaji, 'romaji', optionsGrid);
                break;

            case 3: // Activity 03 – SOUND → CHARACTER
                titleEl.textContent = "Activity 03: Sound to Character";
                qEl.textContent = "🔊";
                document.getElementById('mastery-subtitle').textContent = "ඇසුණු ශබ්දයට ගැලපෙන අකුර තෝරන්න";
                AudioService.speak(this.targetChar.kana);
                this.generateOptions(this.targetChar.kana, 'kana', optionsGrid);
                break;

            case 4: // Activity 04 – SINHALA SOUND → HIRAGANA
                titleEl.textContent = "Activity 04: Sinhala to Hiragana";
                // සරලව Romaji එකෙන් සිංහල ශබ්දය පෙන්වමු
                qEl.textContent = `"${this.targetChar.romaji}"`; 
                document.getElementById('mastery-subtitle').textContent = "මෙම ශබ්දයට අදාල ජපන් අකුර කුමක්ද?";
                this.generateOptions(this.targetChar.kana, 'kana', optionsGrid);
                break;

            case 5: // Activity 05 – CHARACTER → SOUND
                titleEl.textContent = "Activity 05: Character to Sound";
                qEl.textContent = this.targetChar.kana;
                document.getElementById('mastery-subtitle').textContent = "මෙය කියවන්නේ කොහොමද?";
                this.generateOptions(this.targetChar.romaji, 'romaji', optionsGrid);
                break;

            case 6: // Activity 06 – RANDOM CHARACTER RECOGNITION
                titleEl.textContent = "Activity 06: Random Recognition";
                qEl.textContent = this.targetChar.kana;
                document.getElementById('mastery-subtitle').textContent = "ඉක්මනින් ශබ්දය තෝරන්න!";
                this.generateOptions(this.targetChar.romaji, 'romaji', optionsGrid);
                break;

            case 7: // Activity 07 – RAPID FIRE (30 Seconds)
                titleEl.textContent = "Activity 07: Rapid Fire!";
                qEl.textContent = this.targetChar.kana;
                document.getElementById('mastery-timer').classList.remove('hidden');
                this.timeLeft = 10; // Demo සඳහා තත්පර 10ක්
                document.getElementById('mastery-timer').textContent = `⏱️ ${this.timeLeft}s`;
                this.timer = setInterval(() => {
                    this.timeLeft--;
                    document.getElementById('mastery-timer').textContent = `⏱️ ${this.timeLeft}s`;
                    if(this.timeLeft <= 0) {
                        clearInterval(this.timer);
                        alert("Time's Up! හොඳ උත්සාහයක්.");
                        this.startSession();
                    }
                }, 1000);
                this.generateOptions(this.targetChar.romaji, 'romaji', optionsGrid, true); // true = auto load next
                break;

            case 8: // Activity 08 – AUDIO DISCRIMINATION
                titleEl.textContent = "Activity 08: Audio Discrimination";
                qEl.textContent = "🔊";
                document.getElementById('mastery-subtitle').textContent = "ඔබට ඇසුණේ කුමක්ද? (පැටලෙන අකුරු)";
                AudioService.speak(this.targetChar.kana);
                // පැටලෙන අකුරු සමග Option හැදීම
                this.generateOptions(this.targetChar.kana, 'kana', optionsGrid);
                break;

            case 9: // Activity 09 – MEMORY MATCH
                titleEl.textContent = "Activity 09: Memory Match";
                document.getElementById('mastery-display-box').classList.add('hidden');
                document.getElementById('mastery-options').classList.add('hidden');
                const grid = document.getElementById('mastery-memory-grid');
                grid.classList.remove('hidden');
                grid.style.display = 'grid'; // CSS reset
                this.buildMemoryMatch(grid);
                break;

            case 10: // Activity 10 – MISSING CHARACTER
                titleEl.textContent = "Activity 10: Missing Character";
                let rowChars = appData.hiragana.filter(h => h.row === this.targetChar.row);
                let sequence = rowChars.map(c => c.id === this.targetChar.id ? "□" : c.kana).join(" ");
                qEl.textContent = sequence;
                document.getElementById('mastery-subtitle').textContent = "හිස් තැනට ගැලපෙන අකුර?";
                this.generateOptions(this.targetChar.kana, 'kana', optionsGrid);
                break;
        }
    },

    // Options (බොත්තම් 4) සෑදීමේ පොදු ෆන්ක්ෂන් එක
    generateOptions: function(correctAnswer, keyType, container, isRapid = false) {
        let options = [correctAnswer];
        while(options.length < 4) {
            let randomOpt = appData.hiragana[Math.floor(Math.random() * appData.hiragana.length)][keyType];
            if(!options.includes(randomOpt)) options.push(randomOpt);
        }
        options.sort(() => 0.5 - Math.random());
        
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => {
                if(opt === correctAnswer) {
                    btn.classList.add('correct');
                    Storage.addXP(5);
                    if(isRapid) {
                        this.targetChar = appData.hiragana[Math.floor(Math.random() * appData.hiragana.length)];
                        document.getElementById('mastery-question').textContent = this.targetChar.kana;
                        container.innerHTML = '';
                        this.generateOptions(this.targetChar.romaji, 'romaji', container, true);
                    } else {
                        setTimeout(() => this.startSession(), 1000);
                    }
                } else {
                    btn.classList.add('wrong');
                    if(!isRapid) {
                        Array.from(container.children).forEach(b => {
                            if(b.textContent === correctAnswer) b.classList.add('correct');
                        });
                        setTimeout(() => this.startSession(), 2000);
                    }
                }
            };
            container.appendChild(btn);
        });
    },
   
    // Activity 9 සඳහා විශේෂිත Memory Match එක
    buildMemoryMatch: function(container) {
        container.innerHTML = '';
        let pairs = [];
        // අහඹු අකුරු 4ක් තෝරා ගැනීම
        for(let i=0; i<4; i++) {
            let c = appData.hiragana[Math.floor(Math.random() * appData.hiragana.length)];
            pairs.push({ id: c.id, text: c.kana, type: 'kana' });
            pairs.push({ id: c.id, text: c.romaji, type: 'romaji' });
        }
        pairs.sort(() => 0.5 - Math.random());

        let firstCard = null;
        let matchedPairs = 0;

        pairs.forEach(item => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.textContent = "?"; // මුලින් සඟවා ඇත
            card.dataset.id = item.id;
            card.dataset.text = item.text;

            card.onclick = () => {
                if(card.classList.contains('flipped') || card.classList.contains('matched')) return;
                
                card.textContent = item.text;
                card.classList.add('flipped');

                if(!firstCard) {
                    firstCard = card;
                } else {
                    if(firstCard.dataset.id === card.dataset.id) {
                        // ගැලපේ නම්
                        firstCard.classList.add('matched');
                        card.classList.add('matched');
                        matchedPairs++;
                        firstCard = null;
                        if(matchedPairs === 4) {
                            Storage.addXP(20);
                            setTimeout(() => this.startSession(), 1500);
                        }
                    } else {
                        // නොගැලපේ නම්
                        let tempFirst = firstCard;
                        firstCard = null;
                        setTimeout(() => {
                            tempFirst.classList.remove('flipped');
                            tempFirst.textContent = "?";
                            card.classList.remove('flipped');
                            card.textContent = "?";
                        }, 800);
                    }
                }
            };
            container.appendChild(card);
        });
    }
};