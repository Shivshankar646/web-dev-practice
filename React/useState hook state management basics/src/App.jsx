import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from "./Counter";
import UserInfo from "./UserInfo";
import LiveInput from './LiveInput';

function App() {
  return (
    <div>
      <Counter />
      <UserInfo />
      <LiveInput />
    </div>
  );
}

export default App;

