import { createStackNavigator } from "@react-navigation/stack"
import Local from "../../screens/Local"
import Home from "../../screens/Home"

const StoreStack = () => {
    const Tab = createStackNavigator()
    return(
        <Tab.Navigator initialRouteName="Locales"
        screenOptions={{
            headerShown: false
        }}
        >
            <Tab.Screen name="Locales" component={Home}/>
            <Tab.Screen name="Local" component={Local}/>
        </Tab.Navigator>
    )
}

export default StoreStack