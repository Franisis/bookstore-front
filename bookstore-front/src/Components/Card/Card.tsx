"use client";

import { useContext } from "react";
import { AuthorsContext } from "../../context/AuthorsContext";
import { deleteAuthor } from "../../core/services/AuthorsService";
import type { Author } from "../../Models/Authors";
import { ERRORS } from "../../Constants/Errors";
import './Card.css'
import { useNavigate } from "react-router-dom";
interface Props {
    author: Author;
  }
  

export default function Card({ author } : Props) {

  const navigate = useNavigate();
  const { authors, setAuthors } = useContext(AuthorsContext);

  const handleDelete = async () => {

    await deleteAuthor(author.id).then(() => {
        console.log(`Author with id ${author.id} deleted successfully.`);
    }
    ).catch((error) => {
        console.error(`Error deleting author with id ${author.id}:`, ERRORS.DELETE_AUTHOR, error);
    });

    const filtered = authors.filter(a => a.id !== author.id);
    setAuthors(filtered);
  };

  return (
    <div className="card">

    <div className="card-image">
      <img src={author.image} alt={author.name} />
    </div>

    <div className="card-content">
      <h3>{author.name}</h3>
      <p>{author.description}</p>
    </div>

    <div className="card-actions">
          <button
        className="btn-edit"
        onClick={() => navigate(`/edit/${author.id}`)}
      >
        Editar
      </button>
      <button className="btn-delete" onClick={handleDelete}>
        Eliminar
      </button>
    </div>

  </div>
  );
}

