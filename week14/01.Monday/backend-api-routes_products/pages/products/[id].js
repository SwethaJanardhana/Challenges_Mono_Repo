import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ProductServices() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }
  if (!data) {
    return;
  }
  return (
    <>
      <h2>Name : {data.name}</h2>
      <p>Description : {data.description}</p>
      <Link href="/products">Back</Link>
    </>
  );
}
