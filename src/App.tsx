import { Suspense } from "react"
import { HashRouter, Route } from "react-router-dom"
import { SWRConfig } from "swr"
import { Layout, Spinner } from "./components"
import { Provider } from "./context"
import { Home, TxtForm, Txt } from "./pages"
import { fetcher } from "./services"
import { RoutesWithNotFound } from "./utils"

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <HashRouter>
        <Provider>
          <SWRConfig value={{ fetcher }}>
            <Layout>
              <RoutesWithNotFound>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<TxtForm />} />
                <Route path="/:title" element={<Txt />} />
              </RoutesWithNotFound>
            </Layout>
          </SWRConfig>
        </Provider>
      </HashRouter>
    </Suspense>
  )
}

export default App
