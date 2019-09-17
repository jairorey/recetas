import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import styles from './Styles/GenericScreenStyles';

import NavBar from "../Components/NavBar";

import RecipeRow from "../Components/RecipeRow";
import TabBar from '../Components/TabBar';
import RecipeStore from "../MobX/RecipeStore";
import { observer, inject } from "mobx-react";

@observer
class CategoryScreen extends Component {

  static navigationOptions = {
    title: "Category"
  };
  constructor(props) {
    super(props)
    
    this.recipeStore = new RecipeStore();

  }

  componentDidMount = () => {
    const { navigation } = this.props;
    const category = navigation.getParam("category", {});

    this.recipeStore.getRecipes(category.id);
  }

  keyExtractor = (item) => item.id;

  renderList = () => {

    return (
        <FlatList
            keyExtractor = {this.keyExtractor}
            data={this.recipeStore.recipesSource}
            renderItem = {({ item }) => <RecipeRow data={item} />}
        />
    );
  };


  render() {
    const {navigation} = this.props;
    const category = navigation.getParam("category", {});
    return(
        <View style={styles.mainScreen}>
            <NavBar 
              leftButton={true} 
              rightButton={false}
              title={category.name}
            />
            <View style={styles.container} >
              {this.renderList()}
            </View>
            <TabBar selected="categories" />
        </View>
    );
  }
}

export default CategoryScreen;