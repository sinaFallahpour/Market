import React from "react";
import "./styles/base.css";
import "./styles/responsive.css";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListProducts from "./pages/ListProducts";

// import { Navbar, Nav } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" component={ListProducts}></Route>
          {/* <Route path="/about" component={About}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/" component={Home}></Route> */}
          <NotFound />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
