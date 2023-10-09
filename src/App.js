import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faScissors } from "@fortawesome/free-solid-svg-icons";
import Moroccanoil_logo from "./Moroccanoil_logo.png";

export default function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div>
          <a href="#" className="accessibility me-5" title="accessibility">
            enable accessibility
          </a>
          <a href="#" className="country" title="country">
            canada
          </a>
        </div>
        <div className="d-flex">
          <a href="#" className="store-locator me-5" title="store locator">
            <FontAwesomeIcon icon={faLocationDot} /> store locator
          </a>
          <a href="#" className="professionals" title="professionals">
            <FontAwesomeIcon icon={faScissors} rotation={270} /> professionnals
          </a>
        </div>
      </nav>
      <header className="header sticky-top">
        <h1>
          <a href="#" title="Moroccanoil logo">
            <img src={Moroccanoil_logo} alt="Moroccanoil logo" />
          </a>{" "}
        </h1>
      </header>
    </div>
  );
}
