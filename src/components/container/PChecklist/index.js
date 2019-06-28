import React, { Component } from 'react';
import { StyleSheet, View, Text , Image , FlatList , Dimensions , Animated , Easing , TouchableOpacity , TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Overlay } from 'react-native-router-flux';
import {styles} from './styles';
import { Actions } from 'react-native-router-flux';


const {width , height} = Dimensions.get('window')
export default class Pchecklist extends Component{

    constructor(){
        super();
    }

    render(){
        const items = [
            { name: 'آز مدار های الکتریکی', unit: 1,approved:true , id : 2104546  },
        ];
        return(
            <View style={styles.body}>
                <View style={styles.topBar}>
                    <View style={styles.backButton}>
                        <Image style={styles.backIcon} source={require('../../../assests/image/back.png')}/>
                    </View>
                    <View style={styles.profileName}>
                        <Text style={styles.profileNameText}>وحید رضا نیازمند</Text>
                    </View>
                    <View style={styles.nameMask}>
                        <View style={styles.profilePicContainer}>
                            <Image style={styles.profilePic} source={require('../../../assests/image/profile.jpg')}/>
                        </View>
                    </View>
                </View>
                <View style={styles.pageTitle}>
                    <Text style={styles.pageTitleText}>چک لیست ثبت نام مقدماتی</Text>
                </View>
                <View style={styles.pageDetails}>
                    <View style={styles.pageDetailsRow}>
                        <View style={styles.pageDetailsItem}>
                            <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>9532291</Text></View>
                            <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>شماره</Text></View>
                        </View>
                        <View style={styles.pageDetailsItem}>
                            <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>دوم 1398</Text></View>
                            <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>نیمسال</Text></View>
                        </View>
                    </View>
                    <View style={styles.pageDetailsRow}>
                        <View style={styles.pageDetailsItem}>
                            <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>کارشناسی</Text></View>
                            <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>مقطع</Text></View>
                        </View>
                        <View style={styles.pageDetailsItem}>
                            <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>نوبت اول</Text></View>
                            <View style={styles.DetailsItem}><Text style={styles.pageDetailsItemText}>پذیرش</Text></View>
                        </View>
                    </View>
                    <View style={styles.pageDetailsRow}>
                        <View style={styles.pageDetailsItemLeft}><Text style={styles.pageDetailsItemText}>مهندسی کامپیوتر گرایش نرم افزار</Text></View>
                        <View style={styles.pageDetailsItemRight}><Text style={styles.pageDetailsItemText}>رشته</Text></View>
                    </View>
                </View>
                <View style={styles.listHeader}>
                    <View style={styles.listHeaderItem}><Text style={styles.listHeaderItemText}>شماره درس</Text></View>
                    <View style={styles.listHeaderItem}><Text style={styles.listHeaderItemText}>واحد</Text></View>
                    <View style={styles.listHeaderItem}><Text style={styles.listHeaderItemText}>نام درس</Text></View>
                    <View style={styles.listHeaderRight}><Text style={styles.listHeaderItemText}>تایید</Text></View>
                </View>
                <FlatList
                    style={styles.list}
                    showsVerticalScrollIndicator={false} 
                    data={items}
                    renderItem={({item})=>(
                        <TouchableWithoutFeedback>
                            <View style={styles.listItem}>
                                <View style={styles.listLeft}>
                                    <View style={styles.listItemSec}><Text style={styles.listItemSecText}>{item.id}</Text></View>
                                    <View style={styles.listItemSec}><Text style={styles.listItemSecText}>{item.unit}</Text></View>
                                    <View style={styles.listItemSec}><Text style={styles.listItemSecText}>{item.name}</Text></View>
                                </View>
                                <View style={styles.listRight}>
                                    <View style={styles.approved}></View>
                                </View>
                            </View>    
                        </TouchableWithoutFeedback>
                    )}
                />
                
            </View>
        );
    }

}