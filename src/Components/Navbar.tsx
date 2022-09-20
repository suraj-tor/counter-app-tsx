import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid my-1">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className="nav-link active fs-3" aria-current="page">
                            Cart
                        </div>
                    </div>
                </div>
                <div className="text-white mx-4">
                    <i className="bi bi-cart fs-3"></i><span className="badge rounded-pill bg-danger">4</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
