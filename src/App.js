import routers from './routers/index'


import {
  // BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Router
} from 'react-router-dom'
import history from './history'

const App = () =>{
  return (
    <>
      {
        <Router history={history}  basename={"/mobile"}>
          <Switch>
            {routers.map((route,i)=>{
              return (
                <Route key = {i} {...route} exact={route.exact}/>
              )
            })}
            <Redirect from={'/'} to={'/home'}/>
            <Route path={'**'} component={require('./pages/404').default}/>
          </Switch>
        </Router>
      }
    </>
  )
}

export default App;
