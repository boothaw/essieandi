"use client";
import { useEffect, useState } from "react";
import HeartIcon from "./heart";

const NavCounter = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const target = new Date("05/2/2024 21:17:00");

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

      if (d <= 0 && h <= 0 && m <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-screen section nav z-10 flex w-full items-center text-sm lg:flex overflow-hidden justify-between justify-self-start'>
      <div className='-rotate-12 w-fit'>
        <HeartIcon />
      </div>
      <div>
        {partyTime ? (
          <>
            <h1 className='lg:text-2xl'>We did it. I love you.</h1>
          </>
        ) : (
          <>
            <div className='timer-wrapper py-2 pt-1'>
              <div className='timer-inner flex'>
                <div className='timer-segment font-bold flex flex-col items-center px-1'>
                  <span className='time text-2xl flex lg:flex-col lg:items-center'>
                    {days}
                  </span>
                  <span className='label text-sm flex lg:flex-col lg:items-center'>
                    {" "}
                    days
                  </span>
                </div>
                <span className='divider text-2xl'>|</span>
                <div className='timer-segment font-bold flex flex-col items-center px-1'>
                  <span className='time  text-2xl flex lg:flex-col lg:items-center'>
                    {hours}
                  </span>
                  <span className='label  text-sm flex lg:flex-col lg:items-center'>
                    {" "}
                    hours
                  </span>
                </div>
                <span className='divider text-2xl'>|</span>
                <div className='timer-segment font-bold flex flex-col items-center px-1'>
                  <span className='time text-2xl flex lg:flex-col lg:items-center'>
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
    </div>
  );
};

export default NavCounter;
