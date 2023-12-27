"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isUp, setIsUp] = useState(false);

  return (
    <>
      <main className="relative pt-16">
        <header className="w-full h-8 flex align-center justify-between absolute left-0 right-0 mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 z-20 mix-blend-difference"
            href="/"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
          <button
            className="top-10 right-10 z-20 mix-blend-difference rounded-all"
            onClick={() => {
              setIsUp((prevIsUp) => !prevIsUp);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                className={clsx(
                  "origin-center transition-transform duration-400",
                  isUp &&
                    "scale-x-110 translate-y-[3.75px] translate-x-[-3.75px] rotate-45"
                )}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5"
              />
              <path
                className={clsx(
                  "origin-center transition-transform duration-400",
                  isUp &&
                    "scale-x-110 -translate-y-[3.75px] -translate-x-[3.75px] -rotate-45"
                )}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 17.25h16.5"
              />
            </svg>
          </button>
        </header>
        <div
          className={clsx(
            "flex flex-col mix-blend-difference absolute top-0 left-0 mt-2 h-screen w-full items-start justify-center rounded-t-4xl bg-white p-4 text-black transition-all duration-500 translate-y-0",
            isUp && "translate-y-full"
          )}
        >
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 mix-blend-difference">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Docs{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Find in-depth information about Next.js features and API.
                </p>
              </a>

              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Learn{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Learn about Next.js in an interactive course
                  with&nbsp;quizzes!
                </p>
              </a>

              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Templates{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Explore starter templates for Next.js.
                </p>
              </a>

              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Deploy{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Instantly deploy your Next.js site to a shareable URL with
                  Vercel.
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
