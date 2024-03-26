import { View, ImageBackground, Switch } from "react-native";
import React, { useCallback } from "react";
import { styles } from "./styles";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

export default function Universal({ children }) {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const handleSetModeColor = useCallback(() => {
    toggleColorScheme();
  }, [colorScheme]);

  const backgroundImgPath = colorScheme !=='dark' ? require('./../../assets/images/background.jpg') : require('./../../assets/images/reBackground.jpg')
  return (
    <ImageBackground
      source={backgroundImgPath}
      className="w-full h-full"
    >
      <View >
        <View style={styles.backgroundLight} className="flex flex-row items-center justify-end space-x-1 pb-5 px-3 pt-4">
          <Switch
            value={colorScheme === "dark"}
            onChange={handleSetModeColor}
            trackColor={{ true: "darkgray", false: "white" }}
            ios_backgroundColor="white"
            thumbColor="lightblue"
          />
          {colorScheme === "dark" ? (
            <Ionicons name="moon" size={24} color="white" />
          ) : (
            <Ionicons name="sunny-sharp" size={24} color="white" />
          )}
        </View>
        {children}
      </View>
    </ImageBackground>
  );
}
