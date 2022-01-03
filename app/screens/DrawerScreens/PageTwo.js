import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const PageTwo = () => {
  const [fishes, setFishes] = useState([
    {
      name: "Костур",
      image: require("../../assets/fishes/kostur.jpg"),
    },
    {
      name: "Бяла мряна",
      image: require("../../assets/fishes/biala-mriana.jpg"),
    },
    {
      name: "Каракуда",
      image: require("../../assets/fishes/karakuda.jpg"),
    },
    {
      name: "Бабушка",
      image: require("../../assets/fishes/babushka.jpg"),
    },
    {
      name: "Щука",
      image: require("../../assets/fishes/shtuka.jpg"),
    },
    {
      name: "Скобар",
      image: require("../../assets/fishes/skobar.jpg"),
    },
    { name: "Сом", image: require("../../assets/fishes/som.jpg") },
    {
      name: "Шаран",
      image: require("../../assets/fishes/sharan.jpg"),
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {fishes.map((item) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  // item: {
  //   marginTop: 24,
  //   marginLeft: 15,
  //   marginRight: 15,
  //   padding: 30,
  //   backgroundColor: "#accae8",
  //   fontSize: 24,
  // },
  cardText: {
    fontSize: 30,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 20,
    marginLeft: "3%",
    width: "94%",
  },
  cardImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
});

export default PageTwo;
