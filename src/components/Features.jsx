import React from 'react'
import BentoCard from './BentoCard'
import { TiLocationArrow } from 'react-icons/ti'
import BentoTilt from './BentoTilt'

const Features = () => {
    return (
        <section className='bg-black pb-52'>
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className='font-circular-web text-lg text-blue-50'>Into the Metagame</p>
                    <p className='max-w-md font-circular-web text-lg text-blue-50/50'>
                        Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.
                    </p>
                </div>

                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard src="/videos/feature-1.mp4" title={<>radi<b>a</b>nt</>} description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure" />
                </BentoTilt>

                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt-1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard src="/videos/feature-2.mp4" title={<>zig<b>m</b>a</>} description="An anime and gaming-inspired NFT collection - the IP primed for expansion." />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt-1 row-span-1 md:col-span-1 ms-32 md:ms-0 md:me-0">
                        <BentoCard src="/videos/feature-3.mp4" title={<>n<b>e</b>xus</>} description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities." />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt-1 md:col-span-1 me-14 md:me-0">
                        <BentoCard src="/videos/feature-4.mp4" title={<>az<b>u</b>l</>} description="A cross-world AI Agent - elevating your gameplay to be more fun and productive." />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt-2">
                        <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                            <h1 className='bento-title special-font'>M<b>o</b>re <br />co<b>m</b>ing <br /> s<b>o</b>on!</h1>
                            <TiLocationArrow className='self-end m-5 scale-[5]' />
                        </div>
                    </BentoTilt>
                    <BentoTilt className="bento-tilt-2">
                        <video src="/videos/feature-5.mp4" className='size-full object-cover object-center' muted loop autoPlay />
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
}

export default Features