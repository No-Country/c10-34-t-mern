import {
  Text,
  SafeAreaView,
  Image,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Register = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 80,
        }}
      >
        <Image
          style={{
            width: 300,
            height: 100,
          }}
          source={require("../assets/logo.png")}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          paddingTop: 50,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: "blue",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Crear nuevo Usuario
        </Text>
      </View>
      <View
        style={{
          marginVertical: 20,
          marginHorizontal: 30,
        }}
      >
        <TextInput
          placeholder="Email"
          placeholderTextColor={Colors.darkText}
          style={{
            fontSize: 18,
            padding: 15,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.darkText}
          secureTextEntry
          style={{
            fontSize: 18,
            padding: 15,
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 15,
          }}
        />

        <TextInput
          placeholder="Confirmar Password"
          placeholderTextColor={Colors.darkText}
          secureTextEntry
          style={{
            fontSize: 18,
            padding: 15,
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 15,
          }}
        />
      </View>

      <View
        style={{
          paddingHorizontal: 30,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            paddingVertical: 15,
            width: "100%",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Registrarse
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: 30,
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity 
        onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              fontWeight: 600,
             
            }}
          >
            Ya tengo una cuenta
          </Text>
        </TouchableOpacity>
       
      </View>
    </SafeAreaView>
  );
};

export default Register;
const styles = StyleSheet.create({});
