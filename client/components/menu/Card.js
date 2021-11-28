import React from "react";

function Card({ title }) {
  return (
    <div class="max-w-lg mx-auto cursor-pointer">
      <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <img
          class="rounded-t-lg"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />

        <div class="p-5">
          <a href="#">
            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {title}
            </h5>
          </a>
          <p class="font-normal text-gray-700 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
            quisque dolor sed tristique egestas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
