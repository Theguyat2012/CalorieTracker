import React, { useState } from "react";

import Equation from "./Equation";
import EquationDate from "./EquationDate";
import Calories from "./Calories";


const Main = () => {
    const limit = 0;
    const [added, setAdded] = useState([]);

    return (
        <>
            <Equation limit={limit} added={added}/>
            <EquationDate />
            <Calories added={added} setAdded={setAdded} />
        </>
    );
}

export default Main;
