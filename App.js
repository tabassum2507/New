import { StatusBar } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { theme } from "./theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useState } from "react";

export default function App() {
  const [toggleSearch, setToggleSearch] = useState(false)
  const [location, setlocation] = useState(["Delhi", "Jammu", "Sikkim"])

  return (
    <View className="flex-1 relative">
      <StatusBar barStyle="light-content" />
      <Image
        source={require("./assets/images/bg.png")}
        className="absolute h-full w-full"
        blurRadius={70}
      />
      <SafeAreaView className="flex flex-1">
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{ backgroundColor: toggleSearch ? theme.bgWhite(0.2) : 'transparent' }}
          >{
            toggleSearch? (
              <TextInput
              placeholder="Search your City"
              placeholderTextColor={"lightgray"}
              className="pl-6 h-10 flex-1 text-bas text-white"
            />
            ): null
          }
            <TouchableOpacity onPress={() => {
              setToggleSearch(!toggleSearch)
            }}
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>
          </View>

          {
            location.length>0 && toggleSearch? (
              <View className="absolute w-full bg-gray-300 rounded-3xl">
                {
                  location.map((loc, index) => {
                     return(
                      <TouchableOpacity>
                        <Text>Udaypur</Text>
                      </TouchableOpacity>
                     )
                  })
                }
              </View>
            ): null
          }
        </View>
      </SafeAreaView>
    </View>
  );
}
