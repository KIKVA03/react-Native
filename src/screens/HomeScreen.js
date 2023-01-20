import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View
            style={{
                alignItems: "center",
            }}
        >
            <Text style={styles.text}>HELOO FROM REACT NATIVE!!</Text>
            <View style={{ marginBottom: 20 }}>
                <Button
                    onPress={() => navigation.navigate("Components")}
                    title="Go TO Components Demo"
                />
            </View>
            <Button title="Go To List Demo" onPress={() => navigation.push("List")} />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: "red",
        marginBottom: 20,
    },
});

export default HomeScreen;
