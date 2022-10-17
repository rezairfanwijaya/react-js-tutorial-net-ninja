import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './Create';
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
            <Route path="/create">
              <CreateBlog />
            </Route>

            {/* untuk route yang ada params nya penulisan nya seperti ini */}
            <Route path="/blog/:title" component={BlogDetail} />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
