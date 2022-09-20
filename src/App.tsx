import React from "react";
import Navbar from "./Components/Navbar";
import HomeContainer from "./Containers/HomeContainer";

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <HomeContainer />
            </div>
        </>
    );
};

export default App;
