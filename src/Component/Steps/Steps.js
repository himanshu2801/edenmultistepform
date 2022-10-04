import React from "react";

const Steps = (props) => {
    return (
        <div className={"stepBlock" + (props.selected ? " selected" : "")}>
            <div className="circleWrapper">
                <div className="circle">
                    <div className="number">
                        <small>
                            {props.index + 1}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps