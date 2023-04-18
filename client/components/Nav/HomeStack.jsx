import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StoreStack from "./StoreStack";
import UserInfo from "../../screens/UserInfo"
import { AntDesign } from '@expo/vector-icons';

const HomeStack = () => {
    const Tab = createBottomTabNavigator()
    return(
            <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#554F4A",
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
                <Tab.Screen name="User" component={UserInfo} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="user" size={size} color={color} />
                    ),
                    headerShown: false
                }}
                />
            </Tab.Navigator>
    )
}

export default HomeStack

