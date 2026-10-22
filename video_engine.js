const VideoEngine = {
    currentLesson: null,
    currentWord: null,
    targetSentenceArray: [],
    currentInputArray: [],

    init: function() {
        this.renderLessonsGrid();
    },

    renderLessonsGrid: function() {
        const grid = document.getElementById('video-lessons-grid');
        if(!grid) return;
        grid.innerHTML = '';
        
        if (typeof myVideoLessons === 'undefined') return;

        myVideoLessons.forEach(lesson => {
            const card = document.createElement('div');
            card.className = 'card text-center';
            card.style.cursor = 'pointer';
            card.style.border = '2px solid #34495E';
            card.style.transition = 'transform 0.2s';
            card.onmouseover = () => card.style.transform = 'scale(1.05)';
            card.onmouseout = () => card.style.transform = 'scale(1)';
            
            card.innerHTML = `
                <h3 style="color: var(--primary); margin-bottom: 10px;">${lesson.title}</h3>
                <p class="text-muted">වචන සහ ව්‍යාකරණ ${lesson.vocab.length} ක් ඇත.</p>
                <button class="btn-primary mt-2" style="background: #34495E;">පුහුණු වන්න</button>
            `;
            card.onclick = () => this.openGameArea(lesson);
            grid.appendChild(card);
        });
    },

    openGameArea: function(lesson) {
        this.currentLesson = lesson;
        document.getElementById('vg-title').textContent = lesson.title;
        document.getElementById('video-game-area').classList.remove('hidden');
        document.getElementById('vg-screen').classList.add('hidden');
    },

    closeGame: function() {
        document.getElementById('video-game-area').classList.add('hidden');
        this.currentLesson = null;
    },

    // 1. වචන හඳුනාගැනීමේ ක්‍රීඩාව (Flashcards)
    startVocabFlashcards: function() {
        document.getElementById('vg-screen').classList.remove('hidden');
        document.getElementById('vg-slots').innerHTML = '';
        document.getElementById('vg-word-pool').innerHTML = '';
        
        // අහඹු වචනයක් තේරීම
        const allWords = [...this.currentLesson.vocab, ...(this.currentLesson.names || [])];
        this.currentWord = allWords[Math.floor(Math.random() * allWords.length)];
        
        document.getElementById('vg-question-si').textContent = "සිංහල තේරුම කුමක්ද?";
        document.getElementById('vg-question-jp').textContent = this.currentWord.jp;
        
        AudioService.speak(this.currentWord.jp); // ශබ්දය

        const optionsGrid = document.getElementById('vg-options');
        optionsGrid.innerHTML = '';
        
        let options = [this.currentWord.si];
        while(options.length < 4) {
            let randomOpt = allWords[Math.floor(Math.random() * allWords.length)].si;
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
                    setTimeout(() => this.startVocabFlashcards(), 1000);
                } else {
                    btn.classList.add('wrong');
                    Array.from(optionsGrid.children).forEach(b => {
                        if(b.textContent === this.currentWord.si) b.classList.add('correct');
                    });
                    setTimeout(() => this.startVocabFlashcards(), 2000);
                }
            };
            optionsGrid.appendChild(btn);
        });
    },

    
    // 2. වාක්‍ය ගොඩනැගීම (Sentence Builder: N1 wa N2 desu)
    startSentenceBuilder: function() {
        document.getElementById('vg-screen').classList.remove('hidden');
        document.getElementById('vg-options').innerHTML = '';

        // දෝෂ නිවැරදි කිරීම 1: කලින්ම සකසා ඇති වාක්‍ය තිබේ නම් (උදා: Video 03), අහඹු ලෙස නොසාදා ඒවා භාවිතා කිරීම
        if (this.currentLesson.sentences && this.currentLesson.sentences.length > 0) {
            const randomSentence = this.currentLesson.sentences[Math.floor(Math.random() * this.currentLesson.sentences.length)];
            
            document.getElementById('vg-question-si').textContent = randomSentence.si;
            document.getElementById('vg-question-jp').textContent = ""; // Hide JP title
            
            this.targetSentenceArray = randomSentence.jpArr;
            this.currentInputArray = new Array(this.targetSentenceArray.length).fill(null);
            this.renderSentenceUI();
            return;
        }

        // --- Video 01 සහ 02 සඳහා නිවැරදිව Random වාක්‍ය හැදීම ---
        const names = this.currentLesson.names || [{jp: "かれ", si: "ඔහු"}, {jp: "かのじょ", si: "ඇය"}];
        const tenses = this.currentLesson.tenses || [{jp: "です", si: "වේ"}];

        // දෝෂ නිවැරදි කිරීම 2: "රටවල්" සහ "සර්වනාම" රැකියාවන් ලෙස තේරීම වැළැක්වීම
        const nonProfessions = ["にほん", "スリランカ", "アメリカ", "かんこく", "ブラジル", "かれ", "かのじょ", "さん", "ちゃん", "くん", "じん"];
        const professions = this.currentLesson.vocab.filter(v => !nonProfessions.includes(v.jp));

        // N1, N2 සහ Tense අහඹු ලෙස තේරීම
        const n1 = names[Math.floor(Math.random() * names.length)];
        let n2 = professions.length > 0 ? professions[Math.floor(Math.random() * professions.length)] : { jp: "がくせい", si: "ශිෂ්‍යයෙක්" };
        const tense = tenses[Math.floor(Math.random() * tenses.length)];

        // ජාතිකත්වය සඳහා විශේෂ අවස්ථාවක් (Video 01)
        if (Math.random() > 0.5 && this.currentLesson.videoId === 1) {
            const countries = this.currentLesson.vocab.filter(v => v.jp === "スリランカ" || v.jp === "にほん");
            if (countries.length > 0) {
                const country = countries[Math.floor(Math.random() * countries.length)];
                n2 = { jp: country.jp + "じん", si: country.si + " ජාතිකයෙක්" };
            }
        }

        // සිංහල වාක්‍යය හැදීම
        let siText = `${n1.si}, ${n2.si} ${tense.si}.`;
        document.getElementById('vg-question-si').textContent = siText;
        document.getElementById('vg-question-jp').textContent = ""; 

        // ජපන් වාක්‍යයේ අනුපිළිවෙල (Target)
        this.targetSentenceArray = [n1.jp, "は", n2.jp, tense.jp];
        this.currentInputArray = new Array(this.targetSentenceArray.length).fill(null);

        this.renderSentenceUI();
    },

    renderSentenceUI: function() {
        const slotsContainer = document.getElementById('vg-slots');
        const poolContainer = document.getElementById('vg-word-pool');
        slotsContainer.innerHTML = '';
        poolContainer.innerHTML = '';

        this.currentInputArray.forEach((word, index) => {
            const slot = document.createElement('div');
            slot.className = 'sb-slot';
            if (word) {
                slot.textContent = word;
                slot.classList.add('filled');
            }
            slot.onclick = () => {
                if (word) {
                    this.currentInputArray[index] = null;
                    this.renderSentenceUI();
                }
            };
            slotsContainer.appendChild(slot);
        });

        // වචන මිශ්‍ර කිරීම
        let poolWords = [...this.targetSentenceArray].sort(() => 0.5 - Math.random());
        
        poolWords.forEach(word => {
            const btn = document.createElement('button');
            btn.className = 'sb-word-btn';
            btn.textContent = word;
            
            let countInInput = this.currentInputArray.filter(w => w === word).length;
            let countInPool = poolWords.filter(w => w === word).length;
            if (countInInput >= countInPool) btn.classList.add('used');

            btn.onclick = () => {
                const emptyIndex = this.currentInputArray.findIndex(w => w === null);
                if (emptyIndex !== -1) {
                    this.currentInputArray[emptyIndex] = word;
                    this.renderSentenceUI();
                    this.checkSentence();
                }
            };
            poolContainer.appendChild(btn);
        });
    },

    checkSentence: function() {
        if (this.currentInputArray.includes(null)) return; // තවම සම්පූර්ණ නැත
        
        const isCorrect = JSON.stringify(this.currentInputArray) === JSON.stringify(this.targetSentenceArray);
        const jpSentence = this.targetSentenceArray.join("");
        
        if (isCorrect) {
            AudioService.speak(jpSentence);
            document.getElementById('vg-question-jp').textContent = "නිවැරදියි! 🎉";
            document.getElementById('vg-question-jp').style.color = "var(--success)";
            Storage.addXP(20);
            setTimeout(() => this.startSentenceBuilder(), 2000);
        } else {
            document.getElementById('vg-question-jp').textContent = "වැරදියි, නැවත උත්සාහ කරන්න!";
            document.getElementById('vg-question-jp').style.color = "var(--danger)";
        }
    },

    // 3. කාල භේදය (Tenses) පුහුණුව
    startTenseConverter: function() {
        if (!this.currentLesson.tenses) {
            alert("මෙම වීඩියෝවේ කාල භේදයට අදාළ පාඩම් නොමැත.");
            return;
        }
        this.startSentenceBuilder(); // Tenses ද වාක්‍ය හරහාම පුහුණු කෙරේ
    }
};