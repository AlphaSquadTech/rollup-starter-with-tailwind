const Header = () => {
    const template = `
    <div class="bg-gray-100 py-10">
    <header class="mx-auto container px-4 xl:px-0">
        <div class="flex items-center justify-between">
            <a>
                <svg aria-label="Home" class="w-12 h-12" id="logo" enable-background="new 0 0 300 300" height="44" viewBox="0 0 300 300" width="43" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g>
                        <path
                                fill="#4c51bf"
                                d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                        />
                    </g>
                </svg>
            </a>
            <div>
                <div class="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>
                <div id="menu" class="md:block lg:block hidden">
                    <div class="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-8">
                        <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <ul class="flex md:flex text-3xl md:text-base lg:text-base lg:flex flex-col md:flex-row lg:flex-row justify-center items-center fixed md:relative lg:relative top-0 bottom-0 left-0 right-0 bg-gray-100 z-20">
                        <li class="md:mr-8 lg:mr-10 flex items-center">
                            <a class="text-gray-800 hover:text-gray-600 pt-10 md:pt-0" href="javascript: void(0)">Feature</a>
                        </li>
                        <li class="md:mr-8 lg:mr-10 flex items-center">
                            <a class="text-gray-800 hover:text-gray-600 pt-10 md:pt-0" href="javascript: void(0)">Marketplace</a>
                        </li>
                        <li class="md:mr-8 lg:mr-10 flex items-center">
                            <a class="text-gray-800 hover:text-gray-600 pt-10 md:pt-0" href="javascript: void(0)">Company</a>
                        </li>
                        <li class="md:mr-8 lg:mr-10 flex items-center">
                            <a class="text-gray-800 hover:text-gray-600 pt-10 md:pt-0" href="javascript: void(0)">Features</a>
                        </li>

                        <li class="md:mr-8 lg:mr-10 flex items-center">
                            <a class="text-gray-800 hover:text-gray-600 pt-10 md:pt-0" href="javascript: void(0)">Contact</a>
                        </li>
                        <li class="flex items-center">
                            <button class="focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-indigo-600 px-6 py-3 text-sm">Sign In</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <section class="mx-auto container py-12 lg:px-4 xl:px-0">
        <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row">
            <div class="flex flex-col lg:w-6/12 md:w-6/12 px-4 lg:px-0 justify-center">
                <h1 class="text-5xl sm:text-6xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-gray-800">Find the most exciting startups</h1>
                <p class="text-lg text-gray-600 font-light leading-relaxed pt-8">
                    If you are a new startup company, try not to arouse the interest or suspicion of your competition; especially if they are a bigger company. They can crush you while you are still in your startup phase. Lie low while still strengthening your bottom line.
                </p>
                <div class="mt-12 flex flex-wrap">
                    <div class="mr-6 mt-5 sm:mt-0 md:mt-5 lg:mt-0">
                        <button class="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-4 text-xl">Get Started</button>
                    </div>
                    <div class="mt-5 sm:mt-0 md:mt-5 lg:mt-0">
                        <button class="focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-indigo-600 px-8 py-4 text-xl">Live Demo</button>
                    </div>
                </div>
            </div>
            <div class="mt-6 md:mt-0 h-64 md:h-auto md:w-1/2 relative lg:mt-0 pl-6 sm:pl-20 pt-10  flex justify-end sm:block">
                <div class="ml-12 -mb-32 absolute left-0 w-5/6 h-full">
                    <img class="inset-0 absolute object-cover object-center z-10 shadow-md w-full h-full" src="https://dh-ui.s3.amazonaws.com/assets/photo-1522204507765-be33852f2e28.jfif" alt="Coffee" />
                </div>
                <div class="absolute h-full w-full top-0 left-0 flex flex-col items-start">
                    <svg width="285" height="462" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#667EEA" fill-rule="evenodd">
                            <g>
                                <rect width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" width="6.002" height="6.005" rx="3.001" />
                                <rect y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="192.117" width="6.002" height="6.005" rx="3.001" />
                            </g>
                            <g transform="translate(0 216)">
                                <rect width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" width="6.002" height="6.005" rx="3.001" />
                                <rect y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="48.029" width="6.002" height="6.005" rx="3.001" />
                                <rect y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="72.044" width="6.002" height="6.005" rx="3.001" />
                                <rect y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="96.059" width="6.002" height="6.005" rx="3.001" />
                                <rect y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="120.073" width="6.002" height="6.005" rx="3.001" />
                                <rect y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="144.088" width="6.002" height="6.005" rx="3.001" />
                                <rect y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="168.103" width="6.002" height="6.005" rx="3.001" />
                                <rect y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="192.117" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="192.117" width="6.002" height="6.005" rx="3.001" />
                            </g>
                            <g transform="translate(0 432)">
                                <rect width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" width="6.002" height="6.005" rx="3.001" />
                                <rect y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="31.002" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="62.003" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="93.005" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="124.007" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="155.008" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="186.01" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="217.012" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="248.013" y="24.015" width="6.002" height="6.005" rx="3.001" />
                                <rect x="279.015" y="24.015" width="6.002" height="6.005" rx="3.001" />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</div>
    `
    return template
}

export default Header;