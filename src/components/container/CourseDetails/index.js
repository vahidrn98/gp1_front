import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Dimensions, Animated, Easing, TouchableOpacity, TouchableWithoutFeedback, ScrollView, AsyncStorage } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Overlay } from 'react-native-router-flux';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


const { width, height } = Dimensions.get('window')
export default class CourseDetails extends Component {

    constructor() {
        super();
        this.state = {
            userDetail: [],
            usersDetail: [],
            courseDeatil:[],
        }

    }
    getUsersDetail = async()=>{
        let token = await AsyncStorage.getItem("token")
        let headers = {
          "Authorization":`Token ${token}`
        }
        axios.get("http://theprojects.ir/api/v1/carrier/mini_profile",{headers : headers})
        .then(async(response)=>{
          await this.setState({
            usersDetail : response.data[0]
          })
          // console.log(response.data[0])
        })
        .catch((err)=>{
            console.log(err)
        })
      }
    getUserDetail = async () => {
        let token = await AsyncStorage.getItem("token")
        let headers = {
            "Authorization": `Token ${token}`
        }
        axios.get("http://theprojects.ir/api/v1/carrier/mini_profile", { headers: headers })
            .then(async (res) => {
                await this.setState({
                    userDetail: res.data[0]
                })
            })
            .catch((err) => {
                Alert.alert(err)
            })
    }
    getCoursesDetail = async () => {
        let token = await AsyncStorage.getItem("token")
        let headers = {
            "Authorization": `Token ${token}`
        }
        axios.get("http://theprojects.ir/api/v1/courses/8/", { headers: headers })
            .then(async (res) => {
                await this.setState({
                    courseDetail: res.data
                })
            })
            .catch((err) => {
                Alert.alert(err)
            })
    }
    componentWillMount() {
        this.getUserDetail();
        this.getUsersDetail();
        this.getCoursesDetail();
    }
    render() {
        const items = [
            "اسامی دانشجویان",
            "سرفصل ها",
            "نمرات",
            "ثبت اعتراض نمره",
            "ارزیابی اساتید",
        ];
        return (
            <View style={styles.body}>
                <View style={styles.topBar}>
                    <View style={styles.backButton}>
                        <Image style={styles.backIcon} source={require('../../../assests/image/back.png')} />
                    </View>
                    <View style={styles.profileName}>
                        <Text style={styles.profileNameText}>{global.fullName}</Text>
                    </View>
                    <View style={styles.nameMask}>
                        <View style={styles.profilePicContainer}>
                            <Image style={styles.profilePic} source={{uri:global.picPath}} />
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.pageTitle}>
                        <Text style={styles.pageTitleText}>مشخصات درس</Text>
                        <Text style={styles.pageTitleSub}></Text>
                    </View>
                    <View style={styles.list}>
                        <FlatList
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                            data={items}
                            renderItem={({ item }) => (
                                <TouchableWithoutFeedback style={styles.list}>
                                    <View style={styles.hlistItem}>
                                        <Text style={styles.hlistText}>{item}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )}
                        />
                    </View>
                    <View style={styles.pageDetails}>
                        <View style={styles.pageDetailsRow}>
                            <View style={styles.pageDetailsItem}>
                                <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>{this.state.userDetail.id}</Text></View>
                                <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>شماره</Text></View>
                            </View>
                            <View style={styles.pageDetailsItem}>
                                <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>دوم 1398</Text></View>
                                <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>نیمسال</Text></View>
                            </View>
                        </View>
                        <View style={styles.pageDetailsRow}>
                            <View style={styles.pageDetailsItem}>
                                <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>{this.state.userDetail.degree_type}</Text></View>
                                <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>مقطع</Text></View>
                            </View>
                            <View style={styles.pageDetailsItem}>
                                <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>{this.state.userDetail.admission_type}</Text></View>
                                <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>پذیرش</Text></View>
                            </View>
                        </View>
                        <View style={styles.pageDetailsRow}>
                            <View style={styles.pageDetailsItemLeft}><Text style={styles.pageDetailsItemText}>مهندسی کامپیوتر گرایش نرم افزار</Text></View>
                            <View style={styles.pageDetailsItemRight}><Text style={styles.pageDetailsItemText}>رشته</Text></View>
                        </View>
                    </View>
                    <View style={styles.courseDetails}>
                        <Text style={styles.sectionTitle}>مشخصات</Text>
                        <View style={styles.courseDetailsContainer}>
                            <View style={styles.courseDetailsTop}>
                                <View style={styles.courseDetailsTopSection}>
                                    <Text style={styles.courseDetailsTopText}>زمان</Text>
                                </View>
                                <View style={styles.courseDetailsTopSection}>
                                    <Text style={styles.courseDetailsTopText}>مکان</Text>
                                </View>
                            </View>
                            <View style={styles.courseDetailsBottom}>
                                <View style={styles.courseDetailsBottomSection}>
                                    <Text style={styles.courseDetailsBottomText}>شنبه-۱۵:۰۰:۱۶:۳۰
                                        دوشنبه-۱۵:۰۰:۱۶:۳۰</Text>
                                </View>
                                <View style={styles.courseDetailsBottomSection}>
                                    <Text style={styles.courseDetailsBottomText}></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>جلسات تعطیلی</Text>
                        <View style={styles.sectionDetails}>
                            <Text style={styles.sectionDetailsText}>زمان ۱۳۹۷/۱۱/۲۰ - شنبه - ۱۵:۰۰ الي ۱۶:۳۰ تعطيل رسمي</Text>
                            <Text style={styles.sectionDetailsText}>زمان ۱۳۹۷/۱۱/۲۲ - دو شنبه - ۱۵:۰۰ الي ۱۶:۳۰ تعطيل رسمي</Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>غیبت ها</Text>
                        <View style={styles.sectionDetails}>
                            <Text style={styles.sectionDetailsText}>۱۳۹۷/۱۲/۱۳ جلسه ده</Text>
                            <Text style={styles.sectionDetailsText}>۱۳۹۷/۱۲/۲۰ جلسه دوازده</Text>
                            <Text style={styles.sectionDetailsText}>۱۳۹۸/۰۱/۲۶ جلسه بيست و دو</Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>منابع درسی</Text>
                        <View style={styles.sourcesContainer}>
                            <View style={styles.sourcesItem}>
                                <Text style={styles.sourcesText}>عنوان</Text>
                            </View>
                            <View style={styles.sourcesItem}>
                                <Text style={styles.sourcesText}>Chapter 1- Sommerville</Text>
                            </View>
                            <View style={styles.sourcesItem}>
                                <Text style={styles.sourcesText}>Chapter 2- Sommerville</Text>
                            </View>
                            <View style={styles.sourcesItem}>
                                <Text style={styles.sourcesText}>Chapter 3- Sommerville</Text>
                            </View>
                            <View style={styles.sourcesItem}>
                                <Text style={styles.sourcesText}>Chapter 4- Sommerville</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

}