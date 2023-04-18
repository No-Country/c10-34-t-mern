import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native"
import { Entypo, Feather, AntDesign  } from '@expo/vector-icons'; 

const CardXl = ({navigation}) => {
    return(
        <View style={{alignItems: "center", justifyContent: "center", padding: 20}}>
            <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('Local')}>
                <ImageBackground style={{height: 200, position: "relative"}} source={require('../../assets/imagen.png')} resizeMode="cover">
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity style={styles.iconContainer}>
                            <Feather name="share-2" size={20} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconContainer}>
                            <AntDesign name="save" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={styles.containerNombre}>
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>D´Adamo</Text>
                    <View style={styles.containerMinutos}>
                        <Entypo name="time-slot" size={24} color="#CCCCCC" />
                        <Text style={styles.minutos}>10 min</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        width: "100%",
        borderBottomColor: "#CCCCCC",
        borderBottomWidth: 2,
        borderEndColor: "#CCCCCC",
        borderEndWidth: 2
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
    containerNombre:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor:"white"
    },
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
    }
})

export default CardXl