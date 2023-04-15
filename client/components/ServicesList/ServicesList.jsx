import { FlatList, StyleSheet, View } from "react-native"
import Service from "../ServiceItem/Service";

const ServicesList = () => {

    const services = [
        {
            name: "Corte de cabello"
        },
        {
            name: "Aceo de barba"
        },
        {
            name: "Arreglo de barba"
        },
        {
            name: "Lavado Sir Fausto"
        },
        {
            name: "Lavado de barba Sir Fausto",
        }
    ]

    return(
        <View style={styles.servicesContainer} >
            <FlatList
            data={services}
            renderItem={({item}) => <Service data={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    servicesContainer: {
        paddingHorizontal: 30,
        paddingVertical: 10
    }
})

export default ServicesList