import { ScrollView, View, Text, StyleSheet, TextInput, FlatList } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import CardXl from "../CardXl/CardXl";
import CardS from "../CardS/CardS";

const CercaTuyo = () => {

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
            <View style={styles.buscadorContainer}>
                <AntDesign name="search1" size={24} color="#CCCCCC" />
                <TextInput
                style={styles.textInput}
                />
            </View>
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
    },
    textInput:{
        marginStart: 20
    },
    listaContainer:{
        paddingBottom: 15
    }
})

export default CercaTuyo