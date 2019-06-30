import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	FlatList,
	Dimensions,
	Animated,
	Easing,
	Modal,
	TouchableOpacity,
	TouchableHighlight,
	TouchableWithoutFeedback
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import LinearGradient from 'react-native-linear-gradient';
import { Card } from '../../presentational/index';
import { Overlay } from 'react-native-router-flux';
import { styles, cardShadow } from './styles';
import { BoxShadow, BorderShadow } from 'react-native-shadow';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { SectionList } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class GottenCourses extends Component {
	constructor() {
		super();
		this.state = {
			activeSemValue: 'نیم سال دوم 98',
			modalVisible: false,
			semMenuHeight: new Animated.Value(80),
			cardHeight: new Animated.Value(0.08 * height),
			semesterCourses: [],
			allSemesterAllCourses: [],
			userInfo: { subfield: { title: '', field: '' } } ,
			allSemsObject : [] ,
			currentDetailedCourseName : '' ,
			currentDetailedCourseUnits : '' , 
			currentDetailedCourseGrade : '' ,
			currentDetailedCourseStatus : '' 
		};
		global.bigArray = [
			{ title: '', data: [] },  //1st term
			{ title: '', data: [] },
			{ title: '', data: [] },
			{ title: '', data: [] },
			{ title: '', data: [] },
			{ title: '', data: [] },
			{ title: '', data: [] },
			{ title: '', data: [] },	//8th  term
		] ;
		global.bigArray2 = [
			{ title: 'نیم سال اول 95', data: [{name:'ریاضیات عمومی 1' , units : 3 , group :1 ,type:'اصلی' , status:'قبول' ,grade :11},{name:'فیزیک 1' , units : 3 , group :1 ,type:'اصلی' , status:'قبول' , grade :12},{name:'فارسی عمومی' , units : 3 , group :1 ,type:'عمومی' , status:'قبول' , grade :18 },{name:'مبانی کامپیوتر و برنامه سازی' , units : 3 , group :1 ,type:'اصلی' , status:'قبول' , grade :16.15 },{name:'تفسیر موضوعی قرآن' , units : 2 , group :5 ,type:'عمومی' , status:'قبول' , grade :17 }] },  //1st term
			{ title: 'نیم سال اول 95', data: [{name:'ریاضیات عمومی 2' , units : 3 , group :1 ,type:'اصلی' , status:'قبول' ,grade :13},{name:'فیزیک 2' , units : 3 , group :4 ,type:'اصلی' , status:'قبول' , grade :10},{name:'اصول برنامه سازی' , units : 3 , group :1 ,type:'اصلی' , status:'قبول' , grade :14.15 },{name:'تاریخ امامت' , units : 2 , group :9 ,type:'عمومی' , status:'قبول' , grade :15 }] },
		] ;
		//launch animations
	}
	setModalVisibility(visibility, courseName , units , grade , status) {
		this.setState({ 
			modalVisible: visibility  ,
			currentDetailedCourseName : courseName ,
			currentDetailedCourseUnits : units , 
			currentDetailedCourseGrade : grade ,
			currentDetailedCourseStatus : status 
		});

	}
	getUserInfo() {
		let headers = {
			Authorization: `Token ${global.token}`
		};
		axios
			.get('http://theprojects.ir/api/v1/carrier/mini_profile', { headers: headers }) //we have problem here , 2 must be variable
			.then(async (response) => {
				await this.setState({
					userInfo: response.data[0]
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
	getUserTerms = async () => {
		let headers = {
			Authorization: `Token ${global.token}`
		};
		axios
			.get('http://theprojects.ir/api/v1/carrier/terms', { headers: headers })
			.then(async (response) => {
				await this.setState({
					allSemsObject: response.data
				});
				global.termsCount = this.state.allSemsObject.length
				for(i=0;i < global.termsCount ; i++){
					global.bigArray[i].title = this.state.allSemsObject[i].title
					this.getUserCourses(i+2);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};


	getUserCourses = async (pk) => {
		pkStr = String(pk);
		let headers = {
			Authorization: `Token ${global.token}`
		};
		axios
			.get('http://theprojects.ir/api/v1/carrier/terms/' + pkStr, { headers: headers }) //we have problem here , 2 must be variable
			.then(async (response) => {
				// console.log(global.termsCount)
				// console.log(response.data)
				for(i=0 ; i<response.data.length ; i++){
					global.bigArray[pk-2].data.push(response.data[i])
				}
				
				console.log(this.state.allSemsObject)
				console.log(global.bigArray)
				// console.log(global.bigArray[1].data[0].course.field_course.title)
			})
			.catch((err) => {
				console.log(err);
			});
			
	};

	componentWillMount() {
		this.getUserInfo();
		this.getUserTerms();
		
	}

	render() {

		return (
			<View style={styles.container}>
				<View style={styles.profile}>
					<View style={styles.profilePicContainer}>
						<TouchableOpacity>
							<Animated.Image source={{ uri: global.picPath }} style={styles.profilePic} />
						</TouchableOpacity>
					</View>

					<View style={styles.profileNameContainer}>
						<Text style={styles.profileName}>{global.fullName}</Text>
					</View>

					<View style={styles.backButtonContainer}>
						<TouchableOpacity onPress={() => Actions.popTo('home')}>
							<Image source={require('../../../assests/image/back.png')} style={styles.backButton} />
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.title}>
					<View style={styles.head}>
						<Text style={styles.pageHeaderTxt}>لیست دروس گرفته</Text>
					</View>

					<View style={styles.classInfoContainer}>
						<View style={styles.doubleInfoCmp}>
							<View style={styles.infoCmp1}>
								<Text style={styles.classInfoTxt}>شماره </Text>
								<Text style={styles.classInfoTxt}>{this.state.userInfo.id}</Text>
							</View>
							<View style={styles.infoCmp1}>
								<Text style={styles.classInfoTxt}>وضعیت </Text>
								<Text style={styles.classInfoTxt}>: دانشجو</Text>
							</View>
						</View>

						<View style={styles.doubleInfoCmp}>
							<View style={styles.infoCmp1}>
								<Text style={styles.classInfoTxt}>دانشکده</Text>
								<Text style={styles.classInfoTxt}>:مهندسی برق و کامپیوتر</Text>
							</View>
							<View style={styles.infoCmp1}>
								<Text style={styles.classInfoTxt}>رشته</Text>
								<Text style={styles.classInfoTxt}>{`${this.state.userInfo.subfield.field} ${this.state
									.userInfo.subfield.title}`}</Text>
							</View>
						</View>

						<View style={styles.doubleInfoCmp}>
							<View style={styles.infoCmp2}>
								<Text style={styles.classInfoTxt}>مقطع </Text>
								<Text style={styles.classInfoTxt}>{this.state.userInfo.degree_type}</Text>
							</View>
						</View>
					</View>
				</View>

				<Animated.View
					style={{ backgroundColor: '#1D2437', elevation: 8, height: 0.08 * height, ...styles.cards }}
				>
					<View style={styles.nameContainer}>
						<Text style={{ fontSize: 14, ...styles.itemText }}>نام درس</Text>
					</View>

					<View style={styles.unitContainer}>
						<Text style={{ fontSize: 14, ...styles.itemText }}>واحد</Text>
					</View>

					<View style={styles.typeContainer}>
						<Text style={{ fontSize: 14, ...styles.itemText }}>نوع درس</Text>
					</View>

					<View style={styles.gradeContainer}>
						<Text style={{ fontSize: 14, ...styles.itemText }}>نمره</Text>
					</View>

					<View style={styles.statusContainer}>
						<Text style={{ fontSize: 14, ...styles.itemText }}>وضعیت</Text>
					</View>
				</Animated.View>

				<Animated.View style={styles.menu}>
					<SectionList
						sections={global.bigArray2}
						renderSectionHeader={({ section }) => (
							<View
								style={{
									backgroundColor: '#131929',
									elevation: 0,
									height: 0.03 * height,
									...styles.cards
								}}
							>
								<Text
									style={{
										fontSize: 0.05 * width,
										paddingBottom: 15,
										...styles.itemText
									}}
								>
									{section.title}
								</Text>
							</View>
						)}
						renderItem={({ item }) => (
							<TouchableOpacity onPress={()=>this.setModalVisibility(true,item.name , item.units , item.grade , item.status)}>
							<Animated.View
								style={{
									backgroundColor:  '#1D2437' ,
									elevation: 8 ,
									height:  this.state.cardHeight ,
									...styles.cards
								}}
							>
								<View style={styles.nameContainer}>
									<Text
										style={{
											fontSize:  0.04 * width,
											...styles.itemText
										}}
									>
										{item.name}
										
										
									</Text>
								</View>

								<View style={styles.unitContainer}>
									<Text style={{ fontSize: 14, ...styles.itemText }}>{item.units}</Text>
								</View>

								<View style={styles.typeContainer}>
									<Text style={{ fontSize: 14, ...styles.itemText }}>{item.type}</Text>
								</View>

								<View style={styles.gradeContainer}>
									<Text style={{ fontSize: 14, ...styles.itemText }}>{item.grade}</Text>
								</View>

								<View style={styles.statusContainer}>
									<Text style={{ fontSize: 14, ...styles.itemText }}>{item.status}</Text>
								</View>
							</Animated.View>
							</TouchableOpacity>

						)}
						keyExtractor={(item, index) => index}
					/>
				</Animated.View>

				<Modal
					animationType="fade"
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={() => {}}
				>
					<TouchableWithoutFeedback onPress={() => this.setModalVisibility(false)}>
						<View
							style={{
								position: 'absolute',
								zIndex: 5,
								height: height,
								width: width,
								left: 0,
								top: 0,
								backgroundColor: this.props.transparent ? 'transparent' : 'rgba(0,0,0,0.5)'
							}}
						/>
					</TouchableWithoutFeedback>

					<View style={styles.moreDetails}>
						<Animated.View style={styles.cards}>
							<View style={styles.nameContainer}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>{this.state.currentDetailedCourseName}</Text>
							</View>

							<View style={styles.unitContainer}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>{this.state.currentDetailedCourseUnits}</Text>
							</View>

							<View style={styles.typeContainer}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>{this.state.currentDetailedCourseType}</Text>
							</View>

							<View style={styles.gradeContainer}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>{this.state.currentDetailedCourseGrade}</Text>
							</View>

							<View style={styles.statusContainer}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>{this.state.currentDetailedCourseStatus}</Text>
							</View>
						</Animated.View>

						<Animated.View style={styles.cards}>
							<View style={styles.nameContainer1}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>شماره درس :</Text>
							</View>

							<View style={styles.unitContainer1}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>1234567</Text>
							</View>

							<View style={styles.typeContainer1}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>معدل کلاس :</Text>
							</View>

							<View style={styles.gradeContainer1}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>10.5</Text>
							</View>
						</Animated.View>

						<Animated.View style={styles.cards}>
							<View style={styles.nameContainer1}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>حداکثر نمره کلاس :</Text>
							</View>

							<View style={styles.unitContainer1}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>15.5</Text>
							</View>

							<View style={styles.typeContainer1}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>حداقل نمره کلاس :</Text>
							</View>

							<View style={styles.gradeContainer1}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>0.5</Text>
							</View>
						</Animated.View>
					</View>
				</Modal>
			</View>
		);
	}
}
