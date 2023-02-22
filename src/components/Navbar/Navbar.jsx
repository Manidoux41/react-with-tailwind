import React from "react";

function Navbar() {
  return (
    <nav className="py-5 px-10 bg-green-50 w-full flex flex-col-reverse justify-center items-center md:flex-row md:justify-between md:items-center md:px-40">
      <h1 className="text-3xl self-center md:self-auto md:text-4xl">Mon App React</h1>
      <h2>Logo</h2>
    </nav>
  );
}

export default Navbar;
