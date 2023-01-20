import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListComponent = () => {
    const friends = [
        { name: `nika`, age: 24 },
        { name: `lasha`, age: 23 },
        { name: `kikva`, age: 23 },
        { name: `ika`, age: 24 },
        { name: `balu`, age: 24 },
    ];
    return (
        <FlatList
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text
                        style={styles.textStyle}
                        keyExtractor={(friend) => friend.name}
                    >{`${item.name} - age ${item.age}`}</Text>
                );
            }}
        />
    );
};
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    },
});

export default ListComponent;
