import { View, Text, Image, StyleSheet } from "react-native"
import Checkbox from 'expo-checkbox';
import { useState } from "react";
const ProfesionalItem = ({data}) => {
    const [isChecked, setChecked] = useState(false);

    return(
        <View style={styles.profesionalContainer}>
            <Image
            source={require('../../assets/people.jpg')}
            style={styles.avatar}
            />
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
    checkbox: {
        height: 25,
        width: 25
    },
    profesionalContainer:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 30,
        backgroundColor: "#D9D9D9",
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