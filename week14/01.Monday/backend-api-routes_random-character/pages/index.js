import useSWR from "swr";
import { styled } from "styled-components";

const StyledTable = styled.table`
  border: 1px solid;
`;

const Styledth = styled.th`
  border: 1px solid;
`;

const Styledtd = styled.td`
  border: 1px solid;
`;

const fetcher = (url) => fetch(url).then((response) => response.json());
export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/random-character", fetcher);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>Unable to Load the data</h1>;
  }
  if (!data) {
    return;
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <Styledth>Firstname</Styledth>
          <Styledth>Lastname</Styledth>
          <Styledth>Age</Styledth>
          <Styledth>Profession</Styledth>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Styledtd>{data.firstName}</Styledtd>
          <Styledtd>{data.lastName}</Styledtd>
          <Styledtd>{data.age}</Styledtd>
          <Styledtd>{data.profession}</Styledtd>
        </tr>
      </tbody>
    </StyledTable>
  );
}
