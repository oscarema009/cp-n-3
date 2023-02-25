const utils = require('../utils');
/*⚠️ No modificar nada arriba de esta línea ⚠️

  5️⃣ ***** EJERCICIO 5 ***** - getCarsByBrand 5️⃣:
  
  🟢 Retornar un array de coches que pertenezcan a la marca solicitada.
  📌 Si la marca solicitada no existe arrojar un error que diga: "Marca no encontrada".
  📌 Si la marca no tiene coches, retornar un string que diga: "No se encontraron coches".
  
  🟢 El parámetro "sort" puede tener dos valores. Si el valor es "highPrice", debes ordenarlos de mayor a menor 
  según el precio del coche. Si el valor es "lowPrice", debes ordenarlos de menor a mayor.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  2) Dentro de cada marca, está guardado el ID de sus coches correspondientes (ver examples.json), debes utilizar
  esos IDs para encontrarlos en utils.cars
*/

const getCarsByBrand = (brand, sort) => {
  let encontro = utils.brands.find(mi => mi.name === brand);
  if(!encontro)
    throw ('Marca no encontrada');

  if(!encontro.cars.length)
    return ('No se encontraron coches');

  let filtered = [];
  encontro.cars.forEach(mi => {
    filtered.push(utils.cars.find(car => car.id===mi))
  }); 
  if(sort)
  {
    if(sort==='highPrice')
    {
      return filtered.sort((a,b)=>a.price>b.price?-1:1)
    }
    if(sort==='lowPrice')
    {
      return filtered.sort((a,b)=>a.price<b.price?-1:1)
    }
  }

  return filtered;
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = getCarsByBrand;
