import React from "react";



const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <h1 className='text-xl  blue_gradient '>Shortler AI</h1>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/ivpankaj", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='orange_gradient head_text'>
     Don't waste your time just read it short<br className='max-md:hidden' />
        <span className='blue_gradient '>Shortler AI</span>
      </h1>
       <h2 className='desc'>
     A text summarizer which knows the value of your time
      </h2>
    </header>
  );
};

export default Hero;