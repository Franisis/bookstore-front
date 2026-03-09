"use client";

import { createContext, useState, useEffect } from "react";
import { getAuthors } from "../core/services/AuthorsService";
import type { Author } from "../Models/Authors";
import { ERRORS } from "../Constants/Errors";

type AuthorsContextType = {
  authors: Author[];
  setAuthors: React.Dispatch<React.SetStateAction<Author[]>>;
};

export const AuthorsContext = createContext<AuthorsContextType>({
  authors: [],
  setAuthors: () => {},
});

export function AuthorsProvider({ children }: any) {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    loadAuthors();
  }, []);

  const loadAuthors = async () => {
    const data = await getAuthors()
      .then((response) => response)
      .catch((error) => {
        console.error(`${ERRORS.GET_AUTHORS}`, error);
      });

    setAuthors(data || []);
  };

  return (
    <AuthorsContext.Provider value={{ authors, setAuthors }}>
      {children}
    </AuthorsContext.Provider>
  );
}