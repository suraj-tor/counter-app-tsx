import React from "react";

const Home = () => {
    return (
        <>
            {/* <h1 className="text-center">Home Component</h1> */}
            <div className="card my-4">
                <div className="row">
                    <div className="col text-center">
                        <div className="card-img text-center">
                            <img className="w-25 h-25" src="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/g/g/3/-original-imaggbrccwsnygar.jpeg?q=70" alt="pixel 6a" />
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="card-body">
                            <div className="card-title fs-4 fw-bold">Google Pixel 6a</div>
                            <span className="fs-5 fw-bold">Rs. 42999</span>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <button className="btn btn-outline-danger">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
