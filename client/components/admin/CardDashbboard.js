import React from "react";
import { UsersIcon } from "@heroicons/react/solid";

function CardDashbboard({ Icon, title, data }) {
  return (
    <div className="bg-white rounded-lg shadow-md flex-auto h-28">
      <div className="flex p-3">
        <div className="flex flex-col flex-1">
          <h3 className="text-2xl">{title}</h3>
          <h1 className="text-4xl font-bold mt-2">{data}</h1>
        </div>
        <div className="bg-secondary-surface rounded-md">
          <div className="p-3">
            <Icon className="h-16 w-16 text-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDashbboard;
