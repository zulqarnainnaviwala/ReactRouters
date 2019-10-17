import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Page3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:50}}>PAGE 3</Text>
        <Button
          title="Back to Page"
          onPress={() =>
            this.props.navigation.navigate('Page')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


























// import React, { Component } from 'react';
// import { TouchableOpacity,
//     AppRegistry, FlatList,
//     StyleSheet, Text, View, Alert
// } from 'react-native';
// // import {  } from 'react-native-gesture-handler';

// export default class Page3 extends Component {

//     renderSeparator = () => {
//         return (
//             <View
//                 style={{
//                     height: 1,
//                     width: "100%",
//                     backgroundColor: "#000",
//                 }}
//             />
//         );
//     };

//     //handling onPress action  
//     getListViewItem = (item) => {
//         // Alert.alert(item.value); 
//         this.props.navigation.navigate(item.value)
//     }

//     render() {

//         return (
//             <View style={styles.container}>
                
//                 <View style={{ marginTop: 10, marginBottom: 7, backgroundColor: '#a8a8ff', marginTop: 30 }}>
//                     <TouchableOpacity
//                         onPress={() =>
//                             this.props.navigation.navigate('BalochistanPSL')
//                         }
//                     >
//                         <Text style={{ fontSize: 50, textAlign: 'center', padding: 3 }}>BALOCHISTAN                بلوچستان</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View style= {{flexDirection:'row'}}>
//                 <FlatList
//                     data={[
//                         { key: 'Chaman' , urdu: 'چمن', value: 'Chaman'},
//                         { key: 'Chitkann' , urdu: 'چٹکن', value: 'Chitkann'},
//                         { key: 'Dera Allah Yar' , urdu: 'ڈیرہ اللہ یار', value: 'DeraAllahYar'},
//                         { key: 'Dera Murad Jamali',  urdu: 'ڈیرہ مراد جمالی', value: 'DeraMuradJamali'},
//                         { key: 'Gwadar' , urdu: 'گوادر', value: 'Gwadar'},
//                         { key: 'Hub' , urdu: 'حب', value: 'Hub'},
//                         { key: 'Kalat' , urdu: 'قلات', value: 'Kalat'},
//                         { key: 'Khanozai',  urdu: 'خونوزئی', value: 'Khanozai'},
//                         { key: 'Kharan' , urdu: 'خاران', value: 'Kharan'},
//                         { key: 'Khuzdar' , urdu: 'خضدار', value: 'Khuzdar'},
//                         { key: 'Loralai' , urdu: 'لورالائی', value: 'Loralai'},
//                         { key: 'Mastung',  urdu: 'مستونگ۔', value: 'Mastung'},
//                         { key: 'Nushki' , urdu: 'نوشکی', value: 'Nushki'},
//                         { key: 'Pasni',  urdu: 'پسنی', value: 'Pasni'},
//                         { key: 'Quetta',  urdu: 'کوئٹہ', value: 'Quetta'},
//                         { key: 'Sibi' , urdu: 'سبی', value: 'Sibi'},
//                         { key: 'Sui' , urdu: 'سوئی', value: 'Sui'},
//                         { key: 'Tump' , urdu: 'ٹمپ', value: 'Tump'},
//                         { key: 'Turbat' , urdu: 'تربت', value: 'Turbat'},
//                         { key: 'Usta Mohammad', urdu: 'اوستا محمد', value: 'UstaMohammad' },
//                         { key: 'Zhob',  urdu: 'ژوب', value: 'Zhob'},
//                     ]}
                   
//                     renderItem={({ item }) =>
//                     <TouchableOpacity onPress={this.getListViewItem.bind(this, item)}>
//                         <View style={styles.VIEW}>


//                             <Text style={styles.item}>
//                                 {item.key}
//                             </Text>
//                             <Text style={styles.item2}

//                             >
//                                 {item.urdu}
//                             </Text>
//                         </View>
//                     </TouchableOpacity>
//                 }

//                 ItemSeparatorComponent={this.renderSeparator}

//             />
//            </View>
//         </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // backgroundColor:'#a8a8a8'
//         backgroundColor: '#e9e9e9'
//     },
//     item: {
//         padding: 10,
//         // fontSize: 17,
//         height: 50,
//         // marginHorizontal: 15,
//         fontSize: 12,
//         flexDirection: 'row',
//         marginLeft: 15,



//     },
//     item2: {
//         padding: 10,
//         // fontSize: 17,
//         height: 50,
//         // marginHorizontal: 15,
//         fontSize: 12,
//         flexDirection: 'row',
//         textAlign: 'left',
//         // alignItems: 'flex-end',
//         // alignContent: 'flex-end',
//         // marginEnd:100
//         // justifyContent:'flex-end',
//         color: 'black',
//         // alignSelf:'flex-end',
//         // marginRight:150,
//         // paddingLeft:80
//         // marginRight:-100
//         position: 'relative'
//     },
//     VIEW: {
//         flexDirection: 'row',

//     },
// })





AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);