import HeroSection from "../../components/HeroSection/HeroSection";
import Cards from "./CardsHomePage/Cards";
import Footer from "../../components/Footer/Footer";
import "./HomePage.css";

function HomePage() {
    return (
        <>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default HomePage;