import { BrowserRouter as Router,  Switch} from 'react-router-dom';
import RouteComponent from './route/RouteComponents';

function App() {
  return (
    <Router className="App">
      <Switch>
        <RouteComponent />
      </Switch>
    </Router>
  );
}

export default App;
