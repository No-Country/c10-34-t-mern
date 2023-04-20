import { FlatList, StyleSheet, View } from "react-native"
import Service from "../ServiceItem/Service";
import { useSelector } from "react-redux";

const ServicesList = () => {
    const services = useSelector((state)=> state.dataAppReducer.services)

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