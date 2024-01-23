export const entre = (ev) => {
  const indice = ev.target.attributes[0].nodeValue;
  let indiceTransormado = indice + "h";
  const miache = "h";
  const mivar = document.getElementById(`${indiceTransormado}`);
  mivar.style.opacity = "1";
};

export const salida = (ev) => {
  const indice1 = ev.target.attributes[0].nodeValue;
  let indiceTransormado = indice1 + "h";
  const mivar1 = document.getElementById(`${indiceTransormado}`);
  mivar1.style.opacity = "0";
};
