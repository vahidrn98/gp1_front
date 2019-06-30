import { StyleSheet, View, Text , Image , FlatList , Dimensions} from 'react-native';

const {width , height} = Dimensions.get('window')
export const styles = StyleSheet.create({
    body:{
        backgroundColor:'#131929',
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10,
    },
    topBar:{
        flex: 0.4,
        width: width,
        flexDirection: 'row',
    },
    backButton:{
        flex: 0.16666,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    backIcon:{
        height:.048 * width ,
        width: .048 * width , 
    },
    profileName:{
        flex: 0.6,
        height: '100%',
        // alignItems: 'center',
        paddingRight: .072 * width ,
        justifyContent: 'center',
    },
    profileNameText:{
        color: 'white',
        fontSize: width * 0.053,
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
        width: width * 0.17,
        height: width * 0.17,
        borderRadius: width * 0.888,
        overflow: 'hidden',
        // transform:[{scale:2}],
    },
    profilePic:{
        width: '100%',
        height: '100%',
    },
    pageTitle:{
        flex: 0.3,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageTitleText:{
        color: 'white',
        fontSize: width * 0.06,
        textAlign: 'center',
        fontFamily: 'IRANSans(FaNum)',
    },
    pageDetails:{
        flex: 0.5,
        width: '100%',
        flexDirection: 'column',
        marginBottom: height * 0.05,
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
        color: 'rgba(255,255,255,0.8)',
        fontSize: width * 0.038 ,
        fontFamily: 'IRANSans(FaNum)',
        textAlign: 'center',
    },
    listHeader:{
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: '#1D2437',
        borderRadius: 10,
        elevation: 8,
    },
    listHeaderItem:{
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listHeaderRight:{
        flex: 0.1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listHeaderItemText:{
        color: 'rgba(255,255,255,0.8)',
        fontSize: width * 0.035 ,
        textAlign: 'center',
        fontFamily: 'IRANSans(FaNum)',
    },
    listItem:{
      marginTop: 15,
      height: 0.1 * height,
      flexDirection: 'row',
    },
    listLeft:{
        borderRadius: 10,
        backgroundColor: '#1D2437', 
        flex: 0.9,
        flexDirection: 'row',
        height: '100%',
        elevation: 8,
    },
    list:{
        flex:0.8,
        maxHeight: height*0.8,
    },
    listItemSec:{
        flex: 0.3333,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItemSecText:{
        color: 'rgba(255,255,255,0.8)',
        fontSize: width * 0.035 ,
        textAlign: 'center',
        fontFamily: 'IRANSans(FaNum)',
    },
    listRight:{
        flex:0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    approved:{
        height: 0.02 * height,
        width: 0.02 * height,
        backgroundColor: '#21DFB6',
        borderRadius: 0.02 * height,
        margin: 'auto',
    },
})