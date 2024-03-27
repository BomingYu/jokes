import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigationState } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function JokeCard({ setup, punchline, getNextJoke }) {
  const [isPunchline, setIsPunchline] = useState(false);
  const navigationState = useNavigationState((state) => state);
  const currentRoute = navigationState.routes[navigationState.index];
  const colorScheme = useColorScheme();

  useEffect(() => {
    setIsPunchline(false);
  }, [currentRoute.name]);

  const handlePunchline = () => {
    setIsPunchline(true);
  };

  const handleHide = () => {
    setIsPunchline(false);
  };

  const handleNextButton = () => {
    setIsPunchline(false);
    console.log(colorScheme.colorScheme);
    getNextJoke();
  };

  return (
    <View className="mt-32 mb-20 items-center space-y-20">
      <Text className="text-3xl font-medium dark:text-white px-1">{setup}</Text>
      {isPunchline ? (
        <View className="items-center space-y-3 mt-20">
          <Text className="text-3xl font-medium text-center dark:text-white px-1">
            {punchline}
          </Text>
          <TouchableOpacity
            className="bg-rose-800 dark:bg-rose-200 items-center rounded-full w-48"
            onPress={handleHide}
          >
            <Text className="text-2xl p-3 font-bold text-gray-200 dark:text-black">
              Hide
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          className="bg-lime-800 dark:bg-lime-200 items-center rounded-full w-48 mt-32"
          onPress={handlePunchline}
        >
          <Text className="text-2xl p-3 font-bold text-gray-200 dark:text-black">
            PunchLine
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        className="bg-teal-800 dark:bg-teal-200 w-32 items-center rounded-full"
        onPress={handleNextButton}
      >
        <Text className="text-2xl p-3 text-gray-200 dark:text-black">
          Next{" "}
          <Fontisto
            name="angle-dobule-right"
            size={24}
            color={colorScheme.colorScheme !== "dark" ? "white" : "black"}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
