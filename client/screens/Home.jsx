import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context"
import Header from "../components/Header/Header";
import { useState } from "react";
import Mapa from "../components/Mapa/Mapa";
import CercaTuyo from "../components/CercaTuyo/CercaTuyo";

const Home = ({navigation}) => {
    const insets = useSafeAreaInsets();
    const [isMap, setIsMap] = useState(false)
    
    return(
        <ScrollView
        style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            flex: 1, backgroundColor: "#E5DACE"
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
                    <Text style={styles.textNav}>Buscar</Text>
                </TouchableOpacity>
            </View>
            {isMap ? <Mapa/> : <CercaTuyo navigation={navigation}/>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    nav:{
        padding: 5,
        backgroundColor: "white",
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