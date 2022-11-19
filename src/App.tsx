import { Suspense } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { SWRConfig } from "swr"
import { Layout, Spinner } from "./components"
import { Provider } from "./context"
import { Home, TxtForm, Txt } from "./pages"
import { fetcher } from "./services"
import { RoutesWithNotFound } from "./utils"

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Provider>
          <SWRConfig value={{ fetcher }}>
            <Layout>
              <RoutesWithNotFound>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<TxtForm />} />
                <Route path="/edit" element={<TxtForm />} />
                <Route path="/:title" element={<Txt />} />
              </RoutesWithNotFound>
            </Layout>
          </SWRConfig>
        </Provider>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
