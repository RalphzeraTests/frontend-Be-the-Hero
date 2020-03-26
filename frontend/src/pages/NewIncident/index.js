import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg}></img>

          <h1>Cadastrar novo Caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para
            resolvê-lo.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>
        <form>
          <input placeholder="Titulo do Caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em Reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
