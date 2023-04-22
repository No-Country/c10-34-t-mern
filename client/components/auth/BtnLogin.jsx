import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { AntDesign, Feather } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const BtnLogin = ({ sending, onSubmit }) => {
  const { control, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const dataSubmit = (data) => {
    console.log(data);
    onSubmit(data);
  };
  const handleShowPassord = () => {
    setShowPassword(!showPassword);
  };
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      style={{
        height: "100%",
        backgroundColor: "#3C3630",
      }}
      scrollEnabled
    >
      <SafeAreaView>
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
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              height: 90,
            }}
            source={require("../../assets/Rectangle348.png")}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            paddingTop: 50,
          }}
        ></View>
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
                top: "30%",

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
                top: "45%",

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

                  right: 10,
                }}
                name="eyeo"
                size={22}
                color="grey"
                onPress={handleShowPassord}
              />
            )}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgetPassword")}
          >
            <Text
              style={{
                fontWeight: 600,
                paddingTop: 10,
                textAlign: "right",
                color: "white",
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
              backgroundColor: "#5C5350",
              paddingVertical: 15,
              width: "100%",
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 5,
            }}
            onPress={handleSubmit(dataSubmit)}
            disabled={sending}
          >
            {sending ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : null}
            <Text
              style={{
                color: "#E5DACE",
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
        ></View>

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
                color: "#E5DACE",
              }}
            >
              Crear nuevo usuario
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                color: "#E5DACE",
                fontWeight: 600,
              }}
            >
              Recuperar contraseña
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default BtnLogin;
const styles = StyleSheet.create({});
