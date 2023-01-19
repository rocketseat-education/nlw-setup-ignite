import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import { useNavigation } from "@react-navigation/native";

import Logo from '../assets/logo.svg';

export function Header() {
  const { navigate } = useNavigation()

  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />

      <TouchableOpacity 
        activeOpacity={0.7}
        className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center" 
        onPress={() => navigate('new')} 
      >
        <Feather 
          name="plus"
          color={colors.violet[500]}
          size={20}
        />

        <Text className="text-white ml-3 font-semibold text-base">
          Novo
        </Text>
      </TouchableOpacity>
    </View>
  )
}