import React from "react";
import { View, Button, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Details")}
        title="Next Screen"
      ></Button>
    </View>
  );
};

export default Home;
