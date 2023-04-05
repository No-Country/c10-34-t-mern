import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import CardXl from "../CardXl/CardXl";
import CardS from "../CardS/CardS";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons'; 

const CercaTuyo = () => {

    const [search, setSearch] = useState("")
    const locales = [
        {
            name: "Local uno"
        },
        {
            name: "Local dos"
        },
        {
            name: "Local tres"
        },
        {
            name: "Local cuatro"
        }
    ]

    return(
        <View style={{paddingBottom: 30}}>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <View style={styles.buscadorContainer}>
                    <AntDesign name="search1" size={24} color="#A4A4A4" />
                    <TextInput
                    style={styles.textInput}
                    onChangeText={setSearch}
                    value={search}
                    />
                </View>
                {search === "" ? "" : 
                <TouchableOpacity style={{paddingEnd: 20}}>
                    <Ionicons name="filter" size={30} color="#A4A4A4" />
                </TouchableOpacity>
                }
            </View>
            {search === "" ?
            <View>
                <CardXl/>
                <Text style={{fontWeight: "bold", fontSize: 22, marginStart: 20, marginBottom: 20}}>20 minutos o menos</Text>
                <FlatList
                data={locales}
                renderItem={({item}) => <CardS data={item}/>}
                keyExtractor={item => item.name}
                horizontal={true}
                style={styles.listaContainer}
                />
            </View>
            :
            ""
            }
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