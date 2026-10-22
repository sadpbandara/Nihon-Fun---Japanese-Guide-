const PronounQuizEngine = {
    allQuestions: [],
    currentQueue: [],
    currentQuestion: null,

    init: function() {
        // මෙහි තිබූ this.bindTab(); ඉවත් කර ඇත. (එය pronoun_engine.js මගින් දැන් නිවැරදිව පාලනය වේ)
        this.loadData();
    },

    // 2. JS ගොනුවෙන් දත්ත කියවීම
    loadData: function() {
        if (typeof pronounQuestions !== 'undefined') {
            this.allQuestions = pronounQuestions;
            console.log("Successfully loaded 100 sentences from JS file!");
        } else {
            console.error("Data not found!");
            alert("දත්ත කියවීමට නොහැකි විය. pronoun_data.js ගොනුව නිවැරදිව සම්බන්ධ කර ඇත්දැයි බලන්න.");
        }
    },

    showDashboard: function() {
        document.getElementById('pq-dashboard').classList.remove('hidden');
        document.getElementById('pq-game-area').classList.add('hidden');
    },

    // 3. තේරූ Level එකට අදාළ ප්‍රශ්න පමණක් පෙරා ගැනීම (Filter)
    startLevel: function(level) {
        if(this.allQuestions.length === 0) {
            alert("ප්‍රශ්න පූරණය වෙමින් පවතී. කරුණාකර මඳ වේලාවකින් නැවත උත්සාහ කරන්න.");
            return;
        }

        // අදාළ Level එකට අයිති ප්‍රශ්න පමණක් තේරීම
        this.currentQueue = this.allQuestions.filter(q => q.Level === level);
        // ප්‍රශ්න අහඹු ලෙස මිශ්‍ර කිරීම (Shuffle)
        this.currentQueue.sort(() => 0.5 - Math.random()); 

        document.getElementById('pq-dashboard').classList.add('hidden');
        document.getElementById('pq-game-area').classList.remove('hidden');
        document.getElementById('pq-level-title').textContent = `Level: ${level}`;

        this.nextQuestion();
    },

    nextQuestion: function() {
        if (this.currentQueue.length === 0) {
            alert("සුභ පැතුම්! ඔබ මෙම Level එකේ සියලුම ප්‍රශ්න අවසන් කළා! 🎉");
            this.showDashboard();
            return;
        }

        this.currentQuestion = this.currentQueue.shift();
        this.renderQuestion();
    },

    // 4. ප්‍රශ්නය තිරයේ දිස්වීම
    renderQuestion: function() {
        const q = this.currentQuestion;
        
        // හිස්තැන සඳහා ලස්සන CSS එකක් දැමීම
        const formattedQ = q.Question_JP.replace('___', '<span style="color:var(--primary); border-bottom:2px dashed var(--primary); padding:0 15px;">___</span>');
        
        document.getElementById('pq-question-jp').innerHTML = formattedQ;
        document.getElementById('pq-sentence-si').textContent = q.Sentence_SI;
        
        // පරණ ප්‍රතිඵල මකා දැමීම
        document.getElementById('pq-result-msg').textContent = "";
        document.getElementById('pq-next-btn').classList.add('hidden');

        // පිළිතුරු බොත්තම් සැකසීම
        const optionsGrid = document.getElementById('pq-options-grid');
        optionsGrid.innerHTML = '';

        const options = q.Options.split(','); // "これ,それ,あれ" වැනි දත්ත වෙන් කිරීම

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => this.checkAnswer(btn, opt);
            optionsGrid.appendChild(btn);
        });
    },

    // 5. පිළිතුර පරීක්ෂා කිරීම
    checkAnswer: function(btn, selectedOption) {
        const isCorrect = (selectedOption === this.currentQuestion.Pronoun);
        const buttons = document.querySelectorAll('#pq-options-grid .option-btn');
        buttons.forEach(b => b.disabled = true);
        
        const msgEl = document.getElementById('pq-result-msg');
        const nextBtn = document.getElementById('pq-next-btn');

        if (isCorrect) {
            btn.classList.add('correct');
            msgEl.textContent = "නිවැරදියි! 🎉";
            msgEl.style.color = "var(--success)";
            
            Storage.addXP(10); // XP ලබා දීම
            AudioService.speak(this.currentQuestion.Sentence_JP); // නිවැරදි ජපන් වාක්‍යය ශබ්ද කිරීම
        } else {
            btn.classList.add('wrong');
            msgEl.innerHTML = `වැරදියි! නිවැරදි පිළිතුර: <b>${this.currentQuestion.Pronoun}</b>`;
            msgEl.style.color = "var(--danger)";
            // නිවැරදි පිළිතුර කොළ පාටින් පෙන්වීම
            buttons.forEach(b => {
                if (b.textContent === this.currentQuestion.Pronoun) b.classList.add('correct');
            });
        }

        // හිස්තැනට අදාළ අකුර දමා පෙන්වීම
        document.getElementById('pq-question-jp').innerHTML = this.currentQuestion.Question_JP.replace('___', `<span style="color:var(--success); font-weight:bold;">${this.currentQuestion.Pronoun}</span>`);

        nextBtn.classList.remove('hidden');
    }
};

// App එක Load වන විට Engine එක ආරම්භ කිරීම
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => PronounQuizEngine.init(), 700);
});