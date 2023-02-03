import { useLocation } from "react-router-dom";
import "../styles/PageNotFound.css";

function PageNotFound(){

    const location = useLocation();

    return(
        <div className="page-not-found">
            <h1> Page Not Found </h1>
            <h3> Oops! That page does not exist </h3>
            <p> At: { location.pathname }</p>
        </div>
    );
}

export default PageNotFound;