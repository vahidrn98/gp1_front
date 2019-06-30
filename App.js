import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from "./src/components/container/Login/index"
import Home from "./src/components/container/Home/index"
import Pchecklist from "./src/components/container/PChecklist/index"
import CourseDetails from "./src/components/container/CourseDetails/index"
import Karname from "./src/components/container/Karname/index"
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';

export default class App extends Component  {
  render() {
    return (
      <Router>
        <Stack key="root">
         <Scene key="login" component={Login} hideNavBar = {true}/>
         <Scene key="home" component={Home} hideNavBar = {true} />
         <Scene key="pchecklist" component={Pchecklist} hideNavBar = {true} />
         <Scene key="coursedetails" component={CourseDetails} hideNavBar = {true} />
         <Scene key="karname" component={Karname} hideNavBar = {true} />
        </Stack>
      </Router>
    );
  }
}

