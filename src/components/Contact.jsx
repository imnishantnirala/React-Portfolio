import React from 'react';

function Contact() {
  return (
    <>
      <div className='container mx-auto pt-11 pb-11 text-white' id='Contact'>
        <h1 className='text-center text-[35px] font-bold'>Contact</h1>
        <p className='text-center text-[20px]'>Feel free to reach out to me for any questions or opportunities!</p>

        <div className='flex justify-center mt-9'>
          <div className='w-[600px] border-2 border-blue-950 rounded-xl shadow-xl shadow-slate-900 p-5'>
            <form className="">
              <div className="text-[30px] font-bold text-center p-2 mb-2">Email Me 🚀</div>
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input type="text" id="name" className="border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-700 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white" required />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <input type="email" id="email" className="border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-700 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white" placeholder="name@example.com" required />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white" placeholder="Write your thoughts here..." required></textarea>
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded dark:border-gray-600 focus:ring-3 dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
