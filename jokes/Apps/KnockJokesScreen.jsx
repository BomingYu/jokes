import { View } from "react-native";
import React, { useState } from "react";
import Universal from "./shared/Universal";
import { useRoute } from "@react-navigation/native";
import JokeCard from "./components/JokeCard";

export default function KnockJokesScreen() {
  const route = useRoute();
  const jokes = route.params.jokes.filter((joke) => joke.type === "knock-knock");
  const max = jokes.length;
  const randIndex = Math.floor(Math.random() * max) + 1;
  const [theJoke, setTheJoke] = useState(jokes[randIndex]);

  const handleGetNextJoke = () => {
    const max = jokes.length;
    const randIndex = Math.floor(Math.random() * max) + 1;
    setTheJoke(jokes[randIndex])
    console.log(theJoke.setup)
  };

  return (
    <Universal>
      <View className="flex flex-col items-center">
        <JokeCard
          setup={theJoke.setup}
          punchline={theJoke.punchline}
          getNextJoke={handleGetNextJoke}
        />
      </View>
    </Universal>
  );
}
