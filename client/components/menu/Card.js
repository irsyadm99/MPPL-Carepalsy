import React from "react";

function Card({ title, uri }) {
  return (
    <div class="max-w-lg mx-auto cursor-pointer">
      <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <img
          class="rounded-t-lg"
          src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
          alt="img"
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
