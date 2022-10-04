import React, { useState } from "react"
import { PersonIcon } from "../Icon/PersonIcon";
import { TeamIcon } from "../Icon/TeamIcon";
import './ThirdForm.css'

const ThirdForm = () => {
    const [soloWorkspace,setSoloWorkspace] = useState(false)
    const [teamWorkspace,setTeamWorkspace] = useState(false)
    const [soloStyle,setSoloStyle] = useState("card")
    const [teamStyle,setTeamStyle] = useState("card")
    const handleSoloWorkspace = () => {
        setSoloWorkspace(true)
        setTeamWorkspace(false)
        setSoloStyle("card cardColor")
        setTeamStyle("card")
    }

    const handleTeamWorkspace = () => {
        setSoloWorkspace(false)
        setTeamWorkspace(true)
        setSoloStyle("card")
        setTeamStyle("card cardColor")
    }

    return(
        <div>
            <div className="text-center h3"><b>How are you planning to use Eden?</b>
            </div>
            <div className='fadedText text-center'><small className="text-muted">We'll streamline your setup experience accordingly.</small></div>
            <div className='secondStepDiv'>
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <div class={soloStyle} onClick={handleSoloWorkspace}>
                                <div class="card-body">
                                        <PersonIcon/>
                                        <h6 class="card-subtitle mb-2">For myself</h6>
                                        <span><small className="text-muted">Write better. Think more clearly. Stay organized.</small></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                        <div class={teamStyle} onClick={handleTeamWorkspace}>
                                <div class="card-body">
                                    <TeamIcon/>
                                        <h6 class="card-subtitle mb-2">With my team</h6>
                                            <span><small className="text-muted">Wikis, docs, tasks {"&"} projects, all in one place.</small></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ThirdForm