import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
export default function Nav() {
    const navUl = React.useRef(null);
    const toggle = () => {
        navUl.current.classList.toggle("slide");
        document.body.classList.toggle("hidden");
    };
    const changeTheme = () => {
        document.querySelector("nav").classList.toggle("dark");
    };

    return (
        <>
            <nav className="dark">
                <div className="logo ">
                    <h4 className="animate__animated animate__backInDown">Kevin Almer</h4>
                </div>

                <ul ref={navUl} className="ul-nav">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/project"}>Project</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <div className="_theme" onClick={changeTheme}></div>
                    </li>
                </ul>

                <div className="menu-toggle" onClick={toggle}>
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    );
}
