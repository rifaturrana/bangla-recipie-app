import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Landing() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      
      >
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <Link
              to="/"
              className="inline-block px-3 py-px mb-4 text-xs font-bangla tracking-wider text-white uppercase rounded-full bg-teal-600"
            >
              ঘুরে দেখুন
            </Link>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bangla leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">শেয়ার</span>
            </span>{" "}
            করুন আপনার রেসিপি দুনিয়ার সাথে
          </h2>
          <p className="text-base font-bangla  text-gray-700 md:text-lg">
নতুন খাবার চেষ্টা করতে ভালবাসেন? বিশ্বে শেয়ার করতে চান কোনো রেসিপি আছে?এখানে আপনার পথ শুরু করুন ...
          </p>
        </div>
        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-teal-800 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bangla leading-5">
            আমাদের লক্ষ্য
            </h6>
            <p className="mb-3 text-sm font-bangla text-gray-900">
            [আপনার অ্যাপ্লিকেশনের নাম]-এর লক্ষ্য হলো ব্যক্তিদের অনুপ্রেরণা এবং শক্তিপ্রাপ্ত করে আনুন চমৎকার রেসিপিগুলো। আমরা মনে করি যে একটি সুন্দর রেসিপি সত্যিই বিন্যাস হলো একটি সঠিক হাসি, পরিমাণমত মিষ্টি এবং সক্তিময় আলোকে আস্থা, কিছু হাসির ছন্দ এবং পরিমাণমত আত্মসম্মান সহ সম্পূর্ণ ভালোবাসায় শেয়ার করার মাধ্যমে পূর্ণ হয়।
            </p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-teal-800 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bangla leading-5">
            একটি স্বাদের বিশ্ব আনুন
            </h6>
            <p className="mb-3 text-sm font-bangla text-gray-900">
            খাবারটি মাত্র পুষ্টিমূলক নয়; এটি আমাদের সংস্কৃতি এবং প্রিয়জনদের সাথে আমাদের সম্পর্ক স্থাপন করে। [আপনার অ্যাপ্লিকেশনের নাম]-এ, আমরা প্রতিটি ডিশের পিছনের সংস্কৃতি, ইতিহাস এবং গল্পগুলি প্রশংসা করি। স্বাদের এই বিশ্বটি অন্বেষণ করুন এবং খাদ্যদ্বারা অসাধারণ অভিজ্ঞতা বিচার করুন।
            </p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-teal-800 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bangla leading-5">রান্নার গল্পে ভুগছুন</h6>
            <p className="mb-3 text-sm font-bangla text-gray-900">
            প্রতিটি খাবারের প্লেটটি একটি আকর্ষনীয় গল্প বলে। প্রস্তুত করার মুহূর্ত থেকে আমাদের স্বাদ বাঁধে নিয়েছে যা আমরা আমাদের জিভে পৌঁছেছে। প্রতিটি খাওয়ার পরিণতি একটি পথপ্রদর্শক, এটি একটি পথপ্রদর্শক হয়ে যায়। এই স্বাদের পথে আপনার পায়ে ছাপ বিদ্যমান থাকে এবং মনে পড়ে একটি ঐতিহাসিক পায়ের জন্যে। [আপনার অ্যাপ্লিকেশনের নাম]-এ আমরা স্বাদের পিছনে ছুটবোর মহান এবং বিস্ময়কর গল্পগুলি উন্মুক্ত করছি।
            </p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-teal-800 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bangla leading-5">আপনার রান্নার রত্নসমূহ সংরক্ষণ করুন</h6>
            <p className="mb-3 text-sm font-bangla text-gray-900">
            আমাদের সাথে আপনার পছন্দের রেসিপিগুলো সংরক্ষণ করুন এবং রান্নার সুন্দর আর্কাইভ তৈরি করুন। আমরা বুঝতে পারি যে একটি রেসিপি শুধুমাত্র নির্দেশিকা নয়; এটি সেই রান্নার আত্মা যা যেখানে প্রস্তুত করে তার মনে পড়ায়। আপনি আপনার অভিমুখী রেসিপিগুলো সংরক্ষণ করছেন বলে মনে করবেন না; আপনি প্রতিটি পদার্থিকতা এবং প্রেপারের প্রেমপূর্ণ স্বভাবই জীবিত করছেন যা প্রতিটি ডিশে ঢুকে।
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
