const Storage = {
    key: 'nihongo_fun_data',
    
    defaultState: {
        xp: 0,
        streak: 1,
        lastLogin: new Date().toDateString(),
        wordsLearned: 0,
        correctAnswers: 0,
        totalAnswers: 0,
        theme: 'light',
        wordMastery: {}
    },

    get: function() {
        const data = localStorage.getItem(this.key);
        if (data) {
            const parsedData = JSON.parse(data);
            // පරණ Save එකේ wordMastery නැත්නම් එය අලුතින් හදාගන්නවා
            if (!parsedData.wordMastery) parsedData.wordMastery = {};
            return { ...this.defaultState, ...parsedData };
        }
        return { ...this.defaultState };
    },

    save: function(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    },

    update: function(updates) {
        const current = this.get();
        this.save({ ...current, ...updates });
    },

    addXP: function(amount) {
        const current = this.get();
        current.xp += amount;
        this.save(current);
        return current.xp;
    },

    export: function() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.get()));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", "nihongo_fun_backup.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
};