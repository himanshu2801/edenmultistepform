import {TextField} from '@material-ui/core'
import React, { useState } from 'react'
import './FirstForm.css'

const FirstForm = () => {
    const [fullName, setFullName] = useState("")
    const [displayName, setDisplayName] = useState("")
    const handleFullName = (e) => {
        setFullName(e.target.value)
        
    }
    
    const handleDisplayName = (e) => {
        setDisplayName(e.target.value)
    }
    localStorage.setItem("fullName",fullName)
    return(
      <div>
         <div className="text-center h3"><b>Welcome! First things first...</b>
        </div>
        <div className='fadedText text-center'><small className="text-muted">You can always change them later.</small></div>
        <div className='firstStepDiv'>
       <form>
        <div class="form-group">
          <label for="fullName"><small>Full Name</small></label>
          <input type="name" className ="inputBox form-control" value={fullName} onChange={handleFullName} placeholder="Steve Jobs"/>
        </div>
        <br></br>
        <div class="form-group">
          <label for="displayName"><small>Display Name</small></label>
          <input type="name" className="inputBox form-control" value={displayName} onChange={handleDisplayName} placeholder="Steve"/>
        </div>
        <br></br>
      </form>
      </div>
      </div>
    );

}

export default FirstForm;