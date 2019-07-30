import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import styles from './Styles/GenericScreenStyles';

import NavBar from "../Components/NavBar";

import RecipeRow from "../Components/RecipeRow";
import TabBar from '../Components/TabBar';

const dataList = [
  {
    "id": "52944",
    "categoryName":"Fish",
    "name":"Escovitch Fish",
    "duration": "11",
    "complexity": "Hard",
    "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    "people": "3"
  },
  {
    "id": "1",
    "categoryName":"Fish",
    "name":"Escovitch Fish",
    "duration": "11",
    "complexity": "Hard",
    "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    "people": "3"
  },
  {
    "id": "2",
    "categoryName":"Fish",
    "name":"Escovitch Fish",
    "duration": "11",
    "complexity": "Hard",
    "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    "people": "3"
  }
];

export default class ExploreScreen extends Component {

  static navigationOptions = {
    title: "Explore"
  };
  constructor(props) {
    super(props)
    
    console.log("constructor");
  }

  keyExtractor = (item) => item.id;

  renderList = () => {
    return (
        <FlatList
            keyExtractor = {this.keyExtractor}
            data={dataList}
            renderItem = {({ item }) => <RecipeRow data={item} />}
        />
    );
  };

  render() {
    return(
        <View style={styles.mainScreen}>
            <NavBar 
              leftButton={false} 
              rightButton={false}
              title="Explore"
            />
            <View style={styles.container} >
              {this.renderList()}
            </View>
            <TabBar selected="explore" />
        </View>
    );
  }
}