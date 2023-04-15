import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Header from "../components/Header/Header"
import { AntDesign } from "@expo/vector-icons"
import { useState } from "react"
import ModalPay from "../components/ModalPay/ModalPay"

const Pay = ({navigation}) => {
    const insets = useSafeAreaInsets()
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View
        style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}
        >
            <Header/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Asegurá tu reserva</Text>
            </View>
            <View style={styles.containerPayScreen}>
                <View style={styles.containerPay}>
                    <Text>Reservás con Erling Haaland para el jueves 17 de abril a las 11:30 a.m. los siguientes servicios:</Text>
                    <View style={styles.servicesContainer}>
                        <View style={styles.serviceItem}>
                            <Text>Corte de cabello:</Text>
                            <Text>$350</Text>
                        </View>
                        <View style={styles.serviceItem}>
                            <Text>Aceo de barba:</Text>
                            <Text>$250</Text>
                        </View>
                    </View>
                    <View style={styles.serviceItem}>
                        <Text>Reserva:</Text>
                        <Text>$50</Text>
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity
                        style={{
                            backgroundColor: "white",
                            paddingVertical: 15,
                            borderRadius: 10,
                            marginBottom: 25,
                            width: "60%",
                            alignItems: "center",
                            borderColor: "black",
                            borderWidth: 1 
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                                <Text>Elegir medio de pago</Text>
                        </TouchableOpacity> 
                    </View>
                    <Text style={{fontWeight: "bold"}}>Este monto se descontará del valor total el dia que te acerques.</Text>
                    <ModalPay modalState={modalVisible} setModalState={setModalVisible}/>
                </View>
            </View> 
            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "blue",
                        paddingVertical: 15,
                        borderRadius: 10,
                        marginBottom: 25,
                        width: 250,
                        alignItems: "center", 
                    }}
                    onPress={() => navigation.navigate("Final")}
                >
                        <AntDesign name="arrowright" size={24} color="white" />
                </TouchableOpacity> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPayScreen:{
        height: "65%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15
    },
    containerButton: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 25
    },
    containerPay:{
        padding: 20,
        justifyContent: "space-between",
        backgroundColor: "#D9D9D9",
        borderRadius: 22,
        height: "100%"
    },
    serviceItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20
    },
    titleContainer: {
        padding: 10,
        alignItems: "center"
    }
})

export default Pay