import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cadastro } from './pages/Cadastro';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';

function App() {


  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/cadastro' exact component={Cadastro}/>
          <Route path='/dashboard' exact component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
