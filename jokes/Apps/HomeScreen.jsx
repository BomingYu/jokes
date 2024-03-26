import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Universal from "./shared/Universal";
import { styles } from "./shared/styles";
import axios from "axios";
import LoadingComponent from "./shared/LoadingComponent";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen() {
  const [jokes, setJokes] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJokes = async () => {
      const jokesRes = await axios.get(
        "https://api.sampleapis.com/jokes/goodJokes/"
      );
      const jokes = jokesRes.data;
      setJokes(jokes);
      const jokeTypes = new Set(jokes.map((joke) => joke.type));
      const upperTypes = [...jokeTypes].map((type , index) => ({id:index+1 , type:type.toUpperCase()}));
      setTypes([...upperTypes]);
      setLoading(false);
    };
    getJokes();
  }, []);

  return (
    <Universal>
      <View className="items-center">
        <View>
          {loading ? (
            <LoadingComponent />
          ) : (
            <View className='items-center space-y-10 mt-20'>
                <TouchableOpacity style={styles.buttonBackground} className="p-5 rounded-full">
                        <Text className="text-3xl text-gray-100 font-bold">ALL</Text>
                    </TouchableOpacity>
                {types.map(type=>(
                    <TouchableOpacity key={type.id} style={styles.buttonBackground} className="p-5 rounded-full">
                        <Text className="text-3xl text-gray-100 font-bold">{type.type}</Text>
                    </TouchableOpacity>
                ))}
            </View>
          )}
        </View>
      </View>
    </Universal>
  );
}
