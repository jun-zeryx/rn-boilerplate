import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import { Card, Text, SearchBar, Rating, Icon } from 'react-native-elements'
import { createAppContainer, createStackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {

  // TODO: Unsure as to what to load from database in carouselData

  state = {
    email: '-',
    password: '-',
    categoryData: [
      {'id' : '1', 'price' : '6.00','name':'Chicken Rice', 'uri' : 'https://reactjs.org/logo-og.png'},
      {'id' : '2', 'price' : '3.00','name':'ABC Soup', 'uri' : 'https://reactjs.org/logo-og.png'},
      {'id' : '3', 'price' : '8.00','name':'Nasi Lemak', 'uri' : 'https://reactjs.org/logo-og.png'},
    ],
    carouselData: [
      {'id' : '1', 'uri' : 'https://reactjs.org/logo-og.png'},
      {'id' : '2', 'uri' : 'https://reactjs.org/logo-og.png'},
      {'id' : '3', 'uri' : 'https://reactjs.org/logo-og.png'},
      {'id' : '4', 'uri' : 'https://reactjs.org/logo-og.png'},
      {'id' : '5', 'uri' : 'https://reactjs.org/logo-og.png'},
    ]
  }

  render() {

    // TODO: load categories dynamically

    carouselImage = this.state.carouselData.map((item) => {
      return (
        <Image
        key={item.id}
        style={{width: width, height: height * 0.4}}
        source={{uri: item.uri}}
        />
      )
    })

    categoryContent = this.state.categoryData.map((item) => {
          return (
            <Card
            key={item.id}
            containerStyle={{width: 200, height: 250,borderRadius:10,overflow:'hidden'}}
            image={{uri: 'https://reactjs.org/logo-og.png'}}
            imageStyle={{width:200,height: 180}}
            >
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
              <Rating
              imageSize={12}
              readonly
              startingValue={3}
              style={{alignSelf:'flex-start'}}
              />

            </Card>
          );
        });

    // TODO: Style containers properly (padding? margin?)

    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>

        <View style={{flex:1, flexDirection: 'row'}}>
          <Icon
          raised
          size={14}
          name='search'
          type='font-awesome'
          color='grey'
          onPress={() => console.log('hello')}
          />
          <Icon
          raised
          size={14}
          name='settings'
          type='feather'
          color='grey'
          onPress={() => console.log('hello')}
          />
        </View>

        <View style={styles.container}>
          <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          >
            {carouselImage}
          </ScrollView>
        </View>


        <View style={styles.container}>
          <Text h4 style={{fontWeight: 'bold'}}>Local Food</Text>
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          >
            {categoryContent}
          </ScrollView>
        </View>

        <View style={styles.container}>
          <Text h4 style={{fontWeight: 'bold'}}>Chinese Food</Text>
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          >
            {categoryContent}
          </ScrollView>
        </View>

      </ScrollView>
      </SafeAreaView>
    )
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
