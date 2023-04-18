import { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { AntDesign, Feather } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    // console.log(data);

    const url = "https://paracuando-team1.academlo.tech/api/v1/auth/login";
    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        SecureStore.setItemAsync("token", response.data.token[0].public);
        alert("Has iniciado sesion");
      })
      .catch((error) => console.log(error.JSON()));
  };

  const onLogOut = () => {
    SecureStore.deleteItemAsync("token");
  };

  const handleShowPassord = () => {
    setShowPassword(!showPassword);
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
          Bienvenido se parte de nuestra comunidad
        </Text>
      </View>
      <View
        style={{
          marginVertical: 20,
          marginHorizontal: 30,
        }}
      >
        <View>
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
                  position: "relative",
                  padding: 15,
                  backgroundColor: "white",
                  borderRadius: 10,
                  paddingLeft: 40,
                }}
              />
            )}
          />
          <AntDesign
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-12px)",
              left: 10,
            }}
            name="mail"
            size={22}
            color="grey"
          />
        </View>
        <View>
          <Controller
            name="password"
            rules={{ required: true }}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                secureTextEntry={showPassword ? false : true}
                value={value}
                placeholder="password"
                placeholderTextColor={Colors.darkText}
                style={{
                  fontSize: 18,
                  padding: 15,
                  backgroundColor: "white",
                  borderRadius: 10,
                  marginTop: 15,
                  position: "relative",
                  paddingLeft: 40,
                }}
              />
            )}
          />
          <AntDesign
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-5px)",
              left: 10,
            }}
            name="lock"
            size={22}
            color="grey"
          />
          {showPassword ? (
            <Feather
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-5px)",
                right: 10,
              }}
              name="eye-off"
              size={22}
              color="grey"
              onPress={handleShowPassord}
            />
          ) : (
            <AntDesign
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-5px)",
                right: 10,
              }}
              name="eyeo"
              size={22}
              color="grey"
              onPress={handleShowPassord}
            />
          )}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
          <Text
            style={{
              fontWeight: 600,
              paddingTop: 10,
              textAlign: "right",
              color: "blue",
            }}
          >
            ¿ Olvidaste tu constraseña?
          </Text>
        </TouchableOpacity>
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
          onPress={handleSubmit(onSubmit)}
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
          onPress={handleSubmit(onLogOut)}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginHorizontal: 30,
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              fontWeight: 600,
            }}
          >
            Crear nuevo usuario
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              fontWeight: 600,
            }}
          >
            Recuperar contraseña
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({});
