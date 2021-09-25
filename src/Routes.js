import Forgot from "./Forgot";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Routes(){
return(
    <Router>
        <Route path="/" component={SignIn} exact />
        <Route path="/forgot" component={Forgot} exact />  
    </Router>
)
}