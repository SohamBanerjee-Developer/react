import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/themes";
import Card from "./components/Card";
import ThemeButtonn from "./components/ThemeButton";

function App() {
  const [ themeMode, setThemeMode] = useState('light')
  const darkTheme = ()=>{// if used same name we can define the function in the context from herwe as well
    setThemeMode('dark')
  }
  const lightTheme = ()=>{
    setThemeMode('light')
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <>
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButtonn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
