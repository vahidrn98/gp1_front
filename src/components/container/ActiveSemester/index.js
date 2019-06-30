import React, { Component } from 'react';
import { StyleSheet, View, Text , Image , FlatList , Dimensions , Animated , Easing , Modal ,TouchableOpacity , TouchableHighlight , TouchableWithoutFeedback } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import LinearGradient from 'react-native-linear-gradient';
import {Card} from '../../presentational/index'
import { Overlay } from 'react-native-router-flux';
import {styles,cardShadow} from './styles';
import {BoxShadow, BorderShadow} from 'react-native-shadow';
import { Actions } from 'react-native-router-flux'; 
import axios from 'axios'
import { all } from 'rsvp';

const {width , height} = Dimensions.get('window')

export default class ActiveSem extends Component{
  constructor(){
    super()
    this.state = {
      allSemsObject : [] ,
      activeSemObject : '' ,
      activeSemValue : "" ,
      modalVisible: false,
      semMenuHeight : new Animated.Value(80) ,
      semesterCourses : [] ,
      activeSemPk : 0
    }
    console.log(width,height)
    //launch animations

  }
  setModalVisibility(visibility) {
    this.setState({modalVisible: visibility});
  }

  newSemChoose(newSem){
    this.setState({
      modalVisible: false ,
      activeSemValue : newSem.title ,
      
      
    }); 
    this.getUserCourses(newSem.pk)   
  }

  openCourseStudents(code){
    if(code==6){
      Actions.courseStudents() ;
    }
    if(code==1){
      Actions.uChecklist();
    }
    return
  }   

  getUserTerms = async()=> {
    // global.token = glotoken
    let headers = {
      "Authorization":`Token ${global.token}`
    }
    axios.get("http://theprojects.ir/api/v1/carrier/terms",{headers : headers})
    .then(async(response)=>{
      let allSems = response.data
      await this.setState({
        allSemsObject : allSems
      })
      let latestSemester  = response.data.slice(-1).pop()
      await this.setState({
          activeSemValue : latestSemester.title ,
          activeSemPk : latestSemester.pk ,
          activeSemObject : latestSemester , 
      })

    })
    .catch((err)=>{
        console.log(err)
    })

  }
  getUserCourses = async(pk)=>{
    if(pk==null){
      pk=3  // we got to do something about this
    }
    pkStr = String(pk)
    console.log(pkStr)
    let headers = {
      "Authorization":`Token ${global.token}`
    }
    axios.get("http://theprojects.ir/api/v1/carrier/terms/" + pkStr , {headers : headers})  //we have problem here , 2 must be variable
    .then(async(response)=>{
      await this.setState({
        semesterCourses : response.data
      })
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  openCourseDetails(courseId){
    global.courseId = courseId
    Actions.courseDetails()
  }
  componentWillMount(){
    this.getUserTerms()
    this.getUserCourses()
  }

  render(){ 
  
    return (
      <View style ={styles.container}>

        <View style = {styles.profile}>
        
         <View style = {styles.profilePicContainer}>
            <TouchableOpacity>
              <Animated.Image source={{uri: global.picPath}}
                style ={styles.profilePic}></Animated.Image>
            </TouchableOpacity>
          </View>
          
          <View style = {styles.profileNameContainer}>
            <Text style ={styles.profileName}>{global.fullName}</Text>
          </View>
          
          <View style = {styles.backButtonContainer}>
            <TouchableOpacity onPress={()=>Actions.popTo('home')}>
              <Image source={require('../../../assests/image/back.png')} style ={styles.backButton}></Image>
            </TouchableOpacity>
          </View>

        </View>

        <View style = {styles.semester}>

          <View style={styles.semContainer}>
            <Text style={styles.activeSemTxt}>نیم سال فعال :</Text>
            <TouchableOpacity onPress={()=>this.setModalVisibility(true)}><Text style={styles.activeSemTxt}>{this.state.activeSemValue}</Text></TouchableOpacity>
          </View>
                      

          <View style={styles.activeSemContainer}>
            <Text style={styles.activeSemTxt}>چک لیست نیمسال تحصیلی فعال</Text>
          </View>
          
        </View>

        
        <View style = {styles.tableHeader}>
          <View  style ={styles.titleContainer} ><Text style={{fontSize:.048*width,...styles.itemText}}>عنوان درس</Text></View>
          <View style ={styles.smallContainer}><Text style={{fontSize:.048*width,...styles.itemText}}>واحد</Text></View>
          <View style ={styles.smallContainer}><Text style={{fontSize:.048*width,...styles.itemText}}>گروه</Text></View>
          <View style ={styles.statusContainer}><Text style={{fontSize:.048*width,...styles.itemText}}>وضعیت کلاس</Text></View>
        </View>



        <Animated.View style={styles.menu}>
        <FlatList
          showsVerticalScrollIndicator={false} 
          data={this.state.semesterCourses}
          renderItem={({item})=>(
              <TouchableOpacity onPress ={()=>this.openCourseDetails(item.course.field_course.title)}> 
                <Animated.View style={styles.cards}>
                <View style ={styles.titleContainer}>
                  <Text style={{fontSize:(item.course.field_course.title.length > 14) ? (.038*width) : (.048*width) ,...styles.itemText}}>{item.course.field_course.title}</Text>
                </View>

                <View style ={styles.smallContainer}>
                  <Text style={{fontSize:.048*width ,...styles.itemText}}>{item.course.field_course.credit}</Text>
                </View>

                <View style ={styles.smallContainer}>
                  <Text style={{fontSize:.048*width ,...styles.itemText}}>{item.course.section_number}</Text>
                </View>            
                
                <View style ={styles.statusContainer}>
                  <Text style={{fontSize:(item.course.grades_status.length > 14) ? (.036*width) : (.043*width) ,...styles.itemText}}>{item.course.grades_status}</Text>
                </View>
                  
                </Animated.View>
              </TouchableOpacity>
          )}
        />
        </Animated.View>


        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            
          }}>
          <TouchableWithoutFeedback onPress={()=>this.setModalVisibility(false)}>
          <View style={{position:'absolute',height:height ,width : width , left:0 , top:0 ,backgroundColor: this.props.transparent ? 'transparent' : 'rgba(0,0,0,0.5)'}}>
          </View>
          </TouchableWithoutFeedback>
          
          <View style={styles.semChooser}>
            <FlatList
                  scrollEnabled ={this.state.semesterScrollable}
                  showsVerticalScrollIndicator={false} 
                  data={this.state.allSemsObject}
                  renderItem={({item})=>(
                      <TouchableOpacity onPress={()=>this.newSemChoose(item)}> 
                        <View style = {{height :.07 * height}}>
                          <Text style={styles.semChooserText}>{item.title}</Text>
                        </View>
                          
                      </TouchableOpacity>
                  )}
                />
          </View>
  
        </Modal>    
      </View>
    );
  }
}
    