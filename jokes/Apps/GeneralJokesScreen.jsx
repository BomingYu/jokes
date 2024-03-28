import { View } from "react-native";
import React, { useEffect, useState } from "react";
import Universal from "./shared/Universal";
import { useRoute } from "@react-navigation/native";
import JokeCard from "./components/JokeCard";
import axios from "axios";
import LoadingComponent from "./shared/LoadingComponent";

export default function GeneralJokesScreen() {
  const route = useRoute();
  const [theJoke, setTheJoke] = useState();
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJokes = async () => {
      try {
        const allJokesData = await axios.get(
          "https://api.sampleapis.com/jokes/goodJokes/"
        );
        const allJokes = allJokesData.data;
        const generalJokes = allJokes.filter((joke) => joke.type === "general");
        setJokes(generalJokes);
        const max = generalJokes.length;
        const randIndex = Math.floor(Math.random() * max);
        setTheJoke(generalJokes[randIndex]);
        setLoading(false)
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    getJokes();
  },[]);

  const handleGetNextJoke = () => {
    const max = jokes.length;
    const randIndex = Math.floor(Math.random() * max);
    setTheJoke(jokes[randIndex])
    console.log(max);
  };

  return (
    <Universal>
      <View className="flex flex-col items-center">
        {loading ? (
          <LoadingComponent />
        ) : (
          <JokeCard
            setup={theJoke.setup}
            punchline={theJoke.punchline}
            getNextJoke={handleGetNextJoke}
          />
        )}
      </View>
    </Universal>
  );
}
