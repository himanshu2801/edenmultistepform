import React, { useEffect, useState } from "react"
import { CheckIcon } from "../Icon/CheckIcon";
import './FourthForm.css'

const FourthForm = () => {
    const [name,setName] = useState("")
    useEffect(()=>{
        setName(localStorage.getItem("fullName"))
        if(name===""){
            setName("User")
        }
    },[])
    return(
        <div className="">
            <CheckIcon/>
            <div className="text-center h3"><b>Congratulations, {name}!</b></div>
            <div className='fadedText text-center'><small className="text-muted">You have completed onboarding, you can start using Eden!</small></div>
        </div>
    );

}

export default FourthForm