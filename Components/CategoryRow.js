import React from "react";

import { View, Text } from "react-native";
import styles from "./Styles/CategoryRowStyles";

class CategoryRow extends React.Component {
    
    render () {

        const { data } = this.props;

        return(
            <View style={styles.categoryRow}>
                <Text style={styles.categoryText}>{(data.name).toUpperCase()}</Text>
            </View>
        )
    }
}

export default CategoryRow;