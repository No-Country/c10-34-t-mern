import {View, Text, StyleSheet} from "react-native"
import { useState } from "react"
import Checkbox from 'expo-checkbox';
import { setServices, setServicesName } from "../../redux/orderSlice/orderSlice";
import { useDispatch } from "react-redux";

const Service = ({data}) => {
    const [isChecked, setChecked] = useState(false);
    const dispatch = useDispatch()
    return(
        <View style={styles.serviceItem} >
            <Text>{data.name}</Text>
            <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={()=>{
                if(isChecked === false){
                    setChecked(true)
                    dispatch(setServices(data._id))
                    dispatch(setServicesName(data))
                }
                if(isChecked === true){
                    setChecked(false)
                }
            }}
            color={isChecked ? '#4630EB' : undefined}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    serviceItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15
    },
    checkbox: {
        height: 25,
        width: 25
    }
})

export default Service