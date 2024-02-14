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
            <Image
              className='fourth-img rounded-lg'
              src='/heart.png'
              alt='Heart'
              fill={true}
            />
        </section>
      </div>
    </main>
  );
};

export default Home;
