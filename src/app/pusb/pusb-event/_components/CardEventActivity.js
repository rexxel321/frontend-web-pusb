import React from "react";
import { Card } from "flowbite-react";

const CardEventActivity = ({ onClick }) => {
  return (
    <Card className="group relative block bg-black cursor-pointer" onClick={onClick}>
      <img
        alt="Developer"
        src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        width={200}
        height={200}
        className="absolute inset-0 w-full h-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
      />
    </Card>
  );
};

export default CardEventActivity;
