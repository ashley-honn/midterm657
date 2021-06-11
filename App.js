import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Platform, TextInput, Text, View } from "react-native";

export default function App() {
  const [num1, onChangeNum1] = React.useState(0);
  const [num2, onChangeNum2] = React.useState(0);
  const [message, setMessage] = React.useState('result');


  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxTextHead}>Midterm Exam</Text>
        <Text style={styles.boxTextBody}>Compare two numbers</Text>
      </View>
      
      <Text style={styles.boxTextNum}>Number 1:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNum1}
        />
      <Text style={styles.boxTextNum}>Number 2:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNum2}
        />

        <Button title="COMPARE" 
                color="blue"
                onPress={() => Message(useState())} />
        <StatusBar style="auto" />
        <Text>{message} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select ({
       ios: {paddingTop: 20},
       android: {paddingTop: StatusBar.currentHeight}
    })
  },

  box: {
    height: 200,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "center",
    backgroundColor: "teal"
  },

  boxTextHead: {
    fontSize: 30,
    color: "white",
  },

});

//*this is the end