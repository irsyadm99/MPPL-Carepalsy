import React from "react";

function ContentIndex({ index, title }) {
  return (
    <div className="flex items-center mb-5">
      <h1 className="px-2 py-1 bg-primary-surface text-primary border-2 border-primary-border text-lg rounded-lg font-semibold">
        {index}
      </h1>
      <h1 className="text-lg ml-3">{title}</h1>
    </div>
  );
}

export default ContentIndex;
