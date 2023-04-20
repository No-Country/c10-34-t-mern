import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import CardXl from "../CardXl/CardXl";
import CardS from "../CardS/CardS";
import { useState } from "react";


const CercaTuyo = ({navigation}) => {

    const locales = [
        {
            name: "Armando",
            img: "../../assets/local1.png"
        },
        {
            name: "Artime",
            img: "../../assets/local2.png"
        },
        {
            name: "Argentos",
            img: "../../assets/local3.png"
        }
    ]

    return(
        <View style={{paddingBottom: 30}}>
            <View>
                <CardXl navigation={navigation}/>
                <Text style={{fontWeight: "bold", fontSize: 22, marginStart: 20, marginBottom: 20, color: "#352F2B"}}>20 minutos o menos</Text>
                <FlatList
                data={locales}
                renderItem={({item}) => <CardS data={item} navigation={navigation}/>}
                keyExtractor={item => item.name}
                horizontal={true}
                style={styles.listaContainer}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buscadorContainer: {
        padding: 15,
        borderColor: "#CCCCCC",
        borderWidth: 2,
        borderRadius: 30,
        margin: 20,
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    textInput:{
        marginStart: 20
    },
    listaContainer:{
        paddingBottom: 15
    }
})

export default CercaTuyo