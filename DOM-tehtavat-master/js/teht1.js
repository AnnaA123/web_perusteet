document.getElementsByTagName('td')[0].innerHTML ='<td>Anna</td>';
document.getElementsByTagName('td')[1].innerHTML ='<td>Alava</td>';
document.getElementsByTagName('td')[2].innerHTML ='<td>Ansku</td>';
document.getElementsByTagName('td')[3].innerHTML ='<td>Katutie 1, 00000 HELSINKI</td>';

const puhelin = document.querySelector('tr');
const p = document.createTextNode('Puhelinnumero');
const puh = document.createElement('th');
puh.appendChild(p);
puhelin.appendChild(puh);

const numero = document.querySelector('tr');
const n = document.createTextNode('+358 44 1234567');
const nro = document.createElement('td');nro.appendChild(n);
numero.appendChild(nro);

document.getElementsByTagName('td')[3].innerHTML ='<td></td>';
document.getElementsByTagName('th')[2].innerHTML ='<td></td>';