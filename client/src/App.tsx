import { Suspense } from "react"

import { Header, Footer, Loader } from "./Components"

import { AppRoutes } from "./Routes"

const App = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
          <AppRoutes />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default App
