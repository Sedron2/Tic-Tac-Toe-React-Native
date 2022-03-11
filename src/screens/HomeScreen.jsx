import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GameContext, GameProvider } from '../Context/GameContext';
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeHeader } from '../Components/HomeHeader';
import { HomePlay } from '../Components/HomePlay';



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1f3643',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
        fontSize: 45,
        fontWeight: 'bold',
		fontFamily: 'monospace',
		color: '#FFF',
    },
	pressable: {
		backgroundColor: 'gold',
		
	}
});


function HomeScreen(props) {
	return (
		<GameProvider>
			<GameContext.Consumer>{({ color1, color2, color3 }) => (
				<View style={styles.container}>
					<HomeHeader />
					<HomePlay color={color2} player="PC"/>
				</View>
			)}</GameContext.Consumer>
		</GameProvider>
	);
}

export { HomeScreen };

