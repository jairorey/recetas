import React from "react";
import {View, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {withNavigation} from "react-navigation";

import styles from "./Styles/TabBarStyles.js";

class TabBar extends React.Component {

    navigate = (route) => {
        const {navigation} = this.props;
        switch(route) {
            case "explore":
                navigation.navigate({
                    routeName: "Explore"
                });
                break;
            case "categories":
                navigation.navigate({
                    routeName: "Categories"
                });
                break;
            case "favorites":
                navigation.navigate({
                    routeName: "Favorites"
                });
                break;
        }
    };
    
    renderTab = ({route, icon}) => {
        const {selected} = this.props;
        
        return(
            <TouchableOpacity style={styles.tab} onPress={() => this.navigate(route)}>
                <Icon name={icon} style={[
                    styles.tabIcon,
                    selected === route ? styles.selectedIcon:null
                ]} />
                {selected === route && <View style={styles.tabLine} /> }
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderTab({route: "explore", icon:"ios-home"})}
                {this.renderTab({route: "categories", icon:"ios-restaurant"})}
                {this.renderTab({route: "favorites", icon:"ios-heart"})}
            </View>
        );
    } 
}

export default withNavigation(TabBar);