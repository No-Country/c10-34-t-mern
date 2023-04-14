import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import { Col, Row } from 'react-native-responsive-grid-system';

const ModalHour = ({modalState, setModalState}) => {

    const hours = ["11:30", "12:00", "13:00", "14:00", "15:00", "16:00"]

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
                        <ScrollView style={styles.row}>
                            <FlatList
                            data={hours}
                            renderItem={({item}) => (
                            <TouchableOpacity style={styles.column}>
                                <Text style={styles.hourText}>{item}</Text>
                            </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item}
                            />
                        </ScrollView>
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
                                    <Text>Confirmar</Text>
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
        shadowColor: '#000',
        shadowOffset: {
        width: "100%",
        height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 500,
        width: 300,
        justifyContent: "center",
        alignItems: 'center',
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
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        width: 200,
        height: 50,
        margin: 5,
        backgroundColor: 'grey',
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1
    },
    hourText:{
        color: 'white',
        fontWeight: 'bold'
    }
});


export default ModalHour