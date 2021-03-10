import "./App.css";
import Header from "./components/header";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Events from "./pages/events";
import Leadership from "./pages/leadership";
import Footer from "./components/footer";

function App() {
  const url = process.env.PUBLIC_URL;
  return (
    <div className="main-app">
      <Router baseurl={url}>
        <Header url={url} />
        <Switch>
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/leadership"} component={Leadership} />
          <Route exact path={"/events"} component={Events} />
          <Route exact path={"/contact"} component={Contact} />
          <Route exact path={"/"} component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
