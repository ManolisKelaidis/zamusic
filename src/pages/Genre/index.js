import React from "react";
import { useParams } from "react-router-dom";

function Genre() {
  const { genreId } = useParams();
  console.log(genreId);
  return <div></div>;
}

export default Genre;
