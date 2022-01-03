import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PageOne = () => {
  const [dams, setDams] = useState([
    {
      name: "Язовир Кралев дол",
      image: require("../../assets/dams/iazovir_kralevdol.jpg"),
      key: "1a",
    },
    {
      name: "Язовир Пчелина",
      image: require("../../assets/dams/iazovir_pchelina.jpg"),
      key: "2a",
    },
    {
      name: "Язовир Стефаново",
      image: require("../../assets/dams/iazovir_stefanovo.jpg"),
      key: "3a",
    },
    {
      name: "Язовир Слаковци",
      image: require("../../assets/dams/iazovir_slakovtsi.jpg"),
      key: "4a",
    },
    {
      name: "Язовир Студена",
      image: require("../../assets/dams/iazovir_studena.jpg"),
      key: "5a",
    },
    {
      name: "Язовир Бегуновци",
      image: require("../../assets/dams/iazovir_begunovtsi.jpg"),
      key: "6a",
    },
    {
      name: "Язовир Брезнишки извор",
      image: require("../../assets/dams/iazovir_breznishki_izvor.jpg"),
      key: "7a",
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {dams.map((item) => (
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

export default PageOne;
