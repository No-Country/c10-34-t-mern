import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import { useState } from "react";
import ProfesionalItem from "../components/ProfesionalItem/ProfesionalItem";
import { AntDesign } from "@expo/vector-icons";

const Profesional = ({ navigation }) => {
  const initialState = [
    {
      name: "Julián Alvarez",
      isSelected: false,
    },
    {
      name: "Erling Haaland",
      isSelected: false,
    },
    {
      name: "Kevin de Bruyne",
      isSelected: false,
    },
    {
      name: "Phil Foden",
      isSelected: false,
    },
  ];

  const insets = useSafeAreaInsets();
  const [profesionals, setProfesionals] = useState(initialState);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Header />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Elegí al profesional</Text>
      </View>
      <FlatList
        style={styles.containerProfesionales}
        data={profesionals}
        renderItem={({ item }) => <ProfesionalItem data={item} />}
        keyExtractor={(item) => item.name}
      />
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={{
            backgroundColor: "#352F2B",
            paddingVertical: 15,
            borderRadius: 10,
            marginBottom: 25,
            width: 250,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Pay")}
        >
          <AntDesign name="arrowright" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  containerProfesionales: {
    height: "70%",
    padding: 15,
  },
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default Profesional;
