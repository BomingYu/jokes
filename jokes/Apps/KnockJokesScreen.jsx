import { View, Text , TouchableOpacity} from "react-native";
import React from "react";
import Universal from "./shared/Universal";
import { useRoute } from "@react-navigation/native";

export default function KnockJokesScreen() {
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
