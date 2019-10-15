import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Page2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Text style={{fontSize:50}}>PAGE 2</Text> 
        <Button
          title="Back to Page"
          onPress={() =>
            this.props.navigation.navigate('Page')
          }

        />
        <Button
          title="page 1 link"
          onPress={() =>
            this.props.navigation.navigate('Page1')
          }
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
