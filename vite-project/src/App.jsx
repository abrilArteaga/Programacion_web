import { Header } from "./assets/components/Header/Header";

const arr = [
  {
    name: "pepito",
    lastName: "perez",
    age: 18,
  },
  {
    name: "carlos",
    lastName: "sanchez",
    age: 25,
  },
];
function App() {
  return (
    <>
      <Header />
      <div>
        {arr.map((item) => (
          <>
            <h3>{item.name}</h3>
            <h4> {item.lastName}</h4>
            <label> {item.age}</label>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
