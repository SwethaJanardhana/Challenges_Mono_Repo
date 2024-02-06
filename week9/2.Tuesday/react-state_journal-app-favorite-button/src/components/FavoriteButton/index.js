import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  // this should be a state variable
  const [isFavorite, setIsFacorite] = useState(false);

  function handleClick() {
    setIsFacorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={handleClick}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
