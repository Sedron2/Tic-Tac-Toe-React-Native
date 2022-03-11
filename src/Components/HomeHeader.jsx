import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { GameContext } from '../Context/GameContext';

const styles = StyleSheet.create({
	header: {
        fontSize: 45,
        fontWeight: 'bold',
		fontFamily: 'monospace',
		color: '#FFF',
    },
})

function HomeHeader(props) {
    const { color1, color2, color3 } = React.useContext(GameContext);
    return(
        <Text style={styles.header}>
            <Text style={{color: color3,}}>TIC </Text> 
            <Text style={{color: color1,}}>TAC </Text> 
            <Text style={{color: color2,}}>TOE</Text>
        </Text>
    )
};

export { HomeHeader };