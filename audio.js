const AudioService = {
    speak: function(text) {
        if (!('speechSynthesis' in window)) {
            console.warn("Speech Synthesis not supported");
            return;
        }
        
        // Cancel any ongoing speech to avoid queuing delays
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.9; // Slightly slower for learning
        
        window.speechSynthesis.speak(utterance);
    }
};