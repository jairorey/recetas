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
        ...Fonts.style.recipeNameCard,
        fontWeight: "bold"
    },
    redBar: {
        backgroundColor:Colors.redFull
    },
});