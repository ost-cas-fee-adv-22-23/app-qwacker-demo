import Image from "next/image";
import { Image as TheImage } from "../components/image";

export default function ImageDemo() {
  return (
    <div className="w-60 m-auto mt-10">
      <h2>Image with img</h2>
      <TheImage src="/vercel.svg" alt="Next.js logo" width={200} height={200} />

      <h2 className="mt-20">Image with next/image</h2>
      <TheImage
        src="/vercel.svg"
        alt="Next.js logo"
        width={200}
        height={200}
        priority
        imageComponent={Image}
      />

      {/* <TheImage
        src="/vercel.svg"
        alt="Errors on standard html img 😍"
        priority // nope
      /> */}
    </div>
  );
}
