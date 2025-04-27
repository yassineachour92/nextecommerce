import { APP_NAME } from '@/lib/constants';
import React from 'react'

function Footer() {
    const currentYear=new Date().getFullYear();
  return (
    <footer className='border-t'>
      {currentYear} {APP_NAME}. ALL Rights Reserved
    </footer>
  )
}

export default Footer
