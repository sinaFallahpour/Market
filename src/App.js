import React from "react";
import "./styles/sign.css";
import "./styles/base.css";
import "./styles/responsive.css";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import { Navbar, Nav } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const ListProducts = React.lazy(() => import("./pages/ListProducts"));
const Login = React.lazy(() => import("./pages/Login"));

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <React.Suspense fallback={"loading..."}>
            <Route exact path="/" component={ListProducts}></Route>
            <Route path="/login" component={Login}></Route>

            {/* <Route path="/about" component={About}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/" component={Home}></Route> */}
            <NotFound />
          </React.Suspense>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
