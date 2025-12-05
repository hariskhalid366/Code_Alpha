/** @format */

import { RefreshCcw } from "lucide-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useColors } from "../constants/colors";
import { hp, wp } from "../utils/responsive";
import CustomText from "./CustomText";

const QuoteCard = ({ onPress, data }: any) => {
  const colors = useColors();
  const iconS = {
    backgroundColor: colors.background,
    borderColor: colors.text,
    borderWidth: 1,
  };
  return (
    <View key={data?._id} style={styles.container}>
      <TouchableOpacity onPress={onPress} style={[styles.icon, iconS]}>
        <RefreshCcw color={colors.text} size={wp(6)} />
      </TouchableOpacity>
      <CustomText variant="h1" style={{ lineHeight: hp(5) }}>
        {data?.content}
      </CustomText>
      <CustomText variant="h2" color={colors.author}>
        {data?.author}
      </CustomText>
    </View>
  );
};

export default QuoteCard;

const styles = StyleSheet.create({
  container: {
    // padding: wp(8),
    justifyContent: "center",
    gap: 10,
  },
  icon: {
    alignSelf: "flex-end",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    elevation: 5,
  },
});
