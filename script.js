import { encriptador, desencriptador } from "./Encriptador.js";

const btnEncriptar = document.querySelector(".criptografar");

const btnDesencriptar = document.querySelector(".descriptografar");

const btnCopiar = document.querySelector(".copiar");

const campoTexto = document.querySelector(".campoTexto");

const semTexto = document.querySelector(".semTexto");

const campoTextoLateral = document.querySelector(
  ".campoTextoLateral"
);

function mostraImagemMarcadorVazio() {
  semTexto.style.setProperty("display", "block");
}

function desabilitaImagemMarcadorVazio() {
  semTexto.style.setProperty("display", "none");
}

function limparCampoPrincipal() {
  campoTexto.value = "";
}

function limparCampoLateral() {
  campoTextoLateral.value = "";
}

function criptografarTexto(e) {
  e.preventDefault();

  let textoEncriptado = encriptador(campoTexto.value);

  desabilitaImagemMarcadorVazio();

  campoTextoLateral.value = textoEncriptado;

  limparCampoPrincipal();
}

function descriptografarTexto(e) {
  e.preventDefault();

  desabilitaImagemMarcadorVazio();

  let textoDesencriptado = desencriptador(campoTexto.value);

  campoTextoLateral.value = textoDesencriptado;
  limparCampoPrincipal();
}

function copiarParaAreaTransferencia() {
  campoTextoLateral.select();
  document.execCommand("copy");
}

function copiarTexto(e) {
  e.preventDefault();

  copiarParaAreaTransferencia();

  limparCampoLateral();

  mostraImagemMarcadorVazio();

  alert("Texto copiado com sucesso!");

  campoTexto.focus();
}

btnEncriptar.addEventListener("click", criptografarTexto);

btnDesencriptar.addEventListener("click", descriptografarTexto);

btnCopiar.addEventListener("click", copiarTexto);
