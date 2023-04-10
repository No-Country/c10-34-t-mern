import { View, Text, ScrollView } from "react-native"
import {useSafeAreaInsets} from "react-native-safe-area-context"

const Menu = () => {
    const insets = useSafeAreaInsets()
    return(
        <ScrollView
        style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}
        >
            <Text>Menu</Text>
        </ScrollView>
    )
}

export default Menu