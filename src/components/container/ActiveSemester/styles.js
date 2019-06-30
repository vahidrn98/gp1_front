import { StyleSheet, View, Text , Image , FlatList , Dimensions} from 'react-native';

const {width , height} = Dimensions.get('window')
export const cardShadow = {
  width: .95 * width,
  height: .1 * height,
  color:"#000000",
  border:0,
  radius:13,
  opacity : .7 ,
  x:0,
  y:0,
  b:0 ,
}
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : '#131929' ,
      alignItems : 'center' ,
      
    },
    profile : {
      flex : .15,
      justifyContent : 'flex-start' , 
      width : width ,
      alignItems : 'center' , 
      flexDirection : 'row-reverse' ,
      zIndex : 5 ,
    }, 
    semester : {
      flex : .18,
      width : width ,
       
    },
    semContainer : {
      flex : .5 ,
      width : width ,
      flexDirection : 'row-reverse' ,
      justifyContent :'flex-start', 
      alignItems : 'center' , 
    },
    tableHeader : {
      flex : .07 ,
      backgroundColor : '#1D2437' ,
      justifyContent : 'center' , 
      width : .95 * width ,
      alignItems : 'center' ,
      flexDirection : 'row-reverse' , 
      borderRadius : 0.0315 * width ,
      marginTop : .027 * height ,
      elevation: 8 
    },
    menu : {
      flex : .62 ,
      alignItems : 'center' , 
      justifyContent : 'center' ,
      width : width ,
      marginTop : .0136 * height ,
      paddingBottom : .02 * height
     },
     itemBackground:{
      resizeMode:'cover' , 
      height:'100%' , 
      width:'100%' , 
      overflow:'visible' , 
      borderRadius:.0364 * width ,     
      zIndex : 1,
     },
     itemText :{
      textAlign : 'center' ,
      color : 'white',
      fontFamily: 'IRANSans(FaNum)',
      zIndex : 3 ,
     },
     cards :{
        backgroundColor : '#1D2437' ,
        width : .95*width , 
        height : .1*height , 
        borderRadius : .0315 * width , 
        alignItems : 'center' , 
        justifyContent : 'center',
        flexDirection:'row-reverse' ,
        marginTop : .04 * height,
        // marginBottom : .0078 * height ,
        elevation: 8 
     }, 
     mask:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
      borderRadius : .0364 * width ,
      zIndex: 0,
      opacity : .7 ,
      backgroundColor :'#1d2437', 
      alignItems : 'center' , 
      justifyContent : 'center',
      zIndex : 2
    },
    profilePic :{
      height:.17 * width ,
      width:.17 * width , 
      borderRadius : width/2 ,
      marginRight : .05*width ,
     },
     profilePicContainer :{
      flex : .22 ,
      // backgroundColor : 'red'
     },
     profileNameContainer :{
      flex : .63 ,
     },
     backButtonContainer :{
      flex : .15 ,
      justifyContent : 'center' , 
      alignItems : 'center' ,
     },
     profileName:{
      color : 'white' , 
      fontSize : .053 * width , 
      fontFamily : 'IRANSans(FaNum)' ,
      paddingRight : .072 * width ,
     },
     backButton :{
      height:.048 * width ,
      width: .048 * width , 
      // transform: [{ rotate: '180deg' }],
      // position : 'absolute' ,
      // right : .09 * width ,
     },
     activeSemTxt :{
      textAlign : 'center' ,
      fontSize : .06 * width ,
      color : 'white',
      fontFamily: 'IRANSans(FaNum)' ,
      marginRight : .048 * width  ,
     },
     semMenu : {
      alignItems : 'center' , 
      justifyContent : 'center' ,
      width : .2 * width ,
      backgroundColor : 'black' ,
      borderWidth :5 ,
     },
     semChooserText :{ 
        textAlign : 'center' ,
        color : 'white',
        fontFamily: 'IRANSans(FaNum)',
        fontSize : 0.048 * width ,
        marginTop : 0.014 * height ,
     },
     titleContainer : {
        width : .291 * width , 
        alignItems : 'center' ,
        justifyContent : 'center'
     } , 
     statusContainer : {
      width : .291 * width , 
      alignItems : 'center' ,
      justifyContent : 'center'
   } , 
     smallContainer : {
      width : .145 * width , 
      alignItems : 'center' ,
      justifyContent : 'center'
   },
   activeSemContainer:{
    flex : .5 ,
    width : width ,
    flexDirection : 'row-reverse' ,
    justifyContent :'center',
    alignItems : 'center' , 
   },
   semChooser :{
    position:'absolute',
    height:height/2 ,
    width : width/2 , 
    borderRadius :.038 * width ,
    backgroundColor: '#1D2437' ,
    alignSelf: 'center',
    top: height/4 ,
   },

  });