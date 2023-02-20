import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'

export function SwitchTheme() {
  const [theme, setTheme] = useState('')
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  useEffect(() => {
    if((theme === 'dark' ||theme === '') || (!theme && systemTheme)){
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  },[theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'ligth' : 'dark')
  }
  return (
    <Switch
      checked={theme}
      onChange={handleThemeSwitch}
      className={'h-10 w-10 rounded-full'}>
      <span className={` ${theme === 'dark' ? 'text-orange':'text-purple'} flex justify-center items-center w-full h-full`}><ion-icon size="large" name={`${theme === 'dark' ? 'sunny': 'moon'}`}></ion-icon></span>
    </Switch>
  )
}