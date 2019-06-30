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
    title : {
      flex : .26,
      width : width ,
      
    },
    head : {
      flex : .4 ,
      width : width ,
      justifyContent :'center', 
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
      flex : .59 ,
      alignItems : 'center' , 
      justifyContent : 'center' ,
      width : width ,
      marginTop : .005 * height ,
      // paddingBottom : .02 * height
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
        height : .065*height , 
        borderRadius : .0315 * width , 
        alignItems : 'center' , 
        justifyContent : 'center',
        flexDirection:'row-reverse' ,
        marginTop : .027 * height,
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
     pageHeaderTxt :{
      textAlign : 'center' ,
      fontSize : .06 * width ,
      color : 'white',
      fontFamily: 'IRANSans(FaNum)' ,
      marginRight : .048 * width  ,
     },
     courseNameTxt:{
      textAlign : 'center' ,
      fontSize : .06 * width ,
      color : '#FFFFFF',
      opacity : .7 ,
      fontFamily: 'IRANSans(FaNum)' ,
      marginRight : .048 * width  , 
     },
     classInfoTxt:{
      textAlign : 'center' ,
      fontSize : .035 * width ,
      color : '#FFFFFF',
      opacity : .7 ,
      fontFamily: 'IRANSans(FaNum)' ,
      marginRight : .048 * width  , 
     },

     gradeContainer : {
      flex : .2 ,
     },
     nameContainer : {
        // width : .291 * width , 

        // alignItems : 'flex-end' ,
        flex : .3 ,
        // justifyContent : 'center'
     } , 
     fieldContainer : {
      // width : .4 * width , 
      flex : .5 ,
      // alignItems : 'flex-end' ,
      // justifyContent : 'center'
   } , 
   classInfoContainer:{
    flex : .6 ,
    width : width ,
    justifyContent :'center',
    alignItems : 'center' , 
    marginTop : height/20 ,
   },
   doubleInfoCmp:{
    width : width ,
    flex : 1/3 ,
    justifyContent :'center',  
    flexDirection : 'row-reverse' ,
   },
   infoCmp1:{
    flex : .5 ,
    flexDirection : 'row-reverse' ,
    justifyContent :'flex-start',
    alignItems : 'center' , 
   },
   infoCmp2:{
    flex : 1 ,
    flexDirection : 'row-reverse' ,
    justifyContent :'flex-start',
    alignItems : 'center' , 
   },
  });