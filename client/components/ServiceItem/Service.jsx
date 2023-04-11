import {View, Text, StyleSheet} from "react-native"
import { useState } from "react"
import Checkbox from 'expo-checkbox';

const Service = ({data}) => {
    const [isChecked, setChecked] = useState(false);

    return(
        <View style={styles.serviceItem} >
            <Text>{data.name}</Text>
            <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
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