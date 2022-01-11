import React, { useState } from "react";

const withLogin = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));
    const onLogin = () => {
        localStorage.setItem("user", "user");
        setIsAuth(true);
    };
    const onLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(false);
    };
    return (
        <Component
            {...props}
            onLogin={onLogin}
            onLogOut={onLogOut}
            isAuth={isAuth}
        />
    );
};

export default withLogin;
