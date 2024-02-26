import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";
import LeftArrow from "../../icon/arrow-left.svg";
import RightArrow from "../../icon/arrow-right.svg";
import LeftChevron from "../../icon/chevron-left.svg";

const StyledMain = styled.main`
  height: 100vh;
  margin: 0;

  @media (prefers-color-scheme: light) {
    background-color: var(--color-clouds);
    color: var(--color-earth);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--color-smoke);
    background-color: var(--color-earth);
  }
`;

const StyledSection = styled.div`
  background-color: ${({ $color }) => $color};
  display: flex;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyledLink = styled(Link)`
  color: unset;
  text-decoration: inherit;
  display: flex;
  text-align: ${({ $isLeft }) => ($isLeft ? "left" : "right")};
  justify-content: ${({ $isLeft }) => ($isLeft ? "flex-start" : "flex-end")};
  align-items: center;
  gap: 0.5rem;
`;

const StyledImage = styled(Image)`
  padding: 1rem;
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <StyledMain>
      <StyledLink $isLeft href="/volumes">
        <LeftChevron /> All Volumes
      </StyledLink>
      <h1>{title}</h1>
      <p>{description}</p>
      <StyledSection $color={color}>
        <StyledList>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              <p>
                <i>{ordinal}</i>
              </p>
              <p>
                <strong>{title}</strong>
              </p>
            </li>
          ))}
        </StyledList>
        <StyledImage
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </StyledSection>

      {previousVolume ? (
        <div>
          <StyledLink $isLeft href={`/volumes/${previousVolume.slug}`}>
            <LeftArrow />
            Previous Volume: {previousVolume.title}
          </StyledLink>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <StyledLink href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} <RightArrow />
          </StyledLink>
        </div>
      ) : null}
    </StyledMain>
  );
}
