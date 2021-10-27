import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const rock = require("./Signs/rock.png");
const paper = require("./Signs/paper.png");
const scissors = require("./Signs/scissors.png");
const bgColors = ["#81ecec", "#6c5ce7", "#0984e3"];

const newimg = () => {
  const emojis = [rock, paper, scissors];
  const random = Math.floor(Math.random() * 3);
  return emojis[random];
};
const playgame = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter < 1) return;
    const timer = setTimeout(() => {
      setCounter((prv) => prv - 1);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [counter]);
  return (
    <View
      style={StyleSheet.compose(
        { backgroundColor: bgColors[counter - 1] },
        styles.container
      )}
    >
      {counter < 1 ? (
        <>
          <Image style={styles.sign} source={newimg()} />
          <View style={styles.button}>
            <Button onPress={() => setCounter(3)} title="play Again" />
          </View>
        </>
      ) : (
        <Text style={styles.counter}>{counter} </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  counter: {
    fontSize: 150,
    color: "white",
  },
  sign: {
    width: 300,
    height: 300,
  },
  button: {
    position: "absolute",
    bottom: 40,
  },
});
export default playgame;
