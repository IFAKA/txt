import { Suspense } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { SWRConfig } from "swr"
import { Layout, Spinner } from "./components"
import { Provider } from "./context"
import { Home, Write } from "./pages"
import { fetcher } from "./services"
import { RoutesWithNotFound } from "./utils"

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Provider>
        <SWRConfig value={{ fetcher }}>
          <BrowserRouter>
            <Layout>
              <RoutesWithNotFound>
                <Route path="/" element={<Home />} />
                <Route path="/write" element={<Write />} />
              </RoutesWithNotFound>
            </Layout>
          </BrowserRouter>
        </SWRConfig>
      </Provider>
    </Suspense>
  )
}

export default App
