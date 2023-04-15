'use client'
import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  return (
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer w-auto h-auto"
      src="/images/logo.png"
      alt="logo"
      width='100'
      height='100'
    />
  )
}

export default Logo
