/** @format */

import { Send } from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import CustomView from "../components/CustomView";
import FlatlistComp from "../components/FlatlistComp";
import Loading from "../components/Loading";
import ScreenHeader from "../components/ScreenHeader";
import { Toast } from "../components/showToast";
import { useColors } from "../constants/colors";
import { searchQuote } from "../service/ApiCall";
import { wp } from "../utils/responsive";
import { ApiState, Quote } from "../utils/type";

const Search = () => {
  const colors = useColors();
  const iconS = {
    backgroundColor: colors.background,
    borderColor: colors.text,
    borderWidth: 1,
  };

  const [search, setSearch] = useState<string>("");
  const [quoteState, setQuoteState] = useState<ApiState<Quote[]>>({
    loading: false,
    data: null,
    error: null,
  });

  const handleSearch = async () => {
    if (search.length === 0) {
      Toast("Type quote to search");
      return;
    }
    setQuoteState({ loading: true, data: null, error: null });
    const result = await searchQuote(search);

    setQuoteState(result);
    if (result.error !== null) {
      Toast(result.error);
    }
  };

  return (
    <>
      {quoteState.loading && <Loading />}
      <CustomView style={styles.container}>
        <ScreenHeader title="Search" />

        <FlatlistComp
          listHeader={
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TextInput
                value={search}
                placeholderTextColor={colors.text}
                placeholder="Search quotes"
                style={{
                  color: colors.text,

                  flex: 1,
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  elevation: 10,
                  backgroundColor: colors.background,
                  borderColor: colors.text,
                  borderWidth: 1,
                }}
                onChangeText={(e) => setSearch(e)}
              />
              <TouchableOpacity
                onPress={handleSearch}
                style={[styles.icon, iconS]}>
                <Send color={colors.text} fill={colors.text} size={wp(5)} />
              </TouchableOpacity>
            </View>
          }
          quoteData={quoteState?.data}
        />
      </CustomView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
