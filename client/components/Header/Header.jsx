import { View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';

const Header = () => {

    return(
        <View style={styles.header}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={require("../../assets/logo.png")}/>
            <TouchableOpacity style={styles.avatarContainer}>
                <AntDesign name="user" size={24} color="#5C5350" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E5DACE",
        width: "100%"
    },
    image: {
        width: 100,
        height: 60
    },
    avatarContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 25,
        marginStart: 30,
        borderColor: "#5C5350",
        borderWidth: 2
    }
})

export default Header