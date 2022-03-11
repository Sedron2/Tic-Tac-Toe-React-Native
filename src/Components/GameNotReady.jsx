import React from 'react';
import Ionicons from "react-native-vector-icons/FontAwesome5";
import { View, Text, Modal, StyleSheet, Pressable } from 'react-native';
import { GameContext } from '../Context/GameContext';


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#0F1D29',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        backgroundColor: '#182933',
        width: '75%',
        height: '27%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    return: {
        backgroundColor: '#1f3643',
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        color: '#ffffff', 
        fontWeight: 'bold',
    }
})

function GameNotReady(props){
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.text}>No has iniciado ningun juego aún</Text>
                <Pressable style={styles.return} onPress={() => props.navigation.navigate('Inicio')}>
                    <Text style={styles.text}>Regresar al inicio</Text>
                </Pressable>
            </View>
        </View>
    )
};

export { GameNotReady };