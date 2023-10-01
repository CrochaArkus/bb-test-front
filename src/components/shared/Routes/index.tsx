import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


import { Home as AdminHome } from '../../../views/admin/home'
import { Categories as AdminCategories } from '../../../views/admin/categories'
import { Test } from '../../../views/admin/test'
import { SubCategory } from '../../../views/admin/sub-category'
import { Content } from '../../../views/admin/content'
import { NewContent } from '../../../views/admin/new-content'


export const Routes = () => {
  return (
    <Router>  
      <Switch>
        <Route exact={true} path="/admin/home">
          <AdminHome />
        </Route>
        <Route exact={true} path="/admin/content">
          <Content />
        </Route>
        <Route exact={true} path="/admin/content/new">
          <NewContent />
        </Route>
        <Route exact={true} path="/admin/categories">
          <AdminCategories />
        </Route>
        <Route exact={true} path="/admin/categories/sub-category">
          <SubCategory />
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