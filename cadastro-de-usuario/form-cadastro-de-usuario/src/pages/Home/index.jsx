import { useEffect } from 'react'
import "./style.css";
import Trash from "../../assets/16qg.svg";
import api from '../../services/api'

function Home() {
  let users = []

  async function getUsers(){
    users = await api.get('/usuarios')
  }

  useEffect(() => {
  getUsers()
  }, [])

  return (
    <div className="container">
      <form>
        <h1>Cadastre-se</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="Idade" type="number" />
        <input placeholder="Email" name="Email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome:<span>{user.name}</span>
            </p>
            <p>
              Idade:<span>{user.age}</span>
            </p>

            <p>
              Email:<span>{user.email}</span>
            </p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
