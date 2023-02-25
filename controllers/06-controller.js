const utils = require('../utils');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  6️⃣ ***** EJERCICIO 6 ***** - getBrandPrices 6️⃣:

   🟢 Debes retornar la suma del precio de todos los coches de la marca recibida por parámetro.
   🟢 Si recibes el parámetro "unused" con valor true, entonces retorna la suma de precios sólo de los coches 
   que sean nuevos.
   🟢 Si recibes el parámetro "unused" con valor false, entonces retorna la suma de precios sólo de los coches 
   que sean usados.
   🟢 Si la marca no existe, arrojar un error que diga: "Marca no encontrada".
      
   📢 PUNTOS A TENER EN CUENTA 📢
   1)El parámetro "unused" puede tener el valor null.
   2) Debes obtener los coches a partir de los IDs almacenados en su marca.
*/

const getBrandPrices = (brand, unused) => {
  let encontro = utils.brands.find(mi => mi.name===brand)
  if (!encontro)
    throw ('Marca no encontrada')

  let filtered = []

  encontro.cars.forEach(mi => {
    filtered.push(utils.cars.find(car => car.id === mi))
  });


  if(unused === true)
    return filtered.filter(mi=>mi.new===true).reduce((acc,item) => acc+item.price,0)

  if(unused === false)
    return filtered.filter(mi=>mi.new===false).reduce((acc,item) => acc+item.price,0)


  return filtered.reduce((acc,item) => acc+item.price,0);
};

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = getBrandPrices;
