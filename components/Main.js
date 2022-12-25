import React, { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import Equation from "./Equation";
import EquationDate from "./EquationDate";
import Calories from "./Calories";


const Main = () => {
    const [limit, setLimit] = useState(0);
    const [added, setAdded] = useState([]);

    const limitKey = 'limit';
    const addedKey = 'added';

    useEffect(() => {
        getData(limitKey, 0).then((data) => setLimit(data));
        getData(addedKey, []).then((data) => setAdded(data));
    }, []);

    return (
        <>
            <Equation limit={limit} added={added} />
            <EquationDate />
            <Calories setData={setData} addedKey={addedKey} added={added} setAdded={setAdded} limitKey={limitKey} limit={limit} setLimit={setLimit} />
        </>
    );
}

const getData = async (key, defaultValue) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : defaultValue;
    } catch(e) {
        console.log(e);
        return defaultValue;
    }
}

const setData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch(e) {
        console.log(e);
    }
}

export default Main;
