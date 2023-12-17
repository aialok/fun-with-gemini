import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage flex flex-col gap-y-10 items-center justify-center bg-slate-200 h-[85vh] max-sm:flex-col max-sm:gap-y-2">
      <div className="left-container  w-full flex items-center">
        <div class="container mx-auto  p-6 bg-white rounded shadow-md  w-[80%] ">
          <h1 class="text-3xl max-sm:text-xl font-bold text-gray-800 mb-4">
            Instagram AI Caption Generator
          </h1>
          <p class="text-gray-600 text-lg max-sm:text-base">
            Experience cutting-edge caption creativity with Gemini Vision Pro, a
            powerful Language Model developed by Google. Elevate your Instagram
            posts beyond ordinary storytelling.
          </p>
          <Link
            to="instagram-caption-generator"
            class="inline-block mt-4 px-6 py-3 bg-gray-800  max-sm:py-2 max-sm:px-4 text-white rounded transition "
          >
            Discover More
          </Link>
        </div>
      </div>
      <div className="right-container w-full flex items-center">
        <div class="container mx-auto  p-6  bg-white rounded shadow-md  w-[80%]">
          <h1 class="text-3xl max-sm:text-xl font-bold text-gray-800 mb-4">
            Face Matching with Gemini Vision Pro
          </h1>
          <p class="text-gray-600 text-lg max-sm:text-base">
            Experience the ease of our Facial Recognition System powered by
            Gemini Vision Pro. Effortlessly enhance security and streamline
            access control with cutting-edge technology that ensures accurate
            and efficient identification.
          </p>
          <Link
            to="facial-recognition-system"
            class="inline-block mt-4 px-6 py-3 bg-gray-800 text-white rounded transition "
          >
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
