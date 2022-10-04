import React, { useState } from 'react'
import './SecondForm.css'

const SecondForm = () => {
    const [workspaceName, setWorkspaceName] = useState("")
    const [workspaceURL, setWorkspaceURL] = useState("")
    const handleWorkspaceName = (e) => {
        setWorkspaceName(e.target.value)
    }
   
    const handleWorkspaceURL = (e) => {
        setWorkspaceURL(e.target.value)
    }
 
    return(
        <div>
            <div className="text-center h3"><b>Let's setup a home for all your work</b>
        </div>
        <div className='fadedText text-center'><small className="text-muted">You can always create another workspace later.</small></div>
        <div className='secondStepDiv'>
        <form>
        <div className="form-group">
          <label for="workspaceName"><small>Workspace Name</small></label>
          <input type="text" className ="inputBox form-control" value={workspaceName} onChange={handleWorkspaceName} placeholder="Eden"/>
        </div>
        <br></br>
        <div className="form-group">
          <label for="displayName"><small>Workspace URL <small className='text-muted'> (optional)</small></small></label>
          <div class="inputBox input-group mb-3">
          <span class="input-group-text" id="basic-addon3">www.eden.com/</span>
          <input type="text" class="form-control"placeholder='Example' value={workspaceURL} onChange={handleWorkspaceURL}/>
        </div>
        </div>
        <br></br>
      </form>
      </div>
      </div>
    );

}

export default SecondForm;