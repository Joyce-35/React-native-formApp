import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import pet from "../assets/cat.jpeg";

const Pet = ({town,animal,year,location}) => {
  return (
    <View style={styles.container}>
      <Image source={pet} style={styles.image} />
      <View style={styles.containerInfo}>
        <Text style={styles.name}>{town}</Text>
        <Text style={styles.other}>{animal}</Text>
        <Text style={styles.other}>{year}</Text>
        <Text style={styles.other}>
        <EvilIcons name="location" size={25} style={styles.icon} /> {location}
        </Text>
        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    flexDirection: "row",
    marginVertical:5,
   
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  containerInfo: {
    marginTop: 20,
    height: 150,
    width: 200,
    paddingLeft: 20,
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: "#f0f2f0",
    alignItems:"center"
  },
  name: {
    color: "#5100ad",
    fontSize: 25,
    fontWeight: "bold",
  },
  other: {
    color: "#d0d6d1",
    marginVertical:2,
  },
});
export default Pet;
