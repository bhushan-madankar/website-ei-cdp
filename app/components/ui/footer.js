import React from 'react'
import Link from 'next/link';

const footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white text-center py-6 ">
                <div className="container mx-auto space-y-4">
                    
                    <div className="flex justify-center space-x-6">
                        <Link href="/" className="hover:text-blue-400">Home</Link>
                        <Link href="/#apis" className="hover:text-blue-400">Features</Link>
                        <Link href="/#price" className="hover:text-blue-400">Price</Link>
                    </div>
                    <p>&copy; {new Date().getFullYear()} JSR. All Rights Reserved.</p>
                </div>
            </footer>
    </div>
  )
}

export default footer
