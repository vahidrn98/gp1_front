import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,Alert,TouchableHighlight , Animated, Easing, TouchableWithoutFeedback, Keyboard  , Dimensions, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {BoxShadow} from 'react-native-shadow';
import {Images} from '../../../common/image'
import {loginstyles,buttonShadow} from './styles';
import AsyncStorage from '@react-native-community/async-storage'
import { Actions } from 'react-native-router-flux';

export default class App extends React.Component {
  
  constructor () {
    super()
    this.state = {

        logoFadeValue: new Animated.Value(0),
        logoTop: new Animated.Value(Dimensions.get('window').height/100*28),
        logoWidth: new Animated.Value(Dimensions.get('window').width/100*70),
        logoHeight: new Animated.Value(Dimensions.get('window').height/100*44),
        logoLeft: new Animated.Value(Dimensions.get('window').width/100*30),
        logoScale: new Animated.Value(1.35),
        buttonBottom: new Animated.Value(-Dimensions.get('window').height/100*20),
        userOpacity: new Animated.Value(0),
        userWidth: new Animated.Value(Dimensions.get('window').width/100*70),
        passOpacity: new Animated.Value(0),
        passWidth: new Animated.Value(Dimensions.get('window').width/100*70),
        forgotOpacity: new Animated.Value(0),
        buttonWidth: new Animated.Value(Dimensions.get('window').width/100*70),
        buttonHeight: new Animated.Value(60),
        buttonOpacity:  new Animated.Value(1),

      username : "" ,
      password : "" ,
      firstName: "" ,
      lastName : "" , 
      //other information
    }
    Animated.sequence([
      Animated.timing(this.state.logoFadeValue,{
        toValue: 1,
        duration: 2500
      }),
      Animated.parallel([Animated.timing(this.state.logoTop,{
        toValue: Dimensions.get('window').height/100*4,
        duration: 1000
      }),
      Animated.timing(this.state.logoScale,{
        toValue: 1,
        duration: 1000
      }),]),
      
      // Animated.timing(this.state.logoLeft,{
      // toValue: Dimensions.get('window').width/100*30,
      // duration: 1000
      // }),
      // Animated.timing(this.state.logoWidth,{
      //   toValue: Dimensions.get('window').width/100*30,
      //   duration: 1000
      // }),
      // Animated.timing(this.state.logoHeight,{
      //   toValue: Dimensions.get('window').height/100*20,
      //   duration: 1000
      // }),
      
      Animated.timing(this.state.buttonBottom,{
        toValue: Dimensions.get('window').height/100*10,
        duration: 500
      }),
      Animated.timing(this.state.userOpacity,{
        toValue: 1,
        duration: 100
      }),
      Animated.timing(this.state.passOpacity,{
        toValue: 1,
        duration: 100
      }),
      Animated.timing(this.state.forgotOpacity,{
        toValue: 1,
        duration: 100
      }),
  ]).start();
  }
  getUserToken(par){  
    par.animationLogin() ;
    
    
    
  }

  getData = async () => {
    console.log("Getting DATA")
    try {
      let tokenn = await AsyncStorage.getItem('token');  //get token from storage
      console.log(tokenn)
    } catch (error) {
      console.log(error)
    }
    
  };


  getUserInfo = async () => {
    console.log("INSIDE GET USER INFO")
    try{
      let token = await AsyncStorage.getItem('token') ;
      console.log(token)
      axios.get('http://theprojects.ir/users/student/detail/', {
        headers : {
          Authorization: "Token " + token
        }
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      });
    } catch{
      console.log(error)
    }
  }

  animationLogin(){
    Animated.sequence([
      Animated.timing(this.state.buttonOpacity,{
        toValue: 0,
        duration: 0
      }),
      Animated.timing(this.state.buttonHeight,{
        toValue: Dimensions.get('window').height/100*1.5,
        duration: 500
      }),
      Animated.timing(this.state.buttonWidth,{
        toValue: Dimensions.get('window').width/100*3,
        duration: 800
      }),
      Animated.timing(this.state.buttonWidth,{
        toValue: Dimensions.get('window').width/100*70,
        duration: 5000
      }),
      Animated.timing(this.state.buttonHeight,{
        toValue: 60,
        duration: 200
      }),
      Animated.timing(this.state.buttonOpacity,{
        toValue: 1,
        duration: 0
      }),
    ]).start(()=> this.animateSuccess() );
    // .start(()=>Actions.home());
  }

  animateSuccess(){
      axios.post('http://theprojects.ir/api-token-auth/', 
      {
        //  'username': 'team',
        //  'password': '12345',
        'username': this.state.username,
        'password': this.state.password ,
      },
    )
    .then(function (response) {
      AsyncStorage.setItem('token' , response.data.token.toString())
      Actions.home();
      this.getUserInfo()
    })
    .catch(function (error) {
      console.log(error);
    }) 
  }

  submit() {
    this.getUserToken(this)
  } 
  stretchUser(){
    Animated.timing(this.state.userWidth,{
      toValue: Dimensions.get('window').width/100*80,
      duration: 200
    }).start();
  }
  
  stretchPass(){
    Animated.timing(this.state.passWidth,{
      toValue: Dimensions.get('window').width/100*80,
      duration: 200
    }).start();
  }
  pinch(){
    Animated.sequence([
      Animated.timing(this.state.passWidth,{
        toValue: Dimensions.get('window').width/100*70,
        duration: 200
      }),
      Animated.timing(this.state.userWidth,{
        toValue: Dimensions.get('window').width/100*70,
        duration: 200
      })
    ]).start();
    Keyboard.dismiss();
  }
  render() {
    return (    
      
      <TouchableWithoutFeedback onPress={() => this.pinch()}>
      
      
      <View style={loginstyles.bg}>
      <Image
        source={require('../../../assests/image/shirazu_bg.jpg')}
        resizeMode='cover'
        style={loginstyles.bg_img}
      />
      <LinearGradient
        colors={['rgba(19,25,41,1)', 'rgba(19,25,41,0.75)']}
        style={loginstyles.gradient}
      ></LinearGradient>

      <Animated.View style={{top:this.state.logoTop,opacity: this.state.logoFadeValue,transform:[{scale:this.state.logoScale}],...loginstyles.logo}}>
      
        <Image style={loginstyles.logo_img} resizeMode = 'contain' source={require('../../../assests/image/shirazu_logo.png')} />
      
      </Animated.View>
       

        <Animated.View style={{opacity:this.state.userOpacity,width:this.state.userWidth,...loginstyles.username}}>
              <TextInput
              style={loginstyles.username_input}
              placeholderTextColor = "white"
              placeholder="نام کاربری"
              onChangeText={(username) => this.setState({username})}
              onFocus={() => this.stretchUser()}
            />
            
        </Animated.View>

      <Animated.View style={{opacity:this.state.passOpacity,width:this.state.passWidth,...loginstyles.password}}>
      
              <TextInput
                style={loginstyles.password_input}
                placeholderTextColor = "white"
                placeholder="رمز عبور"
                onChangeText={(password) => this.setState({password})}
                onFocus={() => this.stretchPass()}
              />
      
      </Animated.View>
      

      <Animated.View style={{bottom:this.state.buttonBottom,opacity: this.state.buttonOpacity,...loginstyles.button_container}}>
      
        <BoxShadow setting={buttonShadow}>
                  <TouchableWithoutFeedback style={loginstyles.button} onPress={() => this.submit()}>
                     <View style={loginstyles.text_center}>
                        <Text style={loginstyles.button_text}>ورود</Text>
                     </View>
                  </TouchableWithoutFeedback>
        </BoxShadow>
      
      </Animated.View>

      <Animated.View style={{opacity:this.state.forgotOpacity,...loginstyles.forgot_container}}>
      
        <TouchableHighlight style={loginstyles.forgot}>
          <Text style={loginstyles.forgot_text}>فراموشی رمز عبور</Text>
        </TouchableHighlight>
      
      </Animated.View>

      <Animated.View style={{bottom:this.state.buttonBottom,width:this.state.buttonWidth,height:this.state.buttonHeight,...loginstyles.button_back}}></Animated.View>
  </View>

      </TouchableWithoutFeedback>

    );
  }
}
