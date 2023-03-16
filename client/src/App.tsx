import { AppRoutes } from "./Routes"

import { Header, Footer } from "./Components"

import "./App.scss"

const App = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  )
}

export default App
