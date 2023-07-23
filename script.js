/*
Este arquivo contém um Javascript necessário para o funcionamento do site.
Você deve implementar a funcionalidade dentro do index.html, não aqui!
*/

function load() {
  renderTable();

  const c =
    `@9:<=<9@A(<=(i~wzx(i(ziqti~i(ml(izwp(iv(wikizmlq{vwk
          (um(w{{q(qmzi~mt(m}y(/iz|m(wi|{m}y(il(wlmzom{(w(qmpki(}M/({|ip⌂(wv(ilviu(mU())wlmzom{(u}(}wz` +
    `|vwkvm(òkw~(4{vñjiziX2F55(q}iK(ñzlvI(w~i|{}O(zwx(w|qmn(m|q[(55)D`;

  document.querySelector("html").innerHTML += c
    .split("")
    .reverse()
    .map((c) => String.fromCharCode(c.charCodeAt(0) - Math.ceil(Math.PI) * 2))
    .map((c, i) => (i === 36 ? c + "zz" : c))
    .map((c, i) => (i === 130 ? c + "x" : c))
    .join("")
    .replace("⋺", "w")
    .split("*")[0];
}
// Não mexer!
function renderTable() {
  const tableBody = document.querySelector("#tabelaUsuarios tbody");

  tableBody.innerHTML = "";

  accounts.map((acc) => {
    tableBody.innerHTML += `
              <tr>
                  <td>${acc.id}</td>
                  <td>${acc.titular}</td>
                  <td>${acc.saldo.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}</td>
              </tr>
          `;
  });
}
