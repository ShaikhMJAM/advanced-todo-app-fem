import BgImage from "./components/BgImage"
import { TodoWrapper } from "./components/TodoWrapper"
import { useTheme } from "./context/theme-context"

const App = () => {
  const { theme } = useTheme()
  return (
    <main className="app" data-theme={theme}>
      <BgImage />
      <TodoWrapper />
    </main>
  )
}

export default App
