import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const UserInfo =( ) => {
    const insets = useSafeAreaInsets()
    return(
        <View
        style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            flex: 1,
            backgroundColor: "#5C5350",
            alignItems: "center",
            justifyContent: "center"
        }}
        >
            <Text style={{color: "#BCBEC0", fontSize: 26, fontWeight: "bold"}}>User name</Text>
            <View style={styles.avatarContainer}>
                <AntDesign name="user" size={44} color="#BCBEC0" />
            </View>
            <TouchableOpacity style={{flexDirection: "row", alignItems: "center", marginTop: 20}}>
                <Text style={{color: "#BCBEC0",marginEnd: 10, fontSize: 26}}>Salir</Text>
                <Ionicons name="exit-outline" size={34} color="#BCBEC0" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    avatarContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: "#BCBEC0",
        borderWidth: 2,
        marginTop: 20
    }
})

export default UserInfo;