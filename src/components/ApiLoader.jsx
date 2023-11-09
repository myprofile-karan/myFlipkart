import React from "react";

const ApiLoader = () => {
  return (
    <div className="text-center">
      <div className="spinner-border text-primary mt-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default ApiLoader;
