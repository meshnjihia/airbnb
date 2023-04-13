"use client";
import React from 'react'
import Image from 'next/image';

interface AvatarProps{
  src: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({src}) => {
  return (
    <Image
      src={src || '/images/placeholder.jpg'}
      width={'30'}
      height={'30'}
      alt='avatar'
      className='rounded-full'
    />
  )
}

export default Avatar