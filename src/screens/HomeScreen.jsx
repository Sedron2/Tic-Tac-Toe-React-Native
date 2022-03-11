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
	const { color2 } = React.useContext(GameContext)
	return (
		<View style={styles.container}>
			<HomeHeader />
			<HomePlay 
				color={color2} 
				player="PC" 
				navigation={props.navigation}
			/>
		</View>
	);
}

export { HomeScreen };

