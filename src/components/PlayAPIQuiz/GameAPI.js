import Stats from "./Stats";
import TriviaItem from "./TriviaItem";
import EndScreenAPI from "./EndScreenAPI";
import { useState } from "react";
import { FadeTransition, FadeWrapper } from "../utils/fade-transition";

function GameAPI({ triviaData }) {

    const [gameState, setGameState] = useState({
        score: 0,
        triviaIndex: 0,
        isGameOver: false,
        startTime: performance.now(),
    });

    const { score, triviaIndex, isGameOver, startTime } = gameState;
    const questionNumber = triviaIndex + 1;
    const numQuestions = triviaData.length;
    const playTimeInSeconds = (performance.now() - startTime) / 1000;

    const restartGame = () => {
        setGameState({
            score: 0,
            triviaIndex: 0,
            isGameOver: false,
            startTime: performance.now(),
        });
    };

    const loadNextQuestion = () => {
        if (triviaIndex >= triviaData.length - 1) {
            setGameState({ ...gameState, isGameOver: true });
        } else {
            // Using spread operator to copy gameState and override triviaIndex
            setGameState({ ...gameState, triviaIndex: triviaIndex + 1 });
        }
    };

    const onAnswerSelected = (wasPlayerCorrect) => {
        if (wasPlayerCorrect) {
            setGameState({
                ...gameState,
                score: score + 1,
            });
        }
    };

    let pageContent;
    let pageKey;
    if (isGameOver) {
        pageKey = "EndScreen";
        pageContent = (
            <EndScreenAPI
                score={ score }
                bestScore={ triviaIndex + 1 }
                onRetryClick={ restartGame }
                playTime={ playTimeInSeconds }
            />
        );
    } else {
        pageKey = triviaIndex;
        const triviaQuestion = triviaData[triviaIndex];
        const { correct_answer, incorrect_answers, question, difficulty } = triviaQuestion;
        pageContent = (
            <TriviaItem
                key={ triviaIndex }
                question={ question }
                difficulty={ difficulty }
                correctAnswer={ correct_answer }
                incorrectAnswers={ incorrect_answers }
                onNextClick={ loadNextQuestion }
                onAnswerSelected={ onAnswerSelected }
            />
        );
    }

    return (
        <>
            <Stats
                score={ score }
                questionNumber={ questionNumber }
                totalQuestions={ numQuestions } />
            <FadeWrapper>
                <FadeTransition key={ pageKey }> { pageContent } </FadeTransition>
            </FadeWrapper>
        </>
    );
}

export default GameAPI;