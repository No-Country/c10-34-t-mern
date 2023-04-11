import { Text, View, StyleSheet, Button } from "react-native"
import {useSafeAreaInsets} from "react-native-safe-area-context"
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react"

const SelectDate = () => {
    const insets = useSafeAreaInsets()

    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        //setDate(currentDate);
        //setHour(currentDate)
    };

    return(
        <View
        style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}
        >
            <Text>Reservá tu próximo look</Text>
            <Text>selected: {date.toLocaleString()}</Text>
                <DateTimePicker
                value={new Date()}
                mode='date'
                is24Hour={true}
                onChange={onChange}
                />
                <DateTimePicker
                mode='time'
                is24Hour={true}
                value={new Date()}
                onChange={onChange}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 15,
        backgroundColor: "blue",
        borderRadius: 10
    }
})

export default SelectDate