import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../HomePage/HomePage'
import Mapa from '../Mapa/mapa'
import Franqueados from "../components/Franqueado/index";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path = '/' />
        <Route exact component={Mapa} path = '/Mapa' />        
        <Route exact component={Franqueados} path = '/Franqueados' />
      </Switch>
    </Router>
  )
}

export default Routes;