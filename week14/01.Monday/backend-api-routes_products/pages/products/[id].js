import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductServices() {
  const router = useRouter();
  const { id } = router.query;
  //const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, isLoading, error } = useSWR(`/api/products/${id}`, fetcher);

  async function fetcher(url) {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      const error = new Error("Page not found");
      error.status = response.status;
      throw error;
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.status} Page not found</h1>;
  }
  if (!data) {
    return;
  }

  if (data.status === 404) {
    return <h1>Page not found</h1>;
  }
  console.log(data);
  return (
    <>
      <h2>Name : {data.name}</h2>
      <p>Description : {data.description}</p>
      <Link href="/products">Back</Link>
    </>
  );
}
