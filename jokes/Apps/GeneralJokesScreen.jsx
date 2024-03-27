import { View, Text } from "react-native";
import React from "react";
import Universal from "./shared/Universal";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function GeneralJokesScreen() {
  const route = useRoute()
  const {jokeType} = route?.params
  const getJokeType = () =>{
    console.log(jokeType)
  }
  return (
    <Universal>
      <View>
        <TouchableOpacity onPress={getJokeType}>
          <Text>{jokeType.toUpperCase()}</Text>
        </TouchableOpacity>
        
      </View>
    </Universal>
  );
}
