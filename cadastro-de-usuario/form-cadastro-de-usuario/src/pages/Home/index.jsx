import "./style.css";
import Trash from "../../assets/16qg.svg";

function Home() {
  const users = [
    {
      id: "433424fg",
      name: "blablabla",
      age: "00",
      email: "rod@mail.com",
    },
    {
      id: "433424fddrffdg",
      name: "blblbl",
      age: "11",
      email: "bli@mail.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastre-se</h1>
        <input name="nome" type="text" />
        <input name="Idade" type="number" />
        <input name="Email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Nome:{user.name}</p>
            <p>Idade:{user.age}</p>
            <p>Email:{user.email}</p>
            <button>
              <img src={Trash} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
