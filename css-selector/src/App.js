import React, { useState } from "react";
import "./App.css";
import "./views/question.css";
import FinalResults from "./views/FinalResults";
import PageDocs from "./views/PageDocs";
import Question from "./views/Question";
import codestatesImg from "./codestates.png";
import questions from "./questions.json";

const App = () => {
  const [isIdle, setIsIdle] = useState(true);
  const [askedForResults, setAskedForResults] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [v, setV] = useState([]);
  const [answer, setAnswer] = useState("");
  const total = questions.length;
  const proposal = questions[currentIndex].proposal;
  const selector = questions[currentIndex].selector;
  const description = questions[currentIndex].description;

  const [isAnswered, setIsAnswered] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const isFinished = () => {
    return currentIndex === total - 1;
  };
  const shouldShowNext = () => {
    return isAnswered && !isFinished();
  };
  const allDone = () => {
    return isFinished() && isAnswered;
  };

  const start = () => {
    setIsIdle(false);
  };
  const go = (r) => {
    setV([r]);
    if (checkAnswer(r)) {
      setScore(score + 1);
    } else {
    }
    setIsAnswered(true);
    setDisabled(true);
  };
  const checkAnswer = (r) => {
    if (proposal === selector && r === "yes") {
      setAnswer("yes");
      return true;
    } else if (proposal !== selector && r === "no") {
      setAnswer("no");
      return true;
    } else {
      if (r === "yes") {
        setAnswer("no");
      } else {
        setAnswer("yes");
      }
      return false;
    }
  };
  const resetStep = () => {
    setIsAnswered(false);
    setDisabled(false);
    setV([]);
  };
  const displayNext = () => {
    setCurrentIndex(currentIndex + 1);
    resetStep();
  };
  const playAgain = () => {
    setScore(0);
    setCurrentIndex(0);
    setAskedForResults(false);
    resetStep();
  };
  const showResults = () => {
    setAskedForResults(true);
    setIsIdle(true);
  };

  return (
    <div className="App">
      <div className="pageDoc">
        <PageDocs />
      </div>
      {!askedForResults ? (
        <section className="quiz">
          {isIdle ? (
            <>
              <img src={codestatesImg} alt="코드스테이츠 css selector 주소" />
              <h1>css selector</h1>
              <div className="isIdle">
                <p>
                  CSS Selector 체크포인트에 오신 것을 환영합니다!
                  <br /> 표시된 셀렉터가 질문의 셀렉터 범위와 맞는지 고르면
                  됩니다.
                  <br /> 시작하기를 눌러 진행해 주세요.
                </p>
                <button type="button" className="startBtn" onClick={start}>
                  시작하기
                </button>
              </div>{" "}
            </>
          ) : (
            <>
              <div className="progress">
                {currentIndex + 1} / {questions.length}
              </div>
              <img src={codestatesImg} alt="코드스테이츠 css selector 주소" />
              <h1>css selector</h1>
              {!isIdle ? (
                <style jsx="true">
                  {!selector.includes(",")
                    ? `
                                    .pageDocs ${selector} {
                                        box-shadow: 0 0 0 2px #4d7dc4;
                                        border-radius: 5px;
                                    }
                                `
                    : `.pageDocs ${selector.slice(0, selector.indexOf(","))},
                                .pageDocs ${selector.slice(
                                  selector.indexOf(",") + 2
                                )} {
                                    box-shadow: 0 0 0 2px #4d7dc4;
                                    border-radius: 5px;
                                }`}
                </style>
              ) : (
                ""
              )}
              {!isIdle && disabled ? (
                <style jsx="true">
                  {!proposal.includes(",")
                    ? `
                                    .pageDocs ${proposal} {
                                        box-shadow: 0 0 0 4px #4ac714 !important;
                                        border-radius: 5px;
                                    }
                                `
                    : `.pageDocs ${proposal.slice(0, proposal.indexOf(","))},
                                .pageDocs ${proposal.slice(
                                  proposal.indexOf(",") + 2
                                )} {
                                    box-shadow: 0 0 0 4px #4ac714 !important;
                                    border-radius: 5px;
                                }`}
                </style>
              ) : (
                ""
              )}
              <Question
                currentIndex={currentIndex}
                v={v}
                q={proposal}
                answered={go}
                disabled={disabled}
                correct={answer}
                description={description}
              />
              {shouldShowNext() ? (
                <>
                  <button onClick={displayNext}>Next</button>
                </>
              ) : (
                <> </>
              )}
              {allDone() ? (
                <>
                  <button onClick={showResults}>결과 보기</button>
                </>
              ) : (
                <></>
              )}
            </>
          )}
          <footer className="footer">© 2020 Code States</footer>
        </section>
      ) : (
        <section className="score">
          <h1>
            CSS Selector <br />
            최종 점수
          </h1>
          <FinalResults score={score} total={total} />
          <button type="button" onClick={playAgain}>
            다시하기
          </button>
        </section>
      )}
    </div>
  );
};

export default App;
