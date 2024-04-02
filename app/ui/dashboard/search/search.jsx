"use client";
import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import debounce from "debounce";

const Search = ({ placeholder }) => {
  const { replace } = useRouter();

  const searchParams = useSearchParams();
  const pathName = usePathname();

  const handleSearch = debounce((event) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (event.target.value) {
      event.target.value.length > 2 && params.set("q", event.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathName}?${params}`);
  }, 300);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
