export default function FilterButton({ setFilter, filter }) {
  return (
    <button onClick={() => setFilter(filter)}>
      {filter.charAt(0).toUpperCase() + filter.slice(1)}
    </button>
  );
}
