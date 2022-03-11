import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { HomeScreen } from "./src/screens/HomeScreen";
import { GameScreen } from "./src/screens/GameScreen";
import { GameContext, GameProvider } from './src/Context/GameContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "indianred",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
	return (
	<GameProvider>
		<GameContext.Consumer>{ ({ gameReady, color1, color2, color3 }) => (
			<NavigationContainer>
				<Tab.Navigator
				initialRouteName="Juego"
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === "Inicio") {
							iconName = focused ? "ios-ellipsis-horizontal" : "ios-ellipsis-horizontal-outline";
						} else if (route.name === "Juego") {
							iconName = focused ? "game-controller" : "game-controller-outline";
						}
						return <Ionicons name={iconName} size={size} color={color} />;
						},
						tabBarActiveTintColor: color3,
						tabBarInactiveTintColor: "grey",
						tabBarStyle: { backgroundColor: '#1E2C37', borderTopColor: "transparent", },
						headerStyle: {
							backgroundColor: '#1E2C37',
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							textAlign: 'center',
						},
					})}
				>
					<Tab.Screen name="Inicio" component={HomeScreen}/>
					<Tab.Screen name="Juego" component={GameScreen}/>
				</Tab.Navigator>
			</NavigationContainer>
		)}</GameContext.Consumer>
	</GameProvider>
	);
}
