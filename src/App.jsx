import { useState } from 'react'
import './App.css'
import Header from './component/header/header'
import Blogs from './component/blog/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'

function App() {
  

  return (
    <>
      <Header></Header>
      <main className='m-10 flex justify-between gap-4'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
