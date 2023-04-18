import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import Login from "../../screens/Login";

import PreviusLogin from "../../screens/PreviusLogin";
import HomeStack from "./HomeStack";
import Register from "../auth/Register";
import ForgetPassword from "../auth/ForgetPassword";
import ChangePassword from "../auth/ChangePassword";

const Nav = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={HomeStack} name="Inicio" />
        <Stack.Screen component={PreviusLogin} name="PreviusLogin" />
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Register} name="Register" />
        <Stack.Screen component={ForgetPassword} name="ForgetPassword" />
        <Stack.Screen component={ChangePassword} name="ChangePassword" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
