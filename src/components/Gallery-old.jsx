import { useState } from 'react'

import gallery1 from './../assets/platform-gallery/gallery1.png'
import gallery2 from './../assets/platform-gallery/gallery2.png'
import gallery3 from './../assets/platform-gallery/gallery3.png'
import gallery4 from './../assets/platform-gallery/gallery4.png'
import gallery5 from './../assets/platform-gallery/gallery5.png'
import gallery6 from './../assets/platform-gallery/gallery6.png'
import gallery7 from './../assets/platform-gallery/gallery7.png'
import gallery8 from './../assets/platform-gallery/gallery8.png'
import gallery9 from './../assets/platform-gallery/gallery9.png'
import gallery10 from './../assets/platform-gallery/gallery10.png'
import gallery11 from './../assets/platform-gallery/gallery11.png'
import gallery12 from './../assets/platform-gallery/gallery12.png'
import gallery13 from './../assets/platform-gallery/gallery13.png'
import gallery14 from './../assets/platform-gallery/gallery14.png'
import gallery15 from './../assets/platform-gallery/gallery15.png'
import gallery16 from './../assets/platform-gallery/gallery16.png'
import gallery17 from './../assets/platform-gallery/gallery17.png'
import gallery18 from './../assets/platform-gallery/gallery18.png'
import gallery19 from './../assets/platform-gallery/gallery19.png'
import gallery20 from './../assets/platform-gallery/gallery20.png'

export default function Gallery() {
    const[isOpen, setIsOpen] = useState(false)

    return(
        <section id="gallery" className="bg-black flex flex-col items-center justify-center gap-8 p-5 md:p-10">
            <h2 className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl text-center"><span className="bg-gradient-to-r from-mypink via-mypurple to-myblue text-transparent bg-clip-text">Platform</span> Gallery</h2>
            <main className="w-11/12 columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 [&>img:not(:first-child)]:mt-4 [&>img]:w-full [&>img]:rounded-lg [&>div>img]:mt-4 [&>div>img]:w-full [&>div>img]:rounded-lg">
                <img src={gallery1}/>
                <img src={gallery2}/>
                <img src={gallery3}/>
                <img src={gallery4}/>
                <img src={gallery5}/>
                <img src={gallery7}/>
                <img src={gallery6}/>
                <img src={gallery8}/>
                <img src={gallery9}/>
                <img src={gallery10}/>
                <div className={ isOpen ? 'inline' : 'hidden'}>
                    <img src={gallery11}/>
                    <img src={gallery12}/>
                    <img src={gallery13}/>
                    <img src={gallery15}/>
                    <img src={gallery14}/>
                    <img src={gallery16}/>
                    <img src={gallery17}/>
                    <img src={gallery18}/>
                    <img src={gallery19}/>
                    <img src={gallery20}/>
                </div>
            </main>
            <button onClick={() => setIsOpen(!isOpen)} className='bg-gradient-to-r from-mypink via-mypurple to-myblue hover:shadow-mypurple hover:shadow-[0_0_12px] hover:duration-150 hover:cursor-pointer text-white rounded-lg px-3.5 py-2.5 text-sm font-semibold'>
                {isOpen ? 'Show less' : 'Show more'}
            </button>
        </section>
    )
}