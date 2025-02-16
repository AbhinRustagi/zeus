import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen relative">
      <video
        src="/thunder.mp4"
        className="z-10 min-h-screen min-w-screen relative object-cover"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col z-50">
        <h1 className="text-2xl font-semibold mb-2">Zeus</h1>
        <p>
          Coming Soon! Project by{" "}
          <Link className="underline" href="https://www.abhin.dev/">
            Abhin Rustagi
          </Link>
        </p>
      </div>
    </div>
  );
}
