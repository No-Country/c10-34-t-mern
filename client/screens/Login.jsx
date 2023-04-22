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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import axios from "axios";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { setInfoUser } from "../redux/infoUserSlice/infoUserSlice";
import { setToken } from "../redux/tokenSlice/tokenSlice";
import { setUserId } from "../redux/orderSlice/orderSlice";
import BtnLogin from "../components/auth/BtnLogin";

const Login = ({}) => {
  const infoTokenGlobal = useSelector((state) => state.tokenReducer.tokenInfo);
  const infoUserGlobal = useSelector((state) => state.infoReducer.info);
  const [sending, setSending] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onSubmit = (data) => {
    console.log(data);
    setSending(true);

    const url = "https://barber-nocountry.onrender.com/api/v1/auth/login";
    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        dispatch(setToken(response.data.tokenGenerated));
      })
      .catch((error) => console.log("a seguir probando", error.response.data));

    //* Save info user in the Store

    const access = {
      headers: {
        "x-access-token": infoTokenGlobal,
      },
    };

    const urlInfo = "https://barber-nocountry.onrender.com/api/v1/auth/me";
    axios
      .get(urlInfo, access)
      .then((response) => {
        dispatch(setInfoUser(response.data));
        dispatch(setUserId(response.data._id));
        navigation.navigate("Inicio");
      })
      .catch((error) => {
        console.log("There xxxxxxggggghhhhhhhhhh.", error.response.data);
      });
    setTimeout(() => {
      setSending(false);
    }, 10000);
  };

  console.log(infoTokenGlobal);
  console.log(infoUserGlobal);

  return (
    <TouchableOpacity>
      <BtnLogin sending={sending} onSubmit={onSubmit} />
    </TouchableOpacity>
  );
};

export default Login;
const styles = StyleSheet.create({});
