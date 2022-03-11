import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { GameContext, GameProvider } from '../Context/GameContext';


const style = StyleSheet.create({
    button: {
        backgroundColor: '#9FB9C5',
        height: 40,
        width: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 25,
        color: '#465156',
    }
})

function GameRetry(props){
    const {setBoard, defaultBoard} = React.useContext(GameContext);
    return (
        <Pressable style={style.button} onPress={() => {setBoard([...defaultBoard])}}>
            <Ionicons name="refresh" style={style.icon}></Ionicons>
        </Pressable>
    )
}

export { GameRetry };