import React from "react";

const Welcome = (props) => {
    return (
        <div>
            {props.name
                ? "Welcome back, " + props.name
                : "You are not logged in yet."}
        </div>
    );

}
export default Welcome;