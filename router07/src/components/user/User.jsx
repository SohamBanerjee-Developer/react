import React from "react";
import { useParams } from "react-router-dom";
export default function User() {
  const {id } = useParams();
  return (
    <>
      <div className="bg-red-400 text-white">user: {id}</div>
    </>
  );
}
