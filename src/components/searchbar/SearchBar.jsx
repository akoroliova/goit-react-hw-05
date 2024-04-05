import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

let topic;

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    topic = form.elements.topic.value;

    if (topic.trim().length === 0) {
      toast("Please type your search request first!");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <header>
      <div className={css.headerContainer}>
        <form onSubmit={handleSubmit}>
          <input
            className={css.searchField}
            type="text"
            name="topic"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
          />

          <button type="submit">Search</button>
        </form>

        <Toaster />
      </div>
    </header>
  );
}
