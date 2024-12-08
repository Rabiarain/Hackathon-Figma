import React from 'react'
import Image from 'next/image';
import hero from '../Images/Hero Blocks.png'
import Features from '../components/Features';
import Images from '../components/images';
import yellow from '../Images/yellow.png';
export default function About() {
  return (
<>
<Image 
        src={hero} 
        alt="Right Image" 
        style={{ width: '100%', height: 'auto' }} 
      />

      <Features/>
      
      <Images/>

      <section className="banner1">
  <div className="text-section">
    <h1 className="title">
      The Furniture Brand for the <br /> Future, with Timeless Designs
    </h1>
    <button className="view-collection-button">View Collection</button>
  </div>
  <div className="image-section">
    <Image 
      src={yellow} 
      alt="Right Image" 
      style={{ width: '100%', height: '100%' }} 
    />
  </div>
</section>


<section className="bg-gradient-to-r from-[rgb(145,86,17)] to-[rgb(223,186,113)] min-h-[40vh]">
  <div className="container flex justify-center items-center flex-col text-center"> {/* Flexbox applied here */}
    {/* "Join the club" Text */}
    <h2 className="text-xl font-bold text-gray-800 mt-10">
      Join the club and get the benefits
    </h2>

    {/* Description Text */}
    <p className="mt-4 text-sm text-gray-500">
      Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
    </p>

    {/* Sign Up Button */}
    <div className="signup-container flex items-center mt-4">
      <input 
        type="email" 
        className="signup-input py-2 px-4 border rounded-lg w-full sm:w-auto" 
        placeholder="Enter your email" 
      />
      <button 
        type="submit" 
        className="signup-button bg-blue-600 text-white py-2 px-6 rounded-lg ml-4"
      >
        Sign Up
      </button>
    </div>
  </div>
</section>



</>
  )
}
