import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledForm from './ControlledForm';
import UncontrolledForm from './UncontrolledForm';
import Multiple from './Multiple';
import ValidatedForm from './ValidatedForm';

function App() {
  

  return (
    <>

<Multiple />
<UncontrolledForm />
<ValidatedForm />
    </>
  )
}

export default App
