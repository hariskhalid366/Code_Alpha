/** @format */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "../components/showToast";
import { Quote } from "../utils/type";

export const useStore = {
  setItem: async (key: string, value: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },

  getItem: async (key: string) => {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },

  removeItem: async (key: string) => {
    await AsyncStorage.removeItem(key);
  },
};

export const toggleSaveQuote = async (quote: Quote) => {
  let savedQuotes = await useStore.getItem("quotes");

  if (!savedQuotes) savedQuotes = [];

  const exists = savedQuotes.find((q: any) => q._id === quote._id);

  if (exists) {
    const updated = savedQuotes.filter((q: any) => q._id !== quote._id);
    await useStore.setItem("quotes", updated);
    Toast("Qoute removed successfully.");
    return { status: "removed", data: updated };
  } else {
    const updated = [...savedQuotes, quote];
    await useStore.setItem("quotes", updated);
    Toast("Qoute added successfully.");
    return { status: "saved", data: updated };
  }
};

export const checkIfExists = async (quoteID: string) => {
  let savedQuotes = await useStore.getItem("quotes");

  if (!savedQuotes) savedQuotes = [];

  const exists = savedQuotes.find((q: any) => q._id === quoteID);
  if (exists) {
    return true;
  } else {
    return false;
  }
};
