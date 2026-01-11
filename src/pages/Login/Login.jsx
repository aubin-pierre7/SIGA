import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Connexion</h1>
        <p>Système d’Archive Numérique</p>

        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="exemple@email.com" />
          </div>

          <div className="form-group">
            <label>Mot de passe</label>
            <input type="password" placeholder="********" />
          </div>

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
