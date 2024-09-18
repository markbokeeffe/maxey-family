import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:justify-between p-0">
      <Navigation isHome={true} />
      <div className="home-container w-full max-w-4xl flex justify-evenly relative z-[-1] flex place-items-center flex-col sm:flex-row pb-24" >
            <Image
              src="/joseph_maxey.jpg"
              alt="Joseph Maxey"
              className="dark:invert border-4 border-black opacity-100 z-10 mt-10 mb-6 lg:mb-0"
              width={300}
              height={24}
              priority
            />
            <div className="flex-col text-center">
              <h2 className="text-3xl font-extrabold">The Maxey Family</h2>
              <h2 className="text-2xl font-bold">of Clonmel</h2>
              <p className="italic mt-4">~ 19th Century Fenians ~</p>
            </div>
      </div>

      <div className="mb-32 mt-14 hidden lg:grid text-center lg:mb-0 lg:w-full lg:max-w-7xl lg:grid-cols-4 lg:text-left  border-t-2 border-black">
        <a
          href="maxey-family"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Maxey Family{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="joseph-maxey"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Joseph Maxey{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="timothy-maxey"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Timothy Maxey{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="robert-mapplethorpe"
          className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Robert Mapplethorpe{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </main>
  );
}
