import { StyleSheet } from "react-native";
import { Metrics, Colors, Fonts} from "../../Theme";

export default StyleSheet.create({
    categoryRow:{
        marginHorizontal: Metrics.baseSpace,
        marginTop: Metrics.baseSpace,
        height:Metrics.navBarHeight,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: Colors.whiteFull,
        borderRadius: Metrics.borderRadius
    },
    categoryText: {
        ...Fonts.style.h3
    }
});