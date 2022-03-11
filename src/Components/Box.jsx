import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/FontAwesome5";
import { GameContext } from '../Context/GameContext';

const style = StyleSheet.create({
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        flex: 1,
        borderRadius: 8,
        margin: 13,
        shadowColor: "#000",
        elevation: 10,
    }
})

function Box(props){
    const { turn, setTurn, board, setBoard, color1, color2 } = React.useContext(GameContext);
    const name = board[Number(props.id)]
    return (
        <Pressable 
            onPress={() => {
                if (name === ''){
                    let copyBoard = [...board];
                    copyBoard[Number(props.id)] = turn;
                    setBoard(copyBoard);
                    setTurn(turn === 'x' ? 'o' : 'x');
                }
            }} 
            style={( { pressed } ) => [
                {
                    backgroundColor: pressed
                    ? '#446F84' 
                    : '#1f3643'
                },
                style.box
            ]}>
            <Ionicons 
            style={{
                color: name === 'x' ? color1: color2, 
                fontSize: name === 'x' ? 50: 68, 
                fontWeight: 'bold'}} 
            name={name === 'x' ? 'times' : ( name === 'o' ? 'genderless': '')} />

        </Pressable>
    )
}

export { Box };

