import React, { Component } from 'react';
import { StyleSheet, View, Text , Image , FlatList , Dimensions , Animated , Easing , TouchableOpacity , TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Overlay } from 'react-native-router-flux';
import {styles} from './styles';
import { Actions } from 'react-native-router-flux';



const {width , height} = Dimensions.get('window')
export default class Home extends Component {
  constructor(){
    super()
    
    this.state = {
        navBarOpen : false , //navigation bar is closed
        picRightMargin : new Animated.Value((.50*width) - 40),   // pictue margin from right 
        picLeftMargin : new Animated.Value((.50*width) - 40),   // pictue margin from Left
        nameTag : new Animated.Value(0),    // opacity of name tag
        menuOpacity : new Animated.Value(0) , //opacity of menu 
        menuMargin : new Animated.Value(.85*height) , 
        picOpacity : new Animated.Value(0) , // opacity of profile picture
        picSize : new Animated.Value(0) ,
        menuFlex : new Animated.Value(.001) ,
        navBarSize : new Animated.Value(20) ,
        profileColor : new Animated.Value('#131929') ,
        profileNamePaddingRight : new Animated.Value(30) ,
        // navBarWidth : new Animated.Value(width) , 
        // navBarHeight : new Animated.Value(.15*height) ,
        // navBarRadios : new Animated.Value(0) ,
        // navBarTop : new Animated.Value(0) ,
        // navBarRight : new Animated.Value(0) ,
        cardOpacity : new Animated.Value(0) ,
        profileImgSize : new Animated.Value(80) ,
        profileIgMarginTop : new Animated.Value(0) ,
        profileInvZed : new Animated.Value(0) ,
        detailOpacity : new Animated.Value(0) ,
    }
    
    Animated.sequence([
      Animated.timing(this.state.picOpacity,{
        toValue : 1 , 
        duration : 1000
      }),
      // Animated.timing(this.state.menuFlex,{
      //   toValue : .85 , 
      //   duration : 800,
      //   easing : Easing.exp
      // }),
      // Animated.timing(this.state.profileImgSize,{
      //   toValue : 80 , 
      //   duration : 2000,
      // }),
      Animated.timing(this.state.menuMargin,{
        toValue : 0 , 
        duration : 1500,
      }),
      Animated.timing(this.state.picRightMargin,{
        toValue : (.05*width) , 
        duration : 1500 ,
      }),
      Animated.timing(this.state.picLeftMargin,{
        toValue : 0 , 
        duration : 100 ,
      }),
      Animated.timing(this.state.nameTag,{
        toValue : 1 ,
        duration : 200 ,
      }),
      Animated.timing(this.state.cardOpacity,{
        toValue : 1 ,
        duration : 1000 ,
        //delay: this.FlatList.item * 350
        // delay: this.props.index * 350
      }),
    ]).start();
  }
  navBarHandler(){
    if(this.state.navBarOpen){
      this.closeNavBar()
      // return 
    }
    else if(!this.state.navBarOpen){
      this.openNavBar()
      // return
    }
  }
  closeNavBar(){
    Animated.parallel([
      Animated.timing(this.state.profileColor,{
        toValue : '#131929' , 
        duration : 700 ,
      }),
      Animated.timing(this.state.navBarSize,{
        toValue : 20 , 
        duration : 700 , 
      }), 
      // Animated.timing(this.state.profileNamePaddingRight,{
      //   toValue : 30 , 
      //   duration : 900 ,
      //   delay : 100, 
      // }),
      Animated.timing(this.state.profileImgSize,{
        toValue : 80 , 
        duration : 700 ,
        // delay : 110,
      }),
      Animated.timing(this.state.profileIgMarginTop,{
        toValue : 0 ,
        duration :700 , 
        // delay : 90,
      }),
      Animated.timing(this.state.profileInvZed,{
        toValue : 0 ,
        duration : 0 , 
        delay: 200
      }),
      Animated.timing(this.state.detailOpacity,{
        toValue : 0 ,
        duration : 0 ,
        delay : 100 ,
      }),
    ]).start();
    this.setState({
      navBarOpen : false
    });
  } 
  openNavBar(){
      Animated.parallel([
        Animated.timing(this.state.profileColor,{
          toValue : '#131929' , 
          duration : 1000 ,
        }),
        Animated.timing(this.state.navBarSize,{
          toValue : 2*width , // was 2.13
          duration : 650 , 
        }), 
        // Animated.timing(this.state.profileNamePaddingRight,{
        //   toValue : 30 , 
        //   duration : 900 ,
        //   delay : 100, 
        // }),
        Animated.timing(this.state.profileImgSize,{
          toValue : 120 , 
          duration : 700 ,
          // delay : 110,
        }),
        Animated.timing(this.state.profileIgMarginTop,{
          toValue : 30 ,
          duration :700 , 
          // delay : 90,
        }),
        Animated.timing(this.state.profileInvZed,{
          toValue : 3 ,
          duration : 0 , 
          // delay: 200
        }),
        Animated.timing(this.state.detailOpacity,{
          toValue : 1 ,
          duration : 10 ,
          delay : 600 ,
        }),
      ]).start();
      this.setState({
        navBarOpen : true
      });
  }
  menuHandler(id){
    if(id==1){
      Actions.activeSemester();
    }
    if(id==2){
      Actions.pchecklist();
    }
    if(id==3){
      Actions.coursedetails();
    }
    if(id==4){
      Actions.karname();
    }
  }

  render() {
    const items = [
        { name: 'نیم سال تحصیلی فعال', src: require('../../../assests/image/courses.jpg') , id : 1  },
        { name: 'برنامه کلاسی', src: require('../../../assests/image/calendar.jpg') , id : 2  },
        { name: 'لیست دروس گرفته', src: require('../../../assests/image/list.jpg') , id : 3 },
        { name: 'نمودار پیشرفت تحصیلی', src: require('../../../assests/image/chart.jpg') , id : 4 },
        { name: 'خلاصه کارنامه', src: require('../../../assests/image/report.jpg') , id : 5 },
        { name: 'انتخاب واحد', src: require('../../../assests/image/list.jpg') , id : 6 },
        { name: 'تقویم آموزشی', src: require('../../../assests/image/calendar.jpg') , id : 7 },
        { name: 'فارق التحصیلی', src: require('../../../assests/image/list.jpg') , id : 8 }, 
        { name: 'آزمون های معافی', src: require('../../../assests/image/exam.jpg'), id : 9  },
        { name: 'تکالیف و امتحانات', src: require('../../../assests/image/list.jpg'), id : 10  },
        { name: 'عملیات های ثبت نام', src: require('../../../assests/image/list.jpg') , id : 11 },
    ];

    return (
      <View style={styles.container}>

        <Animated.View style={{backgroundColor:this.state.profileColor,...styles.profile}}>
          <Animated.Text style={{opacity:this.state.nameTag,padding:30,...styles.profileName}}>دیوید بکهام</Animated.Text>
          <TouchableOpacity onPress={()=>this.navBarHandler()}>
            <Animated.Image  style={{opacity:this.state.picOpacity, marginRight:this.state.picRightMargin,
                            marginLeft:this.state.picLeftMargin,width:this.state.profileImgSize,
                            marginTop:this.state.profileIgMarginTop,height:this.state.profileImgSize,...styles.profilePic}}  
              source = {require('../../../assests/image/profilePic.jpg')}>
            </Animated.Image> 
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={{zIndex:this.state.profileInvZed,opacity:this.state.detailOpacity,...styles.profileInv}}>
            <View style={styles.info}>
              <Text style={styles.field}>مهندسی کامپیوتر</Text>
              <Text style={styles.gerayesh}>گرایش نرم افزار</Text>
              <Text style={styles.gerayesh}>ورودی 1395</Text>
            </View>
              
            <View style = {styles.tools}>

              <View style = {styles.settings}>
                <Image source={require('../../../assests/image/settings.png')}style = {styles.icons}></Image>
                <Text style={styles.toolsText}>تنظیمات</Text>
                
              </View>

              <View style = {styles.settings}>
                <Image source={require('../../../assests/image/info.png')} style = {styles.icons}></Image>
                <Text style={styles.toolsText}>درباره تیم</Text>  
                
              </View>

              <View style = {styles.settings} >
                <Image source={require('../../../assests/image/exit.png')} style = {styles.icons}></Image>
                <Text style={styles.toolsText}>خروج</Text>
                
              </View>
            </View>
        </Animated.View>

        <Animated.View style={{top:this.state.menuMargin,...styles.menu}}>
        <FlatList
          showsVerticalScrollIndicator={false} 
          data={items}
          renderItem={({item})=>(
              <TouchableOpacity onPress = {()=>this.menuHandler(item.id)}>
                <Animated.View style={{opacity:1,...styles.cards}}>
                  <Image source={item.src} style={styles.itemBackground}></Image>
                  <View style={styles.mask}></View>
                  <Text style={styles.itemText}>{item.name}</Text>
                </Animated.View>
              </TouchableOpacity>
          
          )}
        />
        </Animated.View>
        <Animated.View style={{height:this.state.navBarSize,width:this.state.navBarSize,
                            backgroundColor:this.state.navBarColor , borderColor : this.state.navBarColor,
                            ...styles.navBar}}>
        </Animated.View>
        {
          (this.state.navBarOpen) ? (
            <TouchableWithoutFeedback onPress={this.navBarHandler.bind(this)}>
            <View style={{position : 'absolute' , zIndex : 1 , left : 0 , bottom : 0 , width : '100%' , height : '100%'}}/>
            </TouchableWithoutFeedback>
            ) : (null)
        }
        
      </View>
    );
  }
}
