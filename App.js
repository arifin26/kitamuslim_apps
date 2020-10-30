import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Route from './src/configs';
class App extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Route />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
export default App;
