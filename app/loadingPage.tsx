import React from 'react'
import loader from "@assets/loader.gif";
import Image from 'next/image';

const LoadingPage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#f0f0f0'
    }}>
      <Image width={150} height={150} src={loader} alt="Loading..."  />
    </div>
  )
}

export default LoadingPage
