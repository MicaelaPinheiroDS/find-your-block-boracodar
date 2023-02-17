import { useState } from 'react'
import { Header } from './components/header'
import { ContentCornivalGroups } from './components/contentCarnivelGroups'
export function App() {

  return (
    <div className='dark:bg-black dark:text-white'>
        <Header />
        <ContentCornivalGroups />
    </div>

  )
}

