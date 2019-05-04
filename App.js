import React from 'react';
import { Platform, StatusBar } from 'react-native';

import { AppLoading, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

const theme = {
  Button: {
    raised: true,
  },
};

export default class App extends React.Component {


  state = {
    isLoadingComplete: false,
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <AppNavigator/>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        ...Ionicons.font,
      }),
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }

}
