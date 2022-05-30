
import Menu from "./components/Menu";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import  Department from "./components/Department";


import ViewDepartment from "./components/ViewDepartment";
import ViewAllDepartment from "./components/ViewAllDepartment";

import  DeleteDepartment from "./components/DeleteDepartment";






 function App() {
  return (
    <div >
      <Router>
     <Menu/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/service" component={Service}/>
     <Route exact path="/department" component={Department}/>

    
     <Route exact path="/view-department" component={ViewDepartment}/>
   
     <Route exact path="/Delete-department" component={DeleteDepartment}/>
 
     <Route exact path="/view-all-department"  component={ViewAllDepartment}/>
    
    
   
     </Router>
    </div>
  );
}

export default App;

