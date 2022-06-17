import React from "react";
import { Link } from "react-router-dom";
import style from "./landingPage.module.css"

export default function LandingPage() {

    return (
      <div className={style.contenedor}>
        <div className={style.contenedor_titulo}>
          <h1 className={style.titulo}>WELCOME TO MY DOGS PAGE</h1>
        </div>
        <div className={style.contenedor_boton}>
          <Link to="/home">
            <button type="button"  className={style.boton}>GET INTO</button>
          </Link>
        </div>
      </div>
    );
  }