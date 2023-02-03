import shuffle from "../utils/shuffle";
import { useState } from "react";
import useSound from "use-sound";
import correctSound from "../../assets/sfx/sound-correct.wav";
import incorrectSound from "../../assets/sfx/sound-wrong.wav";
import "../../styles/TriviaItem.css";

function TriviaItem({
                        correctAnswer,
                        incorrectAnswers,
                        question,
                        difficulty,
                        onNextClick,
                        onAnswerSelected,
                    }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const hasPickedAnswer = selectedAnswer !== null;
    const [playCorrect] = useSound(correctSound, { volume: 0.5 });
    const [playIncorrect] = useSound(incorrectSound, { volume: 0.5 });

    const allAnswers = [correctAnswer, ...incorrectAnswers];
    // useState can take a function that is run only when the state is initialized:
    const [shuffledAnswers] = useState(() => shuffle(allAnswers));

    let nextButtonClassName = "trivia-item__button trivia-item__next-button";
    if (!hasPickedAnswer) nextButtonClassName += " trivia-item__button--disabled";

    const onAnswerClick = (event) => {
        const playerAnswer = event.target.innerHTML;
        setSelectedAnswer(playerAnswer);
        const wasPlayerCorrect = playerAnswer === correctAnswer;
        if (wasPlayerCorrect) playCorrect();
        else playIncorrect();
        onAnswerSelected(wasPlayerCorrect, difficulty);
    };

    return (
        <div>
            <p className="trivia-item__difficulty">Difficulty: {difficulty}</p>
            <p className="trivia-item__question">{question}</p>
            <ul className="trivia-item__answers">
                { shuffledAnswers.map((answer, i) => {

                    let className = "trivia-item__button";

                    if (hasPickedAnswer) {
                        const pickedThisAnswer = answer === selectedAnswer;
                        const isThisCorrect = answer === correctAnswer;

                        if (pickedThisAnswer && isThisCorrect) {
                            className += " trivia-item__button--correct";
                        } else if (pickedThisAnswer && !isThisCorrect) {
                            className += " trivia-item__button--incorrect";
                        } else {
                            className += " trivia-item__button--disabled";
                        }
                    }

                    return (
                        <li key={ answer }>
                            <button
                                className={ className }
                                onClick={ onAnswerClick }
                                disabled={ hasPickedAnswer }>
                                { answer }
                            </button>
                        </li>
                    );
                })}
            </ul>
            <button
                className={ nextButtonClassName }
                onClick={ onNextClick }
                disabled={ !hasPickedAnswer }>
                Next ➡
            </button>
        </div>
    );
}

export default TriviaItem;