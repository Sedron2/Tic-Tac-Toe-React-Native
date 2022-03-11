import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { GameContext } from '../Context/GameContext';

const styles = StyleSheet.create({
	button: {
        width: '60%',
        height: 50,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 18,
    }
})

function HomePlay(props) {
    return(
        <Pressable style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.text}>Jugar vs. {props.player}</Text>
        </Pressable>
    )
};

export { HomePlay };