import React from 'react';
import { View, StyleSheet} from 'react-native';
import { GameContext } from '../Context/GameContext';
import { Box } from './Box';


const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
	}
});


function GamePad(props) {
    return (
        <>
            <View style={styles.row}>
                <Box id="0" /><Box  id="1" /><Box id="2" />
            </View>
            <View style={styles.row}>
                <Box id="3" /><Box id="4" /><Box id="5" />
            </View>
            <View style={styles.row}>
                <Box id="6" /><Box id="7" /><Box id="8" />
            </View>
        </>
    )
}

export { GamePad };