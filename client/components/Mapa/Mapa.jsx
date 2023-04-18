import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { useState } from "react"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

const Mapa = () => {
    const [search, setSearch] = useState("")

    return( 
        <View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <View style={styles.buscadorContainer}>
                    <AntDesign name="search1" size={24} color="#352F2B" />
                    <TextInput
                    style={styles.textInput}
                    onChangeText={setSearch}
                    value={search}
                    />
                </View>
                <TouchableOpacity style={{paddingEnd: 20}}>
                    <Ionicons name="filter" size={30} color="#352F2B" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buscadorContainer: {
        padding: 15,
        borderColor: "#352F2B",
        borderWidth: 2,
        borderRadius: 30,
        margin: 20,
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        backgroundColor: "white"
    },
    textInput:{
        marginStart: 20
    },
    listaContainer:{
        paddingBottom: 15
    }
})

export default Mapa