import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './Styles/GenericScreenStyles';

import NavBar from "../Components/NavBar";

export default class GenericScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favorite: false
    };
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentwillunmount");
  }

  pressFavorite = () => {
    const {favorite} = this.state;
    this.setState({
      favorite: !favorite
    });
  }


  render() {
    const {favorite} = this.state;
    return(
        <View>
            <NavBar 
              leftButton={true} 
              rightButton={true} 
              onPressFavorite={this.pressFavorite} 
              title="Titulo" 
              favorite= {favorite}
              style={[styles.navBar]} 
            />
        </View>
    );
  }
}