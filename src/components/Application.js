import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard";

function Application() {
  const redirectToDashboard = () => <Redirect to="/app" />
  return (
    <Router>
      <div className="Application">
        <div><Toaster position="bottom-right"/></div>
        <div className="Application__main">
          <Switch>
            <Route path='/app' component={toDashboard} />
            <Route exact path='/' render={redirectToDashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const toDashboard = () => <Dashboard />

export default Application;
