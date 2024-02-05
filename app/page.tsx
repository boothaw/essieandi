"use client";

import Image from "next/image";
import Reveal from "./components/reveal";
import NavCounter from "./components/nav";
import HeartIcon from "./components/heart";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center section-ctn'>
      <div className='flex-col flex justify-center items-center'>
        <section className=' w-11/12 section max-w-lg w-11/12 flex flex-col justify-start first-section'>
          <NavCounter></NavCounter>
          <div className='h-full flex justify-center items-center'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring" }}
            >
              <p className='mb-1 font-bold text-3xl'>
                <span>to: </span>essie
              </p>
              <p className='font-bold text-3xl mb-6'>
                <span>from:</span> wilkes
              </p>
              <p className='font-xs font-bold'>
                (scroll down, but not too hard)
              </p>
            </motion.div>
          </div>
        </section>
        <section className=' w-11/12 section max-w-lg w-11/12 flex flex-col justify-start first-section'>
          <div className='h-full flex justify-center items-center'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring" }}
            >
              <p className='font-bold text-xl mb-6'>
                Physical items are annoying when you have to carry them around.
                Here's a collection for us that weighs nothing and will be
                around for as long as we are.
              </p>
            </motion.div>
          </div>
        </section>
        <section className=' w-full section max-w-lg flex-col justify-start'>
          <h2 className='text-left font-bold text-3xl'>songs we've played</h2>
          <iframe
            title='Spotify Playlist'
            src='https://open.spotify.com/embed/playlist/3RNRShwfeZo5pqKgIq9iGA?utm_source=generator'
            width='90%'
            height='400px'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        </section>
        <section className=' section max-w-lg w-11/12 flex flex-col'>
          <h2 className='text-left font-bold text-3xl w-full'>
            words we've said, written and whispered
          </h2>
          {/* <p className='font-xs font-bold w-full text-left'>
            to be honest, we've already said it best
          </p> */}
        </section>
        <section className=' w-full section max-w-lg w-11/12'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring" }}
          >
            <div className='imessage'>
              <p className='from-them'>
                don't tempt me, I'll take up all your free time
              </p>
              <p className='from-me'>I double dog dare ya</p>
            </div>
          </motion.div>
        </section>
        <section className=' w-full section max-w-lg w-11/12'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring" }}
          >
            {" "}
            <p className='text-center font-bold text-xl'>
              ''You broke your fucking promise''
            </p>
          </motion.div>
        </section>
        <section className=' bg-black w-full section max-w-lg w-11/12 '>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring" }}
          >
            <p className='text-center font-bold text-xl text-white notes'>
              I feel like we were inevitable
            </p>
          </motion.div>
        </section>
        <section className=' w-full section max-w-lg w-11/12'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring" }}
            className='w-full flex justify-center'
          >
            {" "}
            <div className='flex flex-col convo w-full'>
              <p className='text-left font-bold text-xl'>
                ''essie, you're mine''
              </p>
              <p className='text-right font-bold text-xl'>''forever''</p>
            </div>
          </motion.div>
        </section>
        <section className=' w-full section max-w-lg w-11/12'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring" }}
          >
            <div className='imessage'>
              <p className='from-them'>
                you're the only person I could imagine doing this with
              </p>
            </div>
          </motion.div>
        </section>
        <Reveal>
          <section className=' section max-w-lg w-11/12'>
            <h2 className='text-left font-bold text-3xl'>
              shared moments we've had that can't be beat
            </h2>
          </section>
        </Reveal>
        <section className=' w-full section max-w-lg w-11/12'>
          <div className='py-3 flex flex-col max-w-lg w-11/12 relative items-center content-center justify-center'>
            <Image
              className='third-img rounded-lg'
              src='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto/v1/essieandi/lwriysdpis4qdb12hhvq'
              alt='Snowstorm Ocean'
              fill={true}
              placeholder='blur'
              blurDataURL='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto:low/v1/essieandi/lwriysdpis4qdb12hhvq'
            />
            <div className='absolute top-1.5 -right-0.5 rotate-12'>
              <HeartIcon></HeartIcon>
            </div>
          </div>
        </section>
        <section className=' w-full section max-w-lg w-11/12'>
          <div className='py-3 h-full justify-center flex flex-col max-w-lg w-11/12 relative'>
            <Image
              className='w-2/3 first-img rounded-lg'
              src='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto/v1/essieandi/smebzxk02xl8wz9zrxzw'
              alt='NES snow'
              fill={true}
              placeholder='blur'
              blurDataURL='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto:low/v1/essieandi/smebzxk02xl8wz9zrxzw'
            />
            <div className='absolute -right-0 top-1/4 rotate-12'>
              <HeartIcon></HeartIcon>
            </div>{" "}
            <Image
              className='w-2/3 self-end second-img rounded-lg'
              src='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto/v1/essieandi/pewrtmau8cu8ucrrna3j'
              alt='Red Essie'
              fill={true}
              placeholder='blur'
              blurDataURL='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto:low,q_auto/v1/essieandi/pewrtmau8cu8ucrrna3j'
            />
            <div className='absolute -left-0 bottom-1/4 -rotate-12'>
              <HeartIcon></HeartIcon>
            </div>
          </div>
        </section>
        <section className=' w-full section max-w-lg w-11/12'>
          <div className='py-3 flex flex-col max-w-lg w-11/12 relative items-center content-center justify-center'>
            <Image
              className='fourth-img rounded-lg'
              src='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto/v1/essieandi/cuw1bzqr8v6jz1cdyei4'
              alt='Polaroid'
              fill={true}
              placeholder='blur'
              blurDataURL='https://res.cloudinary.com/dfpiloj6e/image/upload/f_auto,q_auto:low/v1/essieandi/cuw1bzqr8v6jz1cdyei4'
            />
            <div className='absolute top-3 -right-0.5 rotate-12'>
              <HeartIcon></HeartIcon>
            </div>
          </div>
        </section>
        <section className=' w-11/12 section max-w-lg w-11/12 flex flex-col justify-start first-section'>
          <div className='h-full flex justify-center items-center flex-col w-full relative'>
            <div className='absolute -right-0 top-1/4 rotate-12'>
              <HeartIcon></HeartIcon>
            </div>
            <div className='absolute -left-0 top-1/4 -rotate-12'>
              <HeartIcon></HeartIcon>
            </div>
            <Reveal>
              <p className='mb-1 font-bold text-2xl mb-2 w-full text-center'>
                <span>Happy Valentine's Day</span>
              </p>
              <p className='text-right font-bold text-xl'>I Love You,</p>
              <p className='text-right font-bold text-xl'>Wilkes</p>
            </Reveal>
            <div className='absolute -left-0 bottom-1/4 -rotate-12'>
              <HeartIcon></HeartIcon>
            </div>
            <div className='absolute -right-0 bottom-1/4 rotate-12'>
              <HeartIcon></HeartIcon>
            </div>
          </div>
        </section>
        <section className=' w-full section max-w-lg w-11/12'>
          <div className='h-full w-full	flex justify-center items-center svg-container'>
            <svg
              className='w-full flex'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1243 201'
            >
              <path d='M914 25.6c-1.3 3.4-1.2 7.9.5 20.4 2.7 19.5 2.9 22 1.5 22-.7 0-2.7-1.6-4.4-3.6-2.3-2.7-4.1-3.7-7.2-4.1-6.5-.8-11.2 1.3-18.8 8.6-12.5 12-13.7 21.1-4.3 32.5 2.2 2.8 2.6 2.9 10.5 2.8 13.4-.2 22.1-5.4 26.8-16.1 3-6.8 4.6-5.4 11.7 10.4 2.2 5 5.7 7.3 5.7 3.9 0-.9-2-6.7-4.4-12.8-8.9-22.2-8.5-20.3-9.5-42.9-.6-13.4-1.4-21.3-2.1-22.2-1.9-2.3-4.9-1.8-6 1.1zm-8 42.9c3.5 1.8 10 10 10 12.6 0 3.4-5.7 10.4-11.2 13.6-9.3 5.5-15.4 5.5-20.7 0-3.7-3.7-4-7.9-1.2-13.5 3.6-6.9 12.8-14 18.4-14.2 1 0 3.1.7 4.7 1.5zM779.3 27.7c-1.6.6-1.7 3.7-.3 6.3.6 1.1 1.5 4.3 2 7.1 1.9 9.7 8 68 8 75.8 0 7.7.9 10.1 3.8 10.1 1.2 0 1.4-2.1.9-12.7-1.1-22.2-2.5-40.2-3.8-46.1-.6-3.1-1.2-9.3-1.4-13.7-.3-10.6-1.9-19.8-4.2-23.7-1.9-3.3-3-4-5-3.1zM511 39.5c-1 1.2-1.1 4-.4 12.3 1.8 22.6.4 40.2-3.2 40.2-.7 0-3.8-2.4-6.8-5.4-8.8-8.9-14-10.5-21.5-6.7-8 4.2-14.1 13.8-14.1 22.6 0 8.2 3.7 13.9 11.9 18 6.6 3.3 19.2.3 25.3-6.2 4-4.2 9.7-14.2 11-19 1.1-4.6 3.2-7.1 4.3-5.4.3.6 1.5 3.4 2.5 6.3 5 13.9 9.8 24.3 11.4 24.6 1.2.3 1.6-.4 1.6-2.7 0-3-4.5-16.1-7.8-22.8-3.6-7.3-5.4-17.3-6.1-34.9-.6-13.7-1-17.7-2.4-19.8-2-2.9-3.9-3.3-5.7-1.1zm-17.5 49.3c5.8 3.5 10.4 8.4 10.5 10.8 0 3.1-6.5 11.1-11 13.4-11.3 5.7-24.6-1.6-22.6-12.3.7-4 6.8-12.2 10.5-14.2 3.2-1.8 7.2-1.1 12.6 2.3zM439.3 44.6c-1.1 1.7-1.7 4.7-1.8 7.8 0 4.5.3 5.1 2.2 5.4 1.7.3 2.4-.3 2.8-2.5.4-1.5 1.1-3.8 1.6-5.1 1.4-3.6 1.1-6-1.1-7.2-1.6-.9-2.2-.6-3.7 1.6zM760.7 42.7c-1.2 1.1-.8 10.3.8 18.7 1.8 10.2 5.5 43 5.5 49.5 0 5 1.8 7.9 4.1 6.5 1.2-.7 1-9.1-1.2-37.4-1.9-24.9-2.9-33.4-4.4-35.7-1.5-2.3-3.5-2.9-4.8-1.6zM657.7 47.7c-1.2 1.2-.7 3.3 1.3 6.1 2.6 3.5 5.6 14.1 6.5 22.9.6 6.7.6 7.2-1.6 8.3-1.4.8-4.2 1-8 .6-3.8-.5-6-.3-6.4.4-1.1 1.8 2.4 3.7 9.8 5.1 5.3 1 7.1 1.7 7.8 3.3.5 1.2 1.3 8.8 1.7 17 .6 12.8 1 15 2.5 16 1.5.9 2.1.7 3.3-.9.8-1.1 1.2-2.6.8-3.5-.3-.8-1.1-7.7-1.6-15.3C672.7 92 673 91 679 91c5.3 0 26.1-3.7 27.3-4.9.5-.5.7-1.7.4-2.5-.8-2.1-7.5-2.1-18.8-.2-4.9.9-9.9 1.2-11.9.8-3.8-.9-3.3.6-6.5-18.2-1-5.8-2.7-12-3.7-13.8-2.6-4.2-6.3-6.3-8.1-4.5zM1188.6 50.1c-1.3 2-1.3 2.6.4 5.8 2.3 4.6 4.5 21.8 3.1 25.3-4 10.7-15.5 5.9-23.9-10-4.9-9.2-7.1-11.1-9.6-8.3-2.3 2.5-2.1 3.5 2.6 11.7 4.5 8 12.9 15.6 19.5 17.9 4.4 1.5 10.9.3 14-2.7 4.1-3.9 4.7-7 3.4-18.1-2.6-21-5.4-27.4-9.5-21.6zM396 55.5c-.8.9-1 2.7-.6 4.7 1.6 7.8 3.6 35.4 3.4 47.4 0 7.2.2 13.6.6 14.3 1.3 2.1 4.6 1.2 5.6-1.5 1-2.5-.5-36.7-1.6-38.5-.2-.4-.4-6-.5-12.5-.1-6.6-.6-12.7-1.1-13.7-1.1-2.1-4.1-2.2-5.8-.2zM960.4 60.8c-5 3.7-10.4 13.8-10.4 19.6 0 6.5 1.7 11 6.1 16 4.9 5.5 10.4 8.6 15.5 8.6 3 0 4.4-.8 7.9-4.3 3.7-3.6 4.4-5.1 5.4-10.8 1.4-8.5 1.4-14.2-.1-15.7-2.1-2.1-2.5-1.4-3.2 4.5-2.1 17.3-9.3 23.9-19 17.2-8.9-6-9.3-19-.8-28.2 3.6-3.8 6.2-3.5 9.2 1.3 1.4 2.2 2.8 4 3.2 4 2.6 0-1.7-10.9-5.3-13.4-3.2-2.2-4-2.1-8.5 1.2zM1120.5 63.6c-4 2.2-10.3 8.2-12.1 11.6-3.5 6.7 0 15.8 7.9 20.7 5.2 3.2 8.6 2.7 14.6-2 2.8-2.2 5.1-4.5 5.1-5s1.8-2.9 4-5.3c4-4.3 5.2-8.7 2.9-10.2-.7-.4-4.8 3.2-10.1 9-9.9 10.6-11.7 11.4-16.2 7-4.5-4.5-2.8-12.9 3.6-17.8 4.4-3.3 6.7-3.3 9.3.1 2.5 3.1 4.5 2.4 4.5-1.6 0-6.3-7.4-9.8-13.5-6.5zM1044.7 64.8c-.9 1-1.7 2.9-1.7 4.1 0 3.3 6 12.8 11.4 18 4.2 4.1 5 4.5 10.6 4.9l6.1.5-.5 12.1c-.4 6.6-.3 20.9.1 31.6l.8 19.5 2.7.3c2.2.3 2.9-.2 3.4-2.3.3-1.4.1-3.9-.6-5.6-1-2.4-1.2-9.1-.6-29.7.4-14.7 1.1-30.8 1.6-35.7 1.6-14.9 1.6-14.7-.3-15.9-1.5-.9-2.2-.7-3.8 1.3-1 1.3-2.2 3.5-2.5 5-.9 4.3-4.3 11.1-5.9 11.7-4.6 1.8-11.9-5.2-14.4-13.7-2.4-8-3.6-9.2-6.4-6.1zM216.4 74.7c-3 .6-5.6 3.7-5.6 6.8 0 4.3 2.9 7.3 13.5 13.4 14.8 8.7 18.7 11.7 18.7 14.6 0 2.3-.4 2.5-4.3 2.5-2.4 0-5.2.6-6.2 1.4-1.8 1.3-1.8 1.4.3 2.5 1.1.6 3 1.1 4.1 1.1 1.1 0 2.3.4 2.6 1 1 1.7 5.5 1.1 8.6-1.1 4.3-3.1 5.2-5.3 3.6-9.2-1.5-3.4-8.7-10.4-12.8-12.4-1.3-.6-4.9-2.3-8-3.7-6.3-2.9-11.3-7.1-10.4-8.6 1.8-2.8 9.2-.1 13.2 4.9 1.6 1.9 2.5 2.3 4.7 1.7 2.4-.6 2.7-1 2.2-3.4-.4-1.5-1.4-3.2-2.3-3.7-.9-.6-3-2.2-4.8-3.7-5.1-4.4-9.9-5.5-17.1-4.1zM608.3 82.1c-2 2-1.5 5.2 1.5 10 3.6 5.6 14.7 15.4 20.4 17.9 5.3 2.3 8.1 5.2 7.6 7.7-.7 3.8-10.6 2.2-14.9-2.3-2.8-3-5.1-3.1-4.7-.2.4 2.5 8.4 8.3 13.6 9.8 2 .5 5.6 1 7.9 1 3.4 0 4.6-.5 5.9-2.5 1.5-2.3 1.5-2.7-.5-6.7-1.2-2.5-4.2-6-7.2-8.3-12.1-9.4-12.5-10-9.2-13.7 4.1-4.5-4.4-12.8-13.9-13.6-3.5-.2-5.7.1-6.5.9zM720 83.5c-1.6 1.9-.7 14.5 1.4 20.2.8 2.1 1.8 6.5 2.2 9.7 1 6.4 3.2 9.2 5.6 6.8 1.3-1.3 1-3.5-3.6-27.2-2.2-11.3-3-12.7-5.6-9.5zM124.4 86.3c-1.1 1.4-4.5 3.2-7.6 4.1-6.6 1.9-8.4 3.6-6.9 6.5.6 1.1 2 2.3 3.2 2.6 2.2.7 7.9-1.2 7.9-2.6 0-.5 1.1-.9 2.4-.9 2.6 0 2.9 1.4 4.1 20.5.3 3.8.7 8.8 1 11 2.8 23 3.5 30.3 3.4 37.8-.1 7 .2 9.2 1.5 10.5 1.3 1.3 1.8 1.4 2.8.4 1.5-1.5 1.4-22.7-.2-32.7-.5-3.3-1.2-9.9-1.6-14.8l-.7-8.7h5.9c14.3-.1 34.4-13.6 34.4-23.1 0-1.3-.9-3.8-1.9-5.5-3-5-10.2-6.7-26.9-6.3-7.5.1-14.8-.1-16.2-.5-1.9-.5-3-.1-4.6 1.7zm38.6 6c11.7 4-6.9 19.6-23.5 19.7-2.8 0-5.6-.5-6.3-1.2-1.8-1.8-1.6-15.2.2-16.8 3.3-2.7 23.2-3.9 29.6-1.7zM280 111.4c-.6.8-1 2.5-.8 3.8.2 1.9.9 2.3 3.8 2.3 2.8 0 3.6-.4 3.8-2.2.2-1.3-.5-2.7-2-3.7-2.8-2-3.2-2-4.8-.2zM172.4 116.4c-.9 2.4 0 5.8 1.8 7 1.3.8 2.3.5 4.3-1.4 2.8-2.7 3.3-5.5.9-6.4-2.8-1.1-6.4-.6-7 .8z' />
            </svg>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
