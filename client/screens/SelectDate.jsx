import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import {useSafeAreaInsets} from "react-native-safe-area-context"
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react"
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header/Header";
import {Picker} from '@react-native-picker/picker';
import { useDispatch } from "react-redux";
import { setDateName } from "../redux/orderSlice/orderSlice";

const SelectDate = ({navigation}) => {
    const insets = useSafeAreaInsets()
    const [datePicker, setDatePicker] = useState(true);
    const [date, setDate] = useState(new Date());
    const [selectedValue, setSelectedLanguage] = useState();
    const dispatch = useDispatch()

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
            alignItems: "center",
            justifyContent: "center"
        }}
        >
            <Header/>
            <View style={styles.containerDate}>
                <Text style={styles.title}>Reservá tu próximo look</Text>
                <View style={styles.containerDateText}>
                    <TouchableOpacity
                    onPress={()=> setDatePicker(true)}
                    style={styles.containerButton}
                    >
                        <Text style={styles.text}>Selecciona el dia</Text>
                    </TouchableOpacity>
                    {datePicker ? 
                    <DateTimePicker
                    value={date}
                    mode='date'
                    display="calendar"
                    is24Hour={true}
                    onChange={onChange}
                    disabled={false}
                    />
                    : ""}
                </View>
                <View style={styles.containerHour}>
                    <Text style={styles.text}>Selecciona el horario</Text>
                    <Picker
                        mode="dropdown"
                        style={{width: 200, height: 50}}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                            <Picker.Item label="10:00" value="10:00" />
                            <Picker.Item label="11:00" value="11:00" />
                            <Picker.Item label="12:00" value="12:00" />
                            <Picker.Item label="13:00" value="13:00" />
                    </Picker>
                </View>
                
            </View>
            <View style={{alignItems: "center"}}>
                <Text style={{marginBottom: 10}}>Tu reserva sera agendada para el: </Text>
                <Text>{date.toLocaleDateString()} a las {selectedValue}</Text>
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
                    onPress={() => {
                        dispatch(setDateName(`${date.toLocaleDateString()} a las ${selectedValue}`))
                        navigation.navigate("Profesional")
                    }}
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
        alignItems: "center",
        height: "67%"
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 20,
        marginBottom: 30
    },
    containerDateText:{
        alignItems: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 10
    },
    containerHour:{
        alignItems: "center",
        marginTop: 20
    }
})

export default SelectDate