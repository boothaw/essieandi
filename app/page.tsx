import Image from "next/image";
import Reveal from "./components/reveal";
import NavCounter from "./components/nav";
import HeartIcon from "./assets/heart.svg";

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center section-ctn font-sans'>
      <div className='flex-col flex justify-center items-center'>
        <NavCounter></NavCounter>
        <section className='py-3 w-11/12 section max-w-lg w-11/12'>
          <p className='text-xl'>
            In keeping with theme of packing light, here's your valentiens card
            - OR - a collection of love made by us.
          </p>
        </section>
        <Reveal>
          <section className='py-3 w-full section max-w-lg w-11/12'>
            <div className='py-3 flex flex-col max-w-lg w-11/12'>
              <img
                className='w-2/3 first-img'
                src='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto/v1/essieandi/smebzxk02xl8wz9zrxzw'
                alt='NES snow'
              />
              <img
                className='w-2/3 self-end second-img'
                src='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto/v1/essieandi/pewrtmau8cu8ucrrna3j'
                alt='Essie in Red'
              />
            </div>
          </section>
        </Reveal>
        <section className='py-3 w-full section max-w-lg w-11/12 flex-col justify-start'>
          <h2 className='text-left'>our tunes</h2>
          <iframe
            src='https://open.spotify.com/embed/playlist/3RNRShwfeZo5pqKgIq9iGA?utm_source=generator'
            width='90%'
            height='400'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        </section>
        <Reveal>
          <section className='py-3 section max-w-lg w-11/12'>
            <h2 className='text-xls'>
              to be honest, we've already said it best
            </h2>
          </section>
        </Reveal>
        <Reveal>
          <section className='py-3 w-full section max-w-lg w-11/12'>
            <div className='imessage'>
              <p className='from-them'>
                don't tempt me, I'll take up all your free time
              </p>
              <p className='from-me'>I double dog dare ya</p>
            </div>
          </section>
        </Reveal>
        <Reveal>
          <section className='py-3 w-full section max-w-lg w-11/12'>
            <p className='text-center'>''You broke your fucking promise''</p>
          </section>
        </Reveal>
        <Reveal>
          <section className='py-3 w-full section max-w-lg w-11/12'>
            <p className='text-center'>I feel like we were inevitable</p>
          </section>
        </Reveal>
        <Reveal>
          <section className='py-3 w-full section max-w-lg w-11/12'>
            <div className='imessage'>
              <p className='from-them'>
                you're the only person I could imagine doing this with
              </p>
            </div>
          </section>
        </Reveal>
        <Reveal>
          <section className='py-3 w-full section max-w-lg w-11/12'></section>
        </Reveal>
        <Reveal>
          <section className='py-3 w-full section max-w-lg w-11/12'>
            {/* <img
              src='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto/v1/essieandi/smebzxk02xl8wz9zrxzw'
              alt='NES snow'
            />
            <img
              src='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto/v1/essieandi/pewrtmau8cu8ucrrna3j'
              alt='Essie in Red'
            /> */}
          </section>
        </Reveal>
        <Reveal>
          <section className='py-3 w-full section max-w-lg w-11/12'>
            <div className='w-28 h-64 bg-red-600'></div>
          </section>
        </Reveal>
        <section className='py-3 w-full section max-w-lg w-11/12'>
          <div className='w-28 h-64 bg-red-600'></div>
        </section>
        <section className='py-3 w-full section max-w-lg w-11/12'>
          <div className='w-28 h-64 bg-red-600'></div>
        </section>
        {/* <a
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
        </a> */}
      </div>
    </main>
  );
};

export default Home;
