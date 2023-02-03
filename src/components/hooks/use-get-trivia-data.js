import {  useEffect, useState } from "react";
import he from "he";

/*  UTILITY FUNCTION DECODE TRIVIA RESULTS*/
function decodeTriviaData(results){
    const decodedResults = results.map((item) => {
        return{
            ...item,
            question: he.decode(item.question),
            correct_answer: he.decode(item.correct_answer),
            incorrect_answers: item.incorrect_answers.map((incorrect) => he.decode(incorrect))
        };
    });
    return decodedResults;
}

/* UTILITY FUNCTION */
async function fetchJson(url) {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(`Something went wrong, server responded with ${ response.status }`);
    }
    const json = await response.json();
    return json;
}

function useGetTriviaData(amount= 10, difficulty= ""){

    const [quizFetch, setQuizFetch] = useState({
        isLoading: true,
        errorMessage: "",
        data: null
    });

    /* EFFECT ONLY RUNS ON MOUNT */
    useEffect(() => {
        async function getQuiz(){
            try{
                const params = new URLSearchParams({ amount, type: "multiple" });
                if (difficulty !== "") params.append("difficulty", difficulty);
                const url = `https://opentdb.com/api.php?${ params.toString() }`;

                const json = await fetchJson(url);
                const { response_code, results } = json;

                if (response_code === 1){
                    throw new Error("Bad API request - no results!");
                } else if (response_code === 2){
                    throw new Error("Bad API request - invalid parameter!");
                }

                /*SUCCESSFULLY PASSED ERROR CHECKS*/
                setQuizFetch({
                    isLoading: false,
                    errorMessage: "",
                    data: decodeTriviaData(results)
                });
            } catch (err) {
                /* GENERIC ERROR MESSAGE */
                setQuizFetch({
                    isLoading: false,
                    errorMessage: "Something went wrong, try again later!",
                    data: null
                });
                /* MORE SPECIFIC ERROR IN CONSOLE*/
                console.error(err);
            }
        }

        getQuiz();

    }, [amount, difficulty]);

    const { isLoading, errorMessage, data } = quizFetch;

    return [isLoading, errorMessage, data];
}

export default useGetTriviaData;