import React from 'react'
import { HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Home from './pages/home'
import User from './pages/user'
export default class IRouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Switch> 
                        
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home} />
                                    <Route path="/User" component={User} />
                                    
                                </Switch>
                            </Admin>         
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}