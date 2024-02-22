import React from "react";
import Link from "next/link.js";
import { volumes } from "@/lib/data";
import Image from "next/image";

export default function TheReturnOfTheKing() {
  //const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king"); /* desctructuring of object */
  const volume = volumes.find((vol) => vol.slug === "the-return-of-the-king");
  return (
    <div>
      <Link href="/volumes">All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.title}>
            {book.title} : {book.ordinal}
          </li>
        ))}
      </ul>
      <Image src={volume.cover} alt="the-two-towers" width={140} height={230} />
    </div>
  );
}
