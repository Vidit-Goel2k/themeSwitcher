import './App.css'

import { useEffect,useState } from 'react';

import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
import { ThemeContextProvider,  } from './context/themeContext';



function App() {
  
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    console.log("dark theme called")
    setThemeMode("dark")
  }
  
  const lightTheme = () => {
    console.log("light theme called")
    setThemeMode("light")
  }

  // actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap items-center min-h-screen">
        <div className="w-full">
          <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
