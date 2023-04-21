import { Text, View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";


const Precios = () => {
    const services = useSelector((state)=> state.dataAppReducer.services)

    return(
            <FlatList
            style={styles.priceContainer}
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
            
    )
}

const styles = StyleSheet.create({
    priceContainer: {
        padding: 20, backgroundColor: "#E5DACE",
        height: 150
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