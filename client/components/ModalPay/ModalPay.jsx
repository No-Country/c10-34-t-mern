import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ModalPay = ({modalState, setModalState}) => {

    return(
        <View style={styles.centeredView}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalState}
            onRequestClose={() => {
                setModalState(!modalState);
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.cardsContainer}>
                            <View style={styles.cardItem}>
                                <FontAwesome name="cc-visa" size={24} color="black" />
                            </View>
                            <View style={styles.cardItem}>
                                <FontAwesome name="cc-visa" size={24} color="black" />
                            </View>
                            <View style={styles.cardItem}>
                                <FontAwesome name="cc-visa" size={24} color="black" />
                            </View>
                        </View>
                        <TextInput
                        placeholder='Número de tarjeta'
                        placeholderTextColor="#C4C4C4"
                        style={styles.textInput}
                        />
                        <TextInput
                        placeholder='Nombre de titular'
                        placeholderTextColor="#C4C4C4"
                        style={styles.textInput}
                        />
                        <View style={styles.inputsContainer}>
                            <TextInput
                            placeholder='Vencimiento'
                            placeholderTextColor="#C4C4C4"
                            style={styles.textInputTwo}
                            />
                            <TextInput
                            placeholder='Código'
                            placeholderTextColor="#C4C4C4"
                            style={styles.textInputTwo}
                            />
                        </View>
                        <View style={styles.containerButton}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "white",
                                    paddingVertical: 15,
                                    borderRadius: 10,
                                    marginBottom: 25,
                                    width: 250,
                                    alignItems: "center", 
                                }}
                                onPress={() => setModalState(!modalState)}
                            >
                                    <Text>Registrar tarjeta</Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                </View>    
            </Modal>
        </View>
        
    )
}

const styles = StyleSheet.create({
    cardsContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardItem: {
        padding: 10,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2,
        marginHorizontal: 10,
        borderRadius: 10
    },
    containerButton: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#949494',
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textInput:{
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginTop: 10,
        borderRadius: 10,
    },
    inputsContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    textInputTwo:{
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 10,
        borderRadius: 10,
        marginHorizontal: 10
    }
});


export default ModalPay