import { Text, View, StyleSheet, FlatList, Image } from "react-native";

const Reseñas = () => {

    const reviews = [
        {
            review: "“Armando, tiene la tijera de los dioses y un trato único de barbero de barrio”"
        },
        {
            review: "“La experiencia es dentro de todo buena, pude resolver rápido dejar mi barba prolija”"
        },
        {
            review: "“Precio y calidad está dentro de todo correcto”"
        }
    ];

    return(
        <View style={styles.reviewContainer}>
            <FlatList
            data={reviews}
            renderItem={({item}) => {
                return(
                    <View style={styles.reviewItem}>
                        <Image
                        source={require("../../assets/people.jpg")}
                        style={styles.avatar}
                        />
                        <Text>{item.review}</Text>
                    </View>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    reviewItem: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15
    },
    reviewContainer: {
        padding: 10,
        height: "100%"
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginEnd: 10
    }
})

export default Reseñas; 