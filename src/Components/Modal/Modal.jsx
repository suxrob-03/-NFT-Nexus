import React, { useRef } from "react";

export default function Modal({ setUser }) {
  const lastname = useRef();
  const password = useRef();

  function getValue() {
    let setlastname = lastname.current.value;
    let setpassword = password.current.value;

    localStorage.setItem("User", `${setlastname}`);
    setUser(setlastname);

    if (setlastname === "" && setpassword === "") {
      console.log("xxx");
      document.getElementById("Banner_login").style.display = "block";
      document.getElementById("name").classList.add("inputActiv");
      document.getElementById("password").classList.add("inputActiv");
    } else if (setpassword === "") {
      console.log("xxx");
      document.getElementById("Banner_login").style.display = "block";
      document.getElementById("password").classList.add("inputActiv");
    } else if (setlastname === "") {
      console.log("xxx");
      document.getElementById("Banner_login").style.display = "block";
      document.getElementById("name").classList.add("inputActiv");
    } else {
      document.getElementById("Banner_login").style.display = "none";
      document.getElementById("Modal").classList.remove("Modal_Active");
    }
  }

  function modalDeactive() {
    document.getElementById("Modal").classList.remove("Modal_Active");
  }
  return (
    <div className="Modal" id="Modal">
      <div className="Modal_box">
        <span onClick={modalDeactive} id="colu">
          X
        </span>
        <div className="Modal_title">login</div>
        <div className="Modal_input">
          <input
            ref={lastname}
            type="text"
            name="name"
            id="name"
            placeholder="lastname"
          />
          <input
            ref={password}
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button onClick={getValue}>login</button>
          {/* onClick={getValue} */}
        </div>
      </div>
    </div>
  );
}
