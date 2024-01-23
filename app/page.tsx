"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// import HeartIcon from "./assets/heart.svg";

const Home = () => {
  const HeartIcon = () => (
    <svg
      className='heart-svg'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 529 470'
    >
      <g fillRule='evenodd'>
        <path
          fill='#cc242c'
          d='M271.25 79.843c-19.476 2.007-38.123 15.39-49.913 35.824-6.688 11.591-13.151 29.996-18.889 53.791-.25 1.037-.374.886-.683-.833-5.348-29.716-28.848-55.95-56.342-62.893-38.463-9.713-79.063 22.67-74.621 59.518 1.854 15.377 8.662 29.523 24.263 50.417 30.605 40.987 66.434 78.299 106.018 110.408 4.999 4.055 5.018 4.07 5.189 4.126.083.027 1.083-1.001 2.222-2.284 7.276-8.199 11.922-13.026 28.238-29.334 43.584-43.563 52.118-53.798 68.718-82.416 14.587-25.15 21.829-44.683 23.635-63.75 3.836-40.493-24.469-76.012-57.835-72.574'
        />
      </g>
    </svg>
  );

  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("04/28/2024 12:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className='z-10 flex w-full items-center justify-between font-mono text-sm lg:flex overflow-hidden'>
        <div className='-rotate-12 w-fit'>
          <HeartIcon />
        </div>
        <div>
          {partyTime ? (
            <>
              <h1>Happy new year!</h1>
            </>
          ) : (
            <>
              <div className='timer-wrapper py-3'>
                <div className='timer-inner flex'>
                  <div className='timer-segment font-bold flex flex-col items-center px-1'>
                    <span className='time  lg:text-xl text-sm flex lg:flex-col lg:items-center'>
                      {days}
                    </span>
                    <span className='label text-sm flex lg:flex-col lg:items-center'>
                      {" "}
                      days
                    </span>
                  </div>
                  <span className='divider lg:text-xl text-sm'>|</span>
                  <div className='timer-segment font-bold flex flex-col items-center px-1'>
                    <span className='time  lg:text-xl text-sm flex lg:flex-col lg:items-center'>
                      {hours}
                    </span>
                    <span className='label  text-sm flex lg:flex-col lg:items-center'>
                      {" "}
                      hours
                    </span>
                  </div>
                  <span className='divider lg:text-xl text-sm'>|</span>
                  <div className='timer-segment font-bold flex flex-col items-center px-1'>
                    <span className='time  lg:text-xl text-sm flex lg:flex-col lg:items-center'>
                      {minutes}
                    </span>
                    <span className='label text-sm flex lg:flex-col lg:items-center'>
                      {" "}
                      mins
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className='rotate-12 w-fit'>
          <HeartIcon />
        </div>
        {/* <Image
          src='/heart.svg'
          alt='heart'
          className='rotate-12'
          width={100}
          height={24}
          priority
        /> */}
        {/* <div>
          {" "}
          <svg
            className='heart-svg'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 529 470'
          >
            <g fillRule='evenodd'>
              <path
                fill='#cc242c'
                d='M271.25 79.843c-19.476 2.007-38.123 15.39-49.913 35.824-6.688 11.591-13.151 29.996-18.889 53.791-.25 1.037-.374.886-.683-.833-5.348-29.716-28.848-55.95-56.342-62.893-38.463-9.713-79.063 22.67-74.621 59.518 1.854 15.377 8.662 29.523 24.263 50.417 30.605 40.987 66.434 78.299 106.018 110.408 4.999 4.055 5.018 4.07 5.189 4.126.083.027 1.083-1.001 2.222-2.284 7.276-8.199 11.922-13.026 28.238-29.334 43.584-43.563 52.118-53.798 68.718-82.416 14.587-25.15 21.829-44.683 23.635-63.75 3.836-40.493-24.469-76.012-57.835-72.574'
              />
            </g>
          </svg> */}
        {/* </div> */}
      </div>

      <div className='columns mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left flex-col flex justify-center'>
        <a
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>
        <a
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>
        <a
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
};

export default Home;
