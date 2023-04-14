import { createStackNavigator } from "@react-navigation/stack"
import Local from "../../screens/Local"
import Home from "../../screens/Home"
import SelectDate from "../../screens/SelectDate"
import Profesional from "../../screens/Profesional"
import Pay from "../../screens/Pay"
import FinalOrder from "../../screens/FinalOrder"

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
            <Tab.Screen name="Pay" component={Pay}/>
            <Tab.Screen name="Final" component={FinalOrder}/>
        </Tab.Navigator>
    )
}

export default StoreStack