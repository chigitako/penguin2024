'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ChangefaceProps {
  restDays: number;
}

const Changeface = ({ restDays }: ChangefaceProps) => {
  if (restDays < 1)
    return (
      <Image
        src="/last.svg"
        width={80}
        height={500}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    );
  else if (restDays < 3)
    return (
      <Image
        src="/mid.svg"
        width={80}
        height={500}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    );
  else
    return (
      <Image
        src="/first.svg"
        width={80}
        height={500}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    );
  <></>;
};

export default Changeface;
