import {StyleSheet} from 'react-native';
import { Metrics, Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
    
    container: {
        marginBottom: Metrics.baseSpace,
        alignItems: "stretch",
        justifyContent:"center"
    },
    header: {
        paddingHorizontal: Metrics.baseSpace,
        paddingVertical: Metrics.smallSpace,
        ...Fonts.style.h3,
        color: Colors.black,
        textAlign: "left"
    },
    scroller: {
        paddingRight: Metrics.baseSpace
    }
});