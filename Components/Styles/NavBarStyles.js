import {StyleSheet} from 'react-native';
import { Metrics, Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
    navBar: {
        marginTop: Metrics.statusBarHeight,
        height:Metrics.navBarHeight,
        backgroundColor:Colors.whiteFull,
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center"
    },
    alternate: {
        color: Colors.whiteFull
    },
    transparent: {
        position: "absolute",
        top:0,
        right:0,
        left:0,
        backgroundColor: "transparent",
        zIndex: 10
    },
    title: {
        ...Fonts.style.recipeNameCard,
        fontWeight: "bold"
    },
    leftContainer: {
        width:Metrics.buttonSize,
        alignItems:"center",
        justifyContent:"center"
    },
    rightContainer: {
        width:Metrics.buttonSize,
        alignItems:"center",
        justifyContent:"center"
    },
    titleWrapper: {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    icons: {
        fontSize:24,
        justifyContent:"center",
        alignItems:"center"
    },
    favorite: {
        color:Colors.dustyOrange
    },
    FavIco: {},
});