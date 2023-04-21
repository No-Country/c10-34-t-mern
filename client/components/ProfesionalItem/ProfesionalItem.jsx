import { View, Text, Image, StyleSheet } from "react-native"
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBarberName } from "../../redux/orderSlice/orderSlice";

const ProfesionalItem = ({data}) => {
    const [isChecked, setChecked] = useState(false);
    const dispatch = useDispatch()
    return(
        <View style={styles.profesionalContainer}>
            <Image
            source={require('../../assets/people.jpg')}
            style={styles.avatar}
            />
            <Text style={{color: "#BCBEC0", fontWeight: "bold"}}>{data.name}</Text>
            <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={()=>{
                if(isChecked === false){
                    setChecked(true)
                    dispatch(setBarberName(data.name))
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
    checkbox: {
        height: 25,
        width: 25
    },
    profesionalContainer:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 30,
        backgroundColor: "#5C5350",
        padding: 15,
        marginBottom: 15
    },
    avatar:{
        height: 80,
        width: 80,
        borderRadius: 40
    }
})

export default ProfesionalItem