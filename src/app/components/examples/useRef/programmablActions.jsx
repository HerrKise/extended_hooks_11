import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammablActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                ref={inputRef}
                className="form-control"
                id="email"
                type="email"
            ></input>
            <button className="btn btn-primary" onClick={handleClick}>
                Focus
            </button>
            <button className="btn btn-secondary" onClick={handleClickWidth}>
                Width 100px
            </button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
