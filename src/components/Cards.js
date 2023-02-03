import CardItem from "./CardItem";
import "../styles/Cards.css";

import qBubbles from "../assets/images/questionmarks-bubbles.png";
import qBlocks from "../assets/images/questionmarks-blocks.png";
import qCards from "../assets/images/questionmarks-cards.png";

function Cards() {
    return (
        <div className="cards">
            <h1> What would you like to do today? </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={ qBlocks }
                            text="Generate a unique quiz"
                            label="API QUIZ"
                            path="/api"
                        />
                        <CardItem
                            src={ qCards }
                            text="Practice your skills through low-stakes flashcards"
                            label="FLASHCARDS"
                            path="/flashcards"
                        />
                        <CardItem
                            src={ qBubbles }
                            text="Check out your profile"
                            label="PROFILE"
                            path="/profile"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;