import { ImageBackground, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CardS = ({data, navigation}) => {

    return(
        <TouchableOpacity onPress={() => navigation.navigate('Local', {
            local: data
        })}>
            <ImageBackground style={styles.imagenContainer} source={require("../../assets/local1.png")} resizeMode="cover">
                <LinearGradient style={styles.containerGradiente} colors={["transparent", "#000000"]}>
                    <Text style={styles.nombreLocal}>{data.name}</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    nombreLocal: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    },
    containerGradiente:{
        padding: 15
    },
    imagenContainer: {
        height: 200,
        width: 200,
        marginStart: 20,
        justifyContent: "flex-end"
    }
})

export default CardS;