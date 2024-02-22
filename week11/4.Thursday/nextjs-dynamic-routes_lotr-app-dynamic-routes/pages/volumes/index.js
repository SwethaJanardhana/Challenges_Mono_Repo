import Link from "next/link";
import Head from "next/head";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleRandomVolumePage() {
    const randomVolume = getRandomElement(volumes);
    const slug = randomVolume.slug;
    router.push(`volumes/${slug}`);
  }
  return (
    <>
      <Head>
        <title>The Lord of the Rings</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolumePage}>Random Volume</button>
    </>
  );
}
