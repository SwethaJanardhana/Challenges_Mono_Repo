import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data";
import "@/styles";
import styled from "styled-components";

const StyledImage = styled(Image)`
  box-shadow: var(--box-shadow-book);
`;

const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: centre;
`;

const StyledFigure = styled.figure`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <StyledUl>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>
              <StyledFigure>
                <StyledImage
                  src={volume.cover}
                  alt={`Cover image of ${volume.title}`}
                  width={60}
                  height={90}
                  href={`/volumes/${volume.slug}`}
                />
                <figcaption>{volume.title}</figcaption>
              </StyledFigure>
            </Link>
          </li>
        ))}
      </StyledUl>
    </>
  );
}
