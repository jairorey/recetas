import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import styles from './Styles/GenericScreenStyles';

import NavBar from "../Components/NavBar";

import CategoryRow from "../Components/CategoryRow";
import TabBar from '../Components/TabBar';

const categoryList = [
  {
    "id": "1",
    "name":"Fish",
  },
  {
    "id": "2",
    "name":"Dessert",
  },
  {
    "id": "3",
    "name":"Appetizer",
  },
  {
    "id": "4",
    "name":"BREAKFAST & Brunch",
  },
  {
    "id": "5",
    "name":"beverages",
  },
  {
    "id": "6",
    "name":"Main Dish",
  },
  {
    "id": "7",
    "name":"Pasta",
  }
];

export default class CategoriesScreen extends Component {

  static navigationOptions = {
    title: "Categories"
  };
  constructor(props) {
    super(props)
    
    console.log("constructor");
  }

  renderRow = ({ item }) => {
    return <CategoryRow data={item} />
  };

  keyExtractor = (item) => item.id;

  renderList = () => {
    return (
        <FlatList
            keyExtractor = {this.keyExtractor}
            data={categoryList}
            renderItem = {this.renderRow}
        />
    );
  };

  render() {
    return(
        <View style={styles.mainScreen}>
            <NavBar 
              leftButton={false} 
              title="Categories"
            />
            <View style={styles.container} >
              {this.renderList()}
            </View>
            <TabBar selected="categories" />
        </View>
    );
  }
}