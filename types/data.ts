export type Maybe<T> = T | null;

export type FormDataT = {
  first_name?: Maybe<string>;
  last_name?: Maybe<string>;
  image?: Maybe<File>;
  user_name?: Maybe<string>;
  password?: Maybe<string>;
};

export type nextPageDataT = Omit<FormDataT, "user_name" | "password">;
