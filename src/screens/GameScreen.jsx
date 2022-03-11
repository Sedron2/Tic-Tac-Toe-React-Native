import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GamePad } from '../Components/GamePad';
import { GameRetry } from '../Components/GameRetry';
import { GamePlayers } from '../Components/GamePlayers';
import { GameNotReady } from '../Components/GameNotReady';
import { GameContext } from '../Context/GameContext';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0F1D29',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});


function GameScreen(props) {
	const { gameReady } = React.useContext(GameContext);
	if (gameReady){
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<GamePlayers player1="Tu" player2="PC" />
					<GameRetry />
				</View>
				<GamePad />
			</View>
		)
	}
	else{
		return (
			<GameNotReady navigation={props.navigation}/>
		)
	}
}

export { GameScreen };

