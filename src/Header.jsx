import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { useState } from "react";
import { Login } from "./Login";
import Weather from "./weather";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NC FISHING
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                North Carolina Freshwater Fishing
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <Link to="/" className="nav-item">
                  <a className="btn btn-dark" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
                <Link to="/catch" className="nav-item">
                  <a className="btn btn-dark" href="#">
                    Catches
                  </a>
                </Link>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    {localStorage.jwt === undefined ? (
                      <>
                        <Link onClick={handleLoginShow} to="#" className="dropdown-item">
                          Login
                        </Link>

                        <Link onClick={handleSignupShow} to="#" className="dropdown-item">
                          Signup
                        </Link>
                      </>
                    ) : (
                      <Link onClick={handleLogout} to="#" className="dropdown-item">
                        Log Out
                      </Link>
                    )}

                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <button type="button" className="btn btn-light">
        <Link to="/" className="link-dark">
          Home
        </Link>
      </button>{" "}
      |{" "}
      <button type="button" className="btn btn-light">
        <Link to="/catch" className="link-dark">
          Catches
        </Link>
      </button>{" "}
      |{" "}
      {localStorage.jwt === undefined ? (
        <>
          <button type="button" className="btn btn-light">
            <Link onClick={handleLoginShow} to="#" className="link-dark">
              Login
            </Link>
          </button>{" "}
          |
          <button type="button" className="btn btn-light">
            <Link onClick={handleSignupShow} to="#" className="link-dark">
              Signup
            </Link>
          </button>{" "}
        </>
      ) : (
        <button type="button" className="btn btn-dark">
          <Link onClick={handleLogout} to="#" className="link-light">
            Log Out
          </Link>
        </button>
      )}
      <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup />
      </Modal>
      <Modal show={isLoginVisible} onClose={handleLoginClose}>
        <Login />
      </Modal>
      <Weather />
    </header>
  );
}
