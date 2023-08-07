import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

class SignInScreen extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.logTextContainer}>
            <Text style={styles.logText}>Sign up</Text>
          </View>
          <View>
            <TextInput
              placeholderTextColor="#aaaaaa"
              placeholder="Username"
              style={styles.input}
            />
            <TextInput
              placeholderTextColor="#aaaaaa"
              placeholder="Email"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#aaaaaa"
              secureTextEntry={true}
              style={styles.input}
            />
            <TextInput
              placeholder="Password again"
              placeholderTextColor="#aaaaaa"
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.otherContainer}>
            <Text style={styles.dontHave}>You already have an account?</Text>
            <Text style={styles.SignUp}>Login in</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop:70,
    flex: 1,
    marginHorizontal: 50,
  },
  logText: {
    fontSize: 50,
    color: "#5100ad",
  },
  logTextContainer: {
    marginBottom: 50,
  },
  input: {
    borderBottomColor: "#5100ad",
    borderBottomWidth: 2,
    height: 50,
    fontSize: 20,
    marginTop: 20,
  },
  buttonContainer: {
    marginVertical: 50,
    height: 50,
    backgroundColor: "#5100ad",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  otherContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dontHave: {
    marginRight: 10,
    fontSize: 16,
  },
  SignUp: {
    fontSize: 16,
    color: "#5100ad",
  },
});

export default SignInScreen;
