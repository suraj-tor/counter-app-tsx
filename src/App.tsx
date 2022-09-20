import React from "react";
// import User from "./Components/User";
import HomeContainer from "./Containers/HomeContainer";

const App: React.FC = () => {
    return (
        <>
            <div className="text-center">
                <h1>App Component</h1>
            </div>
            {/* <User data={{ name: "Suraj Mahamuni", age: 26 }} /> */}
            <HomeContainer/>
        </>
    );
};

export default App;
