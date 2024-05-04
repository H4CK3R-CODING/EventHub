import React from "react";
import { Button } from "../Sign/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
        <Link to={"/"}><h1 className="m-2 p-2 font-bold text-2xl cursor-pointer">EventHub</h1></Link>
      <div className="h-16 flex items-center justify-end">
        <div className="w-20 m-2">
          <Button
            label={"Login"}
            onClick={() => {
              console.log("Login Button");
            }}
          />
        </div>
        <div className="w-36 m-2">
          <Button
            label={"Register Team"}
            onClick={() => {
              console.log("Register Team Button");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
