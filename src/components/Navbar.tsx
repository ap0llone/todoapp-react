import React from "react";
import Container from "react-bootstrap/Container";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineDribbble } from "react-icons/ai";

const Navbar: React.FC = () => {
    return (
        <nav className="nav">
            <Container>
                <div className="nav__container">
                    <a className="nav__logo" href="#!">
                        Taskify
                    </a>

                    <div className="nav__menu">
                        <li className="nav__menu-item">
                            <a
                                className="nav__menu-link"
                                href="https://github.com/ap0llone"
                                target={"_blank"}
                            >
                                <AiOutlineGithub />
                            </a>
                        </li>
                        <li className="nav__menu-item">
                            <a className="nav__menu-link" href="#!">
                                <AiOutlineInstagram />
                            </a>
                        </li>
                        <li className="nav__menu-item">
                            <a className="nav__menu-link" href="#!">
                                <AiOutlineDribbble />
                            </a>
                        </li>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
