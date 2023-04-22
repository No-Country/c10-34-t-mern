import {
  Text,
  SafeAreaView,
  Image,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const PreviusLogin = ({ navigation }) => {
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
          Descubre las mejores Barberias y peluquerias a tu alcance
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 100,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            paddingVertical: 15,
            width: "50%",
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
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingVertical: 15,
            width: "50%",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PreviusLogin;
const styles = StyleSheet.create({});
