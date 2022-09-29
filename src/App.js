import "./App.scss"
import Header from "./components/header"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Leadership from "./pages/leadership"
import Calendar from "./pages/calendar"
import Footer from "./components/footer"

function App() {
  const url = process.env.PUBLIC_URL
  return (
    <>
      <div className="page-content">
        <Router baseurl={url}>
          <Header url={url} />
          <Switch>
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/leadership"} component={Leadership} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/calendar"} component={Calendar} />
            <Route exact path={"/"} component={Home} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  )
}

export default App
