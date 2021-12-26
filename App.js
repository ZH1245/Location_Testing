import React from "react";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import Constants from "expo-constants";
import { Button } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [text, setText] = useState("");
  const getLocation = async () => {
    let location = await Location.getCurrentPositionAsync();
    setLocation(location);
    setText(location.coords);
    console.log(location);
  };
  //   useEffect(() => {
  //     (async () => {
  //       let { status } = await Location.requestForegroundPermissionsAsync();
  //       if (status !== "granted") {
  //         setErrorMsg("Permission to access location was denied");
  //         return;
  //       }

  //       let location = await Location.getCurrentPositionAsync({});
  //       setLocation(location);
  //       if (errorMsg) {
  //         setText(errorMsg);
  //       } else if (location) {
  //         setText(JSON.stringify(location));
  //       }
  //     })();
  //   }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Location TESTING</Text>
      {!text ? (
        <Text>"Waiting...."</Text>
      ) : (
        <>
          <Text>{"Latitude: " + text.latitude}</Text>
          <Text>{"Longitude: " + text.longitude}</Text>
        </>
      )}

      <Button onPress={getLocation}>Get Location</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
});
export default App;
