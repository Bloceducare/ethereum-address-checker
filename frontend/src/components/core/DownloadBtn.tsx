import React from "react";
import { Link } from "react-router-dom";

const DownloadBtn = () => {
  return (
    <Link
      to="/check"
      // target={"_blank"}
      // rel={"noopenner norefferer"}
      className="bg-blue_deep text-white px-5 py-2 rounded-lg cursor-pointer"
    >
      Launch App
    </Link>
  );
};

export { DownloadBtn as default };
