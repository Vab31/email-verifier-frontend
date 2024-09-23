import React from "react";
import './style.css';
import TestimonialsSection from "../Testimonial/TestimonialsSection";
import SlideObserver from "../SlideObserver";
import Header from "../Header/Header";

// importing images
import Server from './assets/server.png'
import Star from './assets/star.svg'
import HeroMail from './assets/Hero-img.webp'
import Accenture from './assets/Accenture.svg'
import JJ from './assets/Johnson and Johnson.svg'
import Hilton from './assets/Hilton.svg'
import Verizon from './assets/Verizon.svg'
import BDO from './assets/BDO.svg'
import Cognizant from './assets/Cognizant.svg'
import ComboServer from './assets/combined-server.jpg'
import Mails from './assets/Group 12014.svg'
import Wins from './assets/Frame 12011.svg'
import MailList from './assets/mail-list.png'
import ContactList from './assets/Contact list.svg'
import Integrations from './assets/Integrations (1).svg'



const App = () => {
  return (
    <div className="page-container">
        <SlideObserver/>

{/* Header */}
    <Header/>

{/* Supercharge */}
    <section className="h-full w-full flex mt-20 p-4 max-md:justify-center">
        <div className="h-9/10 flex flex-col justify-around p-10 px-20 mx-auto max-md:gap-5 gap-4 min-md:p-4">
            <p className="text-6xl tracking-tight max-md:text-4xl font-black text-wrap max-md:text-center slide-up gradient-text">
            Supercharge your Server prospecting
            </p>
            <p className="w-8/10 text-left text-wrap max-md:text-center slide-up">
            Use ServerDB to source email addresses for your server targets - even if you haven't connected with them.
            </p>
            <button className="w-64 h-10 bg-[#6a69ff] rounded-md text-white hover:bg-[#5857e0] max-md:mx-auto">
            Start Now, It's Free
            </button>
            <div className="flex inline max-md:mx-auto gap-1 slide-up">
            <img src={Star} alt="5-star" className="h-4" />
            <img src={Star} alt="5-star" className="h-4" />
            <img src={Star} alt="5-star" className="h-4" />
            <img src={Star} alt="5-star" className="h-4" />
            <img src={Star} alt="5-star" className="h-4" />
            <p className="font-thin text-xs mt-[0.5px]"><b>1,000+</b> App Reviews</p>
            </div>
        </div>
        <div className="max-md:hidden">
            <img src={HeroMail} alt="client" height="506px" width="900px" />
        </div>
    </section>

    <p className="text-gray-500 text-center p-16 max-md:p-4">
        <b>Join 200,000 companies reaching business professionals directly with ServerDB</b>
    </p>

{/* Company featured */}
    <div className="flex justify-around max-md:flex-wrap max-md:gap-10 slide-up">
        <img src={Accenture} alt="Accenture" />
        <img src={JJ} alt="Johnson and Johnson" />
        <img src={Hilton} alt="Hilton" />
        <img src={Verizon} alt="Verizon" />
        <img src={BDO} alt="BDO" />
        <img src={Cognizant} alt="Cognizant" />
    </div>

{/* Call to action */}
    <section className="p-10 w-fit mt-20 mx-auto flex justify-center items-center overflow-hidden">
        <div className="relative">
            <img src={ComboServer} alt="" height="960px" className="object-cover blur outline z-0" />
        </div>
        <a href="/" className="absolute h-20 w-80 flex justify-center items-center text-4xl bg-[#6a69ff] rounded-md text-white hover:bg-[#5857e0] max-sm:w-32 max-sm:text-xl max-sm:h-10 slide-up">
            Call to Action
        </a>
    </section>

{/* Our browser extension */}
    <section className="h-8/10 bg-slate-300 flex items-center p-16 max-sm:flex-col">
        <img src={Mails} alt="" className="md:w-[50%] sm:w-[80%] h-[300px] w-[300px] slide-left" />
        <div className="w-[50%] mx-auto my-auto gap-6 flex flex-col justify-around items-around max-md:w-fit">
            <p className="font-medium text-[#6a69ff] text-wrap max-sm:text-center slide-up"><b>OUR BROWSER EXTENSION</b></p>
            <p className="text-4xl font-bold max-sm:text-center text-wrap slide-up"><b>The email finder used by pros</b></p>
            <p className="text-wrap max-sm:text-center">
            Our proprietary engine finds emails and phone numbers from multiple sources and validates them in seconds.
            </p>
            <a href="/" className="font-medium text-[#6a69ff] max-sm:text-center">
            <b>Learn More</b>
            </a>
        </div>
    </section>

{/* Top rated */}
    <section className="h-[50vh] mt-16 my-auto flex flex-col justify-center items-center gap-8">
        <p className="font-bold text-3xl">Top Rated</p>
        <p className="font-medium text-lg p-4 text-center">
            ServerDB scores consistently top marks among quality review sites.
        </p>
        <img src={Wins} alt="frame" className="max-md:object-scale-down max-md:w-[80%] w-fit" />
    </section>

{/* Easy peasy */}
    <section className="h-8/10 w-7/10 mt-16 flex p-16 gap-6 max-sm:flex-col">
        <div className="mx-auto my-auto gap-6 flex flex-col ">
            <p className="font-medium text-[#6a69ff] text-right max-sm:text-center slide-up"> <b>EASY PEASY</b> </p>
            <p className="text-4xl font-medium text-right max-sm:text-center slide-up"><b>Build accurate <br/>lead lists</b></p>
            <p className="text-right max-sm:text-center">Save prospects and find contact information at scale. SalesQL extracts and enriches more than 40 data points per contact.</p>
            <a href="" className="font-medium text-[#6a69ff] text-right max-sm:text-center"> <b>Learn More</b> </a>
        </div>
        <img src={MailList} alt="Mail-List" height="360px" width="360px" className="w-[50%] mx-auto max-md:w-[40%] slide-right" />
    </section>

{/* Simple and fast */}
    <section className="simple lg:h-[100vh] md:h-[100vh] sm:h-[50vh] mx-auto flex flex-col lg:items-center lg:justify-around" 
        style={{backgroundImage: "linear-gradient(157deg, #6a69ff, #6193e0 70%, #5bcbcd)"}}>
        <p className="text-white text-center text-wrap lg:mt-12 max-md:mt-4 slide-up"><b>SIMPLE & FAST</b></p>
        <p className="text-white text-center text-wrap lg:mt-6 max-md:mt-4 text-3xl slide-up"><b>Manage your leads effortlessly</b></p>
        <p className="text-white text-center text-wrap font-medium">Boost your productivity by managing your leads like never before</p>
        <img src={ContactList} alt="contact-list" height="960px" width="960px" className="mt-10 max-md:object-scale-down max-md:h-[80%]" />
    </section>

{/* Integrations */}
    <section className="h-8/10 mt-20 flex lg:justify-end max-sm:flex-col max-sm:items-center ">
        <img src={Integrations} alt="" height="540px" width="540px" className="lg:object-left max-md:w-[40%] max-sm:object-scale-down" />
        <div className="mx-auto my-auto gap-6 flex flex-col justify-around items-around p-10 max-sm:w-[50%] max-md:w-fit max-md:p-0">
            <p className="font-medium text-[#6a69ff] max-md:text-center max-md:text-wrap slide-up"> <b>INTEGRATIONS</b> </p>
            <p className="text-4xl font-medium max-md:text-center max-md:text-wrap max-md:text-2xl slide-up"><b>Send high-quality<br/> leads where you<br/> need them</b></p>
            <p className="max-md:text-center max-md:text-wrap">SalesQL integrates with many apps including the most popular CRM, outreach and productivity tools.</p>

            <button className="w-fit h-fit bg-[#6a69ff] text-white rounded-md p-2 max-md:text-center max-md:text-wrap max-sm:mx-auto max-md:mx-auto hover:bg-[#5857e0]">See our integrations</button>
        </div>
    </section>

{/* Testimonials */}
    <TestimonialsSection/>
    

{/* Join today */}
    <section className="h-[50vh] flex flex-col justify-center items-center gap-3" style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(77,77,220,1) 0%, rgba(138,215,230,1) 100%)" }}>
        <h1 className="text-white text-3xl font-bold slide-up">Join Today. It’s free</h1>
        <p className="text-white text-center font-medium text-xs slide-up">Get started and find reliable contact information in<br/> LinkedIn for free, with classified and validated email<br/> addresses and phone numbers.</p>
        <button className="w-fit bg-white rounded-md h-10 p-2 mt-6 text-blue-600 text-xs font-medium hover:bg-gray-600 hover:text-white slide-up">Get started, It's Free</button>
    </section>

{/* Footer */}
    <footer className="text-gray-600">
        <div className="container px-5 py-24 mx-auto flex justify-center md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 ml-8">
                <img src={Server} alt="server-logo" className="h-5 w-5" />
                <span className="ml-1 text-xl">ServerDB</span>
            </a>
        </div>

        <div className="flex-grow mx-auto flex justify-around items-center flex-wrap lg:ml-10 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-gray-900 text-lg mb-3">Support</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-xs font-medium">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-xs font-medium">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-xs font-medium">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-xs font-medium">Fourth Link</a>
                  </li>
                </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-gray-900 text-lg mb-3">Product</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-xs font-medium">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-xs font-medium">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-xs font-medium">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-xs font-medium">Fourth Link</a>
                  </li>
                </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-gray-900 text-lg mb-3">Legal</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-xs font-medium">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-xs font-medium">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-xs font-medium">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-xs font-medium">Fourth Link</a>
                  </li>
                </nav>
            </div>
        </div>

        </div>

        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 ServerDB —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">All rights reserved</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>

    </footer>


    </div>
  );
};

export default App;
