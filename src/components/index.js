const Header = () => {
    const template = `
    <div class="py-10">
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
                </div>
            </div>
        </section>
    </div>
    `
    return template
}

export default Header;