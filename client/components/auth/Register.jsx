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
import { useState } from "react";

const Register = ({ navigation }) => {
  // const [isFocused, setIsFocused] = useState(false);

  // const handleFocus = () => setIsFocused(true);
  // const handleBlur = () => setIsFocused(false);

  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const url = "https://barber-nocountry.onrender.com/api/v1/auth/register";
    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        navigation.navigate("Login");
      })
      .catch((error) => console.log(error.JSON()));
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#3C3630",
        height: "100%",
      }}
    >
      <View
        style={{
          paddingLeft: "20%",
          paddingRight: "20%",

          marginTop: 80,
          width: 400,
          height: 120,
          marginTop: 120,
          position: "relative",
        }}
      >
        <Image
          resizeMode="contain"
          style={{
            width: 60,
            height: 100,
          }}
          source={require("../../assets/Logooriginal4.png")}
        />
        <Image
          resizeMode="contain"
          style={{
            width: 180,
            height: 80,
            position: "absolute",
            top: 0,
            right: 70,
          }}
          source={require("../../assets/Figaro-1.png")}
        />
        <Image
          resizeMode="contain"
          style={{
            width: 180,
            height: 90,
            position: "absolute",
            top: 40,
            right: 70,
          }}
          source={require("../../assets/look.png")}
        />
      </View>

      <View
        style={{
          height: 36,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#B3B6B8",
          alignItems: "flex-start",
          paddingLeft: 32,
        }}
      >
        <Text
          style={{
            color: "#352F2B",
            fontWeight: 600,
            fontSize: 20,
            textAlign: "left",
          }}
        >
          Alta de usuario
        </Text>
      </View>

      <View
        style={{
          marginVertical: 20,
          marginHorizontal: 30,
        }}
      >
        <Controller
          name="name"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              placeholder="Ingresa tu nombre"
              placeholderTextColor={Colors.darkText}
              // onFocus={handleFocus}
              onBlur={onBlur}
              style={{
                fontSize: 18,

                padding: 7,
                paddingLeft: 20,
                backgroundColor: "white",
                borderRadius: 50,
                borderColor: "purple",
                borderWidth: 2,
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
              onChangeText={onChange}
              value={value}
              placeholder="Ingresa tu Apellido"
              placeholderTextColor={Colors.darkText}
              onBlur={onBlur}
              style={{
                fontSize: 18,

                padding: 7,
                paddingLeft: 20,
                backgroundColor: "white",
                borderRadius: 50,
                borderColor: "purple",
                borderWidth: 2,
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
              onChangeText={onChange}
              value={value}
              placeholder="Ingresa tu correo"
              placeholderTextColor={Colors.darkText}
              onBlur={onBlur}
              style={{
                fontSize: 18,

                padding: 7,
                paddingLeft: 20,
                backgroundColor: "white",
                borderRadius: 50,
                borderColor: "purple",
                borderWidth: 2,
                marginTop: 15,
              }}
            />
          )}
        />

        <Controller
          name="dateOfBirth"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              placeholder="Ingresa tu fecha e nacimiento"
              placeholderTextColor={Colors.darkText}
              onBlur={onBlur}
              style={{
                fontSize: 18,

                padding: 7,
                paddingLeft: 20,
                backgroundColor: "white",
                borderRadius: 50,
                borderColor: "purple",
                borderWidth: 2,
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
              onChangeText={onChange}
              value={value}
              placeholder="Ingresa tu contraseña"
              placeholderTextColor={Colors.darkText}
              onBlur={onBlur}
              style={{
                fontSize: 18,

                padding: 7,
                paddingLeft: 20,
                backgroundColor: "white",
                borderRadius: 50,
                borderColor: "purple",
                borderWidth: 2,
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
            backgroundColor: "#BCBEC0",
            paddingVertical: 12,
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
              color: "#E5DACE",
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
