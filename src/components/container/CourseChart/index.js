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
			userInfo: { subfield: { title: '', field: '' } } ,
			courses : {}
		};
		global.chart = [
			{ title: 'عمومی', data: [] },
			{ title:'تخصصی اجباری', data: [] },
			{ title: 'اصلی', data: [] },
			{ title: 'پایه', data: [] },
			{ title: 'اختیاری', data: [] },
		] ;
		//launch animations
	}
	setModalVisibility(visibility, courseName) {
		this.setState({ modalVisible: visibility });
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
	getUserChart  = async()=> {
		let headers = {
			Authorization: `Token ${global.token}`
		};
		axios
			.get('http://theprojects.ir/api/v1/carrier/subfield_courses/', { headers: headers }) //we have problem here , 2 must be variable
			.then(async (response) => {
				await this.setState({
					courses : response.data
				});
				for(i=0 ; i < this.state.courses.length ; i++ ){
					if(this.state.courses[i].course_type == 'عمومی'){
						global.chart[0].data.push(this.state.courses[i])
					}
					if(this.state.courses[i].course_type == 'تخصصی اجباری'){
						global.chart[1].data.push(this.state.courses[i])
					}
					if(this.state.courses[i].course_type == 'اصلی'){
						global.chart[2].data.push(this.state.courses[i])
					}
					if(this.state.courses[i].course_type == 'پایه'){
						global.chart[3].data.push(this.state.courses[i])
					}
					if(this.state.courses[i].course_type == 'اختیاری'){
						global.chart[4].data.push(this.state.courses[i])
					}
				}
				console.log(global.chart)
			})
			.catch((err) => {
				console.log(err);
			});
	}

	componentWillMount() {
		this.getUserInfo();
		this.getUserChart();
		
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
						<Text style={styles.pageHeaderTxt}>برنامه درسی</Text>
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

					<View style={styles.termContainer}>
						<Text style={{ fontSize: 14, ...styles.itemText }}>ترم</Text>
					</View>

					<View style={styles.numberContainer}>
						<Text style={{ fontSize: 14, ...styles.itemText }}>شماره</Text>
					</View>
				</Animated.View>

				<Animated.View style={styles.menu}>
					<SectionList
						sections={global.chart}
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
										{item.field_course.title}
										
									</Text>
								</View>

								<View style={styles.unitContainer}>
									<Text style={{ fontSize: 14, ...styles.itemText }}>{item.field_course.credit}</Text>
								</View>

								<View style={styles.termContainer}>
									<Text style={{ fontSize: 14, ...styles.itemText }}>{item.suggested_term}</Text>
								</View>

								<View style={styles.numberContainer}>
									<Text style={{ fontSize: 14, ...styles.itemText }}>{item.field_course.serial_number}</Text>
								</View>

							</Animated.View>
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
								<Text style={{ fontSize: 14, ...styles.itemText }}>ریاضیات عمومی 1</Text>
							</View>

							<View style={styles.unitContainer}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>3</Text>
							</View>

							<View style={styles.typeContainer}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>اصلی</Text>
							</View>

							<View style={styles.gradeContainer}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>11</Text>
							</View>

							<View style={styles.statusContainer}>
								<Text style={{ fontSize: 14, ...styles.itemText }}>قبول</Text>
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
