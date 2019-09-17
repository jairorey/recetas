import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import styles from './Styles/GenericScreenStyles';

import NavBar from "../Components/NavBar";

import RecipeRow from "../Components/RecipeRow";
import TabBar from '../Components/TabBar';

import { observer, inject } from "mobx-react";

class FavoritesScreen extends Component {

  static navigationOptions = {
    title: "Favorites"
  };
  constructor(props) {
    super(props)
    
    console.log("constructor");
  }

  componentDidMount = () => {
    const { recipes } = this.props;
    recipes.getFavorites();
  }

  keyExtractor = (item) => item.id;

  renderList = () => {
    const { recipes } = this.props;
    return (
        <FlatList
          ListHeaderComponent = {this.renderRecommended}
            keyExtractor = {this.keyExtractor}
            data={recipes.favoritesSource}
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

export default inject('recipes')(observer(FavoritesScreen));