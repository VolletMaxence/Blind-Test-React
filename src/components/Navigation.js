import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" end className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> Recherche Opening </li>
                </NavLink>
                <NavLink to="/infoanime" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> Recherche Anime </li>
                </NavLink>
                <NavLink to="/blindtestgeneral" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> Blind Test Général</li>
                </NavLink>
                <NavLink to="/blindtestlist" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> Blind Test List Personnalisé</li>
                </NavLink>
                <NavLink to="/blindtestajout" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> Ajouter Opening au BlindTest </li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> À propos </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;