import React from 'react'
const menuList = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];
function Footer() {
  return (
    <>
        <div className='container mx-auto pt-11'>

            <footer class="rounded-lg shadow">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <h2 className='font-bold'> <span className='font-extrabold'>&lt;</span> Nishant <span> / </span> Nirala <span className='font-extrabold'>&gt;</span> </h2>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {menuList.map((item)=>(
                            <li>
                                <a href={'#'+item} class="hover:underline me-4 md:me-6">{item}</a>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-blue-950 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a class="hover:underline">Nishant™</a>. All Rights Reserved.</span>
                </div>
            </footer>

        </div>
    </>
  )
}

export default Footer