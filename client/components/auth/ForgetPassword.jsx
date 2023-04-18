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

const ForgetPassword = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    const url =
      "https://paracuando-team1.academlo.tech/api/v1/auth/forget-password";
    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);

        alert("Se han enviado las instrucciones a tu email");
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
          Recupera tu Contraseña
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
            Enviar
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
              color: "blue",
            }}
          >
            ¿ No tienes una Cuenta? Crea una aqui
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
const styles = StyleSheet.create({});
