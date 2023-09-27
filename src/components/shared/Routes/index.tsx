import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


import { Home as AdminHome } from '../../../views/admin/home'
import { Test } from '../../../views/admin/test'


export const Routes = () => {
  return (
    <Router>  
      <Switch>
        <Route exact={true} path="/admin/home">
          <AdminHome />
        </Route>
        <Route exact={true} path="/components">
          <Test />
        </Route>
        <Route>
          <div> 404 </div>
        </Route>
      </Switch>
    </Router>
  )
}