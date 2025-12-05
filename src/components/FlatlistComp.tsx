/** @format */

import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Quote } from "../utils/type";
import CustomText from "./CustomText";
import ListView from "./ListView";
interface ListCompProp {
  quoteData: Quote[] | null;
  listHeader?: React.ReactElement;
}
const FlatlistComp = ({ quoteData, listHeader }: ListCompProp) => {
  return (
    <FlatList
      ListEmptyComponent={
        <View style={{ alignSelf: "center" }}>
          <CustomText variant="h4">No quotes available</CustomText>
        </View>
      }
      ListHeaderComponent={listHeader}
      fadingEdgeLength={20}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 15, gap: 10 }}
      data={quoteData}
      renderItem={({ item, index }) => <ListView {...{ item, index }} />}
    />
  );
};

export default FlatlistComp;

const styles = StyleSheet.create({});
