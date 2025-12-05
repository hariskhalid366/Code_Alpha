/** @format */

export interface Quote {
  _id?: string;
  content?: string;
  author?: string;
  tags?: string[];
  authorSlug?: string;
  length?: number;
  dateAdded?: string;
  dateModified?: string;
}

export interface ToggleResult {
  status: "saved" | "removed";
  data: Quote[];
}

export type ApiState<T> = {
  loading: boolean;
  data: T | null;
  error: string | null;
};
