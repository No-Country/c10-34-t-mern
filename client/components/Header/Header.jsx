import { View, Image, StyleSheet } from "react-native"

const Header = () => {

    return(
        <View style={styles.header}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={require("../../assets/logo.png")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    image: {
        width: 150,
        height: 100
    }
})

export default Header