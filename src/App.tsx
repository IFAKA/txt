import { lazy, Suspense } from "react"
import { HashRouter, Route } from "react-router-dom"
import { Layout, Spinner } from "./components"
import { ReloadPrompt } from "./config"
import { Provider } from "./context"
import { RoutesWithNotFound } from "./utils"

const Home = lazy(() => import("./pages/Home/Home"))
const Form = lazy(() => import("./pages/Form/Form"))
const Txt = lazy(() => import("./pages/Txt/Txt"))

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <ReloadPrompt />
      <HashRouter>
        <Provider>
          <Layout>
            <RoutesWithNotFound>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/note/:id" element={<Txt />} />
            </RoutesWithNotFound>
          </Layout>
        </Provider>
      </HashRouter>
    </Suspense>
  )
}

export default App
