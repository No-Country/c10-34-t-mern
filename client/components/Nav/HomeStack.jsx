import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../../screens/Home";
import Consejos from "../../screens/Consejos";
import Listas from "../../screens/Listas";
import Menu from "../../screens/Menu";
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StoreStack from "./StoreStack";

const HomeStack = () => {
    const Tab = createBottomTabNavigator()
    return(
            <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "#CCCCCC"
            }}
            >
                <Tab.Screen name="Home" component={StoreStack} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    ),
                    headerShown: false
                }}
                />
                <Tab.Screen name="Consejos" component={Consejos}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Entypo name="light-bulb" size={size} color={color} />
                    ),
                    headerShown: false
                }}
                />
                <Tab.Screen name="Mis listas" component={Listas}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="clipboard-list" size={size} color={color} />
                    ),
                    headerShown: false
                }}
                />
                <Tab.Screen name="Menu" component={Menu}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Entypo name="menu" size={size} color={color} />
                    ),
                    headerShown: false
                }}
                />
            </Tab.Navigator>
    )
}

export default HomeStack