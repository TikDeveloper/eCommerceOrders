import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



import Header from './header/Header';
import LeftPanel from './leftPanel/LeftPanel';
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/orders/Orders';



function App() {

  

  return (
    <Router>
      <div className='app'>
        
          <Header/>

          <div className='layout'>
            <div>
              <LeftPanel/>

              <div className='layoutForPages'>
                <Switch>
                  <Route exact path='/' render={()=>'Welcome'}/>
                  <Route path='/dashboard'>
                    <Dashboard />
                  </Route>
                  <Route path='/orders'>
                    <Orders />
                  </Route>
                  <Route  path='/products' render={()=>'Products'}/>
                  <Route render={()=><h1>Page Not Found</h1>}/>
                </Switch>
              </div>
        
            </div>
          </div>
        

          
        
      </div>
    </Router>
  )
}

export default App;
