import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header/header'
import Blogs from './component/blog/Blogs'

function App() {
  

  return (
    <>
      <Header></Header>
      <Blogs></Blogs>
    </>
  )
}

export default App
