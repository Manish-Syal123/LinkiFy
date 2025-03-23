import React, { useEffect } from "react";
import { useState } from "react";
import { RiUserSettingsLine } from "react-icons/ri";
import { motion } from "framer-motion";

let desc =
  "Generate short, memorable links with ease using Linklytics’s intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with Linklytics. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using Linklytics’s intuitive interface. Share URLs effortlessly across platforms.";
const LandingPage = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <HeorSection expanded={expanded} setExpanded={setExpanded} />
      <Integration />
      <Stats />
      {/* <Stats2 /> */}
      <Reviews />
    </>
  );
};

const HeorSection = () => {
  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a
                href="#"
                title=""
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg"
                  alt="Logo"
                />
              </a>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
              <a
                href="#"
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50"
              >
                {" "}
                Features{" "}
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50"
              >
                {" "}
                Pricing{" "}
              </a>
              <a
                href="/about"
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50"
              >
                {" "}
                About{" "}
              </a>
            </div>

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a
                href="#"
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50"
              >
                {" "}
                Customer Login{" "}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white bg-gray-900 rounded-xl hover:bg-gray-600"
              >
                Sign up
              </a>
            </div>
          </div>

          {expanded && (
            <nav className="px-1 py-8">
              <div className="grid gap-y-7">
                <a
                  href="#"
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50"
                >
                  {" "}
                  Features{" "}
                </a>
                <a
                  href="#"
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50"
                >
                  {" "}
                  Pricing{" "}
                </a>
                <a
                  href="/about"
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50"
                >
                  {" "}
                  About{" "}
                </a>
                <a
                  href="#"
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50"
                >
                  {" "}
                  Customer Login{" "}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600"
                >
                  Sign up
                </a>
              </div>
            </nav>
          )}
        </div>
      </header> */}

      <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center -mt-5">
            <h1 className="px-6 text-lg text-gray-600">
              Seamless URL Shortening, Tailored for Everyone
            </h1>
            {/* <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Turn your long Links into{" "}
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative">short Url's</span>
              </span>
            </p> */}
            <AnimatedText />

            <div className="px-8 sm:flex sm:items-center sm:justify-center sm:px-0 sm:space-x-5 mt-9">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white bg-gray-900 border-2 rounded-xl sm:w-auto hover:bg-gray-600"
              >
                Create Short Link
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl hover:bg-gray-900 hover:text-white"
              >
                <RiUserSettingsLine className="w-6 h-6 mr-2 font-extrabold" />
                Manage Links
              </a>
            </div>

            <p className="mt-8 text-base text-gray-500">
              Free to use and share with anyone · No credit card required
            </p>
          </div>
        </div>

        <div className="pb-12 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <div className="relative mx-auto">
              <div className="lg:max-w-6xl lg:mx-auto">
                <img
                  className="transform scale-110"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                  alt="Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Integration = () => {
  return (
    <section class="pt-10 pb-8 overflow-hidden bg-gray-50 sm:pt-16 lg:pt-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Connect with all apps
          </h2>
          <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
          <a
            href="#"
            title=""
            class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
            role="button"
          >
            Check all apps
          </a>
        </div>
      </div>

      <img
        class="w-full min-w-full mx-auto mt-12 scale-150 max-w-7xl lg:min-w-0 lg:mt-0 lg:scale-100"
        src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/1/services-icons.png"
        alt=""
      />
    </section>
  );
};

const Stats = () => {
  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h4 class="text-xl font-medium text-gray-900">
            Numbers tell the hard works we’ve done in last 6 years
          </h4>
        </div>

        <div class="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
          <div class="overflow-hidden shadow-sm bg-slate-50 border border-gray-200 rounded-xl">
            <div class="px-4 py-6">
              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 w-12 h-12 text-[#0352fe] bg-[#e4e9f4] rounded-full p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <div class="ml-4">
                  <h4 class="text-4xl font-bold text-gray-900">6+</h4>
                  <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                    Years in business
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="overflow-hidden shadow-sm bg-slate-50 border border-gray-200 rounded-xl">
            <div class="px-4 py-6">
              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 w-12 h-12 text-[#0352fe] bg-[#e4e9f4] rounded-full p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <div class="ml-4">
                  <h4 class="text-4xl font-bold text-gray-900">37+</h4>
                  <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                    Team members
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="overflow-hidden shadow-sm bg-slate-50 border border-gray-200 rounded-xl">
            <div class="px-4 py-6">
              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 w-12 h-12 text-[#0352fe] bg-[#e4e9f4] rounded-full p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div class="ml-4">
                  <h4 class="text-4xl font-bold text-gray-900">3,274</h4>
                  <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                    Projects delivered
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="overflow-hidden shadow-sm bg-slate-50 border border-gray-200 rounded-xl">
            <div class="px-4 py-6">
              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 w-12 h-12 text-[#0352fe] bg-[#e4e9f4] rounded-full p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                <div class="ml-4">
                  <h4 class="text-4xl font-bold text-gray-900">98%</h4>
                  <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                    Customer success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats2 = () => {
  return (
    <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Numbers tell our story
          </h2>
          <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          <div>
            <h3 class="font-bold text-7xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                {" "}
                6+{" "}
              </span>
            </h3>
            <p class="mt-4 text-xl font-medium text-gray-900">
              Years in business
            </p>
            <p class="text-base mt-0.5 text-gray-500">
              Creating the successful path
            </p>
          </div>

          <div>
            <h3 class="font-bold text-7xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                {" "}
                4821{" "}
              </span>
            </h3>
            <p class="mt-4 text-xl font-medium text-gray-900">
              Projects delivered
            </p>
            <p class="text-base mt-0.5 text-gray-500">In last 6 years</p>
          </div>

          <div>
            <h3 class="font-bold text-7xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                {" "}
                37+{" "}
              </span>
            </h3>
            <p class="mt-4 text-xl font-medium text-gray-900">Team members</p>
            <p class="text-base mt-0.5 text-gray-500">
              Working for your success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
const Reviews = () => {
  return (
    <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Trusted by <span class="text-blue-600">30k+</span> world class
            companies & design teams
          </h2>
        </div>

        <div class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
          <div class="overflow-hidden bg-white rounded-xl shadow">
            <div class="px-8 py-12">
              <div class="relative w-24 h-24 mx-auto">
                <img
                  class="relative object-cover w-24 h-24 mx-auto rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                  alt=""
                />
                <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                  <svg
                    class="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote class="mt-7">
                <p class="text-lg text-black">
                  “Amet minim mollit non deserunt ullam co est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat”
                </p>
              </blockquote>
              <p class="text-base font-semibold tex-tblack mt-9">
                Jenny Wilson
              </p>
              <p class="mt-1 text-base text-gray-600">
                Project Manager at Microsoft
              </p>
            </div>
          </div>

          <div class="overflow-hidden bg-white rounded-xl shadow">
            <div class="px-8 py-12">
              <div class="relative w-24 h-24 mx-auto">
                <img
                  class="relative object-cover w-24 h-24 mx-auto rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg"
                  alt=""
                />
                <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                  <svg
                    class="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote class="mt-7">
                <p class="text-lg text-black">
                  “Amet minim mollit non deserunt ullam co est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat”
                </p>
              </blockquote>
              <p class="text-base font-semibold tex-tblack mt-9">Robert Fox</p>
              <p class="mt-1 text-base text-gray-600">Founder at Brain.co</p>
            </div>
          </div>

          <div class="overflow-hidden bg-white rounded-xl shadow">
            <div class="px-8 py-12">
              <div class="relative w-24 h-24 mx-auto">
                <img
                  class="relative object-cover w-24 h-24 mx-auto rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
                  alt=""
                />
                <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                  <svg
                    class="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote class="mt-7">
                <p class="text-lg text-black">
                  “Amet minim mollit non deserunt ullam co est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat”
                </p>
              </blockquote>
              <p class="text-base font-semibold tex-tblack mt-9">
                Kristin Watson
              </p>
              <p class="mt-1 text-base text-gray-600">UX Designer at Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedText = () => {
  const sentence = "short-Url's";
  const words = sentence.split("");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, words.length * 200 + 2000); // Ensures full text appears before resetting

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
    >
      Turn your long Links into{" "}
      <span className="relative inline-flex sm:inline">
        <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
        <span className="relative" key={key}>
          {words.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 0.5 }} // Adjusted for slower appearance
            >
              {char}
            </motion.span>
          ))}
        </span>
      </span>
    </motion.p>
  );
};

export default LandingPage;
