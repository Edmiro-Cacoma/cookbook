

import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


const about = () => {
  return (
    <>
      <Head>
        <title> About this website </title>
      </Head>

      <div>
        <Link href='/' passHref>
          Back to home
        </Link>
      </div>
      
      
    </>)
}

export default about