import { StyleSheet, View, Text , Image , FlatList , Dimensions} from 'react-native';

const {width , height} = Dimensions.get('window')
export const styles = StyleSheet.create({
    body:{
        backgroundColor:'#131929',
        position: 'relative',
        flex: 1,
        width:width,
        height:height,
        flexDirection: 'column',
        paddingHorizontal: 10,
    },
    topBar:{
        height: 0.15 * height,
        width: width,
        flexDirection: 'row',
        // borderWidth: 2,
        // borderColor: 'white',
    },
    backButton:{
        flex: 0.16666,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    backIcon:{
        width: '35%',
        height: '35%',
    },
    profileName:{
        flex: 0.6,
        height: '100%',
        // alignItems: 'center',
        paddingRight: 10,
        justifyContent: 'center',
    },
    profileNameText:{
        color: 'white',
        fontSize: width * 0.045,
        fontFamily: 'IRANSans(FaNum)',
    },
    nameMask:{
        flex: 0.16666,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    profilePicContainer:{
        // margin: 'auto',
        width: width * 0.1666,
        height: width * 0.1666,
        borderRadius: width * 0.888,
        overflow: 'hidden',
        // transform:[{scale:2}],
    },
    profilePic:{
        width: '100%',
        height: '100%',
    },
    pageTitle:{
        height: 0.1 * height,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 2,
        // borderColor: 'white',
    },
    pageTitleText:{
        color: 'white',
        fontSize: width * 0.05,
        textAlign: 'center',
        fontFamily: 'IRANSans(FaNum)',
    },
    pageTitleSub:{
        color: 'rgba(255,255,255,0.7)',
        fontSize: width * 0.04,
        textAlign: 'center',
        fontFamily: 'IRANSans(FaNum)',
    },
    hlistItem:{
        height: height*0.06,
        borderRadius: height*0.03,
        backgroundColor:'#31384B',
        marginRight: width*0.05,
        paddingHorizontal: width*0.03,
        alignItems:'center',
    },
    hlistText:{
        fontSize: width * 0.04,
        color:"rgba(255,255,255,0.75)",
        textAlign:'center',
        fontFamily: 'IRANSans(FaNum)',
    },
    list:{
        height: height*0.1,
        flex: 0.1,
        marginTop: height*0.04,
        // marginBottom: height*0.05,
        // borderWidth: 2,
        // borderColor: 'white',
    },
    pageDetails:{
        // borderWidth: 2,
        // borderColor: 'white',
        flex: 0.2,
        height: 0.2 * height,
        width: '100%',
        flexDirection: 'column',
    },
    pageDetailsRow:{
        flex: 0.3333,
        width: '100%',
        flexDirection: 'row',
    },
    pageDetailsItem:{
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageDetailsItemLeft:{
        flex: 0.75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageDetailsItemRight:{
        flex: 0.25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    DetailsItem:{
        flex: 0.5,
    },
    pageDetailsItemText:{
        color: 'rgba(255,255,255,0.7)',
        fontSize: width * 0.038 ,
        fontFamily: 'IRANSans(FaNum)',
        textAlign: 'center',
    },
    courseDetails:{
        width:'100%',
    },
    sectionTitle:{
        fontSize: width* 0.045,
        color: 'white',
        paddingVertical: height* 0.015,
        // textAlign: 'right',
        fontFamily: 'IRANSans(FaNum)',
    },
    courseDetailsContainer:{
        width:'100%',
        height: height * 0.2,
        borderRadius: height * 0.02,
        backgroundColor: '#31384B',
        flexDirection: 'column',
    },
    courseDetailsTop:{
        flex: 0.5,
        width: '100%',
        flexDirection:'row',
    },
    courseDetailsBottom:{
        flex: 0.5,
        width: '100%',
        flexDirection:'row',
    },
    courseDetailsTopSection:{
        flex:0.5,
        justifyContent:'center',
        alignItems: 'center',
    },
    courseDetailsTopText:{
        color: 'white',
        fontSize: width*0.04,
        textAlign:'center',
        fontFamily: 'IRANSans(FaNum)',
    },
    courseDetailsBottomSection:{
        flex:0.5,
        justifyContent:'center',
        alignItems: 'center',
    },
    courseDetailsBottomText:{
        fontSize:width* 0.035,
        color: 'rgba(255,255,255,0.75)',
        textAlign:'center',
        fontFamily: 'IRANSans(FaNum)',
    },
    sectionDetails:{
        width: '100%',
        minHeight: height * 0.1,
        alignItems:'center',
        justifyContent:'center',
    },
    sectionDetailsText:{
        color: 'rgba(255,255,255,0.75)',
        fontSize:width* 0.035,
        fontFamily: 'IRANSans(FaNum)',
        textAlign:'center',
    },
    sourcesContainer:{
        minHeight: height * 0.1,
        flexDirection: 'column',
    },
    sourcesItem:{
        minHeight: 0.08 * height,
        borderRadius: height * 0.02,
        backgroundColor: '#31384B',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0.03 * height,
    },
    sourcesText:{
        color: 'white',
        fontSize:width* 0.04,
        textAlign: 'center',
        fontFamily: 'IRANSans(FaNum)',
    },
})