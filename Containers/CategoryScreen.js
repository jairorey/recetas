import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import styles from './Styles/GenericScreenStyles';

import NavBar from "../Components/NavBar";

import RecipeRow from "../Components/RecipeRow";
import TabBar from '../Components/TabBar';
import {observer, inject} from 'mobx-react';


class CategoryScreen extends Component {

  static navigationOptions = {
    title: "Explore"
  };
  constructor(props) {
    super(props)
    
    console.log("constructor");
  }

  keyExtractor = (item) => item.id;


  renderRow = ({item}) => {
    return <CategoryRow data={item} />;
  };

  renderList = () => {

    const {recipes} = this.props;
    return (
        <FlatList
            keyExtractor = {this.keyExtractor}
            data={recipes.categoriesSource}
            renderItem = {this.renderRow}
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

export default inject("recipes")(observer(CategoryScreen));