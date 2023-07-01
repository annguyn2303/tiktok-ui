import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/components/Layout'
import '~/App.css'

function App() {

  return (
    // ctrl shift P để Wrap
    <Router>
      <div className="text-6xl">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.componet
            return <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
