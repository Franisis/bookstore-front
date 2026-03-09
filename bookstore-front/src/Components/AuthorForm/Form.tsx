"use client";

import { useState, useContext } from "react";
import { createAuthor } from "../../core/services/AuthorsService";
import { AuthorsContext } from "../../context/AuthorsContext";
import { useNavigate } from "react-router-dom";
import type { AuthorCreate } from "../../Models/Authors";
import './Form.css'
export default function AuthorForm() {

  const { authors, setAuthors } = useContext(AuthorsContext);

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e:any) => {
    
    e.preventDefault();

    const newAuthor: AuthorCreate = {
        name,
        description,
        image,
        birthDate: new Date(birthDate)
    };

    const created = await createAuthor(newAuthor);

    setAuthors([...authors, created]);
    navigate("/authors");
  };

  return (
    <div className="form-container">
  
      <h2>Crear Autor</h2>
  
      <form onSubmit={handleSubmit}>
  
        <div className="form-group">
          <label>Nombre</label>
          <input
            aria-label="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
  
        <div className="form-group">
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            aria-label="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
  
        <div className="form-group">
          <label>Imagen</label>
          <input
            aria-label="image"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
  
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            aria-label="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
  
        <button className="btn-submit" type="submit">
          Crear Autor
        </button>
  
      </form>
  
    </div>
  );
}