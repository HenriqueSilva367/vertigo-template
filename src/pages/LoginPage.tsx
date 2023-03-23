import { useState } from "react";
import Logo from '../assets/logo.svg';
import bg from "../assets/bg.svg";
import EyeOff from '../assets/eye-off.svg';
import Eye from '../assets/eye.svg';
import "./style.css";


function LoginPage() {

  const [showPassword, setShowPassword] = useState<string>('');
  const [isRevealPwd, setIsRevealPwd] = useState<boolean>(true);

  return (
    <div id="page" className="flex">
      <div>
        <header>
          <img src={Logo} alt="" />
        </header>
        <main>
          <div className="headline">
            <h1>Acesse a plataforma</h1>
            <p>
              Faça login ou registre-se para começar a construir seus projetos
              ainda hoje.
            </p>
          </div>
          <form>
            <div className="input-wrapper">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" name="email" required />
            </div>

            <div className="input-wrapper">
              <div className="label-wrapper flex">
                <label htmlFor="senha"> Senha </label>
                <a href="#"> Esqueceu a senha? </a>
              </div>

              <input
                 type={isRevealPwd ? 'password' : 'text'}
                 value={showPassword}
                 onChange={(e) => setShowPassword(e.target.value)} 
                id="senha"
                placeholder="Digite sua senha"

              />

              <img
                className="eye"
                alt=""
                title={isRevealPwd ? 'Show password' : 'Hide password'}
                src={isRevealPwd ? EyeOff : Eye}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
              />
            </div>
            <button type="submit">Entrar</button>

            <div className="create-account">
              Ainda não tem uma conta?
              <a href="#"> Inscreva-se </a>
            </div>
          </form>
        </main>
      </div>
      
        <img src={bg} alt="" />
      
    </div>
  );
}

export default LoginPage;
