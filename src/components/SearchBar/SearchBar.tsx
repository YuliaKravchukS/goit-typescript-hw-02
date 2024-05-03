import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { SearchBarProps } from "./SearchBar.types";
import React, { FormEvent } from "react";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchForm = form.elements.namedItem(
      "searchForm"
    ) as HTMLInputElement;
    const searchValue = searchForm.value;

    if (searchValue.trim() === "") {
      return toast.error("Please enter search term!");
    }
    onSearch(searchValue);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchForm"
          className={css.inputSearch}
        />
        <button className={css.btnSearch} type="submit">
          Search
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={true} />
    </header>
  );
};

export default SearchBar;
