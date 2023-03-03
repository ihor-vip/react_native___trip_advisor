import {SafeAreaView, Text, View, Image, ScrollView} from "react-native";
import React, {useLayoutEffect, useState} from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {useNavigation} from "@react-navigation/native";
import {Attractions, Avatar, Hotels, Restaurants} from "../assets";
import {MAPS_API_KEY} from '@env';
import MenuContainer from "../components/MenuContainer";
const Discover = () => {
    const navigation = useNavigation();

    const [type, setType] = useState("restaurants");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-row items-center justify-between px-8">
                <View>
                    <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
                    <Text className="text-[#527283] text-[36px]">the beauty today</Text>
                </View>

                <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
                    <Image
                        source={Avatar}
                        className="w-full h-full rounded-md object-cover"
                    />
                </View>
            </View>

            <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
                <GooglePlacesAutocomplete
                    GooglePlacesDetailsQuery={{fields: "geometry"}}
                    placeholder="Search"
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        console.log(details?.geometry?.viewport);
                    }}
                    query={{
                        key: MAPS_API_KEY,
                        language: "en",
                    }}
                />
            </View>

            {/* Menu Container */}
            <ScrollView>
                <View className=" flex-row items-center justify-between px-8 mt-8">
                    <MenuContainer
                        key={"hotels"}
                        title="Hotels"
                        imageSrc={Hotels}
                        type={type}
                        setType={setType}
                    />

                    <MenuContainer
                        key={"attractions"}
                        title="Attractions"
                        imageSrc={Attractions}
                        type={type}
                        setType={setType}
                    />

                    <MenuContainer
                        key={"restaurants"}
                        title="Restaurants"
                        imageSrc={Restaurants}
                        type={type}
                        setType={setType}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Discover;