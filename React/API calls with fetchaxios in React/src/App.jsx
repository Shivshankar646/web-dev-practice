import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchExample from './FetchExample';
import AxiosExample from './AxiosExample';
import UserList from './UserList';

function App() {


  return (
    <>
     <FetchExample />
     <AxiosExample />
     <UserList />
    </>
  )
}

export default App
