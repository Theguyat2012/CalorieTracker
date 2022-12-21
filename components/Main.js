import React, { useState } from "react";

import Equation from "./Equation";
import EquationDate from "./EquationDate";
import Calories from "./Calories";


const Main = () => {
    const [limit, setLimit] = useState(0);
    const [added, setAdded] = useState([]);

    return (
        <>
            <Equation limit={limit} added={added} />
            <EquationDate />
            <Calories added={added} setAdded={setAdded} limit={limit} setLimit={setLimit}/>
        </>
    );
}

export default Main;
