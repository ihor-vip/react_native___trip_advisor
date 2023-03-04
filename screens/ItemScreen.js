import {Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const ItemScreen = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Text>
                ItemScreen
            </Text>
        </View>
    )
}