import { StyleSheet, View, Text , Image , FlatList , Dimensions} from 'react-native';

const {width , height} = Dimensions.get('window')
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : '#131929'
     },
     menu : {
      flex : .85 ,
      alignItems : 'center' , 
      justifyContent : 'center' ,
      width : width ,
      zIndex : 1 , // 0 before
      marginTop: -(height*.4) - 10 ,
     },
     itemBackground:{
      resizeMode:'cover' ,
      height:'100%' ,
      width:'100%' ,
      overflow:'visible' , 
      borderRadius:15 ,     
      zIndex : 1,
     },
     itemText :{
      fontSize : 30 ,
      color : 'white',
      fontFamily: 'homa',
      zIndex : 3 ,
      position : 'absolute' ,
     },
     cards :{
      width : .9*width , 
      height : .18*height , 
      borderRadius : 15 , 
      borderColor : '#a9a9a9' , 
      alignItems : 'center' , 
      justifyContent : 'center',
      margin : 10,
     }, 
    profile : {
      flex : .15,
      //backgroundColor : '#131929' , 
      justifyContent : 'flex-end' , 
      width : width ,
      alignItems : 'center' , 
      flexDirection : 'row' ,
      zIndex : 5 ,
    }, 
    profileInv : {
      // justifyContent : 'flex-start' , 
      width : width ,
      height : height*.4 ,
    }, 
    profilePic :{
      // height:80 ,
      // width:80 , 
      borderRadius : width/2 ,
      //smarginLeft : (.5*width) - 40 ,
      //marginRight : (.5*width) - 40 ,
      //marginRight : (.15*width) - 40 ,
      
     },
     profileName:{
      color : 'white' , 
      fontSize : 22 , 
      fontFamily : 'homa' ,
      // paddingRight : 30 ,
     },
    mask:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
      borderRadius : 15 ,
      zIndex: 0,
      opacity : .7 ,
      backgroundColor :'#1d2437', 
      alignItems : 'center' , 
      justifyContent : 'center',
      zIndex : 2
    },
    navBar:{
        // width:900,
        // height:900,
        right : -width - 50  ,
        top: -height/2 - 30  ,
        zIndex : 2 ,
        borderRadius:300,
        backgroundColor : '#1D2437' ,
        position:'absolute' ,
        marginRight : 50 , //wasnt at all
    }, 
    field : {
      marginTop : 0 ,
      fontSize : 22 , 
      color : 'white' ,
      marginRight: (.05*width) + 120 + 26 , // should be 30 :/
      fontFamily : 'homa' ,
    },
    gerayesh : {
      marginTop :15 ,
      fontSize : 22 , 
      color : 'white' ,
      marginRight: (.05*width) + 120 + 28 , // should be 30 :/
      fontFamily : 'homa' ,
    },
    info:{
      flex : .5 ,
    },
    tools:{
      marginRight : .05*width ,
      flex : .5 ,
      marginTop : 70 
    },  
    toolsText:{
      // marginTop :15 ,
      fontSize : 22 , 
      color : 'white' ,
      marginRight : 20 ,
      fontFamily : 'homa' ,
    },
    icons:{
      width : 20 ,
      height : 20 ,
      marginRight : 10 ,
    },
    settings:{
      marginRight : 0 ,
      flexDirection : 'row-reverse' ,
      alignItems :'center' ,
      justifyContent : 'flex-start' ,
    },  
  });
