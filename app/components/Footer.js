"use client";
import React from "react";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  const newYear = new Date().getFullYear();
  const data = [
    { id: 1, name: "https://www.facebook.com/Munaa.tse" },
    { id: 2, name: "https://github.com/Munaa8805" },
    { id: 3, name: "https://www.linkedin.com/in/munaa-tsetsegmaa-39a95664/" },
    {
      id: 4,
      name: "https://www.munaa.pro",
    },
  ];
  return (
    <footer className="bg-mainBackground dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        {/* <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="px-4 py-6 bg-mainBackground dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white dark:text-gray-300 sm:text-center">
            © {newYear} <a href="https://munaa.pro/">Munaa Pro</a>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="https://www.facebook.com/Munaa.tse"
              target="_blank"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              ></svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="https://github.com/Munaa8805"
              target="_blank"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              ></svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a>
              <SiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
