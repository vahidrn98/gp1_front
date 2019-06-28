import { AppRegistry, StyleSheet, Text, View,Dimensions } from 'react-native';


export const buttonShadow = {
    width: Dimensions.get('window').width/100*70,
   height: 60,
   color:"#24B898",
   border:6,
   radius:28,
   x:0,
   y:0,
   style:{zIndex:4}
}

export const loginstyles = StyleSheet.create({
  bg_img:{
    height:'100%',
    width: '100%',
    overflow: 'visible',
  },
  gradient:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    zIndex: 0,
  },
  logo : {
      position: 'absolute',
    //   top : '7%',
      left: '25%',
      zIndex: 1,
      width: '50%',
      height: '35%',
  },
  logo_img : {
    width: '100%',
    height:'100%',
   overflow: 'visible',
  },
  username:{
      position: 'absolute',
      top: '45%',
      backgroundColor: '#31384B',
      // paddingVertical: '5%',
      paddingHorizontal: '15%',
      right: '-6%',
      height:'10%',
      borderRadius: 28,
      color: 'white',
  },
  username_input:{
    backgroundColor: '#31384B',
    // paddingVertical: '5%',
    paddingHorizontal: '15%',
    width: '100%',
    borderRadius: 28,
    color: 'white',
    height:'100%',
    fontFamily: 'IRANSans(FaNum)',
  },
  password:{
    position: 'absolute',
    top: '58%',
    backgroundColor: '#31384B',
    // paddingVertical: '5%',
    paddingHorizontal: '15%',
    right: '-6%',
    height:'10%',
    borderRadius: 28,
    color: 'white',
    },
    password_input:{
        backgroundColor: '#31384B',
        // paddingVertical: '5%',
        paddingHorizontal: '15%',
        width: '100%',
        height:'100%',
        borderRadius: 28,
        color: 'white',
        fontFamily: 'IRANSans(FaNum)',
    },
    button_container:{
        // bottom: '10%',
        left: '15%',
        position:'absolute',
        borderRadius:28,
        // overflow:'hidden',
        zIndex: 6,
    },
    button_back:{

        // bottom: '10%',
        left: '15%',
        position:'absolute',
        borderRadius:28,
        // overflow:'hidden',
        backgroundColor: '#24B898',
        zIndex:2,
        overflow:'hidden',
    },
    button:{

      position:'relative',
        borderRadius: Dimensions.get('window').width/100*70 *30 /100,
        backgroundColor: '#21DFB6',
        width: '100%',
        height: '100%',
        zIndex: 6,
        overflow:"hidden",
    },
    text_center:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button_text:{
        textAlign:'center',
        color: 'white',
        fontSize: Dimensions.get('window').width/100*6,
        fontFamily: 'IRANSans(FaNum)',
    },
    forgot_container:{
        position:'absolute',
        bottom: '3%',
        width: '50%',
        height: '4%',
        backgroundColor: 'transparent',
        left: '25%',
    },
    forgot:{
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
    },
    forgot_text:{
        textAlign:'center',
        color: '#21DFB6',
        fontSize: Dimensions.get('window').width/100*4,
        // paddingTop: Dimensions.get('window').height/100*2.5,
        fontFamily: 'IRANSans(FaNum)',
    }
});
