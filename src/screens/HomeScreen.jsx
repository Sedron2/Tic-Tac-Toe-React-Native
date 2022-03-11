import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GameContext } from '../Context/GameContext';



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1f3643',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
        fontSize: 16,
        color: '#ffffff', 
        fontWeight: 'bold',
    },
	pressable: {
		backgroundColor: 'gold',
	}
});


function HomeScreen(props) {

	return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenido a la home screen</Text>
            <Pressable title="Ir a jugar xd" onPress={() => props.navigation.navigate('Juego')}/>
        </View>
	);
}

export { HomeScreen };

