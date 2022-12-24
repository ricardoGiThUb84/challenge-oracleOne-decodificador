const REGRA_ENCRIPTAR = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const DESENCRIPTAR = Object.fromEntries(
  Object.entries(REGRA_ENCRIPTAR).map((lista) => lista.reverse())
);

function encriptador(texto) {
  return texto
    .split("")
    .map((letra) => REGRA_ENCRIPTAR[letra] || letra)
    .join("");
}

function desencriptador(texto) {
  Object.values(REGRA_ENCRIPTAR).forEach(
    (chave) =>
      texto.includes(chave) &&
      (texto = texto.replaceAll(chave, DESENCRIPTAR[chave]))
  );

  return texto;
}

export { encriptador, desencriptador };
