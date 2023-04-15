import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler'
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import PreviusLogin from "../../screens/PreviusLogin";
import HomeStack from "./HomeStack";

const Nav = () => {
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                headerShown: false
            }}
            >
                <Stack.Screen component={HomeStack} name="Inicio"/>
                <Stack.Screen component={PreviusLogin} name="PreviusLogin"/>
                <Stack.Screen component={Login} name="Login"/>
                <Stack.Screen component={Register} name="Register"/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Nav;