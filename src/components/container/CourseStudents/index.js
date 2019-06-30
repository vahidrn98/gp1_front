import React, { Component } from 'react';
import { StyleSheet, View, Text , Image , FlatList , Dimensions , Animated , Easing , Modal ,TouchableOpacity , TouchableHighlight , TouchableWithoutFeedback } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import LinearGradient from 'react-native-linear-gradient';
import {Card} from '../../presentational/index'
import { Overlay } from 'react-native-router-flux';
import {styles,cardShadow} from './styles';
import {BoxShadow, BorderShadow} from 'react-native-shadow';
import { Actions } from 'react-native-router-flux';

const {width , height} = Dimensions.get('window')

export default class CourseStudents extends Component{
  constructor(){
    super()
    this.state ={
      activeSemValue : 'نیم سال دوم 98' ,
      modalVisible: false,
      semMenuHeight : new Animated.Value(80) 
    }
    console.log(width,height)
    //launch animations

  }


  render(){ 

    const items = [
      { name: 'سینا عظیمی', field : 'مهندسی کامپیوتر(نرم افزار)'  , graduation : '(کارشناسی)' },
      { name: 'وحیدرضا نیازمند', field : 'مهندسی کامپیوتر(نرم افزار)'  , graduation : '(کارشناسی)' },
      { name: 'حسین رضا اکبری', field : 'مهندسی کامپیوتر(نرم افزار)'  , graduation : '(کارشناسی)' },
      { name: 'کوثر عطازاده', field : 'مهندسی کامپیوتر(نرم افزار)'  , graduation : '(کارشناسی) '},
      { name: 'سینا پرویزی', field : 'مهندسی کامپیوتر(نرم افزار)'  , graduation : '(کارشناسی) '},
      { name: 'سینا عظیمی', field : 'مهندسی کامپیوتر(نرم افزار)'  , graduation : '(کارشناسی) '},
      { name: 'حسین رضا اکبری', field : 'مهندسی کامپیوتر(نرم افزار)'  , graduation : '(کارشناسی) ' },
      { name: 'وحیدرضا نیازمند', field : 'مهندسی کامپیوتر(نرم افزار)' , graduation :'(کارشناسی)' },
    ];  
    const semesters =[
       {name: 'نیم سال دوم 98'} , {name: 'نیم سال اول 98'} , {name: 'نیم سال دوم 97'} , {name: 'نیم سال اول 97'} , {name: 'نیم سال دوم 96'} , {name: 'نیم سال اول 96'} , {name: 'نیم سال دوم 95'} , {name: 'نیم سال اول 95'} , 
    ];

    return (
      <View style ={styles.container}>

        <View style = {styles.profile}>
        
         <View style = {styles.profilePicContainer}>
            <TouchableOpacity>
              <Animated.Image source={{ uri: global.picPath }}
                style ={styles.profilePic}></Animated.Image>
            </TouchableOpacity>
          </View>
          
          <View style = {styles.profileNameContainer}>
            <Text style ={styles.profileName}>{global.fullName}</Text>
          </View>
          
          <View style = {styles.backButtonContainer}>
            <TouchableOpacity onPress={()=>Actions.popTo('activeSemester')}>
              <Image source={require('../../../assests/image/back.png')} style ={styles.backButton}></Image>
            </TouchableOpacity>
          </View>

        </View>

        <View style = {styles.title}>

          <View style={styles.head}>
            <Text style={styles.pageHeaderTxt}>اسامی دانشجویان کلاس</Text>
            <Text style={styles.courseNameTxt}>{global.courseId}</Text>
          </View>
                      

          <View style={styles.classInfoContainer}>

            <View style={styles.doubleInfoCmp}>
              <View style={styles.infoCmp1}>
                <Text style={styles.classInfoTxt}>شماره کلاس     </Text>
                <Text style={styles.classInfoTxt}>12345678  :</Text>
              </View>
              <View style={styles.infoCmp1}>
                <Text style={styles.classInfoTxt}>نیم سال     </Text>
                <Text style={styles.classInfoTxt}>:     دوم 1398</Text>
              </View>
            </View>

            <View style={styles.doubleInfoCmp}>
              <View style={styles.infoCmp1}>
                <Text style={styles.classInfoTxt}>گروه                </Text>
                <Text style={styles.classInfoTxt}>1  :</Text>
              </View>
              <View style={styles.infoCmp1}>
                <Text style={styles.classInfoTxt}>وضعیت      </Text>
                <Text style={styles.classInfoTxt}>:     ارسال نشده</Text>
              </View>
            </View>

            <View style={styles.doubleInfoCmp}>
              <View style={styles.infoCmp2}>
              <Text style={styles.classInfoTxt}>نام استاد     </Text>
                <Text style={styles.classInfoTxt}>:     دکتر سامی</Text>
              </View>
            </View>

          </View>
          
        </View>

        <Animated.View style={styles.menu}>
        <FlatList
          showsVerticalScrollIndicator={false} 
          data={items}
          renderItem={({item})=>(
              <TouchableOpacity> 
                <Animated.View style={styles.cards}>

                  <View style ={styles.nameContainer}>
                    <Text style={{fontSize:(item.name.length > 16) ? (.030*width) : (.040*width) ,...styles.itemText}}>{item.name}</Text>
                  </View>

                  <View style ={styles.gradeContainer}>
                    <Text style={{fontSize:(item.graduation.length > 14) ? (.036*width) : (.043*width) ,...styles.itemText}}>{item.graduation}</Text>
                  </View>
                
                  <View style ={styles.fieldContainer}>
                    <Text style={{fontSize:(item.field.length > 16) ? (.036*width) : (.043*width) ,...styles.itemText}}>{item.field}</Text>
                  </View>
                  
                </Animated.View>
              </TouchableOpacity>
          )}
        />
        </Animated.View>
  
      </View>
    );
  }
}
    