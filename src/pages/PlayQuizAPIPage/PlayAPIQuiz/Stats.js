import "./Stats.css";

function Stat({ label, value }) {
    return(
        <ul className="stats">
            <li className="stats__stat-container">
                <div className="stats__stat-label"> { label } </div>
                <div className="stats__stat-value"> { value } </div>
            </li>
        </ul>
    );
}

function Stats({ score, questionNumber, totalQuestions }){
    return(
        <ul className="stats">
            <Stat label="Score" value={ score }/>
            <Stat label="Question" value={`${ questionNumber } / ${ totalQuestions }`}/>
        </ul>
    );
}

export default Stats;