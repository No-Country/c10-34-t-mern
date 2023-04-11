import { View, Text, ScrollView } from "react-native"
import {useSafeAreaInsets} from "react-native-safe-area-context"

const Consejos = () => {
    const insets = useSafeAreaInsets()
    return(
        <ScrollView
        style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <Text>Consejos</Text>
        </ScrollView>
    )
}

export default Consejos