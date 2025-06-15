import React, { useState } from "react";

const quizData = [
  {
    question: "前転のやり方？",
    options: ["手と手の間を見る→頭の後ろをつく→手をついて立つ", "手と手の間を見る→頭の後ろをつく→手をつかないで立つ", "手を広げる", "ジャンプする"],
    answer: "手と手の間を見る→頭の後ろをつく→手をつかないで立つ",
    explanation: "前転はあごをしっかり引いて頭を守ることが大切です。",
  },
  {
    question: "跳び箱の踏み切りで使うのは？",
    options: ["ひざ", "手", "足", "おしり"],
    answer: "足",
    explanation: "踏み切りは足で地面を強く蹴ることで跳び上がります。",
  },
  {
    question: "後転で気をつけることは？",
    options: ["ひざ", "手", "足", "おしり"],
    answer: "足",
    explanation: "踏み切りは足で地面を強く蹴ることで跳び上がります。",
  },
];

function App() {
  const [q, setQ] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [end, setEnd] = useState(false);

  const checkAnswer = (option) => {
    if (option === quizData[q].answer) {
      setScore(score + 1);
    } else {
      // 選んだ答えも一緒に記録
      setWrongQuestions([
        ...wrongQuestions,
        {
          question: quizData[q].question,
          answer: quizData[q].answer,
          explanation: quizData[q].explanation,
          selected: option, // ユーザーが選んだ答え
        },
      ]);
    }
    if (q + 1 < quizData.length) setQ(q + 1);
    else setEnd(true);
  };

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>WiNG GYM クイズ</h1>
      {end ? (
        <>
          <h2>
            スコア: {score} / {quizData.length}
          </h2>

          {wrongQuestions.length > 0 && (
            <>
              <h3>間違えた問題と解説</h3>
              <ul style={{ textAlign: "left", maxWidth: 500, margin: "0 auto" }}>
                {wrongQuestions.map((item, i) => (
                  <li key={i} style={{ marginBottom: 20 }}>
                    <strong>問題：</strong> {item.question}
                    <br />
                    <strong>あなたの答え：</strong> <span style={{ color: "red" }}>{item.selected}</span>
                    <br />
                    <strong>正解：</strong> {item.answer}
                    <br />
                    <strong>解説：</strong> {item.explanation}
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      ) : (
        <>
          <h2>{quizData[q].question}</h2>
          {quizData[q].options.map((op) => (
            <button
              key={op}
              onClick={() => checkAnswer(op)}
              style={{
                margin: 10,
                padding: 10,
                fontSize: 16,
                background: "#4dd0e1",
                border: "none",
                color: "white",
                borderRadius: 8,
              }}
            >
              {op}
            </button>
          ))}
        </>
      )}
    </div>
  );
}

export default App;

