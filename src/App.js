import './App.css';
import { Stepper } from './Component/Steps/Stepper';
import FirstForm from './Component/Steps/FirstForm';
import SecondForm from './Component/Steps/SecondForm';
import ThirdForm from './Component/Steps/ThirdForm'
import FourthForm from './Component/Steps/FourthForm';
import { useState } from 'react';
import logo from './Images/logo.JPG'

const App = () => {
  const [step,setStep] = useState(1)
  const labelArray = ['Step 1', 'Step 2', 'Step 3', 'Step 4']
  const [currentStep, updateCurrentStep] = useState(1);
  const [data,setData] = useState({})
  const [isLastStep,setLastStep] = useState(false)
 
  const handleUpdateData = (data) => {
    setData(data)
  }
  const updateStep = () => {
   
    if(step<3){
    updateCurrentStep(currentStep+1);
    setStep(step+1)
    setLastStep(false)
    }
    else{
      updateCurrentStep(currentStep+1);
    setStep(step+1)
      setLastStep(true)
    }
    console.log(step)
  }
  console.log(data)
  return (
   <div className='App'>
    <div className="text-center h3 eden">
      <img className='logo' src={logo} />  
          <b>Eden</b>
    </div>
    <div className='stepper'>
      <Stepper labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></Stepper>
     </div>
      {step===1?<FirstForm handleUpdateData={handleUpdateData}/>:""}
      {step===2?<SecondForm/>:""}
      {step===3?<ThirdForm/>:""}
      {step===4?<FourthForm/>:""}
      {!isLastStep?
      <div className='bttnDiv'>
      <button type="button" onClick={updateStep} className="btn btn btn-primary btn-sm btn-block">Create Workspace</button>
      </div>
      :
      <div className='bttnDiv'>
      <button type="button" className="btn btn btn-primary btn-sm btn-block">Launch Eden</button>
      </div>
      }
   </div>
  );
}

export default App;
