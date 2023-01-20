import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { useState } from "react";

const ComponentsScreen = () => {
    const [state, setState] = useState(<Text>heloooo!@#@#@</Text>);
    return (
        <View>
            <Text style={styles.text}>componentsScreen!</Text>
            <Text>hi there</Text>
            {state}
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 40,
    },
    box: {
        width: "20%",
        backgroundColor: "black",
    },
});

export default ComponentsScreen;
