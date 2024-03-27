import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Universal from "./shared/Universal";
import { styles } from "./shared/styles";
import axios from "axios";
import LoadingComponent from "./shared/LoadingComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AllJokesScreen from "./AllJokesScreen";
import { useColorScheme } from "nativewind";

export default function HomeScreen() {
  const [jokes, setJokes] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigation();
  const colorScheme = useColorScheme();
  const color = colorScheme.colorScheme;

  useEffect(() => {
    const getJokes = async () => {
      const jokesRes = await axios.get(
        "https://api.sampleapis.com/jokes/goodJokes/"
      );
      const jokes = jokesRes.data;
      setJokes(jokes);
      const jokeTypes = new Set(jokes.map((joke) => joke.type));
      const upperTypes = [...jokeTypes].map((type, index) => ({
        id: index + 1,
        type: type.toUpperCase(),
      }));
      setTypes([...upperTypes]);
      setLoading(false);
    };
    getJokes();
  }, []);

  const goToAllJokes = () => {
    //navigator.navigate('ALL')
    console.log(color);
  };
  const goToJokesScreen = (type) => {
    const jokeType = type.toLowerCase();
    const params = { jokeType: jokeType };
    navigator.navigate(type, params);
    console.log(params);
  };
  return (
    <Universal>
      <View className="items-center">
        <View>
          {loading ? (
            <LoadingComponent />
          ) : (
            <View className="items-center space-y-10 mt-20">
              <TouchableOpacity
                style={
                  color == "light"
                    ? styles.buttonBackground
                    : styles.buttonDarkBackground
                }
                className="p-5 rounded-full"
                onPress={goToAllJokes}
              >
                <Text className="text-3xl text-gray-100 dark:text-gray-800 font-bold">
                  ALL
                </Text>
              </TouchableOpacity>
              {types.map((type) => (
                <TouchableOpacity
                  key={type.id}
                  style={
                    color == "light"
                      ? styles.buttonBackground
                      : styles.buttonDarkBackground
                  }
                  className="p-5 rounded-full"
                  onPress={() => goToJokesScreen(type.type)}
                >
                  <Text className="text-3xl text-gray-100 dark:text-gray-800 font-bold">
                    {type.type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
    </Universal>
  );
}
