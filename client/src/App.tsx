import { Suspense } from "react"

import { Header, Footer, Loader, ScrollToTop } from "./Components"

import { AppRoutes } from "./Routes"

const App = () => {
  return (
    <div className="App">
      <Header />

      <main id="main">
        <Suspense fallback={<Loader />}>
          <AppRoutes />
        </Suspense>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
