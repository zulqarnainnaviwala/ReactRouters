import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

export default class Page1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:50}}>PAGE 1</Text>
        <Button
          title="Back to Page"
          onPress={() =>
            this.props.navigation.navigate('Page')
          }
        />
        <TouchableOpacity
        onPress= {
          ()=>this.props.navigation.navigate('Page')
        }
        >
           <Image
                            style={styles.image}
                            source={require('./assets/a.png')}
                        />
          <Text style={{ fontSize: 10, color: "purple" }}>
            home2
            </Text>

          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708090',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // borderWidth: 1,
    // backgroundColor:null,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 150,
    height: 150,
    // backgroundColor: '#20401e',
    // borderRadius: 50,
    // marginTop: 25,
    // marginHorizontal: 45,
},
});
