import React from 'react';
import axios from 'axios';
import {Image,Platform, KeyboardAvoidingView,Picker,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View,Button,TouchableNativeFeedback, Alert,} from 'react-native';

export default class RegisterScreen extends React.Component {
  constructor(props) {
   super(props);
   this.state = { username: '', password: '', email:'',designation:'',};
   this.handlePress = this.handlePress.bind(this);
   this.handleEmail = this.handleEmail.bind(this);
   this.handleUsername = this.handleUsername.bind(this);
   this.handlePassword = this.handlePassword.bind(this);
   }
  handlePress() {
    axios.post("https://emption-api.herokuapp.com/api/auth/register", {
      username: this.state.username, password: this.state.password
    }).then(res => {
      console.log(res["data"]["message"])
      if(res["data"]["message"] == "User Created Successfully") {
        alert("Register Successfully");
      this.props.navigation.navigate('Analysis');
      }
      else {
        alert("Please Enter all the Details");
      }
    }).catch(function (error) {
        console.log(error);
      })
  };

  handleUsername(text) {
    this.setState({username: text});
  }
  handleEmail(text) {
    this.setState({email: text});
  }

  handlePassword(text) {
    this.setState({password: text});
  }


  static navigationOptions =  {
          title : 'Register',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#23CFA5'
    },
  };
 

  render() {
    const {navigate} = this.props.navigation;
    return (
            <View style = {styles.maincontainer}>
    
              <View style = {{width:"90%",marginTop:10,}}>
              <View style = {styles.boxview}>
              <Text style = {styles.txt1}>Username</Text>
              </View>
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               placeholderTextColor = "#A9A9A9"
               autoCapitalize = "none"
               placeholder="Username"
               onChangeText = {this.handleUsername}/>
               </View>

               <View style = {{width:"90%",marginTop:10,}}>
                 <View style = {styles.boxview}>
                  <Text style = {styles.txt1}>Email</Text>
                 </View>
                   <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "#A9A9A9"
                    autoCapitalize = "none"
                    placeholderTextColor = "#A9A9A9"
                    autoCapitalize = "none"
                    placeholder="Enter Email" 
                    onChangeText = {this.handleEmail}/>
                  </View>

                <View style = {{width:"90%",marginTop:10,}}>
                  <View style = {styles.boxview}>
                   <Text style = {styles.txt1}>Password</Text>
                  </View>
                    <TextInput style = {styles.input}
                     underlineColorAndroid = "transparent"
                     placeholderTextColor = "#A9A9A9"
                     autoCapitalize = "none"
                     placeholder="Password"
                     placeholderTextColor = "#9A9A9A"
                     autoCapitalize = "none"
                     onChangeText = {this.handlePassword}/>
                   </View>
                 <View style = {{width:"90%",marginTop:10,}}>
                   <View style = {styles.boxview}>
                    <Text style = {styles.txt3}>User Type</Text>
                   </View>
                   <Picker style = {styles.input1}
                      selectedValue={this.state.selectedValue}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedValue: itemValue})
                      }>
                      <Picker.Item label="Parent" value="Parent" />
                      <Picker.Item label="Psychiatrist" value="Psychiatrist" />
                      <Picker.Item label="NA" value="NA" />
                    </Picker>
                    </View>
                  <View>
                    <TouchableOpacity  onPress={this.handlePress}>
                      <View style = {styles.btncontainer}>
                            <Text style={styles.button1}>Register</Text>
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
    fontSize:40,
 },
  pickerinput:{
  width: 90,

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
  input1:{
    // width:30,  ,
    paddingLeft: 6,
    height: 25,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#23CFA5',
    // mix-blend-mode: normal;
  },
txt2:{
  width: 31,
  height: 55,
  marginTop:20,
  fontSize: 30,
  textAlign: "center",
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
    },
    button1 :{
      width: 120,
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
  width: 100,
  height: 28,
  // font-family: Martel Sans;
  fontStyle: "normal",
  fontWeight: "normal",
  // lineHeight: "normal",
  fontSize: 15,
  marginLeft:10,
  textAlign: "left",
  color: "#080c21",
  },
  txt3:{
  // position: "absolute",
  width: 100,
  height: 48,
  // font-family: Martel Sans;
  fontStyle: "normal",
  fontWeight: "normal",
  // lineHeight: "normal",
  fontSize: 17,
  marginTop:20,
  textAlign: "left",
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
