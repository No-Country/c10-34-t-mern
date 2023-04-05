import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import PreviusLogin from "../../screens/PreviusLogin";

const Nav = () => {
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Inicio"
            >
                <Tab.Screen component={Home} name="Inicio"
                options={{headerShown:false}}
                />
                <Tab.Screen component={PreviusLogin} name="PreviusLogin"/>
                <Tab.Screen component={Login} name="Login"/>
                <Tab.Screen component={Register} name="Register"/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Nav;