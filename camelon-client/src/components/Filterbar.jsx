import React, {useState} from "react";


import { Sidebar } from "flowbite-react";
import { Button } from "flowbite-react";
import { Dropdown } from "flowbite";


export default function Filterbar() {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-100"
        aria-label="Sidebar"
      >
        <div class="p-5 bg-gray justify-center mt-4">
          <ul class="space-y-5">
            <li>
              <select name="cars" id="cars" class="w-full">
               <option value="" disabled selected>ภูมิภาค</option>
                <option value="volvo">กลาง</option>
                <option value="saab">เหนือ</option>
                <option value="mercedes">ใต้</option>
                <option value="audi">อีสาน</option>
              </select>
            </li>
            <li>
              <select name="cars" id="cars" class="w-full">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
