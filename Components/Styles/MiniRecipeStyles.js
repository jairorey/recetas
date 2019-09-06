import {StyleSheet} from 'react-native';
import { Metrics, Colors, Fonts } from '../../Theme'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

export default StyleSheet.create({
    
    container: {
        marginLeft: Metrics.baseSpace,
        height:128,
        alignItems: "center",
        justifyContent:"center",
        overflow:"hidden",
        borderRadius: Metrics.borderRadius
    },
    recipeImage: {
        width: 200,
        height: 128
    }
});