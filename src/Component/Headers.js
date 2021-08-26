import React from 'react';
export default function Header() {
    return (
        <div className="relative bg-white overflow-hidden h-screen w-screen">
  <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg className="hidden h-screen lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

       {/* <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 300"><path fill="#da3843" d="M176.5 49.5C121 49.5 76 94.5 76 150s45 100.5 100.5 100.5S277 205.5 277 150 232 49.5 176.5 49.5zm0 125.6c-14 0-25.1-11.1-25.1-25.1s11.1-25.1 25.1-25.1 25.1 11.1 25.1 25.1-11.7 25.1-25.1 25.1zM0 150c0-14 11.1-25.1 25.1-25.1S50.3 136 50.3 150s-11.1 25.1-25.1 25.1S0 164 0 150"/><path fill="#212120" d="M516.6 130.7c15.2 0 26.3 11.1 26.3 26.3v3.5c0 1.8-1.8 2.3-2.9 2.3h-36.8c0 7 5.8 13.4 14 13.4 5.8 0 9.9-2.3 12.3-4.1 1.2-1.2 2.9-1.2 3.5 0l4.7 6.4c1.2 1.2 1.2 2.3 0 3.5-5.3 4.1-12.3 7.6-21.6 7.6-16.9 0-29.2-13.4-29.2-29.8 1.1-15.6 12.8-29.1 29.7-29.1zm10.5 22.8c0-5.8-4.7-9.9-11.1-9.9-7 0-11.7 4.1-12.3 9.9h23.4zm139.1-45h-58.4c-1.2 0-2.3 1.2-2.3 2.3v9.9c0 1.2 1.2 2.3 2.3 2.3h21v63.7c0 1.2 1.2 2.3 2.3 2.3h11.7c1.2 0 2.3-1.2 2.3-2.3v-63.1h21c1.2 0 2.3-1.2 2.3-2.3v-9.9c.8-1.7-.4-2.9-2.2-2.9zm88.3 22.2c-5.8 0-11.7 1.2-14 2.3v-21.6c0-1.2-1.2-2.9-2.9-2.9h-9.9c-1.2 0-2.9 1.2-2.9 2.9v75.4c0 1.8 1.2 2.9 2.9 2.9h5.3c1.8 0 2.9-1.2 2.9-2.9v-4.1s6.4 8.8 19.3 8.8c15.8 0 26.9-13.4 26.9-29.8.4-18.1-10.7-31-27.6-31zm-1.2 45.6c-7.6 0-11.7-4.7-12.9-8.2v-20.5s4.7-3.5 11.7-3.5c9.4 0 14 7.6 14 15.8.7 8.8-4 16.4-12.8 16.4zm97-45.6c15.2 0 26.3 11.1 26.3 26.3v3.5c0 1.8-1.8 2.3-2.9 2.3h-36.8c0 7 5.8 13.4 14 13.4 5.8 0 9.9-2.3 12.3-4.1 1.2-1.2 2.9-1.2 3.5 0l4.7 6.4c1.2 1.2 1.2 2.3 0 3.5-5.3 4.1-12.3 7.6-21.6 7.6-16.9 0-29.2-13.4-29.2-29.8.5-15.6 12.8-29.1 29.7-29.1zm10.5 22.8c0-5.8-4.7-9.9-11.1-9.9-7 0-11.7 4.1-12.3 9.9h23.4zm-409.6-22.8c-11.7 0-18.1 8.2-18.7 8.8v-4.7c0-1.8-1.2-2.9-2.9-2.9h-5.8c-1.8 0-2.9 1.2-2.9 2.9v75.4c0 1.2 1.2 2.9 2.9 2.9h9.9c1.2 0 2.9-1.2 2.9-2.9v-21.6c2.3 1.2 8.2 2.3 14 2.3 16.9 0 28.6-13.4 28.6-29.8-.6-17.5-12.3-30.4-28-30.4zm-3 45.6c-7 0-11.7-3.5-11.7-3.5v-20.5c1.2-3.5 5.3-8.2 12.9-8.2 8.8 0 13.4 7.6 13.4 15.8.1 8.8-5.2 16.4-14.6 16.4zM585 130.7c-11.1 0-16.4 5.8-18.7 8.2v-4.1c0-1.8-1.2-2.9-2.9-2.9H557c-1.2 0-2.9 1.2-2.9 2.9v52c0 1.8 1.2 2.9 2.9 2.9h9.9c2.9 0 3.5-.6 3.5-2.9v-32.7c1.2-4.1 5.3-8.8 12.3-8.8s9.9 4.7 9.9 12.3v29.8c0 1.8 1.2 2.9 2.9 2.9h9.9c1.2 0 2.9-1.2 2.9-2.9v-29.8c.1-14.6-4.6-26.9-23.3-26.9zm104.6 0c-9.4 0-18.1 2.3-19.9 2.9-1.2.6-2.3 1.2-1.8 3.5l1.2 6.4c0 1.8 1.2 2.9 3.5 2.3 3.5-1.2 11.1-2.3 16.4-2.3 5.8 0 8.2 3.5 8.2 10.5 0 0-5.3-1.8-11.1-1.8-14.6 0-22.8 7.6-22.8 18.1 0 12.3 8.2 19.9 19.3 19.9 8.8 0 14.6-4.1 18.1-7v2.9c0 1.8 1.2 2.9 2.9 2.9h5.9c1.8 0 2.9-1.2 2.9-2.9v-31c-1.2-15-5.3-24.4-22.8-24.4zm6.4 42.1c-.6 2.3-5.3 5.8-10.5 5.8-5.3 0-8.2-3.5-8.2-8.2 0-5.3 3.5-8.2 9.9-8.2 4.7 0 8.2 1.8 8.2 1.8v8.8h.6zm-327.8-64.3c-22.8 0-40.9 18.7-40.9 41.5s18.1 40.9 40.9 40.9c23.4 0 41.5-18.1 41.5-40.9s-18.7-41.5-41.5-41.5zm0 15.8c13.4 0 25.1 11.7 25.1 25.1 0 14-11.1 25.1-25.1 25.1s-25.1-11.1-25.1-25.1c0-13.4 11.6-25.1 25.1-25.1zm443 64.9c1.8 0 2.9-1.2 2.9-2.9v-9.9c0-1.8-1.2-2.9-2.9-2.9h-.6c-1.2 0-2.3-1.2-2.3-2.3v-59.6c0-1.2-1.2-2.9-2.9-2.9h-9.9c-1.2 0-2.9 1.2-2.9 2.9V180c0 4.7 4.7 9.9 9.9 9.9l8.7-.7zm68.9-56.7h-3.5v-1.8h9.9v1.8h-4.1v9.9h-2.3v-9.9zm8.2-1.8h2.9l1.8 4.1 1.2 2.9 1.2-2.9 1.8-4.1h2.9v11.7h-2.3V133l-2.9 7.6H893l-2.9-7.6v9.4h-1.8v-11.7z"/></svg> */}

      <div>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <svg className="h-14 w-auto " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 300"><path fill="#da3843" d="M176.5 49.5C121 49.5 76 94.5 76 150s45 100.5 100.5 100.5S277 205.5 277 150 232 49.5 176.5 49.5zm0 125.6c-14 0-25.1-11.1-25.1-25.1s11.1-25.1 25.1-25.1 25.1 11.1 25.1 25.1-11.7 25.1-25.1 25.1zM0 150c0-14 11.1-25.1 25.1-25.1S50.3 136 50.3 150s-11.1 25.1-25.1 25.1S0 164 0 150"/><path fill="#212120" d="M516.6 130.7c15.2 0 26.3 11.1 26.3 26.3v3.5c0 1.8-1.8 2.3-2.9 2.3h-36.8c0 7 5.8 13.4 14 13.4 5.8 0 9.9-2.3 12.3-4.1 1.2-1.2 2.9-1.2 3.5 0l4.7 6.4c1.2 1.2 1.2 2.3 0 3.5-5.3 4.1-12.3 7.6-21.6 7.6-16.9 0-29.2-13.4-29.2-29.8 1.1-15.6 12.8-29.1 29.7-29.1zm10.5 22.8c0-5.8-4.7-9.9-11.1-9.9-7 0-11.7 4.1-12.3 9.9h23.4zm139.1-45h-58.4c-1.2 0-2.3 1.2-2.3 2.3v9.9c0 1.2 1.2 2.3 2.3 2.3h21v63.7c0 1.2 1.2 2.3 2.3 2.3h11.7c1.2 0 2.3-1.2 2.3-2.3v-63.1h21c1.2 0 2.3-1.2 2.3-2.3v-9.9c.8-1.7-.4-2.9-2.2-2.9zm88.3 22.2c-5.8 0-11.7 1.2-14 2.3v-21.6c0-1.2-1.2-2.9-2.9-2.9h-9.9c-1.2 0-2.9 1.2-2.9 2.9v75.4c0 1.8 1.2 2.9 2.9 2.9h5.3c1.8 0 2.9-1.2 2.9-2.9v-4.1s6.4 8.8 19.3 8.8c15.8 0 26.9-13.4 26.9-29.8.4-18.1-10.7-31-27.6-31zm-1.2 45.6c-7.6 0-11.7-4.7-12.9-8.2v-20.5s4.7-3.5 11.7-3.5c9.4 0 14 7.6 14 15.8.7 8.8-4 16.4-12.8 16.4zm97-45.6c15.2 0 26.3 11.1 26.3 26.3v3.5c0 1.8-1.8 2.3-2.9 2.3h-36.8c0 7 5.8 13.4 14 13.4 5.8 0 9.9-2.3 12.3-4.1 1.2-1.2 2.9-1.2 3.5 0l4.7 6.4c1.2 1.2 1.2 2.3 0 3.5-5.3 4.1-12.3 7.6-21.6 7.6-16.9 0-29.2-13.4-29.2-29.8.5-15.6 12.8-29.1 29.7-29.1zm10.5 22.8c0-5.8-4.7-9.9-11.1-9.9-7 0-11.7 4.1-12.3 9.9h23.4zm-409.6-22.8c-11.7 0-18.1 8.2-18.7 8.8v-4.7c0-1.8-1.2-2.9-2.9-2.9h-5.8c-1.8 0-2.9 1.2-2.9 2.9v75.4c0 1.2 1.2 2.9 2.9 2.9h9.9c1.2 0 2.9-1.2 2.9-2.9v-21.6c2.3 1.2 8.2 2.3 14 2.3 16.9 0 28.6-13.4 28.6-29.8-.6-17.5-12.3-30.4-28-30.4zm-3 45.6c-7 0-11.7-3.5-11.7-3.5v-20.5c1.2-3.5 5.3-8.2 12.9-8.2 8.8 0 13.4 7.6 13.4 15.8.1 8.8-5.2 16.4-14.6 16.4zM585 130.7c-11.1 0-16.4 5.8-18.7 8.2v-4.1c0-1.8-1.2-2.9-2.9-2.9H557c-1.2 0-2.9 1.2-2.9 2.9v52c0 1.8 1.2 2.9 2.9 2.9h9.9c2.9 0 3.5-.6 3.5-2.9v-32.7c1.2-4.1 5.3-8.8 12.3-8.8s9.9 4.7 9.9 12.3v29.8c0 1.8 1.2 2.9 2.9 2.9h9.9c1.2 0 2.9-1.2 2.9-2.9v-29.8c.1-14.6-4.6-26.9-23.3-26.9zm104.6 0c-9.4 0-18.1 2.3-19.9 2.9-1.2.6-2.3 1.2-1.8 3.5l1.2 6.4c0 1.8 1.2 2.9 3.5 2.3 3.5-1.2 11.1-2.3 16.4-2.3 5.8 0 8.2 3.5 8.2 10.5 0 0-5.3-1.8-11.1-1.8-14.6 0-22.8 7.6-22.8 18.1 0 12.3 8.2 19.9 19.3 19.9 8.8 0 14.6-4.1 18.1-7v2.9c0 1.8 1.2 2.9 2.9 2.9h5.9c1.8 0 2.9-1.2 2.9-2.9v-31c-1.2-15-5.3-24.4-22.8-24.4zm6.4 42.1c-.6 2.3-5.3 5.8-10.5 5.8-5.3 0-8.2-3.5-8.2-8.2 0-5.3 3.5-8.2 9.9-8.2 4.7 0 8.2 1.8 8.2 1.8v8.8h.6zm-327.8-64.3c-22.8 0-40.9 18.7-40.9 41.5s18.1 40.9 40.9 40.9c23.4 0 41.5-18.1 41.5-40.9s-18.7-41.5-41.5-41.5zm0 15.8c13.4 0 25.1 11.7 25.1 25.1 0 14-11.1 25.1-25.1 25.1s-25.1-11.1-25.1-25.1c0-13.4 11.6-25.1 25.1-25.1zm443 64.9c1.8 0 2.9-1.2 2.9-2.9v-9.9c0-1.8-1.2-2.9-2.9-2.9h-.6c-1.2 0-2.3-1.2-2.3-2.3v-59.6c0-1.2-1.2-2.9-2.9-2.9h-9.9c-1.2 0-2.9 1.2-2.9 2.9V180c0 4.7 4.7 9.9 9.9 9.9l8.7-.7zm68.9-56.7h-3.5v-1.8h9.9v1.8h-4.1v9.9h-2.3v-9.9zm8.2-1.8h2.9l1.8 4.1 1.2 2.9 1.2-2.9 1.8-4.1h2.9v11.7h-2.3V133l-2.9 7.6H893l-2.9-7.6v9.4h-1.8v-11.7z"/></svg>
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {/* <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Product</a>

              <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Res</a> */}

              {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a> */}
            </div>
          </nav>
        </div>

        
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
              </div>
              <div className="-mr-2">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Product</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Features</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Marketplace</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Company</a>
            </div>
            <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
              Log in
            </a>
          </div>
        </div>
      </div>

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Welcome to OpenTable </span>
            <span className="block text-red-600 xl:inline">Order a meal </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
           
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
  </div>
</div>
    )
}
