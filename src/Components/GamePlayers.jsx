import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameContext } from '../Context/GameContext';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#1f3641',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        marginBottom: 0,
        color: '#fff',
        fontWeight: 'bold'
    }
})

function GamePlayers(props){
    const { color1, color2 } = React.useContext(GameContext)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Text style={{color: color1}}>{props.player1}</Text> vs. <Text style={{color: color2}}>{props.player2}</Text>
            </Text>
        </View>
    )
};

export { GamePlayers };