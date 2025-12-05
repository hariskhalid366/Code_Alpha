/** @format */

import * as Sharing from "expo-sharing";
import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { captureRef } from "react-native-view-shot";
import Card from "../components/Card";
import CustomView from "../components/CustomView";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { useColors } from "../constants/colors";
import { fetchRandomQuote } from "../service/ApiCall";
import { checkIfExists, toggleSaveQuote } from "../store/db";
import { ApiState, Quote } from "../utils/type";

const RootView = () => {
  const colors = useColors();
  const viewRef = useRef(null);
  const [isExist, setIsExists] = useState<boolean>(false);
  const [quoteState, setQuoteState] = useState<ApiState<Quote>>({
    loading: false,
    data: null,
    error: null,
  });

  const loadQuote = async () => {
    setQuoteState({ loading: true, data: null, error: null });

    const result = await fetchRandomQuote();

    setQuoteState(result);
  };

  useEffect(() => {
    loadQuote();
  }, []);

  const shareImage = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: "png",
        quality: 1,
        fileName: `quotify-share-`,
      });

      await Sharing.shareAsync(uri);
    } catch (error) {
      console.log(error);
    }
  };

  const checkQuote = async () => {
    if (quoteState?.data?._id) {
      const isTrue = await checkIfExists(quoteState?.data?._id);
      setIsExists(isTrue);
    }
  };

  const onSavePress = async () => {
    if (quoteState?.data) {
      await toggleSaveQuote(quoteState.data);
      checkQuote();
    }
  };
  const colorsScheme = useColorScheme();

  return (
    <>
      {quoteState.loading && <Loading />}
      <StatusBar
        barStyle={colorsScheme === "light" ? "dark-content" : "light-content"}
      />
      <CustomView style={styles.container}>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={viewRef}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            paddingHorizontal: 20,
            backgroundColor: colors.background,
          }}>
          <Card data={quoteState?.data} onPress={loadQuote} />
        </ScrollView>
        <Footer
          isExist={isExist}
          sharePress={shareImage}
          savePress={onSavePress}
        />
      </CustomView>
    </>
  );
};

export default RootView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
