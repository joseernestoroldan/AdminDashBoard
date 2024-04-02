"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Search = () => {

  const pathName = usePathname();

  return <div>This is a search</div>;
};

export default Search