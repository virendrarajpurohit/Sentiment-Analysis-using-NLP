import React from 'react';
import axios from 'axios';

import {Platform,KeyboardAvoidingView, ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View,Button,TouchableNativeFeedback, Alert,ImageBackground} from 'react-native';



class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handlePress = this.handlePress.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
    static navigationOptions =  {
        title : 'Login',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#23CFA5'
    },
    };

  handlePress() {
    console.log("Hello");
    axios.post("https://emption-api.herokuapp.com/api/auth/login", {
      username: this.state.username, password: this.state.password
    }).then(res => {
      console.log(res["data"])
      if(res["data"]["message"] == "success") {
        alert("Login Successfully");
        this.props.navigation.navigate('Analysis');
      }
      else {
        alert("Wrong Username Or Password")
      }
    }).catch(function (error) {
        console.log(error);
      })
  };

  handleEmail(text) {
    this.setState({username: text});
  }

  handlePassword(text) {
    this.setState({password: text});
  }
  render() {
    const {navigate} = this.props.navigation;

    const paddingTop = 110 - this.state.keyboardSpace / 3;
    return (
      
            <View style = {styles.maincontainer} >

              <View style = {{width:"90%"}}>
                <View style = {styles.boxview}>
                  <Text style = {styles.txt1}>Username</Text>
                </View>
                  <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholderTextColor = "#A9A9A9"
                   placeholder="Username"
                   placeholderColor="#c4c3cb"
                   autoCapitalize = "none"
                   onChangeText = {this.handleEmail}/>
               </View>


               <View style = {{width:"90%"}}>
                 <View style = {styles.boxview}>
                  <Text style = {styles.txt1}>Password </Text>
                 </View>
                 <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholderTextColor = "#A9A9A9"
                  autoCapitalize = "none"
                  placeholder="Password"
                  onChangeText = {this.handlePassword}/>
                </View>
                <View>
                  <TouchableOpacity  onPress={this.handlePress}>
                  <View style = {styles.btncontainer}>
                      <Text style={styles.button1}>Login</Text>
                  </View>
                </TouchableOpacity> 
                  <TouchableOpacity  onPress={() => {navigate('Register')}}>
                    <View style = {styles.btncontainer1}>
                        <Text style={styles.button2}>Register</Text>
                    </View>
                  </TouchableOpacity>
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
    height: 45,
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
  marginTop:20,
  width: 73,
  height: 28,
  // font-family: Martel Sans;
  fontStyle: "normal",
  fontWeight: "normal",
  // lineHeight: "normal",
  fontSize: 15,
  textAlign: "center",
  color: "#080c21",
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

export default LoginScreen;
