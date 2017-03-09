'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

class Main extends Component {
  render() {
    return (
      <View style={{backgroundColor:'yellow', flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Helloworld', () => Main);
if (Platform.OS == 'web') {
  var app = document.createElement('div');
  document.body.appendChild(app);
  AppRegistry.runApplication('Helloworld', {
    rootTag: app
  });
}
