import { lazy, Suspense } from "react"
import { HashRouter, Route } from "react-router-dom"
import { SWRConfig } from "swr"
import { Layout, Spinner } from "./components"
import { Provider } from "./context"
import { fetcher } from "./services"
import { RoutesWithNotFound } from "./utils"

const Home = lazy(() => import("./pages/Home/Home"))
const TxtForm = lazy(() => import("./pages/Form/Form"))
const Txt = lazy(() => import("./pages/Txt/Txt"))

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
                <Route path="/note/:id" element={<Txt />} />
              </RoutesWithNotFound>
            </Layout>
          </SWRConfig>
        </Provider>
      </HashRouter>
    </Suspense>
  )
}

export default App
