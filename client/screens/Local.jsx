import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Button } from "react-native"
import {useSafeAreaInsets} from "react-native-safe-area-context"
import Header from "../components/Header/Header"
import { Feather, AntDesign, Ionicons, Entypo } from "@expo/vector-icons"
import { useState } from "react"
import Precios from "../components/Precios/Precios"
import Reseñas from "../components/Reseñas/Reseñas"

const Local = ({navigation}) => {
    const insets = useSafeAreaInsets()
    const [isPrice, setIsPrice] = useState(true)
    return(
        <ScrollView
        style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}
        >
            <Header/>
            <ImageBackground style={{height: 300, position: "relative"}} source={require('../assets/imagen.png')} resizeMode="cover">
                    <TouchableOpacity style={styles.iconBack} onPress={() => navigation.navigate('Locales')}>
                        <Ionicons name="arrow-back" size={34} color="#888888" />
                    </TouchableOpacity>
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity style={styles.iconContainer}>
                            <Feather name="share-2" size={20} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconContainer}>
                            <AntDesign name="save" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
            <View style={styles.localNameContainer} >
                <Text style={styles.localName}>Nombre de local</Text>
                <View style={styles.containerMinutos}>
                    <Entypo name="time-slot" size={24} color="#CCCCCC" />
                    <Text style={styles.minutos}>10 min</Text>
                </View>
            </View>
            <View style={styles.nav}> 
                <TouchableOpacity style={isPrice ? styles.navItemActive : styles.navItem}
                onPress={()=>setIsPrice(true)}
                >
                    <Text style={styles.textNav}>Precios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={isPrice ? styles.navItem : styles.navItemActive}
                onPress={()=>setIsPrice(false)}
                >
                    <Text style={styles.textNav}>Reseñas</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{height: 180}}>
                {isPrice ? <Precios/> : <Reseñas/> }
            </ScrollView>
            <View style={{padding: 10}}>
                <Button
                title="Reservá tu turno"
                color="blue"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: "#888888",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        borderRadius: 40
    },
    iconsContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        marginEnd: 10,
        marginTop: 10
    },
    iconBack: {
        marginTop: 20,
        marginStart: 20
    },
    containerMinutos:{
        flexDirection: "row",
        alignItems: "center",
    },  
    minutos: {
        color: "#CCCCCC",
        fontSize: 18,
        marginStart: 10
    },
    localName: {
        fontSize: 25,
        fontWeight: "bold"
    },
    localNameContainer: {
        padding: 20,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    nav:{
        padding: 5,
        backgroundColor: "#CCCCCC",
        display: "flex",
        flexDirection: "row"
    },
    textNav: {
        fontSize: 20,
    },
    navItem:{
        width: "50%",
        alignItems: "center",
        justifyContent: "center"
    },
    navItemActive:{
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "black",
        borderBottomWidth: 1
    }
}) 

export default Local