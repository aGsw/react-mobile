import routers from './routers/index'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

const App = () =>{
  return (
    <>
      {
        <Router  basename={"/mobile"}>
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
