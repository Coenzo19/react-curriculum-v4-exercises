//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Renzo Romero';
  const age = '28';
  const hobbies = [
    'Working Out',
    'Video Games',
    '3D Art',
    'Card Games',
    'Web Development',
  ];
  return (
    <div>
      <h2>Game Developer looking to learn more about Software Development</h2>
      <p>
        Hi, my name is Renzo Romero, I live in the Bay Area and enjoy exercise
      </p>
      <ul>
        {hobbies.map((hobby) => {
          return <li>{hobby}</li>;
        })}
      </ul>
    </div>
  );
}
