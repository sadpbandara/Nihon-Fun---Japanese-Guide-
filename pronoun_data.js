const pronounQuestions = [
    {
        "ID": 1,
        "Level": "Easy",
        "Pronoun": "これ",
        "Sentence_JP": "これは いくらですか。",
        "Sentence_Romaji": "Kore wa ikura desu ka.",
        "Sentence_SI": "මේක කීයද?",
        "Question_JP": "___ は いくらですか。",
        "Options": "どれ,あれ,これ,それ"
    },
    {
        "ID": 2,
        "Level": "Easy",
        "Pronoun": "それ",
        "Sentence_JP": "それは わたしの かばんです。",
        "Sentence_Romaji": "Sore wa watashi no kaban desu.",
        "Sentence_SI": "ඒක මගේ බෑගයයි.",
        "Question_JP": "___ は わたしの かばんです。",
        "Options": "それ,あれ,これ,どれ"
    },
    {
        "ID": 3,
        "Level": "Easy",
        "Pronoun": "あれ",
        "Sentence_JP": "あれは 富士山（ふじさん）です。",
        "Sentence_Romaji": "Are wa Fujisan desu.",
        "Sentence_SI": "අරක ෆුජි කන්දයි.",
        "Question_JP": "___ は 富士山（ふじさん）です。",
        "Options": "それ,これ,あれ,どれ"
    },
    {
        "ID": 4,
        "Level": "Easy",
        "Pronoun": "どれ",
        "Sentence_JP": "あなたの スマホは どれですか。",
        "Sentence_Romaji": "Anata no sumaho wa dore desu ka.",
        "Sentence_SI": "ඔබේ ස්මාර්ට් ජංගම දුරකථනය කොයි එකද?",
        "Question_JP": "あなたの スマホは ___ ですか。",
        "Options": "どれ,あれ,それ,これ"
    },
    {
        "ID": 5,
        "Level": "Easy",
        "Pronoun": "これ",
        "Sentence_JP": "これは 日本（にほん）のお土産（みやげ）です。",
        "Sentence_Romaji": "Kore wa Nihon no omiyage desu.",
        "Sentence_SI": "මේක ජපානයේ සිහිවටනයක්.",
        "Question_JP": "___ は 日本（にほん）のお土産（みやげ）です。",
        "Options": "それ,どれ,これ,あれ"
    },
    {
        "ID": 6,
        "Level": "Easy",
        "Pronoun": "それ",
        "Sentence_JP": "それは 何（なん）の 雑誌（ざっし）ですか。",
        "Sentence_Romaji": "Sore wa nan no zasshi desu ka.",
        "Sentence_SI": "ඒක මොන සඟරාවද?",
        "Question_JP": "___ は 何（なん）の 雑誌（ざっし）ですか。",
        "Options": "これ,あれ,それ,どれ"
    },
    {
        "ID": 7,
        "Level": "Easy",
        "Pronoun": "あれ",
        "Sentence_JP": "あれは 日本語（にほんご）の 辞書（じしょ）です。",
        "Sentence_Romaji": "Are wa nihongo no jisho desu.",
        "Sentence_SI": "අරක ජපන් භාෂා ශබ්දකෝෂයකි.",
        "Question_JP": "___ は 日本語（にほんご）の 辞書（じしょ）です。",
        "Options": "それ,これ,あれ,どれ"
    },
    {
        "ID": 8,
        "Level": "Easy",
        "Pronoun": "これ",
        "Sentence_JP": "これは とても おいしいです。",
        "Sentence_Romaji": "Kore wa totemo oishii desu.",
        "Sentence_SI": "මේක ගොඩක් රසවත්.",
        "Question_JP": "___ は とても おいしいです。",
        "Options": "これ,あれ,どれ,それ"
    },
    {
        "ID": 9,
        "Level": "Easy",
        "Pronoun": "それ",
        "Sentence_JP": "それは 誰（だれ）の さいふ ですか。",
        "Sentence_Romaji": "Sore wa dare no saifu desu ka.",
        "Sentence_SI": "ඒක කාගේ මුදල් පසුම්බියද?",
        "Question_JP": "___ は 誰（だれ）の さいふ ですか。",
        "Options": "どれ,あれ,これ,それ"
    },
    {
        "ID": 10,
        "Level": "Easy",
        "Pronoun": "あれ",
        "Sentence_JP": "あれは わたしの パスポート ではありません。",
        "Sentence_Romaji": "Are wa watashi no pasupooto dewa arimasen.",
        "Sentence_SI": "අරක මගේ ගමන් බලපත්‍රය නෙවෙයි.",
        "Question_JP": "___ は わたしの パスポート ではありません。",
        "Options": "どれ,これ,それ,あれ"
    },
    {
        "ID": 11,
        "Level": "Easy",
        "Pronoun": "どれ",
        "Sentence_JP": "山田（やまだ）さんの 傘（かさ）は どれですか。",
        "Sentence_Romaji": "Yamada-san no kasa wa dore desu ka.",
        "Sentence_SI": "යමදා මහතාගේ කුඩය කොයි එකද?",
        "Question_JP": "山田（やまだ）さんの 傘（かさ）は ___ ですか。",
        "Options": "これ,あれ,どれ,それ"
    },
    {
        "ID": 12,
        "Level": "Easy",
        "Pronoun": "これ",
        "Sentence_JP": "これは 便利（べんり）な 切符（きっぷ）です。",
        "Sentence_Romaji": "Kore wa benri na kippu desu.",
        "Sentence_SI": "මේක පහසු ටිකට් පතක්.",
        "Question_JP": "___ は 便利（べんり）な 切符（きっぷ）です。",
        "Options": "どれ,それ,あれ,これ"
    },
    {
        "ID": 13,
        "Level": "Easy",
        "Pronoun": "それ",
        "Sentence_JP": "すみません、それを見せてください。",
        "Sentence_Romaji": "Sumimasen, sore o misete kudasai.",
        "Sentence_SI": "සමාවෙන්න, ඒක මට පෙන්වන්න.",
        "Question_JP": "すみません、___ を見せてください。",
        "Options": "あれ,これ,どれ,それ"
    },
    {
        "ID": 14,
        "Level": "Easy",
        "Pronoun": "あれ",
        "Sentence_JP": "あれは 新幹線（しんかんせん）です。",
        "Sentence_Romaji": "Are wa shinkansen desu.",
        "Sentence_SI": "අරක ෂින්කන්සෙන් (අධිවේගී දුම්රියක්) වේ.",
        "Question_JP": "___ は 新幹線（しんかんせん）です。",
        "Options": "これ,あれ,それ,どれ"
    },
    {
        "ID": 15,
        "Level": "Easy",
        "Pronoun": "これ",
        "Sentence_JP": "これは 新（あたら）しい 靴（くつ）です。",
        "Sentence_Romaji": "Kore wa atarashii kutsu desu.",
        "Sentence_SI": "මේවා අලුත් සපත්තු.",
        "Question_JP": "___ は 新（あたら）しい 靴（くつ）です。",
        "Options": "どれ,それ,これ,あれ"
    },
    {
        "ID": 16,
        "Level": "Easy",
        "Pronoun": "それ",
        "Sentence_JP": "それは スリランカの お茶（ちゃ）ですか。",
        "Sentence_Romaji": "Sore wa Suriranka no ocha desu ka.",
        "Sentence_SI": "ඒක ශ්‍රී ලංකාවේ තේද?",
        "Question_JP": "___ は スリランカの お茶（ちゃ）ですか。",
        "Options": "これ,それ,あれ,どれ"
    },
    {
        "ID": 17,
        "Level": "Easy",
        "Pronoun": "あれ",
        "Sentence_JP": "あれは 有名（ゆうめい）な お寺（てら）です。",
        "Sentence_Romaji": "Are wa yuumei na otera desu.",
        "Sentence_SI": "අරක ප්‍රසිද්ධ පන්සලක්.",
        "Question_JP": "___ は 有名（ゆうめい）な お寺（てら）です。",
        "Options": "どれ,あれ,これ,それ"
    },
    {
        "ID": 18,
        "Level": "Easy",
        "Pronoun": "どれ",
        "Sentence_JP": "一番（いちばん） 安（やす）いのは どれですか。",
        "Sentence_Romaji": "Ichiban yasui no wa dore desu ka.",
        "Sentence_SI": "වඩාත්ම ලාභ එක කොයි එකද?",
        "Question_JP": "一番（いちばん） 安（やす）いのは ___ ですか。",
        "Options": "それ,あれ,どれ,これ"
    },
    {
        "ID": 19,
        "Level": "Easy",
        "Pronoun": "これ",
        "Sentence_JP": "これは わたしが 作（つく）った ケーキです。",
        "Sentence_Romaji": "Kore wa watashi ga tsukutta keeki desu.",
        "Sentence_SI": "මේක මම හදපු කේක් එක.",
        "Question_JP": "___ は わたしが 作（つく）った ケーキです。",
        "Options": "あれ,これ,それ,どれ"
    },
    {
        "ID": 20,
        "Level": "Easy",
        "Pronoun": "それ",
        "Sentence_JP": "それは どこで 買（か）いましたか。",
        "Sentence_Romaji": "Sore wa doko de kaimashita ka.",
        "Sentence_SI": "ඒක කොහෙන්ද මිලදී ගත්තේ?",
        "Question_JP": "___ は どこで 買（か）いましたか。",
        "Options": "あれ,これ,どれ,それ"
    },
    {
        "ID": 21,
        "Level": "Easy",
        "Pronoun": "あれ",
        "Sentence_JP": "あれは わたしの 家族（かぞく）の写真（しゃしん）です。",
        "Sentence_Romaji": "Are wa watashi no kazoku no shashin desu.",
        "Sentence_SI": "අරක මගේ පවුලේ ඡායාරූපයයි.",
        "Question_JP": "___ は わたしの 家族（かぞく）の写真（しゃしん）です。",
        "Options": "あれ,これ,それ,どれ"
    },
    {
        "ID": 22,
        "Level": "Easy",
        "Pronoun": "これ",
        "Sentence_JP": "これは 無料（むりょう）ですか。",
        "Sentence_Romaji": "Kore wa muryou desu ka.",
        "Sentence_SI": "මේක නොමිලේද?",
        "Question_JP": "___ は 無料（むりょう）ですか。",
        "Options": "これ,あれ,どれ,それ"
    },
    {
        "ID": 23,
        "Level": "Easy",
        "Pronoun": "それ",
        "Sentence_JP": "それは いい アイデアですね。",
        "Sentence_Romaji": "Sore wa ii aidea desu ne.",
        "Sentence_SI": "ඒක හොඳ අදහසක් නේ.",
        "Question_JP": "___ は いい アイデアですね。",
        "Options": "それ,あれ,どれ,これ"
    },
    {
        "ID": 24,
        "Level": "Easy",
        "Pronoun": "あれ",
        "Sentence_JP": "あれは 何（なん）という 鳥（とり）ですか。",
        "Sentence_Romaji": "Are wa nan to iu tori desu ka.",
        "Sentence_SI": "අරක මොන වගේ කුරුල්ලෙක්ද?",
        "Question_JP": "___ は 何（なん）という 鳥（とり）ですか。",
        "Options": "どれ,あれ,これ,それ"
    },
    {
        "ID": 25,
        "Level": "Easy",
        "Pronoun": "どれ",
        "Sentence_JP": "おすすめは どれですか。",
        "Sentence_Romaji": "Osusume wa dore desu ka.",
        "Sentence_SI": "ඔබ නිර්දේශ කරන්නේ කොයි එකද?",
        "Question_JP": "おすすめは ___ ですか。",
        "Options": "これ,それ,あれ,どれ"
    },
    {
        "ID": 26,
        "Level": "Easy",
        "Pronoun": "これ",
        "Sentence_JP": "これは 辛（から）いですか。",
        "Sentence_Romaji": "Kore wa karai desu ka.",
        "Sentence_SI": "මේක සැරද?",
        "Question_JP": "___ は 辛（から）いですか。",
        "Options": "それ,どれ,これ,あれ"
    },
    {
        "ID": 27,
        "Level": "Easy",
        "Pronoun": "それ",
        "Sentence_JP": "それは 日本の アニメです。",
        "Sentence_Romaji": "Sore wa Nihon no anime desu.",
        "Sentence_SI": "ඒක ජපන් ඇනිමේ එකක්.",
        "Question_JP": "___ は 日本の アニメです。",
        "Options": "それ,どれ,これ,あれ"
    },
    {
        "ID": 28,
        "Level": "Easy",
        "Pronoun": "あれ",
        "Sentence_JP": "あれは わたしの 車（くるま）です。",
        "Sentence_Romaji": "Are wa watashi no kuruma desu.",
        "Sentence_SI": "අරක මගේ කාරයයි.",
        "Question_JP": "___ は わたしの 車（くるま）です。",
        "Options": "それ,あれ,これ,どれ"
    },
    {
        "ID": 29,
        "Level": "Easy",
        "Pronoun": "これ",
        "Sentence_JP": "これをお願いします。",
        "Sentence_Romaji": "Kore o onegaishimasu.",
        "Sentence_SI": "මට මේක දෙන්න (මිලදී ගැනීමේදී).",
        "Question_JP": "___ をお願いします。",
        "Options": "どれ,それ,これ,あれ"
    },
    {
        "ID": 30,
        "Level": "Easy",
        "Pronoun": "それ",
        "Sentence_JP": "それは 本当（ほんとう）ですか。",
        "Sentence_Romaji": "Sore wa hontou desu ka.",
        "Sentence_SI": "ඒක ඇත්තද?",
        "Question_JP": "___ は 本当（ほんとう）ですか。",
        "Options": "それ,あれ,これ,どれ"
    },
    {
        "ID": 31,
        "Level": "Easy",
        "Pronoun": "あれ",
        "Sentence_JP": "あれは きれいな 海（うみ）ですね。",
        "Sentence_Romaji": "Are wa kirei na umi desu ne.",
        "Sentence_SI": "අරක ලස්සන මුහුදක් නේද.",
        "Question_JP": "___ は きれいな 海（うみ）ですね。",
        "Options": "これ,あれ,それ,どれ"
    },
    {
        "ID": 32,
        "Level": "Easy",
        "Pronoun": "どれ",
        "Sentence_JP": "あなたの カバンは どれですか。",
        "Sentence_Romaji": "Anata no kaban wa dore desu ka.",
        "Sentence_SI": "ඔබේ බෑගය කොයි එකද?",
        "Question_JP": "あなたの カバンは ___ ですか。",
        "Options": "どれ,これ,あれ,それ"
    },
    {
        "ID": 33,
        "Level": "Easy",
        "Pronoun": "これ",
        "Sentence_JP": "これは 薬（くすり）です。",
        "Sentence_Romaji": "Kore wa kusuri desu.",
        "Sentence_SI": "මේක බෙහෙත්.",
        "Question_JP": "___ は 薬（くすり）です。",
        "Options": "どれ,これ,あれ,それ"
    },
    {
        "ID": 34,
        "Level": "Easy",
        "Pronoun": "それ",
        "Sentence_JP": "それ、見（み）せてください。",
        "Sentence_Romaji": "Sore, misete kudasai.",
        "Sentence_SI": "ඒක, මට පෙන්වන්න.",
        "Question_JP": "___ 、見（み）せてください。",
        "Options": "これ,どれ,あれ,それ"
    },
    {
        "ID": 35,
        "Level": "Medium",
        "Pronoun": "この",
        "Sentence_JP": "この パソコンは 新（あたら）しいです。",
        "Sentence_Romaji": "Kono pasokon wa atarashii desu.",
        "Sentence_SI": "මේ පරිගණකය අලුත්.",
        "Question_JP": "___ パソコンは 新（あたら）しいです。",
        "Options": "この,どの,あの,その"
    },
    {
        "ID": 36,
        "Level": "Medium",
        "Pronoun": "その",
        "Sentence_JP": "その 時計（とけい）は 高（たか）いですか。",
        "Sentence_Romaji": "Sono tokei wa takai desu ka.",
        "Sentence_SI": "ඒ ඔරලෝසුව ගණන් වැඩියිද?",
        "Question_JP": "___ 時計（とけい）は 高（たか）いですか。",
        "Options": "その,どの,この,あの"
    },
    {
        "ID": 37,
        "Level": "Medium",
        "Pronoun": "あの",
        "Sentence_JP": "あの 人（ひと）は 誰（だれ）ですか。",
        "Sentence_Romaji": "Ano hito wa dare desu ka.",
        "Sentence_SI": "අර පුද්ගලයා කවුද?",
        "Question_JP": "___ 人（ひと）は 誰（だれ）ですか。",
        "Options": "あの,その,この,どの"
    },
    {
        "ID": 38,
        "Level": "Medium",
        "Pronoun": "どの",
        "Sentence_JP": "どの 映画（えいが）を 見ますか。",
        "Sentence_Romaji": "Dono eiga o mimasu ka.",
        "Sentence_SI": "කොයි චිත්‍රපටයද බලන්නේ?",
        "Question_JP": "___ 映画（えいが）を 見ますか。",
        "Options": "あの,この,その,どの"
    },
    {
        "ID": 39,
        "Level": "Medium",
        "Pronoun": "この",
        "Sentence_JP": "この 料理（りょうり）は 美味（おい）しいです。",
        "Sentence_Romaji": "Kono ryouri wa oishii desu.",
        "Sentence_SI": "මේ කෑම එක රසවත්.",
        "Question_JP": "___ 料理（りょうり）は 美味（おい）しいです。",
        "Options": "あの,どの,その,この"
    },
    {
        "ID": 40,
        "Level": "Medium",
        "Pronoun": "その",
        "Sentence_JP": "その 靴（くつ）は おしゃれですね。",
        "Sentence_Romaji": "Sono kutsu wa oshare desu ne.",
        "Sentence_SI": "ඒ සපත්තු ලස්සනයි නේද.",
        "Question_JP": "___ 靴（くつ）は おしゃれですね。",
        "Options": "どの,その,あの,この"
    },
    {
        "ID": 41,
        "Level": "Medium",
        "Pronoun": "あの",
        "Sentence_JP": "あの 建物（たてもの）は 病院（びょういん）です。",
        "Sentence_Romaji": "Ano tatemono wa byouin desu.",
        "Sentence_SI": "අර ගොඩනැගිල්ල රෝහලයි.",
        "Question_JP": "___ 建物（たてもの）は 病院（びょういん）です。",
        "Options": "どの,この,あの,その"
    },
    {
        "ID": 42,
        "Level": "Medium",
        "Pronoun": "この",
        "Sentence_JP": "この りんごは 甘（あま）いです。",
        "Sentence_Romaji": "Kono ringo wa amai desu.",
        "Sentence_SI": "මේ ඇපල් ගෙඩිය පැණි රසයි.",
        "Question_JP": "___ りんごは 甘（あま）いです。",
        "Options": "あの,この,どの,その"
    },
    {
        "ID": 43,
        "Level": "Medium",
        "Pronoun": "その",
        "Sentence_JP": "その セーターは 暖（あたた）かいですか。",
        "Sentence_Romaji": "Sono seetaa wa atatakai desu ka.",
        "Sentence_SI": "ඒ ස්වීටරය උණුසුම්ද?",
        "Question_JP": "___ セーターは 暖（あたた）かいですか。",
        "Options": "その,どの,あの,この"
    },
    {
        "ID": 44,
        "Level": "Medium",
        "Pronoun": "あの",
        "Sentence_JP": "あの 店（みせ）で 昼（ひる）ごはんを 食べましょう。",
        "Sentence_Romaji": "Ano mise de hirugohan o tabemashou.",
        "Sentence_SI": "අර කඩෙන් දවල් කෑම කමු.",
        "Question_JP": "___ 店（みせ）で 昼（ひる）ごはんを 食べましょう。",
        "Options": "どの,この,その,あの"
    },
    {
        "ID": 45,
        "Level": "Medium",
        "Pronoun": "どの",
        "Sentence_JP": "どの バスが 駅（えき）に行きますか。",
        "Sentence_Romaji": "Dono basu ga eki ni ikimasu ka.",
        "Sentence_SI": "කොයි බස් එකද දුම්රිය ස්ථානයට යන්නේ?",
        "Question_JP": "___ バスが 駅（えき）に行きますか。",
        "Options": "この,どの,あの,その"
    },
    {
        "ID": 46,
        "Level": "Medium",
        "Pronoun": "この",
        "Sentence_JP": "この 本（ほん）は 面白（おもしろ）いです。",
        "Sentence_Romaji": "Kono hon wa omoshiroi desu.",
        "Sentence_SI": "මේ පොත රසවත්.",
        "Question_JP": "___ 本（ほん）は 面白（おもしろ）いです。",
        "Options": "どの,あの,この,その"
    },
    {
        "ID": 47,
        "Level": "Medium",
        "Pronoun": "その",
        "Sentence_JP": "その 辞書（じしょ）を 貸（か）してください。",
        "Sentence_Romaji": "Sono jisho o kashite kudasai.",
        "Sentence_SI": "ඒ ශබ්දකෝෂය මට ණයට දෙන්න.",
        "Question_JP": "___ 辞書（じしょ）を 貸（か）してください。",
        "Options": "あの,その,この,どの"
    },
    {
        "ID": 48,
        "Level": "Medium",
        "Pronoun": "あの",
        "Sentence_JP": "あの 先生（せんせい）は 親切（しんせつ）です。",
        "Sentence_Romaji": "Ano sensei wa shinsetsu desu.",
        "Sentence_SI": "අර ගුරුවරයා කරුණාවන්තයි.",
        "Question_JP": "___ 先生（せんせい）は 親切（しんせつ）です。",
        "Options": "あの,この,どの,その"
    },
    {
        "ID": 49,
        "Level": "Medium",
        "Pronoun": "この",
        "Sentence_JP": "この 漢字（かんじ）の 読（よ）み方（かた）を 教（おし）えてください。",
        "Sentence_Romaji": "Kono kanji no yomikata o oshiete kudasai.",
        "Sentence_SI": "මේ කන්ජි අකුර කියවන විදිහ කියන්න.",
        "Question_JP": "___ 漢字（かんじ）の 読（よ）み方（かた）を 教（おし）えてください。",
        "Options": "どの,その,あの,この"
    },
    {
        "ID": 50,
        "Level": "Medium",
        "Pronoun": "その",
        "Sentence_JP": "その ペンで 書（か）いてもいいですか。",
        "Sentence_Romaji": "Sono pen de kaite mo ii desu ka.",
        "Sentence_SI": "ඒ පෑනෙන් ලිව්වට කමක් නැද්ද?",
        "Question_JP": "___ ペンで 書（か）いてもいいですか。",
        "Options": "どの,その,あの,この"
    },
    {
        "ID": 51,
        "Level": "Medium",
        "Pronoun": "あの",
        "Sentence_JP": "あの 犬（いぬ）は 可愛い（かわいい）ですね。",
        "Sentence_Romaji": "Ano inu wa kawaii desu ne.",
        "Sentence_SI": "අර බල්ලා හුරතල් නේද.",
        "Question_JP": "___ 犬（いぬ）は 可愛い（かわいい）ですね。",
        "Options": "あの,その,どの,この"
    },
    {
        "ID": 52,
        "Level": "Medium",
        "Pronoun": "どの",
        "Sentence_JP": "どの 部屋（へや）が あなたの 部屋ですか。",
        "Sentence_Romaji": "Dono heya ga anata no heya desu ka.",
        "Sentence_SI": "කොයි කාමරයද ඔබේ කාමරය?",
        "Question_JP": "___ 部屋（へや）が あなたの 部屋ですか。",
        "Options": "どの,あの,この,その"
    },
    {
        "ID": 53,
        "Level": "Medium",
        "Pronoun": "この",
        "Sentence_JP": "この 電車（でんしゃ）は 東京（とうきょう）に行きます。",
        "Sentence_Romaji": "Kono densha wa Toukyou ni ikimasu.",
        "Sentence_SI": "මේ දුම්රිය ටෝකියෝ වලට යනවා.",
        "Question_JP": "___ 電車（でんしゃ）は 東京（とうきょう）に行きます。",
        "Options": "どの,あの,この,その"
    },
    {
        "ID": 54,
        "Level": "Medium",
        "Pronoun": "その",
        "Sentence_JP": "その バッグは どこで 買いましたか。",
        "Sentence_Romaji": "Sono baggu wa doko de kaimashita ka.",
        "Sentence_SI": "ඒ බෑග් එක කොහෙන්ද ගත්තේ?",
        "Question_JP": "___ バッグは どこで 買いましたか。",
        "Options": "その,あの,この,どの"
    },
    {
        "ID": 55,
        "Level": "Medium",
        "Pronoun": "あの",
        "Sentence_JP": "あの ホテルは きれいです。",
        "Sentence_Romaji": "Ano hoteru wa kirei desu.",
        "Sentence_SI": "අර හෝටලය ලස්සනයි/පිරිසිදුයි.",
        "Question_JP": "___ ホテルは きれいです。",
        "Options": "その,どの,あの,この"
    },
    {
        "ID": 56,
        "Level": "Medium",
        "Pronoun": "この",
        "Sentence_JP": "この 携帯（けいたい）は 便利（べんり）です。",
        "Sentence_Romaji": "Kono keitai wa benri desu.",
        "Sentence_SI": "මේ ජංගම දුරකථනය පහසුයි.",
        "Question_JP": "___ 携帯（けいたい）は 便利（べんり）です。",
        "Options": "この,どの,あの,その"
    },
    {
        "ID": 57,
        "Level": "Medium",
        "Pronoun": "その",
        "Sentence_JP": "その 服（ふく）は とても 似合（にあ）っています。",
        "Sentence_Romaji": "Sono fuku wa totemo niatte imasu.",
        "Sentence_SI": "ඒ ඇඳුම ඔබට ගොඩක් ගැලපෙනවා.",
        "Question_JP": "___ 服（ふく）は とても 似合（にあ）っています。",
        "Options": "この,どの,その,あの"
    },
    {
        "ID": 58,
        "Level": "Medium",
        "Pronoun": "あの",
        "Sentence_JP": "あの 映画（えいが）を 見ましたか。",
        "Sentence_Romaji": "Ano eiga o mimashita ka.",
        "Sentence_SI": "අර චිත්‍රපටය බැලුවද?",
        "Question_JP": "___ 映画（えいが）を 見ましたか。",
        "Options": "あの,その,この,どの"
    },
    {
        "ID": 59,
        "Level": "Medium",
        "Pronoun": "どの",
        "Sentence_JP": "どの 色（いろ）が 好き（すき）ですか。",
        "Sentence_Romaji": "Dono iro ga suki desu ka.",
        "Sentence_SI": "කොයි පාටටද කැමති?",
        "Question_JP": "___ 色（いろ）が 好き（すき）ですか。",
        "Options": "どの,あの,この,その"
    },
    {
        "ID": 60,
        "Level": "Medium",
        "Pronoun": "この",
        "Sentence_JP": "この 魚（さかな）は 新鮮（しんせん）です。",
        "Sentence_Romaji": "Kono sakana wa shinsen desu.",
        "Sentence_SI": "මේ මාළු නැවුම්.",
        "Question_JP": "___ 魚（さかな）は 新鮮（しんせん）です。",
        "Options": "この,あの,どの,その"
    },
    {
        "ID": 61,
        "Level": "Medium",
        "Pronoun": "その",
        "Sentence_JP": "その 話（はなし）は 本当（ほんとう）ですか。",
        "Sentence_Romaji": "Sono hanashi wa hontou desu ka.",
        "Sentence_SI": "ඒ කතාව ඇත්තද?",
        "Question_JP": "___ 話（はなし）は 本当（ほんとう）ですか。",
        "Options": "どの,あの,この,その"
    },
    {
        "ID": 62,
        "Level": "Medium",
        "Pronoun": "あの",
        "Sentence_JP": "あの 山（やま）は 高（たか）いです。",
        "Sentence_Romaji": "Ano yama wa takai desu.",
        "Sentence_SI": "අර කන්ද උසයි.",
        "Question_JP": "___ 山（やま）は 高（たか）いです。",
        "Options": "この,どの,その,あの"
    },
    {
        "ID": 63,
        "Level": "Medium",
        "Pronoun": "この",
        "Sentence_JP": "この 近く（ちかく）に トイレは ありますか。",
        "Sentence_Romaji": "Kono chikaku ni toire wa arimasu ka.",
        "Sentence_SI": "මේ කිට්ටුව වැසිකිළියක් තියෙනවද?",
        "Question_JP": "___ 近く（ちかく）に トイレは ありますか。",
        "Options": "あの,どの,この,その"
    },
    {
        "ID": 64,
        "Level": "Medium",
        "Pronoun": "その",
        "Sentence_JP": "その 机（つくえ）を 運（はこ）んでください。",
        "Sentence_Romaji": "Sono tsukue o hakonde kudasai.",
        "Sentence_SI": "ඒ මේසය උස්සගෙන යන්න.",
        "Question_JP": "___ 机（つくえ）を 運（はこ）んでください。",
        "Options": "その,どの,あの,この"
    },
    {
        "ID": 65,
        "Level": "Medium",
        "Pronoun": "あの",
        "Sentence_JP": "あの 歌手（かしゅ）は 有名（ゆうめい）です。",
        "Sentence_Romaji": "Ano kashu wa yuumei desu.",
        "Sentence_SI": "අර ගායකයා ප්‍රසිද්ධයි.",
        "Question_JP": "___ 歌手（かしゅ）は 有名（ゆうめい）です。",
        "Options": "どの,その,あの,この"
    },
    {
        "ID": 66,
        "Level": "Medium",
        "Pronoun": "どの",
        "Sentence_JP": "どの パソコンが いいですか。",
        "Sentence_Romaji": "Dono pasokon ga ii desu ka.",
        "Sentence_SI": "කොයි පරිගණකයද හොඳ?",
        "Question_JP": "___ パソコンが いいですか。",
        "Options": "この,どの,その,あの"
    },
    {
        "ID": 67,
        "Level": "Medium",
        "Pronoun": "この",
        "Sentence_JP": "この 道（みち）を 真（ま）っ直（す）ぐ 行（い）ってください。",
        "Sentence_Romaji": "Kono michi o massugu itte kudasai.",
        "Sentence_SI": "මේ පාරේ කෙලින්ම යන්න.",
        "Question_JP": "___ 道（みち）を 真（ま）っ直（す）ぐ 行（い）ってください。",
        "Options": "どの,この,あの,その"
    },
    {
        "ID": 68,
        "Level": "Hard",
        "Pronoun": "ここ",
        "Sentence_JP": "ここは 病院（びょういん）です。",
        "Sentence_Romaji": "Koko wa byouin desu.",
        "Sentence_SI": "මෙතන රෝහලයි.",
        "Question_JP": "___ は 病院（びょういん）です。",
        "Options": "どこ,ここ,そこ,あそこ"
    },
    {
        "ID": 69,
        "Level": "Hard",
        "Pronoun": "そこ",
        "Sentence_JP": "コンビニは そこです。",
        "Sentence_Romaji": "Konbini wa soko desu.",
        "Sentence_SI": "පහසුකම් වෙළඳසැල (Convenience store) තියෙන්නේ එතන.",
        "Question_JP": "コンビニは ___ です。",
        "Options": "ここ,あそこ,どこ,そこ"
    },
    {
        "ID": 70,
        "Level": "Hard",
        "Pronoun": "あそこ",
        "Sentence_JP": "駅（えき）は あそこです。",
        "Sentence_Romaji": "Eki wa asoko desu.",
        "Sentence_SI": "දුම්රිය ස්ථානය තියෙන්නේ අතන.",
        "Question_JP": "駅（えき）は ___ です。",
        "Options": "ここ,あそこ,そこ,どこ"
    },
    {
        "ID": 71,
        "Level": "Hard",
        "Pronoun": "どこ",
        "Sentence_JP": "トイレは どこですか。",
        "Sentence_Romaji": "Toire wa doko desu ka.",
        "Sentence_SI": "වැසිකිළිය තියෙන්නේ කොහෙද?",
        "Question_JP": "トイレは ___ ですか。",
        "Options": "どこ,あそこ,ここ,そこ"
    },
    {
        "ID": 72,
        "Level": "Hard",
        "Pronoun": "こちら",
        "Sentence_JP": "受付（うけつけ）は こちらです。",
        "Sentence_Romaji": "Uketsuke wa kochira desu.",
        "Sentence_SI": "පිළිගැනීමේ කවුන්ටරය තියෙන්නේ මේ පැත්තේ.",
        "Question_JP": "受付（うけつけ）は ___ です。",
        "Options": "どちら,そちら,あちら,こちら"
    },
    {
        "ID": 73,
        "Level": "Hard",
        "Pronoun": "そちら",
        "Sentence_JP": "エレベーターは そちらです。",
        "Sentence_Romaji": "Erebeetaa wa sochira desu.",
        "Sentence_SI": "විදුලි සෝපානය (Elevator) තියෙන්නේ ඔය පැත්තේ.",
        "Question_JP": "エレベーターは ___ です。",
        "Options": "こちら,どちら,あちら,そちら"
    },
    {
        "ID": 74,
        "Level": "Hard",
        "Pronoun": "あちら",
        "Sentence_JP": "山田さんは あちらに います。",
        "Sentence_Romaji": "Yamada-san wa achira ni imasu.",
        "Sentence_SI": "යමදා මහතා ඉන්නේ අර පැත්තේ.",
        "Question_JP": "山田さんは ___ に います。",
        "Options": "どちら,こちら,そちら,あちら"
    },
    {
        "ID": 75,
        "Level": "Hard",
        "Pronoun": "どちら",
        "Sentence_JP": "お国（くに）は どちらですか。",
        "Sentence_Romaji": "Okuni wa dochira desu ka.",
        "Sentence_SI": "ඔබේ රට කුමක්ද? (කොයි පැත්තද?)",
        "Question_JP": "お国（くに）は ___ ですか。",
        "Options": "そちら,あちら,こちら,どちら"
    },
    {
        "ID": 76,
        "Level": "Hard",
        "Pronoun": "に",
        "Sentence_JP": "机（つくえ）の 上（うえ）に パソコンが あります。",
        "Sentence_Romaji": "Tsukue no ue ni pasokon ga arimasu.",
        "Sentence_SI": "මේසය උඩ පරිගණකයක් තිබේ.",
        "Question_JP": "机（つくえ）の 上（うえ）___ パソコンが あります。",
        "Options": "は,に,が,を"
    },
    {
        "ID": 77,
        "Level": "Hard",
        "Pronoun": "が",
        "Sentence_JP": "ベッドの 下（した）に 猫（ねこ）が います。",
        "Sentence_Romaji": "Beddo no shita ni neko ga imasu.",
        "Sentence_SI": "ඇඳ යට බළලෙක් සිටී.",
        "Question_JP": "ベッドの 下（した）に 猫（ねこ）___ います。",
        "Options": "を,は,が,に"
    },
    {
        "ID": 78,
        "Level": "Hard",
        "Pronoun": "に",
        "Sentence_JP": "銀行（ぎんこう）の 隣（となり）に 郵便局（ゆうびんきょく）が あります。",
        "Sentence_Romaji": "Ginkou no tonari ni yuubinkyoku ga arimasu.",
        "Sentence_SI": "බැංකුවට යාබදව තැපැල් කාර්යාලයක් තිබේ.",
        "Question_JP": "銀行（ぎんこう）の 隣（となり）___ 郵便局（ゆうびんきょく）が あります。",
        "Options": "が,を,は,に"
    },
    {
        "ID": 79,
        "Level": "Hard",
        "Pronoun": "が",
        "Sentence_JP": "あの 部屋（へや）に 誰（だれ）が いますか。",
        "Sentence_Romaji": "Ano heya ni dare ga imasu ka.",
        "Sentence_SI": "අර කාමරයේ කවුද ඉන්නේ?",
        "Question_JP": "あの 部屋（へや）に 誰（だれ）___ いますか。",
        "Options": "を,に,が,は"
    },
    {
        "ID": 80,
        "Level": "Hard",
        "Pronoun": "ここ",
        "Sentence_JP": "ここから 駅まで ５分（ふん）です。",
        "Sentence_Romaji": "Koko kara eki made go-fun desu.",
        "Sentence_SI": "මෙතන ඉඳන් දුම්රිය ස්ථානයට විනාඩි 5යි.",
        "Question_JP": "___ から 駅まで ５分（ふん）です。",
        "Options": "あそこ,ここ,そこ,どこ"
    },
    {
        "ID": 81,
        "Level": "Hard",
        "Pronoun": "そこ",
        "Sentence_JP": "そこに 車（くるま）を 止（と）めてください。",
        "Sentence_Romaji": "Soko ni kuruma o tomete kudasai.",
        "Sentence_SI": "එතන කාරය නවත්වන්න.",
        "Question_JP": "___ に 車（くるま）を 止（と）めてください。",
        "Options": "あそこ,そこ,どこ,ここ"
    },
    {
        "ID": 82,
        "Level": "Hard",
        "Pronoun": "あそこ",
        "Sentence_JP": "あそこに 大きな ビルが あります。",
        "Sentence_Romaji": "Asoko ni ookina biru ga arimasu.",
        "Sentence_SI": "අතන විශාල ගොඩනැගිල්ලක් තිබේ.",
        "Question_JP": "___ に 大きな ビルが あります。",
        "Options": "そこ,あそこ,どこ,ここ"
    },
    {
        "ID": 83,
        "Level": "Hard",
        "Pronoun": "どこ",
        "Sentence_JP": "わたしの 鍵（かぎ）は どこですか。",
        "Sentence_Romaji": "Watashi no kagi wa doko desu ka.",
        "Sentence_SI": "මගේ යතුර කොහෙද?",
        "Question_JP": "わたしの 鍵（かぎ）は ___ ですか。",
        "Options": "ここ,あそこ,そこ,どこ"
    },
    {
        "ID": 84,
        "Level": "Hard",
        "Pronoun": "こちら",
        "Sentence_JP": "こちらは わたしの 友達（ともだち）です。",
        "Sentence_Romaji": "Kochira wa watashi no tomodachi desu.",
        "Sentence_SI": "මෙයා (මේ පුද්ගලයා) මගේ යාළුවා.",
        "Question_JP": "___ は わたしの 友達（ともだち）です。",
        "Options": "あちら,そちら,こちら,どちら"
    },
    {
        "ID": 85,
        "Level": "Hard",
        "Pronoun": "そちら",
        "Sentence_JP": "そちらの 天気（てんき）は どうですか。",
        "Sentence_Romaji": "Sochira no tenki wa dou desu ka.",
        "Sentence_SI": "ඔය පැත්තේ කාලගුණය කොහොමද?",
        "Question_JP": "___ の 天気（てんき）は どうですか。",
        "Options": "こちら,あちら,そちら,どちら"
    },
    {
        "ID": 86,
        "Level": "Hard",
        "Pronoun": "に",
        "Sentence_JP": "スーパーの 前（まえ）に 交番（こうばん）が あります。",
        "Sentence_Romaji": "Suupaa no mae ni kouban ga arimasu.",
        "Sentence_SI": "සුපිරි වෙළඳසැල ඉදිරිපිට පොලිස් මුරපොළක් තිබේ.",
        "Question_JP": "スーパーの 前（まえ）___ 交番（こうばん）が あります。",
        "Options": "を,は,に,が"
    },
    {
        "ID": 87,
        "Level": "Hard",
        "Pronoun": "が",
        "Sentence_JP": "公園（こうえん）に 子（こ）どもが います。",
        "Sentence_Romaji": "Kouen ni kodomo ga imasu.",
        "Sentence_SI": "උද්‍යානයේ ළමයෙක් සිටී.",
        "Question_JP": "公園（こうえん）に 子（こ）ども___ います。",
        "Options": "に,は,を,が"
    },
    {
        "ID": 88,
        "Level": "Hard",
        "Pronoun": "ここ",
        "Sentence_JP": "ここは 禁煙（きんえん）です。",
        "Sentence_Romaji": "Koko wa kin'en desu.",
        "Sentence_SI": "මෙතන දුම්බීම තහනම්.",
        "Question_JP": "___ は 禁煙（きんえん）です。",
        "Options": "ここ,どこ,そこ,あそこ"
    },
    {
        "ID": 89,
        "Level": "Hard",
        "Pronoun": "そこ",
        "Sentence_JP": "そこは 社長（しゃちょう）の 席（せき）です。",
        "Sentence_Romaji": "Soko wa shachou no seki desu.",
        "Sentence_SI": "එතන තියෙන්නේ සමාගම් ප්‍රධානියාගේ අසුනයි.",
        "Question_JP": "___ は 社長（しゃちょう）の 席（せき）です。",
        "Options": "ここ,あそこ,そこ,どこ"
    },
    {
        "ID": 90,
        "Level": "Hard",
        "Pronoun": "あそこ",
        "Sentence_JP": "あそこに 犬（いぬ）が います。",
        "Sentence_Romaji": "Asoko ni inu ga imasu.",
        "Sentence_SI": "අතන බල්ලෙක් ඉන්නවා.",
        "Question_JP": "___ に 犬（いぬ）が います。",
        "Options": "ここ,そこ,どこ,あそこ"
    },
    {
        "ID": 91,
        "Level": "Hard",
        "Pronoun": "どこ",
        "Sentence_JP": "今（いま）、どこに いますか。",
        "Sentence_Romaji": "Ima, doko ni imasu ka.",
        "Sentence_SI": "දැන් කොහෙද ඉන්නේ?",
        "Question_JP": "今（いま）、___ に いますか。",
        "Options": "あそこ,どこ,ここ,そこ"
    },
    {
        "ID": 92,
        "Level": "Hard",
        "Pronoun": "こちら",
        "Sentence_JP": "こちらの 料理（りょうり）は おすすめです。",
        "Sentence_Romaji": "Kochira no ryouri wa osusume desu.",
        "Sentence_SI": "මේ (පැත්තේ) කෑම අපි නිර්දේශ කරනවා.",
        "Question_JP": "___ の 料理（りょうり）は おすすめです。",
        "Options": "そちら,こちら,どちら,あちら"
    },
    {
        "ID": 93,
        "Level": "Hard",
        "Pronoun": "に",
        "Sentence_JP": "箱（はこ）の 中（なか）に 何（なに）が ありますか。",
        "Sentence_Romaji": "Hako no naka ni nani ga arimasu ka.",
        "Sentence_SI": "පෙට්ටිය ඇතුළේ මොනවද තියෙන්නේ?",
        "Question_JP": "箱（はこ）の 中（なか）___ 何（なに）が ありますか。",
        "Options": "に,は,を,が"
    },
    {
        "ID": 94,
        "Level": "Hard",
        "Pronoun": "が",
        "Sentence_JP": "木（き）の 下（した）に ベンチが あります。",
        "Sentence_Romaji": "Ki no shita ni benchi ga arimasu.",
        "Sentence_SI": "ගස යට බංකුවක් තිබේ.",
        "Question_JP": "木（き）の 下（した）に ベンチ___ あります。",
        "Options": "を,は,が,に"
    },
    {
        "ID": 95,
        "Level": "Hard",
        "Pronoun": "ここ",
        "Sentence_JP": "ここに 名前（なまえ）を 書（か）いてください。",
        "Sentence_Romaji": "Koko ni namae o kaite kudasai.",
        "Sentence_SI": "මෙතන නම ලියන්න.",
        "Question_JP": "___ に 名前（なまえ）を 書（か）いてください。",
        "Options": "どこ,ここ,そこ,あそこ"
    },
    {
        "ID": 96,
        "Level": "Hard",
        "Pronoun": "そこ",
        "Sentence_JP": "そこから 見（み）えますか。",
        "Sentence_Romaji": "Soko kara miemasu ka.",
        "Sentence_SI": "එතන ඉඳන් පේනවද?",
        "Question_JP": "___ から 見（み）えますか。",
        "Options": "ここ,あそこ,どこ,そこ"
    },
    {
        "ID": 97,
        "Level": "Hard",
        "Pronoun": "あそこ",
        "Sentence_JP": "あそこに 座（すわ）りましょう。",
        "Sentence_Romaji": "Asoko ni suwarimashou.",
        "Sentence_SI": "අතනින් වාඩි වෙමු.",
        "Question_JP": "___ に 座（すわ）りましょう。",
        "Options": "あそこ,ここ,そこ,どこ"
    },
    {
        "ID": 98,
        "Level": "Hard",
        "Pronoun": "どちら",
        "Sentence_JP": "階段（かいだん）は どちらですか。",
        "Sentence_Romaji": "Kaidan wa dochira desu ka.",
        "Sentence_SI": "පඩිපෙළ කොයි පැත්තෙද?",
        "Question_JP": "階段（かいだん）は ___ ですか。",
        "Options": "そちら,こちら,どちら,あちら"
    },
    {
        "ID": 99,
        "Level": "Hard",
        "Pronoun": "に",
        "Sentence_JP": "家（いえ）の 近（ちか）くに 公園（こうえん）が あります。",
        "Sentence_Romaji": "Ie no chikaku ni kouen ga arimasu.",
        "Sentence_SI": "ගෙදර කිට්ටුව උද්‍යානයක් තිබේ.",
        "Question_JP": "家（いえ）の 近（ちか）く___ 公園（こうえん）が あります。",
        "Options": "を,に,は,が"
    },
    {
        "ID": 100,
        "Level": "Hard",
        "Pronoun": "が",
        "Sentence_JP": "冷蔵庫（れいぞうこ）の 中（なか）に 卵（たまご）が あります。",
        "Sentence_Romaji": "Reizouko no naka ni tamago ga arimasu.",
        "Sentence_SI": "ශීතකරණය ඇතුළේ බිත්තර තිබේ.",
        "Question_JP": "冷蔵庫（れいぞうこ）の 中（なか）に 卵（たまご）___ あります。",
        "Options": "に,は,を,が"
    }
];