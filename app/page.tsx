import Image from "next/image";
import Reveal from "./components/reveal";
import NavCounter from "./components/nav";
import HeartIcon from "./components/heart";

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center section-ctn font-sans'>
      <div className='flex-col flex justify-center items-center'>
        <section className='py-3 w-11/12 section max-w-lg w-11/12 flex flex-col justify-start first-section'>
          <NavCounter></NavCounter>
          <div className='h-full flex justify-center items-center'>
            <p className='text-xl'>
              In keeping with theme of packing light, here's your valentiens
              card - OR - a collection of love made by us.
            </p>
          </div>
        </section>
        <Reveal>
          <section className='py-3 w-full section max-w-lg w-11/12 flex-col justify-start'>
            <h2 className='text-left'>our tunes</h2>
            <iframe
              title='Spotify Playlist'
              src='https://open.spotify.com/embed/playlist/3RNRShwfeZo5pqKgIq9iGA?utm_source=generator'
              width='90%'
              height='400px'
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
              loading='lazy'
            ></iframe>
          </section>
        </Reveal>
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
        <section className='py-3 w-full section max-w-lg w-11/12'>
          <div className='py-3 flex flex-col max-w-lg w-11/12 relative items-center content-center justify-center'>
            <Image
              className='third-img rounded-lg'
              src='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto/v1/essieandi/lwriysdpis4qdb12hhvq'
              alt='Snowstorm Ocean'
              fill={true}
            />
            <div className='absolute top-1.5 -right-0.5 rotate-12'>
              <HeartIcon></HeartIcon>
            </div>
          </div>
        </section>
        <section className='py-3 w-full section max-w-lg w-11/12'>
          <div className='py-3 flex flex-col max-w-lg w-11/12 relative'>
            <Image
              className='w-2/3 first-img rounded-lg'
              src='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto/v1/essieandi/smebzxk02xl8wz9zrxzw'
              alt='NES snow'
              fill={true}
            />
            <div className='absolute -right-0 top-1/4 rotate-12'>
              <HeartIcon></HeartIcon>
            </div>{" "}
            <Image
              className='w-2/3 self-end second-img rounded-lg'
              src='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto/v1/essieandi/pewrtmau8cu8ucrrna3j'
              alt='Red Essie'
              fill={true}
            />
            <div className='absolute -left-0 bottom-1/4 -rotate-12'>
              <HeartIcon></HeartIcon>
            </div>
          </div>
        </section>
        <section className='py-3 w-full section max-w-lg w-11/12'>
          <div className='py-3 flex flex-col max-w-lg w-11/12 relative items-center content-center justify-center'>
            <Image
              className='fourth-img rounded-lg'
              src='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto/v1/essieandi/cuw1bzqr8v6jz1cdyei4'
              alt='Polaroid'
              fill={true}
            />
            <div className='absolute top-3 -right-0.5 rotate-12'>
              <HeartIcon></HeartIcon>
            </div>
          </div>
        </section>
        <Reveal>
          <section className='py-3 w-full section max-w-lg w-11/12'>
            <div className='w-28 h-64 bg-red-600'></div>
          </section>
        </Reveal>
      </div>
    </main>
  );
};

export default Home;
