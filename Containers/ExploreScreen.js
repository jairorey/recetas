import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import styles from './Styles/GenericScreenStyles';

import NavBar from "../Components/NavBar";

import RecipeRow from "../Components/RecipeRow";
import TabBar from '../Components/TabBar';
import RecommendationBox from '../Components/RecommendationBox';

import {observable} from "mobx";

import {observer, inject} from "mobx-react";

class ExploreScreen extends Component {

  @observable counter = 0;

  static navigationOptions = {
    title: "Explore"
  };
  constructor(props) {
    super(props)
    
    console.log("constructor");

    setInterval( () => {
      this.counter++;
      }, 1000);
  }

  componentDidMount = () => {
    const { recipes } = this.props;
    recipes.getRecipes();
    recipes.getRecomended();
  }

  keyExtractor = (item) => item.id;

  renderList = () => {
    const { recipes } = this.props;
    return (
        <FlatList
          ListHeaderComponent = {this.renderRecommended}
            keyExtractor = {this.keyExtractor}
            data={recipes.recipesSource}
            renderItem = {({ item }) => <RecipeRow data={item} />}
        />
    );
  };

  renderRecommended = () => {
    const { recipes } = this.props;
    return <RecommendationBox data={recipes.recomendedSource} />;
  };

  render() {
    return(
        <View style={styles.mainScreen}>
            <NavBar 
              leftButton={false} 
              rightButton={false}
              title={`Title ${this.counter}`}
            />
            <View style={styles.container} >
              {this.renderList()}
            </View>
            <TabBar selected="explore" />
        </View>
    );
  }
}

export default inject('recipes')(observer(ExploreScreen));