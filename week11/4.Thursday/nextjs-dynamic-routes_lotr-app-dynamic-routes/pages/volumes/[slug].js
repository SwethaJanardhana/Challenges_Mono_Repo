import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";

export default function VolumeDetails() {
  const router = useRouter();
  const { slug: routerSlug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === routerSlug);

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
