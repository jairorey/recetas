import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import styles from './Styles/GenericScreenStyles';

import NavBar from "../Components/NavBar";

import RecipeRow from "../Components/RecipeRow";
import TabBar from '../Components/TabBar';
import RecommendationBox from '../Components/RecommendationBox';

const dataList = [
  {
    "id": "52944",
    "categoryName":"Fish",
    "name":"Escovitch Fish",
    "duration": "11",
    "complexity": "Hard",
    "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    "people": "3",
    "ingredients": "5 whole small/medium sized Snappers. \r\n Grount. \r\n Parrot or Goat Fish cleaned. \r\n 1 1/2 tsp. (7 ml) Salt \r\n 1 1/2 tsp. (7 ml) Pepper \r\n 3 Garlic \r\n Cooking Oil \r\n White Vinegar \r\n 2 Onions \r\n 2 Scotch Bonnet Pepper \r\n 10 pimentos",
    "description": "Wash fish in vinegar and water. Dry fish in paper towel and place on a plate. Cut a small deep gashes on each side of the fish. Rub salt and pepper on outside and in the cavities you made and on the outside. then put the fish on a plate or in a shallow bowl. Place oil in a frying pan/sauce pan. Enough to fry one side of the fish. Please note that this is not a deep fry therefore the fish should NOT be completely submerged in the oil. Place 2 cloves of Garlic in the pot and heat on high. Put cinnamon stick in a pot of boiling water to alleviate the smell of the frying fish. Remove garlic cloves from pot. Carefully place fish on its side in to the hot oil. (as many as the frying pan hold). Fry crisp and turn down the heat as necessary. Turn other side and fry crisp. Place fried fish on a plate with dry paper towels. Slice onions, scotch bonnet pepper, Place onions, scotch bonnet pepper, and pimento in a small pot with vinegar. Boil contents on stove for approx. 5 min. (Be careful of your eyes burning if contents are overheated), Pour contents on the fried fish for a hot and spicy flavor"
  },
  {
    "id": "1",
    "categoryName":"Otro",
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
  },
  {
    "id": "3",
    "categoryName":"Fish",
    "name":"Escovitch Fish",
    "duration": "11",
    "complexity": "Hard",
    "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    "people": "3"
  },
  {
    "id": "4",
    "categoryName":"Fish",
    "name":"Escovitch Fish",
    "duration": "11",
    "complexity": "Hard",
    "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    "people": "3"
  }
];

export default class FavoritesScreen extends Component {

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
          ListHeaderComponent = {this.renderRecommended}
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
              title="Favorites"
            />
            <View style={styles.container} >
              {this.renderList()}
            </View>
            <TabBar selected="favorites" />
        </View>
    );
  }
}