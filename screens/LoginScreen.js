import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Image, Dimensions, Alert, Keyboard } from 'react-native';
import { Input, Button, Text } from 'galio-framework';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Colors from '../constants/Colors'

export default class LoginScreen extends React.Component {

  constructor() {
    super();
    this.doLogin = this.doLogin.bind(this);
  }

  state = {
    email: '-',
    password: '-',
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  doLogin() {
    Alert.alert(
      'Sign In Action',
      `${this.state.email} ${this.state.password}`,
      [
        {
          text: 'Ok',
          onPress: () => this.props.navigation.navigate('Main')
        },
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.imageContainer}>
          <Image
          style={{width: 100, height: 100,borderRadius: 40,overflow: 'hidden'}}
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          />
        </View>
        <View style={styles.contentContainer}>
          <Input
          rounded
          bgColor='transparent'
          style={styles.input}
          placeholder='Username'
          onChangeText={text => this.handleChange('email', text)}
          />
          <Input
          rounded
          bgColor='transparent'
          password
          viewPass
          style={styles.input}
          placeholder='Password'
          onChangeText={text => this.handleChange('password', text)}
          />
          <Text
          color='grey'
          size={12}
          onPress={() => Alert.alert('Not implemented')}
          style={{ alignSelf: 'flex-end', lineHeight: 24, marginRight: width * 0.1}}
          >
          Forgot your password?
          </Text>
        </View>
        <View style={styles.bottom}>
          <Text
          color='grey'
          size={12}
          onPress={() => Alert.alert('Not implemented')}
          style={{ alignSelf: 'center', marginBottom: height * 0.025}}
          >
          Don't have an account? Sign Up
          </Text>
          <Button
          round
          color='grey'
          onPress={this.doLogin}
          >
          Sign In
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: width * 0.8,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 36
  },

});
