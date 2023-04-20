import { Text, View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";


const Precios = () => {
    const services = useSelector((state)=> state.dataAppReducer.services)

    return(
        <View style={styles.priceContainer}>
            <FlatList
            data={services}
            renderItem={({item})=> {
                return(
                    <View style={styles.priceItem}>
                        <Text>{item.name}</Text>
                        <Text>${item.price}</Text>
                    </View>
                )
            }}
            keyExtractor={item=> item.name}
            />
            <Text style={{marginVertical: 20}}>Horarios de Lunes a Sábados de 9 a 20 horas.</Text>
            <Text>TRADICIÓN ITALIANA CON MAS DE 100 AÑOS DE EXPERIENCIA EN EL PAIS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    priceContainer: {
        padding: 20,
        justifyContent: "space-between",
        height: "100%",
    },
    priceItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 5,
        marginBottom: 5
    }
})


export default Precios; 