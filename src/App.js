import { Route } from "react-router-dom/cjs/react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/about" component={About} exact></Route>
      <Route path="/login" component={Login} exact></Route>
      <Route component={PageNotFound}></Route>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
