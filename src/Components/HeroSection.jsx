import React from 'react';
import IMG from '../Images/videoconfo1.png';
import { Link } from 'react-router-dom';
import 'animate.css';

const HeroSection = () => {
  return (
    <div>
      <section className="bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            {/* Heading with responsive margin */}
            <h1 className="max-w-2xl mb-6 md:mb-8 lg:mb-16 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Transform the Way You Communicate
            </h1>

            {/* Create Meeting button with responsive gap */}
            <div className="middd">
              <Link
                to="/create-meeting"
                className="no-underline text-current inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-slate-300 hover:text-blue-950 dark:focus:ring-primary-900"
                style={{
                  boxShadow:
                    'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
                }}
              >
                Create Meeting
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src={IMG} alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
