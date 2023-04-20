import { View, Text, TouchableOpacity, StyleSheet, Modal, Image, FlatList, ScrollView } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Header from "../components/Header/Header"
import { AntDesign } from "@expo/vector-icons"
import { useState } from "react"
import ModalPay from "../components/ModalPay/ModalPay"
import { useSelector } from "react-redux"

const Pay = ({navigation}) => {
    const insets = useSafeAreaInsets()
    const [modalVisible, setModalVisible] = useState(false);
    const payInfo = useSelector((state)=> state.order)

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
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Asegurá tu reserva</Text>
            </View>
            <View style={styles.containerPayScreen}>
                <View style={styles.containerPay}>
                    <Text>Reservás con {payInfo.orderInfo.barberName[0]} para el {payInfo.orderInfo.dateName} los siguientes servicios:</Text>
                    <ScrollView style={styles.servicesContainer}>
                        <FlatList
                        data={payInfo.orderInfo.services}
                        renderItem={({item}) => (
                            <View style={styles.serviceItem}>
                                <Text>{item.name}:</Text>
                                <Text>${item.price}</Text>
                            </View>
                        )}
                        />
                    </ScrollView>
                    <View style={styles.serviceItem}>
                        <Text>Reserva:</Text>
                        <Text>$50</Text>
                    </View>
                    <View style={styles.containerButton}>
                        <Image
                        source={require('../assets/iconpayfigaro.png')}
                        style={styles.imageIcon}
                        />
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
                        backgroundColor: "#352F2B",
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
    imageIcon:{
        width: 70,
        height: 70,
        marginEnd: 10
    },  
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
        marginTop: 10,
        flexDirection: "row"
    },
    title: {
        fontWeight: "bold",
        fontSize: 25
    },
    containerPay:{
        padding: 20,
        justifyContent: "space-between",
        backgroundColor: "#F9EDE1",
        borderRadius: 22,
        height: "100%",
        borderColor: "#5C5350",
        borderWidth: 2
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
    },
    servicesContainer:{
        height: 100
    }
})

export default Pay