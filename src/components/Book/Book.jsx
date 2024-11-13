import { useState } from 'react';
import './book.css'
import { FaSquareFull } from "react-icons/fa6";

const Book = () => {

    const [inputType, setInputType] = useState('text');

    return (
        <div className='bg-book text-white'>
            <div className="w-11/12 mx-auto py-8 md:py-28">
                <div className="md:w-1/2">
                    <p className="flex items-center gap-2 text-xl roboto font-bold text-reed"><FaSquareFull className="text-xs" /> Book Now</p>

                    <h3 className="bebas font-bold text-6xl my-4">Book Your Table</h3>

                    <p className='roboto mb-10'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo <br className='hidden md:block' /> molestie vel, ornare non id blandit netus.</p>

                    <form className='roboto grid md:grid-cols-2 gap-x-8 gap-y-6'>

                        <input type="text" name="name" placeholder='Your Name *' className='bg-transparent border focus:outline-none placeholder-white px-4 py-3' id="" />

                        <input type="email" name="email" placeholder='Your Email' className='bg-transparent border focus:outline-none placeholder-white px-4 py-3' id="" />

                        <input type={inputType} name="date" placeholder='Reservation Date' className='bg-transparent border focus:outline-none placeholder-white px-4 py-3' id="date" onFocus={()=>setInputType('date')} onBlur={()=>setInputType('text')}/>

                        <input type="number" name="people" placeholder='Total people' className='bg-transparent border focus:outline-none placeholder-white px-4 py-3' id="" />

                        <textarea name="message" placeholder='Message' className='bg-transparent border focus:outline-none placeholder-white px-4 py-3 md:col-span-2 h-32 resize-none' id=""></textarea>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Book;