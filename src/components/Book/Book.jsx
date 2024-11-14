import { useState } from 'react';
import './book.css'
import { FaSquareFull } from "react-icons/fa6";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Book = () => {

    const [inputType, setInputType] = useState('text');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        people: '',
        message: ''
    });

    const handleForm = (e) => {
        e.preventDefault();

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Prepare the form data to be sent
        const { name, email, date, people, message } = formData;

        // Send email via EmailJS
        if(name.length==0){
            toast('Write your Name.');
        }
        else if(!emailRegex.test(email)){
            toast('Re-Check your email');
        }
        else if(people<1){
            toast('Re-Check total people');
        }
        else{
            emailjs
            .send(
                'service_1e0mvdh', // Replace with your service ID from EmailJS
                'template_d4bm75b', // Replace with your template ID from EmailJS
                {
                    name,
                    email,
                    date,
                    people,
                    message
                },
                'xu5SG_f2ynxQWcBR6' // Replace with your user ID from EmailJS
            )
            .then(
                (response) => {
                    console.log('Success:', response);
                    toast('Your message has been sent successfully!');
                },
                (error) => {
                    console.error('Error:', error);
                    toast('There was an error sending the message.');
                }
            );
        }

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='bg-book text-white'>
            <div className="w-11/12 mx-auto py-8 md:py-28">
                <div className="md:w-1/2">
                    <p className="flex items-center gap-2 md:text-xl roboto font-bold text-reed"><FaSquareFull className="text-xs" /> Book Now</p>

                    <h3 className="bebas font-bold text-[40px] md:text-6xl my-4">Book Your Table</h3>

                    <p className='roboto mb-10'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo <br className='hidden md:block' /> molestie vel, ornare non id blandit netus.</p>

                    <form className="roboto" onSubmit={handleForm}>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name *"
                                className="bg-transparent border focus:outline-none placeholder-white px-4 py-3"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="bg-transparent border focus:outline-none placeholder-white px-4 py-3"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <input
                                type={inputType}
                                name="date"
                                placeholder="Reservation Date"
                                className="bg-transparent border focus:outline-none placeholder-white px-4 py-3"
                                onFocus={() => setInputType('date')}
                                onBlur={() => setInputType('text')}
                                value={formData.date}
                                onChange={handleChange}
                            />

                            <input
                                type="number"
                                name="people"
                                placeholder="Total people"
                                className="bg-transparent border focus:outline-none placeholder-white px-4 py-3"
                                value={formData.people}
                                onChange={handleChange}
                            />

                            <textarea
                                name="message"
                                placeholder="Message"
                                className="bg-transparent border focus:outline-none placeholder-white px-4 py-3 md:col-span-2 h-32 resize-none"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <input
                            type="submit"
                            name="submit"
                            className="cursor-pointer font-bold px-6 py-3 transition duration-500 ease-in-out bg-ylw text-black hover:text-ylw hover:bg-transparent hover:outline hover:outline-4 hover:outline-ylw hover:outline-offset-[-4px] roboto uppercase mt-6 md:mt-8"
                        />
                    </form>


                </div>
            </div>
            
            <ToastContainer />
        </div>
    );
};

export default Book;