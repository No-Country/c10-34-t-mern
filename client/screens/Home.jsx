import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context"
import Header from "../components/Header/Header";
import { useState } from "react";
import Mapa from "../components/Mapa/Mapa";
import CercaTuyo from "../components/CercaTuyo/CercaTuyo";

const Home = () => {
    const insets = useSafeAreaInsets();
    const [isMap, setIsMap] = useState(false)
    
    return(
        <View
        style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}
        >
            <Header/>
            <View style={styles.nav}> 
                <TouchableOpacity style={isMap ? styles.navItem : styles.navItemActive}
                onPress={()=>setIsMap(false)}
                >
                    <Text style={styles.textNav}>Cerca tuyo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={isMap ? styles.navItemActive : styles.navItem}
                onPress={()=>setIsMap(true)}
                >
                    <Text style={styles.textNav}>Ver mapa</Text>
                </TouchableOpacity>
            </View>
            {isMap ? <Mapa/> : <CercaTuyo/>}
        </View>
    )
}

const styles = StyleSheet.create({
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



export default Home;