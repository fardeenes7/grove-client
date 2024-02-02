import React from 'react'
import Image from 'next/image'
import GroveImg from "../../../public/assets/GroveHeader.png"
import WelcomeImg from "../../../public/assets/welcome_img.svg"
import Subscribe from './Subscribe'
import SubscribeCTA from "./SubscribeCTA"

const styles = {
    whiteSection: {
        backgroundImage: 'url(/assets/Vector.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
}


const Front = () => {
  return (
    <div>
        <Image alt="hero-image" src={GroveImg} />
        <div className="bg-primary">
            <SubscribeCTA/>

            <div className="bg-white">

            <div className='container mx-auto'>
            <div 
                className="px-6 py-4 flex justify-between items-center min-h-[80vh]"
                style={styles.whiteSection}
                >
                {/* SVG Shape and Logo */}
                <div className='flex-1'>
                    <Image src={WelcomeImg} alt="welcome-grove" objectFit='contain'/>
                </div>

                {/* Text */}
                <div className='flex-1 white-space-pre-line'>
                    <div className='flex flex-col'>
                        <span className='uppercase font-extrabold text-2xl'>WELCOME TO</span>
                        <h2 className="font-black text-6xl text-secondary">
                        THE GROVE</h2>
                    </div>
                    <p className="mt-2 text-xl font-semibold">The first indoor pickleball venue in Dallas, TX opening in February of 2024, boasting two premier courts for players to enjoy. Upon opening, players in the Dallas area can now play the sport year-round regardless of weather conditions. 
                    </p>
                    <p className="mt-2 text-xl font-semibold">We have everything you need for a great time; like court reservations, tournaments, leagues, daily drop-in play lessons from our in-house pros, and even a snack bar and pro shop. </p>
                    <p className='mt-2 text-xl font-semibold'>Trust us; you won&apos;t find better spot to play pickleball!</p>
                </div>
            </div>
            </div>
            </div>
            <Subscribe/>
        </div>
    </div> 
  )
}

export default Front