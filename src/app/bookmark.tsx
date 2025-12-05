/** @format */

import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import CustomView from "../components/CustomView";
import FlatlistComp from "../components/FlatlistComp";
import ScreenHeader from "../components/ScreenHeader";
import { useStore } from "../store/db";
import { Quote } from "../utils/type";

const BookMark = () => {
  const [quoteData, getQuoteData] = useState<Quote[] | null>(null);

  const fetch = async () => {
    const data = await useStore.getItem("quotes");
    if (data?.length > 0) getQuoteData(data);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <CustomView style={styles.container}>
      <ScreenHeader title="Saved" />
      <FlatlistComp quoteData={quoteData} />
    </CustomView>
  );
};

export default BookMark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
