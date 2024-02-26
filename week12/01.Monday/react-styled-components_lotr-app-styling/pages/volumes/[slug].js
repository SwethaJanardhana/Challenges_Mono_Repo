import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";
import LeftArrow from "../../icon/arrow-left.svg";
import RightArrow from "../../icon/arrow-right.svg";
import LeftChevron from "../../icon/chevron-left.svg";

const StyledSection = styled.div`
  background-color: ${({ $color }) => $color};
  display: flex;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyledImage = styled(Image)`
  padding: 1.3rem;
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
    <>
      <Link href="/volumes">
        <span>
          <LeftChevron /> All Volumes
        </span>
      </Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <StyledSection $color={color}>
        <StyledUl>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              <h3>{ordinal}</h3>
              <h2>
                <strong>{title}</strong>
              </h2>
            </li>
          ))}
        </StyledUl>
        <StyledImage
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </StyledSection>

      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            <span>
              <LeftArrow />
              Previous Volume: {previousVolume.title}
            </span>
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            <span>
              Next Volume: {nextVolume.title} <RightArrow />
            </span>
          </Link>
        </div>
      ) : null}
    </>
  );
}
