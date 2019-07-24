import {StyleSheet} from 'react-native';
import { Metrics, Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
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