import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import {useSafeAreaInsets} from "react-native-safe-area-context"
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react"
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header/Header";

const SelectDate = ({navigation}) => {
    const insets = useSafeAreaInsets()
    const [datePicker, setDatePicker] = useState(true);
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        setDatePicker(false)
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
            <Header/>
            <View style={styles.containerDate}>
                <Text style={styles.title}>Reservá tu próximo look</Text>
                <View style={styles.containerDateText} >
                    <TouchableOpacity style={styles.text}
                    onPress={()=> setDatePicker(true)}
                    >
                        <Text>Selecciona el dia</Text>
                    </TouchableOpacity>
                    {datePicker ? 
                    <DateTimePicker
                    value={date}
                    mode='date'
                    is24Hour={true}
                    onChange={onChange}
                    disabled={false}
                    />
                    : ""}
                </View>
                {/* <View style={styles.containerDateText}>
                    <Text style={styles.text} >Seleccion la hora</Text>
                    <DateTimePicker
                        mode='time'
                        is24Hour={true}
                        value={date}
                        onChange={onChange}
                        disabled={false}
                    />
                </View> */}
            </View>
            <Text>Tu reserva sera agendada para el: {date.toLocaleString()}</Text>
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
                    onPress={() => navigation.navigate("Profesional")}
                >
                        <AntDesign name="arrowright" size={24} color="white" />
                </TouchableOpacity> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    containerDate:{
        height: "70%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 25
    },
    containerDateText:{
        alignItems: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 10
    }
})

export default SelectDate