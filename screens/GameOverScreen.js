import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          style={styles.image}
          source={require("../assets/success.jpg")}
          // source={{
          //   uri: "https://pbs.twimg.com/profile_images/919994388171722752/6GSSHvm-_400x400.jpg",
          // }}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number is: {props.userNumber}</BodyText>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    width: "80%",
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
});

export default GameOverScreen;
