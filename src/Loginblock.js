import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginblock() {
  const [login, setlogin] = useState("");
  const [pass, setpass] = useState("");
  const [statelogin, setStatelogin] = useState(true);
  const navigate = useNavigate();

  function passwordCheck() {
    fetch("http://146.190.118.121/api/login/", { method: "POST" })
      .then((data) => data.text())
      .then((data) => {
        console.log(data);
      });
  }

  function loginpass_check(e) {
    e.preventDefault();
    if (login === "111" && pass === "111") {
      navigate("/table1");
    } else setStatelogin(false);
  }

  function error_ok(e) {
    e.preventDefault();
    setStatelogin(true);
  }

  return (
    <div className={`admpanel ${statelogin ? "" : "admpanel_error"}`}>
      <form className={statelogin ? "" : "d-none"}>
        <div className="admpanel__inpblock">
          <label>
            <span className="admpanel__param">Логин:</span>
            <input type="text" className="admpanel__inp" onBlur={(e) => setlogin(e.target.value)} />
          </label>
        </div>
        <div className="admpanel__inpblock">
          <label>
            <span className="admpanel__param">Пароль:</span>
            <input type="text" className="admpanel__inp" onBlur={(e) => setpass(e.target.value)} />
          </label>
        </div>
        <div className="admpanel__inpblockbut">
          <input type="submit" value="Войти" className="admpanel__but" onClick={loginpass_check} />
        </div>
      </form>
      <h2 className={statelogin ? "d-none" : "red"}>Неверный логин или пароль</h2>
      <div className={statelogin ? "d-none" : "admpanel__inpblockbut"}>
        <input type="submit" value="Ок" className="admpanel__but" onClick={error_ok} />
      </div>
    </div>
  );
}

export default Loginblock;
