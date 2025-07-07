// Quiz.js

// クイズデータ（ここでは1問だけ例として用意）
const quizData = {
    question: "次のうち、最も高い山はどれですか？",
    options: ["富士山", "エベレスト", "キリマンジャロ", "モンブラン"],
    correctIndex: 1 // エベレストが正解
};

function renderQuiz() {
    const body = document.body;

    // 問題文
    const questionElement = document.createElement("h2");
    questionElement.textContent = quizData.question;
    body.appendChild(questionElement);

    // 回答フォーム
    const form = document.createElement("form");
    form.id = "quiz-form";

    quizData.options.forEach((option, index) => {
        const label = document.createElement("label");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = index;

        const text = document.createTextNode(option);

        label.appendChild(radio);
        label.appendChild(text);
        form.appendChild(label);
    });

    // 回答ボタン
    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.textContent = "回答する";

    submitButton.addEventListener("click", () => {
        const selected = form.querySelector("input[name='answer']:checked");
        if (!selected) {
            alert("選択肢を選んでください！");
            return;
        }

        const selectedIndex = parseInt(selected.value);

        // 正誤判定（現状はアラート表示のみ）
        if (selectedIndex === quizData.correctIndex) {
            alert("正解です！すごい👏");
        } else {
            alert("残念！不正解です💦");
        }

        // → 今後、スコア処理や次の問題などの処理を追加できます
    });

    form.appendChild(submitButton);
    body.appendChild(form);
}

window.onload = renderQuiz;
