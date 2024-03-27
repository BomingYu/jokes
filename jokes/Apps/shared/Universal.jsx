import { View, ImageBackground, Switch, Text } from "react-native";
import React, { useCallback } from "react";
import { styles } from "./styles";
import { useColorScheme } from "nativewind";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Universal({ children }) {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const handleSetModeColor = useCallback(() => {
    toggleColorScheme();
  }, [colorScheme]);

  const navigator = useNavigation()

  const backgroundImgPath =
    colorScheme !== "dark"
      ? require("./../../assets/images/background.jpg")
      : require("./../../assets/images/reBackground.jpg");

  const goToHome = () =>{
    navigator.navigate('HOME')
  }
  return (
    <ImageBackground source={backgroundImgPath} className="w-full h-full">
      <View>
        <View style={styles.backgroundLight} className="flex flex-row justify-between items-center">
          <TouchableOpacity className="pb-5 px-3 pt-4" onPress={goToHome}>
            <FontAwesome name="home" size={32} color="white" />
          </TouchableOpacity>
          <View className="flex flex-row items-center justify-end space-x-1 pb-5 px-3 pt-4">
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
        </View>

        {children}
      </View>
    </ImageBackground>
  );
}
