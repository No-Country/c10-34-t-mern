import { FlatList, StyleSheet, View } from "react-native"
import Service from "../ServiceItem/Service";
import { useSelector } from "react-redux";

const ServicesList = () => {
    const services = useSelector((state)=> state.dataAppReducer.services)

    return(
            <FlatList
            style={styles.servicesContainer}
            data={services}
            renderItem={({item}) => <Service data={item}/>}
            />
    )
}

const styles = StyleSheet.create({
    servicesContainer: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        height: "34%",
        backgroundColor: "#E5DACE"
    }
})

export default ServicesList