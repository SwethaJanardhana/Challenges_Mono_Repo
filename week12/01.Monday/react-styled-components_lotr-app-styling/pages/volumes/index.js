import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data";
import "@/styles";
import styled from "styled-components";

const StyledMain = styled.main`
  height: 100vh;
  margin: 0;
  padding: 1rem;

  @media (prefers-color-scheme: light) {
    background-color: var(--color-clouds);
    color: var(--color-earth);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--color-smoke);
    background-color: var(--color-earth);
  }
`;

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  gap: 2rem;
  padding: 0;
`;

const StyledListItem = styled.li`
  text-align: center;
`;

const StyledImage = styled(Image)`
  box-shadow: var(--box-shadow-book);

  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const StyledLink = styled(Link)`
  color: unset;
  text-decoration: inherit;
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
    <StyledMain>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <StyledList>
        {volumes.map((volume) => (
          <StyledListItem key={volume.slug}>
            <StyledImage
              src={volume.cover}
              alt={`Cover image of ${volume.title}`}
              width={60}
              height={90}
              href={`/volumes/${volume.slug}`}
            />
            <br></br>
            <StyledLink href={`/volumes/${volume.slug}`}>
              {volume.title}
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledMain>
  );
}
