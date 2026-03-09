"use client";

import { useContext } from "react";
import { AuthorsContext } from "../../../context/AuthorsContext";
import Card from "../../../Components/Card/Card";
import type { Author } from "../../../Models/Authors";

export default function AuthorsPage() {

  const { authors } = useContext(AuthorsContext);

  return (
    <div>
      <h1>Autores</h1>

      {authors.map((author: Author) => (
        <Card key={author.id} author = {author}  />
      ))}

    </div>
  );
}