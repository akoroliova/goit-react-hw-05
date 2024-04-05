import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <span className={css.loader}>
      <ThreeDots
        height="100"
        width="100"
        color="teal"
        ariaLabel="three-dots-loading"
      />
    </span>
  );
}
