import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faScissors } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Moroccanoil_logo from "./Moroccanoil_logo.png";

export default function Header() {
  return (
    <div className="Header">
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
      <header className="menu sticky-top">
        <div className="row ">
          <div className="col-4 menu-logo">
            <h1 className="mb-0">
              <a href="#" title="Moroccanoil logo">
                <img
                  src={Moroccanoil_logo}
                  alt="Moroccanoil logo"
                  width={250}
                />
              </a>{" "}
            </h1>
          </div>
          <div className="col-5 menu-list">
            <ul className="justify-content-start gap-5">
              <li className="px-2">haircare</li>
              <li className="px-2">body</li>
              <li>argan oil</li>
            </ul>
          </div>
          <div className="col-3 menu-icons">
            <ul className="justify-content-end gap-xl-4 gap-0">
              <li className="mx-1">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </li>
              <li className="mx-1 user">
                <FontAwesomeIcon icon={faUser} />
              </li>
              <li className="mx-1">
                <FontAwesomeIcon icon={faBagShopping} />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
