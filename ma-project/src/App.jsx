
import './App.css'
import Header from './Header'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import BackG from './backG'
import Contact_TEXT from './Contact_usTEXT'
import Khristine from './khristine'
import ManolongGMAIL from './manolong_Gmail'
import Ramirez from './ramirez'
import Jeann from './jeann'
import Clarence from './clarence'
import ManolongNumber from './manolong_number'
import Manolonglocation from './manolong_location'

import ClarenceGMAIL from './clarenceGMAIL'
import ClarenceNumber from './clarence_number'
import Clarencelocation from './clarence_location'

import NathanielGMAIL from './nathaneil_gmail'
import NathanielNumber from './ramirez_number'
import Nathaneillocation from './ramirez_location'

import KhristineGMAIL from './khristine_gmail'
import KhristineNumber from './khristine_number'
import Khristinelocation from './khristine_location'


import JeannGMAIL from './jeann_GMAIL'
import JeannNumber from './jeann_number'
import Jeannlocation from './jeann_location'

import Teams from './teams'
import Project_of_clarence from './project_page_clarence'
import Project_of_manolong from './project_page_manolong'
import Project_of_ramirez from './project_page_nathaneil'
import Project_of_lining from './project_page_lining'
import Project_of_desalit from './project_page_desalit'

import Home_page from './home_page'
import About_page from './about_page'

function App() {


  return (
    <Router>
    

    <Switch>

      
        <Route exact path="/">
            <BackG />
        </Route>

        <Route exact path="/teams">
          <Teams />
        </Route>


        <Route exact path="/khristine">
            <Khristine />
        </Route>
        <Route exact path="/manolong_Gmail">
            <ManolongGMAIL />
        </Route>

        <Route path="/ramirez">
          <Ramirez />
        </Route>

        <Route path="/jeann">
          <Jeann />
        </Route>

        <Route path="/clarence">
          <Clarence />
        </Route>

        <Route path="/manolong_Number">
          <ManolongNumber />
        </Route>

        <Route path="/manolongLocation">
          <Manolonglocation />
        </Route>

        <Route path="/clarenceGMAIL">
          <ClarenceGMAIL />
        </Route>

        <Route path="/clarenceNUMBER">
          <ClarenceNumber />
        </Route>

        <Route path="/clarenceLOCATION">
          <Clarencelocation />
        </Route>

        <Route path="/ramirezGMAIL">
          <NathanielGMAIL />
        </Route>

        <Route path="/ramirezNUMBER">
          <NathanielNumber />
        </Route>

        <Route path="/ramirezLOCATION">
          <Nathaneillocation />
        </Route>

        <Route path="/khristineGMAIL">
          <KhristineGMAIL />
        </Route>
        
        <Route path="/khristineNUMBER">
          <KhristineNumber />
        </Route>

        <Route path="/khristineLOCATION">
          <Khristinelocation />
        </Route>


        <Route path="/jeannGMAIL">
          <JeannGMAIL />
        </Route>

        <Route path="/jeannNUMBER">
          <JeannNumber />
        </Route>

        <Route path="/jeannLOCATION">
          <Jeannlocation />
        </Route>
        
        <Route path="/projectCLARENCE">
          <Project_of_clarence/>
        </Route>

        <Route path="/projectMANOLONG">
          <Project_of_manolong />
        </Route>

        <Route path="/projectRAMIREZ">
          <Project_of_ramirez />
        </Route>

        <Route path="/projectLINING">
          <Project_of_lining />
        </Route>
        <Route path="/projectDESALIT">
          <Project_of_desalit />
        </Route>
        <Route path="/home">
          <Home_page />
        </Route>
        <Route exact path="/about">
            <About_page />
        </Route>


    </Switch>
    
    </Router>
  );




}

export default App
