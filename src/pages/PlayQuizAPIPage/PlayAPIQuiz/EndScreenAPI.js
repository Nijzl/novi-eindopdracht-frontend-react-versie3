import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./EndScreen.css";

function EndStat({ label, value }) {
    return (
        <div className="end-screen__stat">
            <div className="end-screen__stat-label"> { label } </div>
            <div className="end-screen__stat-value"> { value } </div>
        </div>
    );
}

function refreshPage(){
    window.location.reload();
}

function EndScreen({ score, bestScore, onRetryClick, playTime }) {
    const minutes = `${ Math.floor(playTime / 60) }`.padStart(2, "0");
    const seconds = `${ Math.floor(playTime % 60) }`.padStart(2, "0");
    const timeString = `${ minutes }:${ seconds }`;

    return (
        <div className="end-screen">
            <h1> QUIZ COMPLETE! </h1>

            <motion.div
                className="end-screen__trophy"
                initial={{ rotate: 0, originX: 0.5, originY: 0.5 }}
                animate={{ rotate: 360 }}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
            >
                🏆
            </motion.div>

            <EndStat label="Score" value={ score } />
            <EndStat label="Best Score" value={ bestScore } />
            <EndStat label="Time to Complete" value={ timeString } />

            <div>
                <button className="end-screen__button" onClick={ onRetryClick }>
                    RETRY QUIZ
                </button>
                <button className="end-screen__button" onClick={ refreshPage }>
                    FRESH QUIZ
                </button>
                <Link to="/">
                    <button className="end-screen__button"> HOME </button>
                </Link>
            </div>
        </div>
    );
}

export default EndScreen;