/** @format */

import React from "react";
import { StyleSheet, View } from "react-native";
import { useColors } from "../constants/colors";
import { Quote } from "../utils/type";
import CustomText from "./CustomText";

interface ListProps {
  item: Quote;
  index: number;
}

const ListView = ({ item, index }: ListProps) => {
  const colors = useColors();
  const iconS = {
    backgroundColor: colors.background,
    borderColor: colors.text,
    borderWidth: 1,
  };
  return (
    <View key={index} style={[styles.listView, iconS]}>
      <CustomText variant="h4" fontWeight={"600"}>
        {item?.author}
      </CustomText>
      <CustomText variant="h5">"{item?.content}"</CustomText>
      <View style={styles.tags}>
        {item?.tags.map((items: string, index: number) => (
          <View
            style={[styles.tagName, { backgroundColor: colors.tagBg }]}
            key={index}>
            <CustomText variant="h6" fontWeight={"bold"}>
              {items}
            </CustomText>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  listView: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    elevation: 10,
  },
  tags: {
    marginVertical: 5,
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    gap: 3,
  },
  tagName: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 5,
  },
});
