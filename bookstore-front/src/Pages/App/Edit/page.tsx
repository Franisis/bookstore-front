"use client";

import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthorsContext } from "../../../context/AuthorsContext";
import { updateAuthor } from "../../../core/services/AuthorsService";
import type { Author } from "../../../Models/Authors";
import './page.css'

export default function EditAuthor() {

  const { id } = useParams();
  const navigate = useNavigate();

  const { authors, setAuthors } = useContext(AuthorsContext);

  const [author, setAuthor] = useState<Author | null>(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
console.log(authors, id);

    const found = authors.find(a => a.id == id);
    
    
    if (found) {
      setAuthor(found);
      setName(found.name);
      setDescription(found.description);
      setImage(found.image);
    }

  }, [authors, id]);

  const handleSubmit = (e:any) => {

    e.preventDefault();

    
    // update author on backend
    updateAuthor(id!, { id, name, description, image } as Author).then(() => {
        console.log(`Author with id ${id} updated successfully.`);
    }
    ).catch((error) => {
        console.error(`Error updating author with id ${id}:`, error);
    });
    // update authors in context
    const updatedAuthors = authors.map(a =>
    a.id == id
        ? { ...a, name, description, image }
        : a
        
        
    );
    setAuthors(updatedAuthors);



    navigate("/authors");
  };

  if (!author) {
    return <p>Cargando autor...</p>;
  }

  return (

    <div className="form-container">

      <h2>Editar Autor</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
        <label htmlFor="">Nombre</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
        <label htmlFor="">Imagen</label>
            <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
        </div>
        <div className="form-group">
        <label htmlFor="">Descripcion</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
          </div>

        <button type="submit">Guardar</button>

      </form>

    </div>
  );
}