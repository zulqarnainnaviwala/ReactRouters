import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Page extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:50}}>PAGE</Text>
      <View style={{flexDirection:'row'}}>
        {/* switchers buttons */}
        <Button
          title="sample page 1"
          onPress={() =>
            this.props.navigation.navigate('Page1')
          } 
        />
        <Button
          title="sample page 2"
          onPress={() =>
            this.props.navigation.navigate('Page2')
          }
        />
        
        <Button
          title="Sample Page 3"
          onPress={() =>
            this.props.navigation.navigate('Page3')
          }
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
