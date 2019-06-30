import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Dimensions, Animated, Easing, TouchableOpacity, TouchableWithoutFeedback, Alert, AsyncStorage, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Overlay } from 'react-native-router-flux';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


const { width, height } = Dimensions.get('window')
export default class Pchecklist extends Component {

    constructor() {
        super();
        this.state = {
            userDetail: [],
            coursesDetail: [],
        }

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
        axios.get("http://theprojects.ir/api/v1/carrier/records_summary/", { headers: headers })
            .then(async (response) => {
                await this.setState({
                    coursesDetail: response.data
                })
                // console.log(response.data[0])
                //Alert.alert(response.data[0])
            })
            .catch((err) => {
                Alert.alert(err)
            })
    }
    componentWillMount() {
        this.getUserDetail();
        this.getCoursesDetail();
    }
    render() {
        items=[
            {}
        ]
        return (

            <View style={styles.body}>
                <ScrollView>
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

                    <View style={styles.pageTitle}>
                        <Text style={styles.pageTitleText}>خلاصه کارنامه</Text>
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

                    <View style={styles.listTitle}>
                        <Text style={styles.listTitleText}>تا این ترم</Text>
                    </View>
                    <View style={styles.listHeader}>
                        <View style={styles.listHeaderItem}><Text style={styles.listHeaderItemText}>واحد های گذرانده</Text></View>
                        <View style={styles.listHeaderItem}><Text style={styles.listHeaderItemText}>واحد های گرفته</Text></View>
                        <View style={styles.listHeaderItem}><Text style={styles.listHeaderItemText}>معدل</Text></View>
                        <View style={styles.listHeaderItem}><Text style={styles.listHeaderItemText}>نیمسال</Text></View>
                    </View>


                    <FlatList
                        style={styles.list}
                        showsVerticalScrollIndicator={false}
                        data={this.state.coursesDetail}
                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback>
                                <View style={styles.listItem}>
                                    <View style={styles.listLeft}>
                                        <View style={styles.listItemSec}><Text style={styles.listItemSecText}>{item.total_credits_passed_till_now}</Text></View>
                                        <View style={styles.listItemSec}><Text style={styles.listItemSecText}>{item.total_credits_taken_till_now}</Text></View>
                                        <View style={styles.listItemSec}><Text style={styles.listItemSecText}>{item.average_till_now}</Text></View>
                                        <View style={styles.listItemSec}><Text style={styles.listItemSecText}>{item.term_title}</Text></View>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />

                    <View style={styles.listTitle}>
                        <Text style={styles.listTitleText}>این ترم</Text>
                    </View>
                    <View style={styles.listHeader}>
                        <View style={styles.listHeaderItem}><Text style={styles.listHeaderItemText}>واحد های گذرانده</Text></View>
                        <View style={styles.listHeaderItem}><Text style={styles.listHeaderItemText}>واحد های گرفته</Text></View>
                        <View style={styles.listHeaderItem}><Text style={styles.listHeaderItemText}>معدل</Text></View>
                        <View style={styles.listHeaderItem}><Text style={styles.listHeaderItemText}>نیمسال</Text></View>
                    </View>


                    <FlatList
                        style={styles.list}
                        showsVerticalScrollIndicator={false}
                        data={this.state.coursesDetail}
                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback>
                                <View style={styles.listItem}>
                                    <View style={styles.listLeft}>
                                    <View style={styles.listItemSec}><Text style={styles.listItemSecText}>{item.total_credits_passed}</Text></View>
                                    <View style={styles.listItemSec}><Text style={styles.listItemSecText}>{item.total_credits_taken}</Text></View>
                                    <View style={styles.listItemSec}><Text style={styles.listItemSecText}>{item.average}</Text></View>
                                    <View style={styles.listItemSec}><Text style={styles.listItemSecText}>{item.term_title}</Text></View>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />

                </ScrollView>

            </View>
        );
    }

}