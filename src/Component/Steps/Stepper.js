import React from "react";
import Steps from "./Steps";

export const Stepper = (props) => {
    return (
        <div className="stepWrapper">
            {props.labelArray.map((item, index) => <Steps key={index} index={index} label={item} updateStep={props.updateStep} selected={props.currentStep === index + 1}></Steps>) }
        </div>
    )
}