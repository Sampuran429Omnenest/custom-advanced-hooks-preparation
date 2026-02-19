import Counter from "./components/Counter"
import FocusInput from "./components/FocusInput"
import HomePage from "./components/HomePage"
import NameSaver from "./components/NameSaver"
import Navbar from "./components/Navbar"
import PreviousValue from "./components/PreviousValue"
import ThemePage from "./components/ThemePage"
import { ThemeProvider } from "./context/ThemeContext"
import { UserProvider } from "./context/UserContext"

function App() {
  return (
    <>
    <UserProvider>
      <ThemeProvider>
      <Navbar/>
     <HomePage/>
      <Counter/>
      <NameSaver/>
       <ThemePage/>
      <FocusInput/>
    <PreviousValue/>
    </ThemeProvider>
    </UserProvider>
    </>
  )
}

export default App
