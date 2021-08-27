import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../HomePage/HomePage'
import Franqueados from '../Franqueados/Franqueados'
import Contato from '../Contato/Contato'



const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path = '/' />
        <Route exact component={Franqueados} path = '/Franqueados' />
        <Route exact component={Contato} path = '/Contato' />
      </Switch>
    </Router>
  )
}

export default Routes;