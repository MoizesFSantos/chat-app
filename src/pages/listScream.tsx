import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        Try editing me! 🎉
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListScreen;