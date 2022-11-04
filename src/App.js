import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CommentList from './CommentList';
import UserList from './UserList';
import UserDetail from './UserDetail';
import BlogList from './BlogList';
import BlogDetail from './BlogDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/commentar">
              <CommentList />
            </Route>

            <Route path="/user">
              <UserList />
            </Route>

            <Route path="/user/detail/:id" component={UserDetail}/>

            <Route path="/blogs">
              <BlogList/>
            </Route>

            <Route path={"/blog/:id"} component={BlogDetail} />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
