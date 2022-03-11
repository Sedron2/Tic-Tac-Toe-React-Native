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
        color: '#494949',
        fontWeight: 'bold',
        fontSize: 18,
    }
})

function HomePlay(props) {
    const { setGameReady, setPlayingWithPC } = React.useContext(GameContext);
    return(
        <Pressable 
            style={[styles.button, {backgroundColor: props.color}]} 
            onPress={() => {
                setGameReady(true); 
                if (props.player === 'PC'){
                    setPlayingWithPC(true)
                }
                props.navigation.navigate('Juego')
            }}
        >
            <Text style={styles.text}>Jugar vs. {props.player}</Text>
        </Pressable>
    )
};

export { HomePlay };