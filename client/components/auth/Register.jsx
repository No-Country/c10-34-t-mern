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
import { Controller, useForm } from "react-hook-form";
import axios from "axios";

const Register = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const url = "https://paracuando-team1.academlo.tech/api/v1/auth/sign-up";
    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        navigation.navigate("Login");
      })
      .catch((error) => console.log(error.JSON()));
  };
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
          source={require("../../assets/logo.png")}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          paddingTop: 20,
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
        <Controller
          name="firstName"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="firstName"
              placeholderTextColor={Colors.darkText}
              style={{
                fontSize: 18,
                padding: 15,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            />
          )}
        />

        <Controller
          name="lastName"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="lastName"
              placeholderTextColor={Colors.darkText}
              style={{
                fontSize: 18,
                padding: 15,
                backgroundColor: "white",
                borderRadius: 10,
                marginTop: 15,
              }}
            />
          )}
        />

        <Controller
          name="email"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="email"
              placeholderTextColor={Colors.darkText}
              style={{
                fontSize: 18,
                padding: 15,
                backgroundColor: "white",
                borderRadius: 10,
                marginTop: 15,
              }}
            />
          )}
        />

        <Controller
          name="password"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="password"
              placeholderTextColor={Colors.darkText}
              style={{
                fontSize: 18,
                padding: 15,
                backgroundColor: "white",
                borderRadius: 10,
                marginTop: 15,
              }}
            />
          )}
        />
      </View>

      <View
        style={{
          paddingHorizontal: 30,
        }}
      >
        <TouchableOpacity
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          style={{
            backgroundColor: "blue",
            paddingVertical: 15,
            width: "100%",
            borderRadius: 10,
          }}
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
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
