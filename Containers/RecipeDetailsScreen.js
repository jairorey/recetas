import React, {Component} from 'react';
import {StatusBar, Text, View, Image, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from './Styles/RecipeDetailsScreenStyles';
import NavBar from "../Components/NavBar";

export default class RecipeDetailsScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      favorite: false
    };
    console.log("constructor");
  }

  pressFavorite = () => {
    const {favorite} = this.state;
    this.setState({
      favorite: !favorite
    });
  }

  renderImage = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});

    let imageUrl = "https://via.placeholder.com/640x360";
    if (data && data.photo) {
        imageUrl = data.photo;
    }
    return (
            <View style={styles.imageContainer}>
                <Image source={{uri: imageUrl}} style={styles.recipeImage} />
                <View style={styles.darkener} />
            </View>
        );
  };

  renderInfo = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});
    return (
      <View style={styles.infoContainer}>
          <Text style={styles.category}>{data.categoryName}</Text>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.properties}>
              <View style={styles.cell}>
                  <Icon name="ios-time" style={styles.cellIcon} />
                  <Text style={styles.cellText}>{data.duration} Minutos</Text>
              </View>
              <View style={styles.cell}>
                  <Icon name="ios-podium" style={styles.cellIcon} />
                  <Text style={styles.cellText}>{data.complexity}</Text>
              </View>
              <View style={styles.cell}>
                  <Icon name="ios-restaurant" style={styles.cellIcon} />
                  <Text style={styles.cellText}>{data.people} Personas</Text>
              </View>
          </View>
      </View>

    );
  }

  renderIngredients = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});

    if (data.ingredients) {
      return (
        <View style={styles.infoBox}>
          <Text style={styles.header}>Ingredientes</Text>
          <Text style={styles.description}>{data.ingredients}</Text>
        </View>
      );
    }
  };

  renderInstructions = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});

    if (data.description) {
      return (
        <View style={styles.infoBox}>
          <Text style={styles.header}>Preparación</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      );
    }
  };

  renderContent = () => {
    return(
        <ScrollView>
          {this.renderImage()}
          {this.renderInfo()}
          {this.renderIngredients()}
          {this.renderInstructions()}
        </ScrollView>
    );
  };

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});
    const {favorite } = this.state;
    return(
        <View>
            <StatusBar barStyle="light-content" />
            <NavBar 
              leftButton={true} 
              rightButton={true} 
              onPressFavorite={this.pressFavorite} 
              transparent={true} 
              favorite= {favorite}
              style={[styles.navBar]} 
            />
            <View>{this.renderContent()}</View>
        </View>
    );
  }
}