"use client";

import Image from "next/image";

export default function Avatar({src}: {src?:string|null}) {
  return (
    <Image
        className="rounded-full"
        alt="Avatar"
        height='30'
        width='30'
        src={src || '/images/placeholder.jpg'}
    />
  )
}
