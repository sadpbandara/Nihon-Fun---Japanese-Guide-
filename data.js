const appData = {
    // 1. සම්පූර්ණ හිරගනා හෝඩිය
    hiragana: [
        { id: "h_a", kana: "あ", romaji: "a", hint: "ඇපල් ගෙඩියක් (Apple) වගේ හැඩයක්", row: 1 },
        { id: "h_i", kana: "い", romaji: "i", hint: "ඉරි කෑලි දෙකක් පසෙකින්", row: 1 },
        { id: "h_u", kana: "う", romaji: "u", hint: "උඩින් තිත්තක් ඇති 'U' අකුරක්", row: 1 },
        { id: "h_e", kana: "え", romaji: "e", hint: "Z අකුරක් වගේ හැඩයක්", row: 1 },
        { id: "h_o", kana: "お", romaji: "o", hint: "ගෝල්ෆ් බෝලයක් වටා රවුමක්", row: 1 },
        { id: "h_ka", kana: "か", romaji: "ka", hint: "කැමරාවක් (Camera) වගේ", row: 2 },
        { id: "h_ki", kana: "き", romaji: "ki", hint: "යතුරක් (Key) වගේ", row: 2 },
        { id: "h_ku", kana: "く", romaji: "ku", hint: "කුරුල්ලෙකුගේ හොටක් (<)", row: 2 },
        { id: "h_ke", kana: "け", romaji: "ke", hint: "කෙග් (Keg) එකක් හෙවත් බැරල් එකක්", row: 2 },
        { id: "h_ko", kana: "こ", romaji: "ko", hint: "කාසි (Coin) දෙකක් උඩින් හා යටින්", row: 2 },
        { id: "h_sa", kana: "さ", romaji: "sa", hint: "සිනහවක් (Smile) වගේ", row: 3 },
        { id: "h_shi", kana: "し", romaji: "shi", hint: "කොක්කක් (Fishhook) වගේ", row: 3 },
        { id: "h_su", kana: "す", romaji: "su", hint: "රවුමක් සහිත පැද්දෙන ඔන්චිල්ලාවක්", row: 3 },
        { id: "h_se", kana: "せ", romaji: "se", hint: "කෙනෙක් උකුලට අත් තියාගෙන", row: 3 },
        { id: "h_so", kana: "そ", romaji: "so", hint: "සිග්සැග් (Zig-zag) හැඩයක්", row: 3 },
        { id: "h_ta", kana: "た", romaji: "ta", hint: "t අකුර සහ a අකුර එකට වගේ", row: 4 },
        { id: "h_chi", kana: "ち", romaji: "chi", hint: "5 ඉලක්කමට සමානයි", row: 4 },
        { id: "h_tsu", kana: "つ", romaji: "tsu", hint: "සුනාමි (Tsunami) රළක් වගේ", row: 4 },
        { id: "h_te", kana: "て", romaji: "te", hint: "බල්ලෙකුගේ වලිගයක්", row: 4 },
        { id: "h_to", kana: "と", romaji: "to", hint: "කකුලේ ඇඟිල්ලක් (Toe) වගේ", row: 4 },
        { id: "h_na", kana: "な", romaji: "na", hint: "කුරුසයක් සහ ගැටයක්", row: 5 },
        { id: "h_ni", kana: "に", romaji: "ni", hint: "දණහිසක් (Knee) වගේ", row: 5 },
        { id: "h_nu", kana: "ぬ", romaji: "nu", hint: "නූඩ්ල්ස් (Noodles) පැටලිලා", row: 5 },
        { id: "h_ne", kana: "ね", romaji: "ne", hint: "බළලෙකු (Neko) වගේ", row: 5 },
        { id: "h_no", kana: "の", romaji: "no", hint: "තහනම් (No) ලකුණ වගේ", row: 5 },
        { id: "h_ha", kana: "は", romaji: "ha", hint: "H අකුර සහ a අකුර එකට", row: 6 },
        { id: "h_hi", kana: "ひ", romaji: "hi", hint: "හිනාවෙන කටක් (He he)", row: 6 },
        { id: "h_fu", kana: "ふ", romaji: "fu", hint: "ෆුජි කන්ද (Mt. Fuji) වගේ", row: 6 },
        { id: "h_he", kana: "へ", romaji: "he", hint: "කන්දක් (Hill) ඉහළට", row: 6 },
        { id: "h_ho", kana: "ほ", romaji: "ho", hint: "තොප්පියක් දාගත් කෙනෙක්", row: 6 },
        { id: "h_ma", kana: "ま", romaji: "ma", hint: "M අකුරට සමාන ඉරි දෙකක්", row: 7 },
        { id: "h_mi", kana: "み", romaji: "mi", hint: "21 ඉලක්කම වගේ", row: 7 },
        { id: "h_mu", kana: "む", romaji: "mu", hint: "එළදෙනෙක් (Moo) වගේ", row: 7 },
        { id: "h_me", kana: "め", romaji: "me", hint: "ඇසක් (Eye) වගේ", row: 7 },
        { id: "h_mo", kana: "も", romaji: "mo", hint: "මසුන් අල්ලන කොක්කක්", row: 7 },
        { id: "h_ya", kana: "や", romaji: "ya", hint: "යාක් (Yak) ගොනෙකුගේ අං", row: 8 },
        { id: "h_yu", kana: "ゆ", romaji: "yu", hint: "යූ ටර්න් (U-Turn) එකක් වගේ", row: 8 },
        { id: "h_yo", kana: "よ", romaji: "yo", hint: "යෝයෝ (Yo-yo) සෙල්ලම් බඩුවක්", row: 8 },
        { id: "h_ra", kana: "ら", romaji: "ra", hint: "රාවණාගේ මූණ වගේ", row: 9 },
        { id: "h_ri", kana: "り", romaji: "ri", hint: "ඉරි දෙකක් (Ri)", row: 9 },
        { id: "h_ru", kana: "る", romaji: "ru", hint: "ලූප් (Loop) එකක් තියෙන 3", row: 9 },
        { id: "h_re", kana: "れ", romaji: "re", hint: "විවේක (Rest) ගන්න කෙනෙක්", row: 9 },
        { id: "h_ro", kana: "ろ", romaji: "ro", hint: "ලූප් එකක් නැති 3 (රු/රො වෙනස)", row: 9 },
        { id: "h_wa", kana: "わ", romaji: "wa", hint: "මැජික් යෂ්ටියක් (Wand)", row: 10 },
        { id: "h_wo", kana: "を", romaji: "wo", hint: "W අකුර වගේ හැඩයක්", row: 10 },
        { id: "h_n", kana: "ん", romaji: "n", hint: "n අකුරටම සමානයි", row: 10 },
        // 11-15 පේළි: තිත් දෙක (Dakuten) සහ රවුම (Handakuten)
        { id: "h_ga", kana: "が", romaji: "ga", hint: "ක (か) අකුරට තිත් දෙකක් (ten-ten)", row: 11 },
        { id: "h_gi", kana: "ぎ", romaji: "gi", hint: "කි (き) අකුරට තිත් දෙකක්", row: 11 },
        { id: "h_gu", kana: "ぐ", romaji: "gu", hint: "කු (く) අකුරට තිත් දෙකක්", row: 11 },
        { id: "h_ge", kana: "げ", romaji: "ge", hint: "කෙ (け) අකුරට තිත් දෙකක්", row: 11 },
        { id: "h_go", kana: "ご", romaji: "go", hint: "කො (こ) අකුරට තිත් දෙකක්", row: 11 },

        { id: "h_za", kana: "ざ", romaji: "za", hint: "ස (さ) අකුරට තිත් දෙකක්", row: 12 },
        { id: "h_ji", kana: "じ", romaji: "ji", hint: "ෂි (し) අකුරට තිත් දෙකක්", row: 12 },
        { id: "h_zu", kana: "ず", romaji: "zu", hint: "සු (す) අකුරට තිත් දෙකක්", row: 12 },
        { id: "h_ze", kana: "ぜ", romaji: "ze", hint: "සෙ (せ) අකුරට තිත් දෙකක්", row: 12 },
        { id: "h_zo", kana: "ぞ", romaji: "zo", hint: "සො (そ) අකුරට තිත් දෙකක්", row: 12 },

        { id: "h_da", kana: "だ", romaji: "da", hint: "ත (た) අකුරට තිත් දෙකක්", row: 13 },
        { id: "h_dji", kana: "ぢ", romaji: "ji", hint: "චි (ち) අකුරට තිත් දෙකක්", row: 13 },
        { id: "h_dzu", kana: "づ", romaji: "zu", hint: "ත්සු (つ) අකුරට තිත් දෙකක්", row: 13 },
        { id: "h_de", kana: "で", romaji: "de", hint: "තෙ (て) අකුරට තිත් දෙකක්", row: 13 },
        { id: "h_do", kana: "ど", romaji: "do", hint: "තො (と) අකුරට තිත් දෙකක්", row: 13 },

        { id: "h_ba", kana: "ば", romaji: "ba", hint: "හ (は) අකුරට තිත් දෙකක්", row: 14 },
        { id: "h_bi", kana: "び", romaji: "bi", hint: "හි (ひ) අකුරට තිත් දෙකක්", row: 14 },
        { id: "h_bu", kana: "ぶ", romaji: "bu", hint: "ෆු (ふ) අකුරට තිත් දෙකක්", row: 14 },
        { id: "h_be", kana: "べ", romaji: "be", hint: "හෙ (へ) අකුරට තිත් දෙකක්", row: 14 },
        { id: "h_bo", kana: "ぼ", romaji: "bo", hint: "හො (ほ) අකුරට තිත් දෙකක්", row: 14 },

        { id: "h_pa", kana: "ぱ", romaji: "pa", hint: "හ (は) අකුරට රවුමක් (maru)", row: 15 },
        { id: "h_pi", kana: "ぴ", romaji: "pi", hint: "හි (ひ) අකුරට රවුමක්", row: 15 },
        { id: "h_pu", kana: "ぷ", romaji: "pu", hint: "ෆු (ふ) අකුරට රවුමක්", row: 15 },
        { id: "h_pe", kana: "ぺ", romaji: "pe", hint: "හෙ (へ) අකුරට රවුමක්", row: 15 },
        { id: "h_po", kana: "ぽ", romaji: "po", hint: "හො (ほ) අකුරට රවුමක්", row: 15 }
    ],

    // 2. වචන මාලාව
    vocabulary: [
        { id: "v1", japanese: "おはよう", kana: "おはよう", romaji: "ohayou", sinhala: "සුභ උදෑසනක්", english: "Good morning", emoji: "🌅" },
        { id: "v2", japanese: "こんにちは", kana: "こんにちは", romaji: "konnichiwa", sinhala: "සුභ දහවලක් / ආයුබෝවන්", english: "Good afternoon", emoji: "☀️" },
        { id: "v3", japanese: "こんばんは", kana: "こんばんは", romaji: "konbanwa", sinhala: "සුභ සන්ධ්‍යාවක්", english: "Good evening", emoji: "🌆" },
        { id: "v4", japanese: "ありがとう", kana: "ありがとう", romaji: "arigatou", sinhala: "ස්තුතියි", english: "Thank you", emoji: "🙏" },
        { id: "v6", japanese: "私", kana: "わたし", romaji: "watashi", sinhala: "මම", english: "I / me", emoji: "🧑" },
        { id: "v10", japanese: "先生", kana: "せんせい", romaji: "sensei", sinhala: "ගුරුවරයා", english: "Teacher", emoji: "👨‍🏫" },
        { id: "v16", japanese: "学校", kana: "がっこう", romaji: "gakkou", sinhala: "පාසල", english: "School", emoji: "🏫" },
        { id: "v18", japanese: "家", kana: "いえ", romaji: "ie", sinhala: "නිවස", english: "House / Home", emoji: "🏠" },
        { id: "v21", japanese: "食べる", kana: "たべる", romaji: "taberu", sinhala: "කනවා", english: "To eat", emoji: "🍽️" },
        { id: "v22", japanese: "飲む", kana: "のむ", romaji: "nomu", sinhala: "බොනවා", english: "To drink", emoji: "🥤" },
        { id: "v23", japanese: "行く", kana: "いく", romaji: "iku", sinhala: "යනවා", english: "To go", emoji: "🚶" },
        { id: "v28", japanese: "読む", kana: "よむ", romaji: "yomu", sinhala: "කියවනවා", english: "To read", emoji: "📖" },
        { id: "v32", japanese: "寝る", kana: "ねる", romaji: "neru", sinhala: "නිදාගන්නවා", english: "To sleep", emoji: "🛌" },
        { id: "v44", japanese: "水", kana: "みず", romaji: "mizu", sinhala: "ජලය", english: "Water", emoji: "💧" },
        { id: "v45", japanese: "ご飯", kana: "ごはん", romaji: "gohan", sinhala: "බත්", english: "Rice", emoji: "🍚" },
        { id: "v47", japanese: "魚", kana: "さかな", romaji: "sakana", sinhala: "මාළු", english: "Fish", emoji: "🐟" }
    ],

    // 3. නිපාත පද
    particles: [
        { id: "p1", kana: "は", romaji: "wa", usage: "මාතෘකාව (Topic marker)", desc: "වාක්‍යයේ කතා කරන මාතෘකාව පෙන්වයි.", exampleJp: "わたし は がくせいです。", exampleSi: "මම ශිෂ්‍යයෙක්මි." },
        { id: "p2", kana: "を", romaji: "o", usage: "කර්මය (Object marker)", desc: "ක්‍රියාවට භාජනය වන දේ පෙන්වයි.", exampleJp: "ごはん を たべます。", exampleSi: "බත් කනවා." },
        { id: "p3", kana: "に", romaji: "ni", usage: "ස්ථානය/කාලය (Time/Location)", desc: "ගමන් කරන ස්ථානය හෝ වෙලාව පෙන්වයි.", exampleJp: "がっこう に いきます。", exampleSi: "පාසලට යනවා." },
        { id: "p4", kana: "で", romaji: "de", usage: "ක්‍රියාව කරන තැන/සාධනය", desc: "යමක් කරන ස්ථානය හෝ පාවිච්චි කරන උපකරණය/වාහනය.", exampleJp: "バス で いきます。", exampleSi: "බස් එකෙන් යනවා." },
        { id: "p5", kana: "の", romaji: "no", usage: "අයිතිය (Possession)", desc: "යමක් කාගේද යන්න පෙන්වයි ('ගේ').", exampleJp: "わたし の ほんです。", exampleSi: "මගේ පොතයි." },
        { id: "p6", kana: "が", romaji: "ga", usage: "උක්තය (Subject marker)", desc: "කැමති/අකමැති දේවල් සහ නව තොරතුරු පෙන්වයි.", exampleJp: "ねこ が すきです。", exampleSi: "බළලුන්ට කැමතියි." },
        { id: "p7", kana: "と", romaji: "to", usage: "සහ/සමග (And / With)", desc: "දේවල් දෙකක් එකතු කිරීමට හෝ කෙනෙක් සමග යමක් කරන විට.", exampleJp: "にく と さかな", exampleSi: "මස් සහ මාළු" },
        { id: "p8", kana: "へ", romaji: "e", usage: "දිශාව (Direction)", desc: "යන දිශාව පෙන්වයි. ('ට' යන අදහස)", exampleJp: "いえ へ かえります。", exampleSi: "ගෙදරට යනවා." }
    ],

    // 4. නිපාත පද ප්‍රශ්නාවලිය
    particleQuizzes: [
        { question: "わたし ___ 学生(がくせい)です。", options: ["は", "を", "で", "に"], correct: "は", meaning: "මම ශිෂ්‍යයෙක්මි." },
        { question: "みず ___ のみます。", options: ["が", "を", "の", "と"], correct: "を", meaning: "ජලය බොනවා." },
        { question: "３時(じ) ___ 帰(かえ)ります。", options: ["で", "を", "に", "は"], correct: "に", meaning: "3 ට ගෙදර යනවා." },
        { question: "えんぴつ ___ 書(か)きます。", options: ["で", "に", "を", "が"], correct: "で", meaning: "පැන්සලෙන් ලියනවා." },
        { question: "これ は わたし ___ ほんです。", options: ["の", "と", "が", "を"], correct: "の", meaning: "මේක මගේ පොතයි." },
        { question: "りんご ___ みかん を 買(か)います。", options: ["で", "と", "は", "に"], correct: "と", meaning: "ඇපල් සහ දොඩම් මිලදී ගන්නවා." },
        { question: "わたし は いぬ ___ すきです。", options: ["を", "で", "が", "へ"], correct: "が", meaning: "මම බල්ලන්ට කැමතියි." },
        { question: "あした ぎんこう ___ いきます。", options: ["を", "へ", "で", "が"], correct: "へ", meaning: "හෙට බැංකුවට යනවා." }
    ],

    // 5. අලුත්: පැටලෙන අකුරු කාණ්ඩ (Confusing Kana)
    similarKanaGroups: [
        { 
            title: "අකුරේ අගින් වෙන් කරමු!", 
            hint: "ね අග ගැටයක් ඇත. れ අග පිටතට විහිදේ. わ අග ඇතුලට හැරේ.", 
            chars: [{kana: "ね", romaji: "ne"}, {kana: "れ", romaji: "re"}, {kana: "わ", romaji: "wa"}] 
        },
        { 
            title: "තිරස් ඉරි ගණන බලමු!", 
            hint: "さ අකුරේ තිරස් ඉරි 1යි. き අකුරේ තිරස් ඉරි 2යි.", 
            chars: [{kana: "さ", romaji: "sa"}, {kana: "き", romaji: "ki"}] 
        },
        { 
            title: "උඩින් මතු වෙනවද?", 
            hint: "は අකුරේ තිරස් ඉර 1යි. ほ අකුරේ තිරස් ඉරි 2යි, ඒ වගේම උඩින් ඉර මතු වී නැත.", 
            chars: [{kana: "は", romaji: "ha"}, {kana: "ほ", romaji: "ho"}] 
        },
        { 
            title: "වලිගයක් තියෙනවද?", 
            hint: "あ අකුරේ අගින් වලිගයක් නැත. お අකුරේ දකුණු පසින් තිතක්/වලිගයක් ඇත.", 
            chars: [{kana: "あ", romaji: "a"}, {kana: "お", romaji: "o"}] 
        },
        { 
            title: "අග ගැටයක් තියෙනවද?", 
            hint: "る අග ගැටයක් ඇත. ろ අග ගැටයක් නැත.", 
            chars: [{kana: "る", romaji: "ru"}, {kana: "ろ", romaji: "ro"}] 
        },
        { 
            title: "තවත් ගැටයක්!", 
            hint: "ぬ අග ගැටයක් ඇත. め අග ගැටයක් නැත.", 
            chars: [{kana: "ぬ", romaji: "nu"}, {kana: "め", romaji: "me"}] 
        },
        { 
            title: "ඉහළ කොටස බලමු!", 
            hint: "ち අකුරේ ඉහළ කොටස දකුණට හැරී ඇත. ら අකුරේ ඉහළ කොටස තිතක් මෙන් ඇත.", 
            chars: [{kana: "ち", romaji: "chi"}, {kana: "ら", romaji: "ra"}] 
        }

    ],
    // 6. දීර්ඝ අක්ෂර (Long Vowels)
    longVowels: [
        { id: "lv1", word: "おばあさん", romaji: "obaasan", meaning: "ආච්චි", hint: "あ අකුරක් එකතු වී 'ආ' ශබ්දය දීර්ඝ වේ." },
        { id: "lv2", word: "おじいさん", romaji: "ojiisan", meaning: "සීයා", hint: "い අකුරක් එකතු වී 'ඊ' ශබ්දය දීර්ඝ වේ." },
        { id: "lv3", word: "くうき", romaji: "kuuki", meaning: "වාතය / Air", hint: "う අකුරක් එකතු වී 'ඌ' ශබ්දය දීර්ඝ වේ." },
        { id: "lv4", word: "えいが", romaji: "eiga", meaning: "චිත්‍රපටය", hint: "い අකුරක් එකතු වී 'ඒ' ශබ්දය දීර්ඝ වේ." },
        { id: "lv5", word: "おおきい", romaji: "ookii", meaning: "විශාල", hint: "お අකුරක් එකතු වී 'ඕ' ශබ්දය දීර්ඝ වේ." },
        { id: "lv6", word: "おとうさん", romaji: "otousan", meaning: "තාත්තා", hint: "う අකුරක් එකතු වී 'ඕ' ශබ්දය දීර්ඝ වේ." }
    ],
    // 7. බැඳී අකුරු (Yōon)
    combinedKana: [
        { id: "c_kya", kana: "きゃ", romaji: "kya", hint: "කි + යා (kya)" },
        { id: "c_kyu", kana: "きゅ", romaji: "kyu", hint: "කි + යූ (kyu)" },
        { id: "c_kyo", kana: "きょ", romaji: "kyo", hint: "කි + යෝ (kyo)" },
        { id: "c_sha", kana: "しゃ", romaji: "sha", hint: "ෂා ශබ්දය (sha)" },
        { id: "c_shu", kana: "しゅ", romaji: "shu", hint: "ෂූ ශබ්දය (shu)" },
        { id: "c_sho", kana: "しょ", romaji: "sho", hint: "ෂෝ ශබ්දය (sho)" },
        { id: "c_cha", kana: "ちゃ", romaji: "cha", hint: "චා ශබ්දය (cha)" },
        { id: "c_chu", kana: "ちゅ", romaji: "chu", hint: "චූ ශබ්දය (chu)" },
        { id: "c_cho", kana: "ちょ", romaji: "cho", hint: "චෝ ශබ්දය (cho)" },
        { id: "c_nya", kana: "にゃ", romaji: "nya", hint: "ඤා ශබ්දය (nya)" },
        { id: "c_nyu", kana: "にゅ", romaji: "nyu", hint: "ඤූ ශබ්දය (nyu)" },
        { id: "c_nyo", kana: "にょ", romaji: "nyo", hint: "ඤෝ ශබ්දය (nyo)" },
        { id: "c_hya", kana: "ひゃ", romaji: "hya", hint: "හ්‍යා ශබ්දය (hya)" },
        { id: "c_hyu", kana: "ひゅ", romaji: "hyu", hint: "හ්‍යූ ශබ්දය (hyu)" },
        { id: "c_hyo", kana: "ひょ", romaji: "hyo", hint: "හ්‍යෝ ශබ්දය (hyo)" },
        { id: "c_mya", kana: "みゃ", romaji: "mya", hint: "ම්‍යා ශබ්දය (mya)" },
        { id: "c_myu", kana: "みゅ", romaji: "myu", hint: "ම්‍යූ ශබ්දය (myu)" },
        { id: "c_myo", kana: "みょ", romaji: "myo", hint: "ම්‍යෝ ශබ්දය (myo)" },
        { id: "c_rya", kana: "りゃ", romaji: "rya", hint: "ර්‍යා ශබ්දය (rya)" },
        { id: "c_ryu", kana: "りゅ", romaji: "ryu", hint: "ර්‍යූ ශබ්දය (ryu)" },
        { id: "c_ryo", kana: "りょ", romaji: "ryo", hint: "ර්‍යෝ ශබ්දය (ryo)" },
        { id: "c_gya", kana: "ぎゃ", romaji: "gya", hint: "ග්‍යා ශබ්දය (gya)" },
        { id: "c_gyu", kana: "ぎゅ", romaji: "gyu", hint: "ග්‍යූ ශබ්දය (gyu)" },
        { id: "c_gyo", kana: "ぎょ", romaji: "gyo", hint: "ග්‍යෝ ශබ්දය (gyo)" },
        { id: "c_ja", kana: "じゃ", romaji: "ja", hint: "ජා ශබ්දය (ja)" },
        { id: "c_ju", kana: "じゅ", romaji: "ju", hint: "ජූ ශබ්දය (ju)" },
        { id: "c_jo", kana: "じょ", romaji: "jo", hint: "ජෝ ශබ්දය (jo)" },
        { id: "c_bya", kana: "びゃ", romaji: "bya", hint: "බ්‍යා ශබ්දය (bya)" },
        { id: "c_byu", kana: "びゅ", romaji: "byu", hint: "බ්‍යූ ශබ්දය (byu)" },
        { id: "c_byo", kana: "びょ", romaji: "byo", hint: "බ්‍යෝ ශබ්දය (byo)" },
        { id: "c_pya", kana: "ぴゃ", romaji: "pya", hint: "ප්‍යා ශබ්දය (pya)" },
        { id: "c_pyu", kana: "ぴゅ", romaji: "pyu", hint: "ප්‍යූ ශබ්දය (pyu)" },
        { id: "c_pyo", kana: "ぴょ", romaji: "pyo", hint: "ප්‍යෝ ශබ්දය (pyo)" }
    ],
    // 8. වාක්‍ය ගොඩනැගීමේ දත්ත (Sentence Builder Data) - JFT Standard
    sentenceBuilderData: {
        subjects: [
            { jp: "わたし", si: "මම" },
            { jp: "ともだち", si: "යාළුවා" },
            { jp: "こども", si: "ළමයා" },
            { jp: "せんせい", si: "ගුරුවරයා" },
            { jp: "がくせい", si: "ශිෂ්‍යයා" },
            { jp: "やまださん", si: "යමදා මහතා" }
        ],
        objects: [
            { jp: "ごはん", si: "බත්", verb: "たべます" },
            { jp: "すし", si: "සුෂි", verb: "たべます" },
            { jp: "みず", si: "වතුර", verb: "のみます" },
            { jp: "おちゃ", si: "ග්‍රීන් ටී", verb: "のみます" },
            { jp: "こうちゃ", si: "තේ", verb: "のみます" },
            { jp: "ほん", si: "පොත", verb: "よみます" },
            { jp: "しんぶん", si: "පත්තරය", verb: "よみます" },
            { jp: "テレビ", si: "ටීවී එක", verb: "みます" },
            { jp: "かばん", si: "බෑග් එක", verb: "かいます" },
            { jp: "にほんご", si: "ජපන් භාෂාව", verb: "はなします", particle: "で" }
        ],
        verbs: [
            { jp: "たべます", si: "කනවා", hint: "තද බෙලි" },
            { jp: "のみます", si: "බොනවා", hint: "නොදා මිල්ක්" },
            { jp: "よみます", si: "කියවනවා", hint: "යොදමින් මස්" },
            { jp: "みます", si: "බලනවා", hint: "මිල බලනවා" },
            { jp: "かいます", si: "මිලදී ගන්නවා", hint: "සල්ලි කයි ෂොපින්" },
            { jp: "かきます", si: "ලියනවා", hint: "කයන්නයි කියන්නයි ලියනවා" },
            { jp: "ききます", si: "අහනවා", hint: "කන් දෙකෙන් (කී කී) අහනවා" },
            { jp: "はなします", si: "කතා කරනවා", hint: "හදන්න නව ෂිප්" }
        ]
    },
    // 9. වාක්‍ය ආකෘති සහ තාර්කික වචන ගබඩාව (100+ Words with Mnemonics)
    sentencePatterns: [
        { formula: "[උක්තය] は [කර්මය] を [ක්‍රියාපදය]", exampleJp: "わたし は すし を たべます。", exampleSi: "මම සුෂි කනවා." },
        { formula: "[උක්තය] は [ස්ථානය] に [ක්‍රියාපදය]", exampleJp: "こども は がっこう に いきます。", exampleSi: "ළමයා පාසලට යනවා." },
        { formula: "[උක්තය] は [ස්ථානය] で [ක්‍රියාව]", exampleJp: "やまださん は かいしゃ で はたらきます。", exampleSi: "යමදා මහතා සමාගමේ වැඩ කරනවා." },
        { formula: "වාක්‍යය අවසානයට 'か' එක් කිරීමෙන්", exampleJp: "コーヒー を のみます か。", exampleSi: "කෝපි බොනවද?" }
    ],
    // 10. ද්විත්ව ව්‍යංජන (Double Consonants - Sokuon)
    doubleConsonants: [
        { word: "ざっし", romaji: "zasshi", meaning: "සඟරාව", type: "hiragana", hint: "කුඩා っ මගින් ඊළඟ අකුරේ 's' ශබ්දය දෙගුණ කරයි." },
        { word: "きっぷ", romaji: "kippu", meaning: "ටිකට් පත", type: "hiragana", hint: "きつぷ (Kitsupu) නොවේ, きっぷ (Kippu) ලෙස ශබ්ද වේ." },
        { word: "がっこう", romaji: "gakkou", meaning: "පාසල", type: "hiragana", hint: "が+っ+こ+う -> gakkou (k ශබ්දය දෙගුණ වේ)" },
        { word: "ベッド", romaji: "beddo", meaning: "ඇඳ", type: "katakana", hint: "කුඩා ッ මගින් 'd' ශබ්දය දෙගුණ කරයි." },
        { word: "カップ", romaji: "kappu", meaning: "කෝප්පය", type: "katakana", hint: "カ+ッ+プ -> kappu (p ශබ්දය දෙගුණ වේ)" },
        { word: "チケット", romaji: "chiketto", meaning: "ටිකට් එක", type: "katakana", hint: "チ+ケ+ッ+ト -> chiketto (t ශබ්දය දෙගුණ වේ)" }
    ],
    // 11. කතකන දීර්ඝ ස්වර (Katakana Long Vowels)
    kataLongVowels: [
        { word: "コーヒー", romaji: "koohii", meaning: "කෝපි", hint: "コ + ー + ヒ + ー" },
        { word: "スーパー", romaji: "suupaa", meaning: "සුපිරි වෙළඳසැල", hint: "ス + ー + パ + ー" },
        { word: "ケーキ", romaji: "keeki", meaning: "කේක්", hint: "ケ + ー + キ" },
        { word: "タクシー", romaji: "takushii", meaning: "ටැක්සිය", hint: "タ + ク + シ + ー" },
        { word: "ノート", romaji: "nooto", meaning: "සටහන් පොත", hint: "ノ + ー + ト" },
        { word: "ジュース", romaji: "juusu", meaning: "ජූස් (පලතුරු යුෂ)", hint: "ジュ + ー + ス" }
    ],
    // 12. නව අක්ෂර (Extended Katakana - Foreign Sounds)
    extendedKatakana: [
        { id: "ex_v", group: "V ශබ්ද (V sounds)", chars: [
            { kana: "ヴァ", romaji: "va", hint: "ウ අකුරට කුඩා ァ" },
            { kana: "ヴィ", romaji: "vi", hint: "ウ අකුරට කුඩා ィ" },
            { kana: "ヴ", romaji: "vu", hint: "ウ අකුරට තිත් දෙකක්" },
            { kana: "ヴェ", romaji: "ve", hint: "ウ අකුරට කුඩා ェ" },
            { kana: "ヴォ", romaji: "vo", hint: "ウ අකුරට කුඩා ォ" }
        ]},
        { id: "ex_w", group: "W ශබ්ද (W sounds)", chars: [
            { kana: "ウィ", romaji: "wi", hint: "ウ අකුරට කුඩා ィ" },
            { kana: "ウェ", romaji: "we", hint: "ウ අකුරට කුඩා ェ" },
            { kana: "ウォ", romaji: "wo", hint: "ウ අකුරට කුඩා ォ" }
        ]},
        { id: "ex_f", group: "F ශබ්ද (F sounds)", chars: [
            { kana: "ファ", romaji: "fa", hint: "フ අකුරට කුඩා ァ" },
            { kana: "フィ", romaji: "fi", hint: "フ අකුරට කුඩා ィ" },
            { kana: "フェ", romaji: "fe", hint: "フ අකුරට කුඩා ェ" },
            { kana: "フォ", romaji: "fo", hint: "フ අකුරට කුඩා ォ" }
        ]},
        { id: "ex_td", group: "T / D / Ch / Sh / J ශබ්ද", chars: [
            { kana: "ティ", romaji: "ti", hint: "テ අකුරට කුඩා ィ" },
            { kana: "トゥ", romaji: "tu", hint: "ト අකුරට කුඩා ゥ" },
            { kana: "ディ", romaji: "di", hint: "デ අකුරට කුඩා ィ" },
            { kana: "ドゥ", romaji: "du", hint: "ド අකුරට කුඩා ゥ" },
            { kana: "シェ", romaji: "she", hint: "シ අකුරට කුඩා ェ" },
            { kana: "チェ", romaji: "che", hint: "チ අකුරට කුඩා ェ" },
            { kana: "ジェ", romaji: "je", hint: "ジ අකුරට කුඩා ェ" }
        ]}
    ],

    structuredVocabWithHints: [
        {
            title: "🏃 ක්‍රියාපද (Verbs - 20)",
            words: [
                { jp: "たべます", kana: "たべます", si: "කනවා", hint: "කනවා තද බෙලි" },
                { jp: "のみます", kana: "のみます", si: "බොනවා", hint: "බොනවා නොදා මිල්ක්" },
                { jp: "みます", kana: "みます", si: "බලනවා", hint: "මිල බලනවා" },
                { jp: "よみます", kana: "よみます", si: "කියවනවා", hint: "යොදමින් මස් කියවනවා" },
                { jp: "はなします", kana: "はなします", si: "කතා කරනවා", hint: "හදන්න නව ෂිප්" },
                { jp: "かきます", kana: "かきます", si: "ලියනවා", hint: "කයන්නයි කියන්නයි ලියනවා" },
                { jp: "ききます", kana: "ききます", si: "අහනවා", hint: "කන් (කී කී) දෙකෙන් අහනවා" },
                { jp: "かいます", kana: "かいます", si: "මිලදී ගන්නවා", hint: "සල්ලි කයි ෂොපින්" },
                { jp: "いきます", kana: "いきます", si: "යනවා", hint: "ඉක්මනට (ඉකි) යනවා" },
                { jp: "きます", kana: "きます", si: "එනවා", hint: "කීයක් මස් අරන් එනවද? (කීමස්)" },
                { jp: "かえります", kana: "かえります", si: "ගෙදර යනවා", hint: "කාරෙකේ ගෙදර යනවා (කාඑරි)" },
                { jp: "おきます", kana: "おきます", si: "අවදි වෙනවා", hint: "ඕකිට නැගිටින්න කියන්න (ඔකි)" },
                { jp: "ねます", kana: "ねます", si: "නිදාගන්නවා", hint: "නෙළුම් මලක් වගේ නිදාගන්නවා" },
                { jp: "はたらきます", kana: "はたらきます", si: "වැඩ කරනවා", hint: "හතරටත් (හතරකි) වැඩ කරනවා" },
                { jp: "やすみます", kana: "やすみます", si: "විවේක ගන්නවා", hint: "යසට නිදාගෙන විවේක ගන්නවා (යසුමි)" },
                { jp: "あそびます", kana: "あそびます", si: "සෙල්ලම් කරනවා", hint: "අසෝක මල් කඩමින් සෙල්ලම් කරනවා" },
                { jp: "あいます", kana: "あいます", si: "හමුවෙනවා", hint: "ආයි හමුවෙමු (ආයිමස්)" },
                { jp: "わかります", kana: "わかります", si: "තේරෙනවා", hint: "වක්කඩ කැඩුවා වගේ තේරෙනවා (වකරි)" },
                { jp: "まちます", kana: "まちます", si: "බලා සිටිනවා", hint: "මචං එනකන් බලා සිටිනවා (මචි)" },
                { jp: "もちます", kana: "もちます", si: "අල්ලාගෙන සිටිනවා", hint: "මෝචි කෑම අල්ලාගෙන සිටිනවා (මොචි)" }
            ]
        },
        {
            title: "🍎 ආහාර සහ බීම (Food & Drinks - 20)",
            words: [
                { jp: "ごはん", kana: "ごはん", si: "බත්", hint: "ගොහින් බත් කමු (ගොහං)" },
                { jp: "パン", kana: "パン", si: "පාන්", hint: "සිංහල පාන් මයි" },
                { jp: "にく", kana: "にく", si: "මස්", hint: "නිකම්ම මස් කනවා (නික්)" },
                { jp: "さかな", kana: "さかな", si: "මාළු", hint: "සාක්කුවේ මාළු (සකන)" },
                { jp: "たまご", kana: "たまご", si: "බිත්තර", hint: "තම්බපු ගෝවා එක්ක බිත්තර (තමගො)" },
                { jp: "やさい", kana: "やさい", si: "එළවළු", hint: "යා සයිස් එළවළු (යසයි)" },
                { jp: "くだもの", kana: "くだもの", si: "පළතුරු", hint: "කුඩා මොනරෙක් පළතුරු කනවා (කුඩමොනො)" },
                { jp: "りんご", kana: "りんご", si: "ඇපල්", hint: "රිංගලා ඇපල් කඩනවා (රිංගො)" },
                { jp: "みかん", kana: "みかん", si: "දොඩම්", hint: "මී කන් වගේ දොඩම් (මිකන්)" },
                { jp: "みず", kana: "みず", si: "වතුර", hint: "මිදුලේ වතුර (මිසු)" },
                { jp: "おちゃ", kana: "おちゃ", si: "ග්‍රීන් ටී", hint: "ඔච්චර ග්‍රීන් ටී බොන්න එපා" },
                { jp: "こうちゃ", kana: "こうちゃ", si: "තේ / ප්ලේන්ටි", hint: "කෝච්චියේදි බොන ප්ලේන්ටි (කෝචා)" },
                { jp: "ぎゅうにゅう", kana: "ぎゅうにゅう", si: "කිරි", hint: "ගවයාගෙන් කිරි (ගියූනියූ)" },
                { jp: "ジュース", kana: "ジュース", si: "ජූස් (පලතුරු යුෂ)", hint: "සිංහල ජූස් මයි" },
                { jp: "ビール", kana: "ビール", si: "බියර්", hint: "සිංහල බියර් මයි" },
                { jp: "おさけ", kana: "おさけ", si: "මත්පැන්", hint: "සාකේ (ජපන් බීම)" },
                { jp: "おかし", kana: "おかし", si: "පැණිරස කෑම", hint: "ඕක ශි කන්න එපා (ඔකශි)" },
                { jp: "ケーキ", kana: "ケーキ", si: "කේක්", hint: "සිංහල කේක් මයි" },
                { jp: "アイスクリーム", kana: "アイスクリーム", si: "අයිස්ක්‍රීම්", hint: "සිංහල අයිස්ක්‍රීම් මයි" },
                { jp: "りょうり", kana: "りょうり", si: "ඉවුම් පිහුම්", hint: "රියෝ (රියෝ) හෝටලේ ඉවුම් පිහුම්" }
            ]
        },
        {
            title: "🏫 ස්ථාන (Places - 15)",
            words: [
                { jp: "がっこう", kana: "がっこう", si: "පාසල", hint: "ගක්කෝ? ඉස්කෝලේ (ගක්කො)" },
                { jp: "ぎんこう", kana: "ぎんこう", si: "බැංකුව", hint: "ගිණුම තියෙන්නේ බැංකුවේ (ගින්කො)" },
                { jp: "えき", kana: "えき", si: "දුම්රිය ස්ථානය", hint: "ඒකී ස්ටේෂන් එකේ (එකි)" },
                { jp: "びょういん", kana: "びょういん", si: "රෝහල", hint: "බියෙන් ඉන්නේ රෝහලේ (බියෝ-ඉන්)" },
                { jp: "ゆうびんきょく", kana: "ゆうびんきょく", si: "තැපැල් කන්තෝරුව", hint: "යූබින් (Post) කෝ?" },
                { jp: "スーパー", kana: "スーパー", si: "සුපිරි වෙළඳසැල", hint: "සුපර් මාර්කට්" },
                { jp: "デパート", kana: "デパート", si: "දෙපාර්තමේන්තු ගබඩාව", hint: "ඩිපාර්ට්මන්ට් ස්ටෝර්" },
                { jp: "うち", kana: "うち", si: "නිවස / අපේ ගෙදර", hint: "උචි (අපේ) ගෙදර" },
                { jp: "へや", kana: "へや", si: "කාමරය", hint: "හෙයා (Hair) කපන්නේ කාමරේ (හෙයා)" },
                { jp: "トイレ", kana: "トイレ", si: "වැසිකිළිය", hint: "ටොයිලට්" },
                { jp: "おふろ", kana: "おふろ", si: "නාන කාමරය", hint: "ඔෆ් (off) වෙලා නාන කාමරයට යනවා" },
                { jp: "しょくどう", kana: "しょくどう", si: "කෑම කාමරය", hint: "ෂොක් වෙලා කෑම කාමරේ දුවනවා" },
                { jp: "じむしょ", kana: "じむしょ", si: "කාර්යාලය", hint: "ජිම් එකක් වගේ ඔෆිස් එකක් (ජිමුෂො)" },
                { jp: "かいしゃ", kana: "かいしゃ", si: "සමාගම", hint: "කයිෂා සමාගම" },
                { jp: "こうえん", kana: "こうえん", si: "උද්‍යානය", hint: "කෝ එන්න පාර්ක් එකට (කෝඑන්)" }
            ]
        },
        {
            title: "🎒 එදිනෙදා දේවල් (Daily Items - 20)",
            words: [
                { jp: "ほん", kana: "ほん", si: "පොත", hint: "හොන් (හෝන්) ගහනවා පොතේ" },
                { jp: "じしょ", kana: "じしょ", si: "ශබ්දකෝෂය", hint: "ජී ෂෝ එකේ ශබ්දකෝෂය" },
                { jp: "ざっし", kana: "ざっし", si: "සඟරාව", hint: "සඟරාවකින් ගසනවා (සස්ශි)" },
                { jp: "しんぶん", kana: "しんぶん", si: "පත්තරය", hint: "ෂින් (සිංහල) බුන් (පත්තර)" },
                { jp: "ノート", kana: "ノート", si: "නෝට් පොත", hint: "නෝට් (Note)" },
                { jp: "てちょう", kana: "てちょう", si: "සාක්කු පොත", hint: "ටීචර්ගේ සාක්කු පොත (ටෙචෝ)" },
                { jp: "めいし", kana: "めいし", si: "ව්‍යාපාරික කාඩ්පත", hint: "මේ ඉෂි (මේක) මගේ කාඩ් එක" },
                { jp: "えんぴつ", kana: "えんぴつ", si: "පැන්සල", hint: "පැන්සල එන්පිට්සු" },
                { jp: "ボールペン", kana: "ボールペン", si: "බෝල්පොයින්ට් පෑන", hint: "බෝල් පෙන් (Ball pen)" },
                { jp: "かばん", kana: "かばん", si: "බෑගය", hint: "කබඩ් එකේ බෑග් එක (කබන්)" },
                { jp: "つくえ", kana: "つくえ", si: "මේසය", hint: "මේසය චුකුවේ" },
                { jp: "いす", kana: "いす", si: "පුටුව", hint: "ඉස්සුනා පුටුවෙන් (ඉසු)" },
                { jp: "とけい", kana: "とけい", si: "ඔරලෝසුව", hint: "ටෝකියෝ ඔරලෝසුව (ටොකෙයි)" },
                { jp: "かさ", kana: "かさ", si: "කුඩය", hint: "කසාදෙට කුඩයක් (කසා)" },
                { jp: "くるま", kana: "くるま", si: "කාර් එක", hint: "කරුම කාර් එක (කුරුම)" },
                { jp: "じてんしゃ", kana: "じてんしゃ", si: "බයිසිකලය", hint: "ජිතෙන්ෂා (බයිසිකලය)" },
                { jp: "テレビ", kana: "テレビ", si: "රූපවාහිනිය", hint: "ටීවී (තෙරෙබි)" },
                { jp: "パソコン", kana: "パソコン", si: "පරිගණකය", hint: "Personal Computer (PC)" },
                { jp: "けいたい", kana: "けいたい", si: "ජංගම දුරකථනය", hint: "කේත යවන ෆෝන් එක (කෙයිතායි)" },
                { jp: "くつ", kana: "くつ", si: "සපත්තු", hint: "කුණු ගෑවුණ සපත්තු (කුත්සු)" }
            ]
        },
        
        {
            title: "⏰ කාලය (Time Expressions - 15)",
            words: [
                { jp: "きょう", kana: "きょう", si: "අද", hint: "කියෝ (අද)" },
                { jp: "あした", kana: "あした", si: "හෙට", hint: "ආශිත (හෙට)" },
                { jp: "きのう", kana: "きのう", si: "ඊයේ", hint: "කිනෝ (ඊයේ)" },
                { jp: "いま", kana: "いま", si: "දැන්", hint: "ඉමා (දැන්ම එන්න)" },
                { jp: "あさ", kana: "あさ", si: "උදේ", hint: "ආසා හිතෙන උදෑසනක්" },
                { jp: "ひる", kana: "ひる", si: "දවල්", hint: "හිරු පායනවා දවල්ට" },
                { jp: "よる", kana: "よる", si: "රෑ", hint: "යොරු (රෑ)" },
                { jp: "ばん", kana: "ばん", si: "සවස", hint: "බෑන් (Ban) කරනවා සවසට" },
                { jp: "まいにち", kana: "まいにち", si: "හැමදාම", hint: "මයි නිචි (හැමදාම)" },
                { jp: "まいあさ", kana: "まいあさ", si: "හැම උදේකම", hint: "මයි ආසා" },
                { jp: "まいばん", kana: "まいばん", si: "හැම සවසකම", hint: "මයි බෑන්" },
                { jp: "じかん", kana: "じかん", si: "කාලය / පැය", hint: "ජිකන්" },
                { jp: "ふん", kana: "ふん", si: "විනාඩිය", hint: "ෆුන් (Fun) විනාඩියක්" },
                { jp: "げつようび", kana: "げつようび", si: "සඳුදා", hint: "ගෙට්සු (සඳුදා)" },
                { jp: "にちようび", kana: "にちようび", si: "ඉරිදා", hint: "නිචි (ඉරිදා නිවාඩුයි)" }
            ]
        },
        {
            title: "🌟 විශේෂණ පද (Adjectives - 15)",
            words: [
                { jp: "おおきい", kana: "おおきい", si: "විශාල", hint: "ඕකී ලොකුයි (ඕකී)" },
                { jp: "ちいさい", kana: "ちいさい", si: "කුඩා", hint: "චී සයිස් කුඩායි (චීසයි)" },
                { jp: "たかい", kana: "たかい", si: "උස / මිල අධික", hint: "ටකරං ගණන් (ටකයි)" },
                { jp: "やすい", kana: "やすい", si: "ලාභයි", hint: "යා සුයි (ලාබයි)" },
                { jp: "あたらしい", kana: "あたらしい", si: "අලුත්", hint: "අතරශී (අලුත්)" },
                { jp: "ふるい", kana: "ふるい", si: "පරණ", hint: "ෆුරූයි (පරණ)" },
                { jp: "いい", kana: "いい", si: "හොඳ", hint: "ඊ (හොඳයි)" },
                { jp: "わるい", kana: "わるい", si: "නරක", hint: "වරුණ නරකයි (වරුයි)" },
                { jp: "あつい", kana: "あつい", si: "රස්නෙ", hint: "අත පිච්චෙනවා (අත් සුයි)" },
                { jp: "さむい", kana: "さむい", si: "සීතල", hint: "සාමුවා සීතලයි (සාමුයි)" },
                { jp: "おいしい", kana: "おいしい", si: "රසවත්", hint: "ඔයිශි (රසයි)" },
                { jp: "いそがしい", kana: "いそがしい", si: "කාර්යබහුල", hint: "ඉසොගශී (කාර්යබහුලයි)" },
                { jp: "ひま", kana: "ひま", si: "නිදහස් (වෙලාව)", hint: "හිමා නිදහසේ ඉන්නවා" },
                { jp: "きれい", kana: "きれい", si: "ලස්සන / පිරිසිදු", hint: "කිරේයි (ලස්සනයි)" },
                { jp: "しずか", kana: "しずか", si: "නිහඬ", hint: "ෂිසුකා නිහඬයි" }
            ]
        }
    ]
};