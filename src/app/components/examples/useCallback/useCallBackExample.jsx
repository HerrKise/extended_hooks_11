import React, { useCallback, useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withCallBack = useRef(0);
    const withOutCallBack = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        withOutCallBack.current++;
    }, [validateWithOutCallback]);

    useEffect(() => {
        validateWithCallback(data);
        validateWithOutCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render with Callback: {withCallBack.current}</p>
            <p>Render without Callback: {withOutCallBack.current}</p>
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                name="email"
                value={data.email || ""}
                className="form-control"
                id="email"
                type="email"
                onChange={handleChange}
            ></input>
        </CardWrapper>
    );
};

export default UseCallBackExample;
