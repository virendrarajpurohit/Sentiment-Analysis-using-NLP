import React from 'react';
import {Image,ActivityIndicator, ScrollView,StyleSheet,Text,Dimensions,TextInput,TouchableOpacity,View,Button,TouchableNativeFeedback, Alert,Linking,} from 'react-native';

import { ExpoConfigView } from '@expo/samples';
import { WebBrowser } from 'expo';

export default class SettingsScreen extends React.Component {
      static navigationOptions =  {
             title : 'Suggestions',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#23CFA5'
    },
      };

  render() {
    return (
<View style = {styles.maincontainer} >

              <View style = {{width:"90%"}}>
                <View>
                  <Text style = {styles.txt1}>Some Youtube Videos For You</Text>
                </View>
                  <Text style = {styles.input} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=3ntyYNtHs_Y')}>Motivational Video For You</Text>
                  


               </View>


               <View style = {{width:"90%"}}>
                 <View style = {styles.boxview}>
                  <Text style = {styles.txt3}>Some Articles For You</Text>
                 </View>
                 <Text style = {styles.input} onPress={()=>Linking.openURL('https://econsultancy.com/the-most-joyful-digital-news-stories-from-the-last-week-12/')}>Joyful Article For You</Text>

                </View>


           </View>

    );
  }
}

const styles = StyleSheet.create({
  maincontainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',

  },
  input:{
    // width:  ,
    paddingLeft: 6,
    marginTop:15,
    height: 200,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#23CFA5',
    // mix-blend-mode: normal;
  },
txt2:{
  width: 350,
  height: 55,
  fontSize: 30,
  color: "#080c21",
},
btncontainer:{
        flexDirection: 'column',
          justifyContent: 'center',
        backgroundColor: "#23CFA5",
        // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        borderRadius: 0,
        margin: 25,
        width: 250,
        height: 40,
        marginTop:40,
        justifyContent: 'center',
        alignItems: 'center',
    },
btncontainer1:{
        flexDirection: 'column',
          justifyContent: 'center',
        backgroundColor: "#23CFA5",
        // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        borderRadius: 0,
        margin: 25,
        width: 250,
        height: 40,
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button1 :{
      width: 90,
      height: 30,
      fontSize: 20,
      margin: "auto",
      textAlign: 'center',
      // font-family: Martel Sans;
      fontStyle: "normal",
      fontWeight: "normal",
      color: "#080c21",
    },
    button2 :{
      width: 90,
      height: 30,
      fontSize: 20,
      margin: "auto",
      textAlign: 'center',
      // font-family: Martel Sans;
      fontStyle: "normal",
      fontWeight: "normal",
      color: "#080c21",
    },
  txt1:{
  // position: "absolute",
  marginTop:0,
  width: 300,
  height: 25,
  // font-family: Martel Sans;
  fontStyle: "normal",
  fontWeight: "normal",
  // lineHeight: "normal",
  fontSize: 15,
  textAlign: "center",
  color: "#080c21",
  paddingLeft:80,
  },
    txt3:{
  // position: "absolute",
  marginTop:30,
  width: 350,
  height: 25,
  // font-family: Martel Sans;
  fontStyle: "normal",
  fontWeight: "normal",
  // lineHeight: "normal",
  fontSize: 15,
  textAlign: "center",
  color: "#080c21",
  paddingLeft:50,
  },
textview:{
  // fontFamily:"MedusaGothic",
  color: "#080c21",
 lineHeight:75,
 fontSize:50,
 textAlign:"center",
  width: 312,
  height: 70,
},
});
