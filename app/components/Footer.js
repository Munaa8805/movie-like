"use client";
import React from "react";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  const newYear = new Date().getFullYear();
  const data = [
    { id: 1, name: "https://www.facebook.com/Munaa.tse" },
    { id: 2, name: "https://www.github.com/Munaa8805" },
    { id: 3, name: "https://www.linkedin.com/in/munaa-tsetsegmaa-39a95664/" },
    {
      id: 4,
      name: "https://www.munaa.pro",
    },
  ];
  return (
    <footer className="bg-mainBackground dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="px-4 py-6 bg-mainBackground dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white dark:text-gray-300 sm:text-center">
            © {newYear} <a href="https://munaa.pro/">Munaa Pro</a>. All Rights
            Reserved.
          </span>
          <div class="flex space-x-10">
            <a href="https://github.com/Munaa8805" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt=""
                class="h-10 ficon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/munaa-tsetsegmaa-39a95664/"
              target="_blank"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt=""
                class="h-10 ficon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
