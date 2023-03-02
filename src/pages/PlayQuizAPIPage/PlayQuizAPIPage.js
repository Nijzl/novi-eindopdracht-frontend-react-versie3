import GameAPI from "./PlayAPIQuiz/GameAPI";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import useGetTriviaData from "../../components/hooks/use-get-trivia-data";
import Footer from "../../components/Footer/Footer";

function PlayQuizAPIPage() {

    const [isLoading, errorMessage, data] = useGetTriviaData(10, "");

    let contents;
    if (isLoading) contents = <LoadingSpinner/>;
    else if (errorMessage !== "") contents = <ErrorMessage> { errorMessage } </ErrorMessage>;
    else contents = <GameAPI triviaData={ data }/>;

    return(
        <>
            <main>
                { contents }
            </main>

            <Footer/>
        </>


    );
}

export default PlayQuizAPIPage;