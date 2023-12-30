import React from "react";
import { View, SafeAreaView, TextInput, Touchable, TouchableOpacityProps, ActivityIndicator } from "react-native";

interface buttonProps extends TouchableOpacityProps{
  title: string;
  margin?: number;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

const Button = ({ title, margin, disabled, loading, onPress, ...props }: buttonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  }

  const renderText = (color: string) => (
    <>
      <Text>
        {title}
      </Text>
    </>
  )
}