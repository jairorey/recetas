import {StyleSheet} from 'react-native';
import { Metrics, Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
    mainScreen: {
        flex: 1
    },
    container: {
        flex: 1
    },
    navBar: {
        marginTop: Metrics.statusBarHeight,
        height:Metrics.navBarHeight,
        backgroundColor:Colors.whiteFull,
        alignItems: "center",
        justifyContent:"center"
    },
    title: {
        fontFamily: Fonts.family.base,
        fontSize: 16,
        fontWeight: "500",
        fontStyle:"normal",
        lineHeight:24,
        letterSpacing:0.5,
        textAlign:"center",
        color: Colors.black
    },
    imageContainer: {
        height:192
    },
    recipeImage: {
        flex: 1
    },
    darkener: {
        position:"absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 5,
        backgroundColor:"rgba(0,0,0,0.3)"
    },
    infoContainer: {
    },
    ingredientsBox: {
        height: 200,
        backgroundColor: "violet"
    },
    instructionBox: {
        height: 200,
        backgroundColor: "pink"
    },
    category: {
        fontFamily: Fonts.family.base,
        fontSize: 10,
        fontWeight: "bold",
        fontStyle:"normal",
        lineHeight:24,
        letterSpacing:1,
        textAlign:"center",
        color: Colors.brownGrey
    },
    properties: {
        justifyContent: "flex-start",
        alignItems:"center",
        flexDirection: "row"
    },
    cell: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        marginRight: Metrics.smallSpace,
        flexDirection:"row"
    },
    cellIcon: {
        fontSize: Metrics.icons.small,
        color: Colors.brownGrey,
        marginRight: Metrics.smallSpace
    },
    cellText: {
        fontFamily: Fonts.family.base,
        fontSize: 13,
        fontWeight:"300",
        fontStyle:"normal",
        lineHeight:24,
        letterSpacing:0.5,
        color:Colors.brownGrey
    },
    infoBox: {
        paddingVertical: Metrics.smallSpace,
        paddingHorizontal: Metrics.baseSpace,
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "stretch"
    },
    header: {
        fontFamily: Fonts.family.bold,
        lineHeight: 24,
        textAlign:"center",
        color: Colors.black,
        fontSize:14
    },
    description: {
        fontFamily: Fonts.family.base,
        color: Colors.black,
        lineHeight: 24,
        fontSize:14
    }
});