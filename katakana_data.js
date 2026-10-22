const katakanaData = {
    rows: [
        { id: "row1", name: "ア行 (a, i, u, e, o)", chars: [
            { kana: "ア", romaji: "a", hint: "අයිස්ක්‍රීම් (Ice cream) එකක්" }, 
            { kana: "イ", romaji: "i", hint: "ඊගල් (Eagle) කෙනෙක් බිමට එනවා" }, 
            { kana: "ウ", romaji: "u", hint: "උකුස්සාගේ හොටක්" }, 
            { kana: "エ", romaji: "e", hint: "Elevator (විදුලි සෝපානය) දොරක්" }, 
            { kana: "オ", romaji: "o", hint: "ඔපෙරා ගායකයෙක් අත් විහිදාගෙන" }
        ]},
        { id: "row2", name: "カ行 (ka, ki, ku, ke, ko)", chars: [
            { kana: "カ", romaji: "ka", hint: "හිරගනා 'か' අකුර (තිත නැත)" }, 
            { kana: "キ", romaji: "ki", hint: "යතුරක් (Key) වගේ" }, 
            { kana: "ク", romaji: "ku", hint: "කුකුළෙක්ගේ හොටක්" }, 
            { kana: "ケ", romaji: "ke", hint: "කෙසෙල් ගහක්" }, 
            { kana: "コ", romaji: "ko", hint: "කොටුවක (Square) කෑලි 2ක්" }
        ]},
        { id: "row3", name: "サ行 (sa, shi, su, se, so)", chars: [
            { kana: "サ", romaji: "sa", hint: "සැමන් (Salmon) මාළුවෙක්" }, 
            { kana: "シ", romaji: "shi", hint: "ශි (She) කෙල්ලෙක් හිනාවෙනවා (යටින් උඩට)" }, 
            { kana: "ス", romaji: "su", hint: "සුපර්මෑන් (Superman) පියාඹනවා" }, 
            { kana: "セ", romaji: "se", hint: "හිරගනා 'せ' අකුරට සමානයි" }, 
            { kana: "ソ", romaji: "so", hint: "සෝඩා (Soda) බිංදුවක් (උඩින් යටට)" }
        ]},
        { id: "row4", name: "タ行 (ta, chi, tsu, te, to)", chars: [
            { kana: "タ", romaji: "ta", hint: "ටවර් (Tower) එකක්" }, 
            { kana: "チ", romaji: "chi", hint: "චියර් (Cheer) කරන කෙනෙක්" }, 
            { kana: "ツ", romaji: "tsu", hint: "සුනාමි (Tsunami) රළ (උඩින් යටට)" }, 
            { kana: "テ", romaji: "te", hint: "ටෙලිෆෝන් (Telephone) කණුවක්" }, 
            { kana: "ト", romaji: "to", hint: "ටෝටම් (Totem) කණුවක්" }
        ]},
        { id: "row5", name: "ナ行 (na, ni, nu, ne, no)", chars: [
            { kana: "ナ", romaji: "na", hint: "නට් (Nut) කඩන උපකරණයක්" }, 
            { kana: "ニ", romaji: "ni", hint: "ඉරි 2ක් (කන්ජි 二 ට සමානයි)" }, 
            { kana: "ヌ", romaji: "nu", hint: "නූඩ්ල්ස් කූරක්" }, 
            { kana: "ネ", romaji: "ne", hint: "නෙස්ට් (Nest) එකක්" }, 
            { kana: "ノ", romaji: "no", hint: "නෝස් (Nose / නහය) එකක්" }
        ]},
        { id: "row6", name: "ハ行 (ha, hi, fu, he, ho)", chars: [
            { kana: "ハ", romaji: "ha", hint: "හට් (Hut / පැලක්) වහලයක්" }, 
            { kana: "ヒ", romaji: "hi", hint: "හීල් (Heel) එකක්" }, 
            { kana: "フ", romaji: "fu", hint: "ෆ්ලැග් (Flag / කොඩියක්)" }, 
            { kana: "ヘ", romaji: "he", hint: "හිරගනා 'へ' අකුරට සමානයි" }, 
            { kana: "ホ", romaji: "ho", hint: "හෝලි (Holy) කුරුසයක්" }
        ]},
        { id: "row7", name: "マ行 (ma, mi, mu, me, mo)", chars: [
            { kana: "マ", romaji: "ma", hint: "මාර්ටිනි (Martini) වීදුරුවක්" }, 
            { kana: "ミ", romaji: "mi", hint: "මිසයිල (Missile) තුනක්" }, 
            { kana: "ム", romaji: "mu", hint: "මූස් (Moose) ගොනෙක්ගෙ අං" }, 
            { kana: "メ", romaji: "me", hint: "මෙඩල් (Medal) එකක්" }, 
            { kana: "モ", romaji: "mo", hint: "මොනිටර් (Monitor) එකක්" }
        ]},
        { id: "row8", name: "ヤ行 (ya, yu, yo)", chars: [
            { kana: "ヤ", romaji: "ya", hint: "හිරගනා 'や' අකුරට සමානයි" }, 
            { kana: "ユ", romaji: "yu", hint: "යූ ටර්න් (U-Turn) එකක්" }, 
            { kana: "ヨ", romaji: "yo", hint: "යෝගා (Yoga) කරන කෙනෙක්" }
        ]},
        { id: "row9", name: "ラ行 (ra, ri, ru, re, ro)", chars: [
            { kana: "ラ", romaji: "ra", hint: "රෆ් (Rough) මුහුදක්" }, 
            { kana: "リ", romaji: "ri", hint: "හිරගනා 'り' අකුරට සමානයි" }, 
            { kana: "ル", romaji: "ru", hint: "රූට් (Root) දෙකක්" }, 
            { kana: "レ", romaji: "re", hint: "රෙස්ට් (Rest) ගන්න කෙනෙක්" }, 
            { kana: "ロ", romaji: "ro", hint: "රෝල් (Roll / කොටුවක්) එකක්" }
        ]},
        { id: "row10", name: "ワ行 / ン (wa, wo, n)", chars: [
            { kana: "ワ", romaji: "wa", hint: "වයින් (Wine) වීදුරුවක්" }, 
            { kana: "ヲ", romaji: "wo", hint: "වෝටර් (Water) බොන කෙනෙක්" }, 
            { kana: "ン", romaji: "n", hint: "එන් (N) ශබ්දය (යටින් උඩට)" }
        ]},
        { id: "row11", name: "ガ行 (ga, gi, gu, ge, go)", chars: [
            { kana: "ガ", romaji: "ga", hint: "カ ට තිත් දෙකක්" }, { kana: "ギ", romaji: "gi", hint: "キ ට තිත් දෙකක්" }, 
            { kana: "グ", romaji: "gu", hint: "ク ට තිත් දෙකක්" }, { kana: "ゲ", romaji: "ge", hint: "ケ ට තිත් දෙකක්" }, 
            { kana: "ゴ", romaji: "go", hint: "コ ට තිත් දෙකක්" }
        ]},
        { id: "row12", name: "ザ行 (za, ji, zu, ze, zo)", chars: [
            { kana: "ザ", romaji: "za", hint: "サ ට තිත් දෙකක්" }, { kana: "ジ", romaji: "ji", hint: "シ ට තිත් දෙකක්" }, 
            { kana: "ズ", romaji: "zu", hint: "ス ට තිත් දෙකක්" }, { kana: "ゼ", romaji: "ze", hint: "セ ට තිත් දෙකක්" }, 
            { kana: "ゾ", romaji: "zo", hint: "ソ ට තිත් දෙකක්" }
        ]},
        { id: "row13", name: "ダ行 (da, ji, zu, de, do)", chars: [
            { kana: "ダ", romaji: "da", hint: "タ ට තිත් දෙකක්" }, { kana: "ヂ", romaji: "ji", hint: "チ ට තිත් දෙකක්" }, 
            { kana: "ヅ", romaji: "zu", hint: "ツ ට තිත් දෙකක්" }, { kana: "デ", romaji: "de", hint: "テ ට තිත් දෙකක්" }, 
            { kana: "ド", romaji: "do", hint: "ト ට තිත් දෙකක්" }
        ]},
        { id: "row14", name: "バ行 (ba, bi, bu, be, bo)", chars: [
            { kana: "バ", romaji: "ba", hint: "ハ ට තිත් දෙකක්" }, { kana: "ビ", romaji: "bi", hint: "ヒ ට තිත් දෙකක්" }, 
            { kana: "ブ", romaji: "bu", hint: "フ ට තිත් දෙකක්" }, { kana: "ベ", romaji: "be", hint: "ヘ ට තිත් දෙකක්" }, 
            { kana: "ボ", romaji: "bo", hint: "ホ ට තිත් දෙකක්" }
        ]},
        { id: "row15", name: "パ行 (pa, pi, pu, pe, po)", chars: [
            { kana: "パ", romaji: "pa", hint: "ハ ට රවුමක් (maru)" }, { kana: "ピ", romaji: "pi", hint: "ヒ ට රවුමක්" }, 
            { kana: "プ", romaji: "pu", hint: "フ ට රවුමක්" }, { kana: "ペ", romaji: "pe", hint: "ヘ ට රවුමක්" }, 
            { kana: "ポ", romaji: "po", hint: "ホ ට රවුමක්" }
        ]},
        { id: "row16", name: "キャ・シャ・チャ行", chars: [
            { kana: "キャ", romaji: "kya", hint: "ක්‍යා (kya)" }, { kana: "キュ", romaji: "kyu", hint: "ක්‍යූ (kyu)" }, { kana: "キョ", romaji: "kyo", hint: "ක්‍යෝ (kyo)" },
            { kana: "シャ", romaji: "sha", hint: "ෂා (sha)" }, { kana: "シュ", romaji: "shu", hint: "ෂූ (shu)" }, { kana: "ショ", romaji: "sho", hint: "ෂෝ (sho)" },
            { kana: "チャ", romaji: "cha", hint: "චා (cha)" }, { kana: "チュ", romaji: "chu", hint: "චූ (chu)" }, { kana: "チョ", romaji: "cho", hint: "චෝ (cho)" }
        ]},
        { id: "row17", name: "ニャ・ヒャ・ミャ・リャ行", chars: [
            { kana: "ニャ", romaji: "nya", hint: "ඤා (nya)" }, { kana: "ニュ", romaji: "nyu", hint: "ඤූ (nyu)" }, { kana: "ニョ", romaji: "nyo", hint: "ඤෝ (nyo)" },
            { kana: "ヒャ", romaji: "hya", hint: "හ්‍යා (hya)" }, { kana: "ヒュ", romaji: "hyu", hint: "හ්‍යූ (hyu)" }, { kana: "ヒョ", romaji: "hyo", hint: "හ්‍යෝ (hyo)" },
            { kana: "ミャ", romaji: "mya", hint: "ම්‍යා (mya)" }, { kana: "ミュ", romaji: "myu", hint: "ම්‍යූ (myu)" }, { kana: "ミョ", romaji: "myo", hint: "ම්‍යෝ (myo)" },
            { kana: "リャ", romaji: "rya", hint: "ර්‍යා (rya)" }, { kana: "リュ", romaji: "ryu", hint: "ර්‍යූ (ryu)" }, { kana: "リョ", romaji: "ryo", hint: "ර්‍යෝ (ryo)" }
        ]},
        { id: "row18", name: "ギャ・ジャ・ビャ・ピャ行", chars: [
            { kana: "ギャ", romaji: "gya", hint: "ග්‍යා (gya)" }, { kana: "ギュ", romaji: "gyu", hint: "ග්‍යූ (gyu)" }, { kana: "ギョ", romaji: "gyo", hint: "ග්‍යෝ (gyo)" },
            { kana: "ジャ", romaji: "ja", hint: "ජා (ja)" }, { kana: "ジュ", romaji: "ju", hint: "ජූ (ju)" }, { kana: "ジョ", romaji: "jo", hint: "ජෝ (jo)" },
            { kana: "ビャ", romaji: "bya", hint: "බ්‍යා (bya)" }, { kana: "ビュ", romaji: "byu", hint: "බ්‍යූ (byu)" }, { kana: "ビョ", romaji: "byo", hint: "බ්‍යෝ (byo)" },
            { kana: "ピャ", romaji: "pya", hint: "ප්‍යා (pya)" }, { kana: "ピュ", romaji: "pyu", hint: "ප්‍යූ (pyu)" }, { kana: "ピョ", romaji: "pyo", hint: "ප්‍යෝ (pyo)" }
        ]}
    ]
};