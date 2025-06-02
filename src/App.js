import React, { useState } from "react";
import "./index.css";

const quizData = [
  {
    question: "マット運動で前転のときに気をつけることは？",
    options: ["手を横につく", "あごを引く", "足を開く", "目を閉じる"],
    answer: "あごを引く",
  },
  {
    question: "跳び箱で踏み切るときに使うのは？",
    options: ["手", "足", "おしり", "ひざ"],
    answer: "足",
  },
  // 他にもどんどん追加できるよ！
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    const correct = quizData[currentQuestion].answer;
    if (selectedOption === correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>WiNG GYM クイズ</h1>
      {showScore ? (
        <div>
          <h2>スコア: {score} / {quizData.length}</h2>
        </div>
      ) : (
        <div>
          <h2>{quizData[currentQuestion].question}</h2>
          {quizData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={{
                display: "block",
                margin: "10px auto",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#4dd0e1",
                color: "#fff",
                fontSize: "16px",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
