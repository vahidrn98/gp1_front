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

      activeSemObject : '' ,
      activeSemValue : "انتخاب" ,
      termModalVisible: false,
      dptModalVisible : false ,
      semMenuHeight : new Animated.Value(80) ,
      chosenDpt : '-' ,
      chosenDptKey : 0 ,
      chosenTerm : '-' ,
      chosenTermKey : 0 ,
      schedule : [] ,
      departments : {} , 
      terms : {} ,
    }
    console.log(width,height)
    //launch animations

  }
  setTermModalVisibility(visibility) {
    this.setState({termModalVisible: visibility});
  }
  setDptModalVisibility(visibility){
    this.setState({dptModalVisible: visibility});
  }


  UpdateSchedule = async(termKey , dptKey)=>{
      termKeyStr = String(termKey) 
      dptKeyStr = String(dptKey)
      let headers = {
        "Authorization":`Token ${global.token}`
      }
      axios.get("http://theprojects.ir/api/v1/courses_schedule/" + termKeyStr + "/" + dptKeyStr , {headers : headers})  //we have problem here , 2 must be variable
      .then(async(response)=>{
        await this.setState({
          schedule : response.data
        })
        // console.log(this.state.schedule)
      })
      .catch((err)=>{
          console.log(err)
      })
  }
  componentDidMount(){
    this.getDepts()
    this.getTerms()
    
  }
  getDepts  = async()=> {
    let headers = {
      "Authorization":`Token ${global.token}`
    }
    axios.get("http://theprojects.ir/api/v1/departments/"  , {headers : headers})  
    .then(async(response)=>{
      await this.setState({
        departments : response.data
      })
      console.log(this.state.departments[0].title)
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  getTerms  = async()=>{
    let headers = {
      "Authorization":`Token ${global.token}`
    }
    axios.get("http://theprojects.ir/api/v1/terms/"  , {headers : headers})  
    .then(async(response)=>{
      await this.setState({
        terms : response.data
      })
      
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  termUpdate(pk , title ){
    this.setState({
      chosenTermKey : pk ,
      chosenTerm : title ,
    })
    this.setTermModalVisibility(false)
  }
  dptUpdate(pk , title ){
    this.setState({
      chosenDptKey : pk ,
      chosenDpt : title ,
    })
    this.setDptModalVisibility(false)
  }

  render(){ 
    data = [] 
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
            <Text style={styles.activeSemTxt}>نیم سال  :</Text>
            <TouchableOpacity onPress={()=>this.setTermModalVisibility(true)}><Text style={styles.activeSemTxt}>{this.state.chosenTerm}</Text></TouchableOpacity>
          </View>
                      

          <View style={styles.semContainer}>
            <Text style={styles.activeSemTxt}>بخش</Text>
            <TouchableOpacity onPress={()=>this.setDptModalVisibility(true)}><Text style={styles.activeSemTxt}>{this.state.chosenDpt}</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.UpdateSchedule(this.state.chosenTermKey , this.state.chosenDptKey)}><Text style={styles.confirmTxt}>تایید</Text></TouchableOpacity>
          </View>
          
        </View>

        
        <View style = {styles.tableHeader}>
          <View  style ={styles.titleContainer} ><Text style={{fontSize:.048*width,...styles.itemText}}>عنوان درس</Text></View>
          <View style ={styles.smallContainer}><Text style={{fontSize:.048*width,...styles.itemText}}>واحد</Text></View>
          <View style ={styles.smallContainer}><Text style={{fontSize:.048*width,...styles.itemText}}>گروه</Text></View>
          <View style ={styles.statusContainer}><Text style={{fontSize:.048*width,...styles.itemText}}>شماره درس</Text></View>
        </View>



        <Animated.View style={styles.menu}>
        <FlatList
          showsVerticalScrollIndicator={false} 
          data={this.state.schedule}
          renderItem={({item})=>(
              <TouchableOpacity > 
                <Animated.View style={styles.cards}>
                <View style ={styles.titleContainer}>
                  <Text style={{fontSize:(item.field_course.title.length > 14) ? (.038*width) : (.048*width) ,...styles.itemText}}>{item.field_course.title}</Text>
                </View>

                <View style ={styles.smallContainer}>
                  <Text style={{fontSize:.048*width ,...styles.itemText}}>{item.field_course.credit}</Text>
                </View>

                <View style ={styles.smallContainer}>
                  <Text style={{fontSize:.048*width ,...styles.itemText}}>{item.section_number}</Text>
                </View>            
                
                <View style ={styles.statusContainer}>
                  <Text style={{fontSize:(item.field_course.serial_number.length > 14) ? (.036*width) : (.043*width) ,...styles.itemText}}>{item.field_course.serial_number}</Text>
                </View>
                  
                </Animated.View>
              </TouchableOpacity>
          )}
        />
        </Animated.View>


        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.termModalVisible}
          onRequestClose={() => {
          //modal for term
          }}>
          <TouchableWithoutFeedback onPress={()=>this.setTermModalVisibility(false)}>
          <View style={{position:'absolute',height:height ,width : width , left:0 , top:0 ,backgroundColor: this.props.transparent ? 'transparent' : 'rgba(0,0,0,0.5)'}}>
          </View>
          </TouchableWithoutFeedback>
          
          <View style={styles.semChooser}>
            <FlatList
                  scrollEnabled ={true}
                  showsVerticalScrollIndicator={false} 
                  data={this.state.terms}
                  renderItem={({item})=>(
                      <TouchableOpacity onPress={()=>this.termUpdate(item.pk , item.title)}> 
                        <View style = {{height :.07 * height}}>
                          <Text style={styles.semChooserText}>{item.title}</Text>
                        </View>
                          
                      </TouchableOpacity>
                  )}
                />
          </View>
  
        </Modal>    



        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.dptModalVisible}
          onRequestClose={() => {
          //modal for department
          }}>
          <TouchableWithoutFeedback onPress={()=>this.setDptModalVisibility(false)}>
          <View style={{position:'absolute',height:height ,width : width , left:0 , top:0 ,backgroundColor: this.props.transparent ? 'transparent' : 'rgba(0,0,0,0.5)'}}>
          </View>
          </TouchableWithoutFeedback>
          
          <View style={styles.semChooser}>
            <FlatList
                  scrollEnabled ={true}
                  showsVerticalScrollIndicator={false} 
                  data={this.state.departments}
                  renderItem={({item})=>(
                      <TouchableOpacity onPress={()=>this.dptUpdate(item.pk , item.title)}> 
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
    