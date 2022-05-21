import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import ListScreen from "./src/pages/listScream";

export default function App() {
  return (
    <View>
      <ListScreen/>
    </View>
  );
}


