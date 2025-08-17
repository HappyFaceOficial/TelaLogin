import { useState } from "react"
import "./painelLogin.css"

export default function TelaCadastro() {
  const [form, setForm] = useState({ email: "", senha: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEntrar = () => {
    console.log("Entrar:", form);
  };

  const handleCadastrar = () => {
    console.log("Cadastrar:", form);
  };

  return (
    <div>
      <header className="logo">LOGO</header>
      <main>
        <div className="backGround">BACKGROUND</div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="senha"
            placeholder="SENHA"
            value={form.senha}
            onChange={handleChange}
          />
          <button type="button" onClick={handleEntrar}>
            ENTRAR
          </button>
          <button type="button" onClick={handleCadastrar}>
            CADASTRAR
          </button>
        </form>
      </main>
    </div>
  );
}
