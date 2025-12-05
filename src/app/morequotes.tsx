/** @format */

import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import CustomView from "../components/CustomView";
import FlatlistComp from "../components/FlatlistComp";
import Loading from "../components/Loading";
import ScreenHeader from "../components/ScreenHeader";
import { Toast } from "../components/showToast";
import { fetchQuotes } from "../service/ApiCall";
import { ApiState, Quote } from "../utils/type";

const MoreQuotes = () => {
  const [quoteState, setQuoteState] = useState<ApiState<Quote[]>>({
    loading: false,
    data: null,
    error: null,
  });
  useEffect(() => {
    loadQuote();
  }, []);

  const loadQuote = async () => {
    setQuoteState({ loading: true, data: null, error: null });
    const result = await fetchQuotes();

    setQuoteState({
      loading: result.loading,
      data: result.data,
      error: result.error,
    });
    if (result.error !== null) {
      Toast(result.error);
    }
  };
  return (
    <>
      {quoteState.loading && <Loading />}
      <CustomView style={styles.container}>
        <ScreenHeader title="Quotes" />
        <FlatlistComp quoteData={quoteState?.data} />
      </CustomView>
    </>
  );
};

export default MoreQuotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
