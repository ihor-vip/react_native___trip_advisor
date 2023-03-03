import {View, Text, SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useLayoutEffect} from "react";

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    },[])

    return (
       <SafeAreaView className="bg-white flex-1 relative">
           <View className="flex-row px-6 mt-8 items-center space-x-2">
               <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                   <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
               </View>

               <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
           </View>
       </SafeAreaView>
    )
}

export default HomeScreen;