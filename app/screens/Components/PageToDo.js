import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Header } from "react-native/Libraries/NewAppScreen";
import TodoItem from "./ToDoItem";

export default function PageToDo() {
  const [todos, setTodos] = useState([
    {
      text: "Make a List with all the water tanks in which you can fish",
      key: "1",
    },
    {
      text: "Make a sheet with all the water tanks in which you can fish",
      key: "2",
    },
    { text: "List of all dams", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevToDos) => {
      return prevToDos.filter((todo) => todo.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
