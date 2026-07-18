export default function SnackList() {
  const snackArray = [
    { name: 'Apples', rank: 6 },
    { name: 'Steamed Broccoli', rank: 5 },
    { name: 'Chips Ahoy', rank: 4 },
    {
      name: 'Sour Gummies',
      rank: 3,
    },
    {
      name: 'Pistachios',
      rank: 2,
    },
    { name: 'Takis', rank: 1 },
  ];

  const sortedList = snackArray.toSorted((a, b) => a.rank - b.rank);

  return (
    <>
      <ul>
        {sortedList.map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
      </ul>
    </>
  );
}
