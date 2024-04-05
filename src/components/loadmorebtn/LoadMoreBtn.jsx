export default function LoadMoreBtn({ onButtonClick }) {
  return (
    <div className="load-more-div">
      <button
        onClick={onButtonClick}
        className="load-more-button"
        type="button"
      >
        Load more...
      </button>
    </div>
  );
}
