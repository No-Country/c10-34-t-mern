import Header from "../components/Header/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const FinalOrder = ({navigation}) => {
    const insets = useSafeAreaInsets()
    return(
        <View
        style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            flex: 1, backgroundColor: "#E5DACE"
        }}
        >
            <Header/>
            <View style={styles.container}>
                <Text style={styles.title}>¡Lo lograste!</Text>
                <Text style={styles.subtitle}>Mandamos los datos de la reserva a tu email</Text>
                <Image
                source={require("../assets/iconhipster.png")}
                style={styles.image}
                />
                <View style={styles.containerTextIcon}>
                    <Text style={styles.title}>¡Te esperamos!</Text>
                    <Image
                    source={require("../assets/iconbarber.png")}
                    style={styles.icon}
                    />
                </View>
                <TouchableOpacity style={styles.containerButton} onPress={() => navigation.navigate('Locales')}>
                    <Text style={styles.textButton}>Volver a inicio</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
        justifyContent: "space-between",
        height: "92%"
    },
    title:{
        fontSize: 35,
        fontWeight: "bold",
        marginTop: 10
    },
    subtitle: {
        fontSize: 25,
        fontWeight: "bold",
        width: "60%",
        marginTop: 10,
        textAlign: "center"
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 20
    },
    containerTextIcon:{
        flexDirection: "row",
        marginBottom: 20,
        alignItems: "center"
    },
    icon:{
        width: 50,
        height: 50,
        marginStart: 10
    },
    containerButton: {
        backgroundColor: "#352F2B",
        paddingVertical: 15,
        borderRadius: 10,
        width: 250,
        alignItems: "center"
    },
    textButton: {
        color: "white",
        fontWeight: "bold"
    }
})

export default FinalOrder;