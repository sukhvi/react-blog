import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePost from "../views/CreatePost";
import Home from "../views/Home";
import PostDetail from "../views/PostDetail";
import NavBar from "./NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <CreatePost />
          </Route>
          <Route path="/posts/:id">
            <PostDetail />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
};

export default App;
