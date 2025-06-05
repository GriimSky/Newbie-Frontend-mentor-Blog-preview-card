import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-red-900">
      <div className="bg-red-400 w-[70%] h-auto m-30 p-5 flex flex-col items-center justify-center rounded-lg drop-shadow-sm">
        <div className="w-auto h-auto">
          <Image
            src="/ninja.jpeg"
            alt="logo"
            width={500}
            height={500}
            className="rounded-lg mb-10 md:w-[700px] md:h-auto lg:h-auto"
          />
        </div>

        <div className="w-auto h-auto">
          <div className="bg-red-200 rounded-lg mr-20 p-3 text-center mb-5 w-[30%]">
            <p className="font-bold text-red-950 text-[3vw]">Learning</p>
          </div>
          <p className="mb-5 text-[3.5vw]">Published 21 Dec 2023</p>

          <div className="mr-0 pr-[-50px] mb-10 w-auto h-auto">
            <h1 className="font-bold text-[5vw] mb-5 text-red-950">
              HTML & CSS foundations
            </h1>

            <p className="text-red-100 text-[3.5vw] lg:text-[2rem]">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>

          <div className="flex items-center gap-5 w-auto h-auto">
            <Image
              src="/profile picture.jpg"
              alt="html"
              width={50}
              height={50}
              className="rounded-full md:w-[100px] md:h-auto"
            />
            <h1 className="font-bold text-[4vw] text-red-950">Raphael DEV</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
