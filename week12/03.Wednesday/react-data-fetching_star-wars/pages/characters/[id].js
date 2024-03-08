import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
`;

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const URL = `https://swapi.dev/api/people/${id}`;

  const fetcher = (URL) => fetch(URL).then((response) => response.json());

  const { data: character, isLoading, error } = useSWR(URL, fetcher);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error : {error}</div>;
  }
  return (
    <Layout>
      <Card
        id={id}
        name={character.name}
        height={character.height}
        eyeColor={character.eye_color}
        birthYear={character.birth_year}
      />
      <br></br>
      <StyledLink href="/">Back</StyledLink>
    </Layout>
  );
}
