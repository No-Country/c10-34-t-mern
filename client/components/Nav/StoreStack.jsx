import { createStackNavigator } from "@react-navigation/stack"
import Local from "../../screens/Local"
import Home from "../../screens/Home"
import SelectDate from "../../screens/SelectDate"
import Profesional from "../../screens/Profesional"

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
            <Tab.Screen name="SelectDate" component={SelectDate}/>
            <Tab.Screen name="Profesional" component={Profesional}/>
        </Tab.Navigator>
    )
}

export default StoreStack