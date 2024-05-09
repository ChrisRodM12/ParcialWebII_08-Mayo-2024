const express = require('express');
const parcial = express();
const port = 3000;
//Array para utiles (15 registros)
let utiles = [
    {
        id: 1,
        nombre: "Leche Entera",
        valor: 2.50,
        fechaVencimiento: "2024-06-15",
        categoria: "Lácteos",
        descripcion: "Leche fresca entera, en envase de cartón de un litro."
    },
    {
        id: 2,
        nombre: "Manzanas Gala",
        valor: 1.20,
        fechaVencimiento: "2024-05-10",
        categoria: "Frutas",
        descripcion: "Manzanas frescas, dulces y crujientes, importadas de Chile."
    },
    {
        id: 3,
        nombre: "Pasta de Dientes Colgate Total",
        valor: 3.99,
        fechaVencimiento: "2024-05-10",
        categoria: "Cuidado Personal",
        descripcion: "Pasta dental de uso diario, protección completa contra caries, placa, y problemas de encías."
    },
    {
        id: 4,
        nombre: "Camiseta de Algodón",
        valor: 15.99,
        fechaVencimiento: "2025-01-30",
        categoria: "Ropa",
        descripcion: "Camiseta de manga corta, 100% algodón, color negro, talla M."
    },
    {
        id: 5,
        nombre: "Harina de Trigo",
        valor: 2.00,
        fechaVencimiento: "N/A",
        categoria: "Alimentos Secos",
        descripcion: "Harina de trigo para repostería, ideal para hacer pasteles y panes."
    },
    {
        id: 6,
        nombre: "Cepillo de Dientes Oral-B",
        valor: 2.49,
        fechaVencimiento: "2024-12-31",
        categoria: " Cuidado Personal",
        descripcion: "Cepillo dental con cerdas suaves para una limpieza profunda y delicada."
    },
    {
        id: 7,
        nombre: "Televisor LED Samsung 55",
        valor: 799.99,
        fechaVencimiento: "N/A",
        categoria: "Electrónica",
        descripcion: "Televisor LED de alta definición, pantalla de 55 pulgadas, Smart TV con acceso a aplicaciones y streaming."
    },
    {
        id: 8,
        nombre: "Salmón Fresco",
        valor: 10.99,
        fechaVencimiento: "2024-05-08",
        categoria: "Pescados y Mariscos",
        descripcion: "Filete de salmón fresco del Atlántico, rico en ácidos grasos omega-3."
    },
    {
        id: 9,
        nombre: "Champú Pantene Pro-V",
        valor: 5.49,
        fechaVencimiento: "N/A",
        categoria: "Cuidado Personal",
        descripcion: "Champú para todo tipo de cabello, fórmula Pro-V para un cabello fuerte y saludable."
    },
    {
        id: 10,
        nombre: "Papas Fritas Lay's",
        valor: 3.29,
        fechaVencimiento: "2024-07-20",
        categoria: "Snacks",
        descripcion: "Papas fritas crujientes y saladas, envasadas al vacío para mantener la frescura."
    },
    {
        id: 11,
        nombre: "Camisa de Vestir",
        valor: 29.99,
        fechaVencimiento: "N/A",
        categoria: "Ropa",
        descripcion: "Camisa de vestir para hombre, de color blanco, manga larga, material de algodón y poliéster."
    },
    {
        id: 12,
        nombre: "Yogur Griego Natural",
        valor: 1.79,
        fechaVencimiento: "2024-05-12",
        categoria: "Lácteos",
        descripcion: "Ogur griego natural, sin azúcares añadidos, alto en proteínas y cremoso."
    },
    {
        id: 13,
        nombre: "Laptop Lenovo Ideapad",
        valor: 699.99,
        fechaVencimiento: " N/A",
        categoria: "Electrónica",
        descripcion: "Laptop ligera y portátil, pantalla de 15.6 pulgadas, procesador Intel Core i5, 8GB de RAM, 256GB SSD."
    },
    {
        id: 14,
        nombre: "Aceite de Oliva Extra Virgen",
        valor: 8.99,
        fechaVencimiento: " N/A",
        categoria: "Alimentos",
        descripcion: "Aceite de oliva prensado en frío, extra virgen, ideal para aderezar ensaladas y cocinar."
    },
    {
        id: 15,
        nombre: "Calcetines Deportivos Nike",
        valor: 12.99,
        fechaVencimiento: " N/A",
        categoria: "Ropa Deportiva",
        descripcion: "Calcetines deportivos unisex, diseño ergonómico, tecnología que absorbe la humedad para mantener los pies secos durante el ejercicio."
    },   
];
//Array para Automoviles (15 registros)
let automoviles  = [
    {
      id: 1,
      marca: "Toyota",
      cilindraje: 2000,
      tipo: "híbrido",
      linea: "Prius",
      color: "Plateado",
      placa: "ABC123"
    },
    {
      id: 2,
      marca: "Tesla",
      cilindraje: null, // No aplica para vehículos eléctricos
      tipo: "eléctrico",
      linea: "Model S",
      color: "Rojo",
      placa: "DEF456"
    },
    {
      id: 3,
      marca: "Honda",
      cilindraje: 1500,
      tipo: "híbrido",
      linea: "Insight",
      color: "Azul",
      placa: "GHI789"
    },
    {
      id: 4,
      marca: "Nissan",
      cilindraje: 2500,
      tipo: "híbrido",
      linea: "Leaf",
      color: "Blanco",
      placa: "JKL012"
    },
    {
      id: 5,
      marca: "Chevrolet",
      cilindraje: 1800,
      tipo: "híbrido",
      linea: "Volt",
      color: "Negro",
      placa: "MNO345"
    },
    {
      id: 6,
      marca: "BMW",
      cilindraje: 3000,
      tipo: "híbrido",
      linea: "i3",
      color: "Gris",
      placa: "PQR678"
    },
    {
      id: 7,
      marca: "Ford",
      cilindraje: 2000,
      tipo: "híbrido",
      linea: "Fusion",
      color: "Verde",
      placa: "STU901"
    },
    {
      id: 8,
      marca: "Toyota",
      cilindraje: 2500,
      tipo: "híbrido",
      linea: "Rav4",
      color: "Azul",
      placa: "VWX234"
    },
    {
      id: 9,
      marca: "Hyundai",
      cilindraje: 1600,
      tipo: "híbrido",
      linea: "Ioniq",
      color: "Blanco",
      placa: "YZA567"
    },
    {
      id: 10,
      marca: "Tesla",
      cilindraje: null, // No aplica para vehículos eléctricos
      tipo: "eléctrico",
      linea: "Model 3",
      color: "Negro",
      placa: "BCD890"
    },
    {
      id: 11,
      marca: "Kia",
      cilindraje: 2000,
      tipo: "híbrido",
      linea: "Niro",
      color: "Blanco",
      placa: "EFG123"
    },
    {
      id: 12,
      marca: "Audi",
      cilindraje: 3000,
      tipo: "híbrido",
      linea: "A3 e-Tron",
      color: "Plateado",
      placa: "HIJ456"
    },
    {
      id: 13,
      marca: "Lexus",
      cilindraje: 2500,
      tipo: "híbrido",
      linea: "RX",
      color: "Rojo",
      placa: "KLM789"
    },
    {
      id: 14,
      marca: "Mercedes-Benz",
      cilindraje: 3500,
      tipo: "híbrido",
      linea: "GLE",
      color: "Gris",
      placa: "NOP012"
    },
    {
      id: 15,
      marca: "Volvo",
      cilindraje: 2000,
      tipo: "híbrido",
      linea: "XC90",
      color: "Negro",
      placa: "QRS345"
    }
];
//Función para calcular el IVA para un producto
function calcularIVA(valor) {
  return valor * 0.19; 
}
//Calcular el IVA para cada producto
productos.forEach(producto => {
  producto.iva = calcularIVA(producto.valor);
});
// Función para calcular el impuesto vehicular
//      i. Entre 1 y 50.000.000 el impuesto es del 1%
//      ii. Entre 50.000.001 y 100.000.000 el impuesto es de 1,5%
//      iii. Entre 100.000.001 y 150.000.000 el impuesto es de 2,5 
//      iv. Los vehículos con costo superior son de 3,5%
function calcularImpuesto(costo, tipo) {
  if (tipo === 'gasolina') {
    if (costo <= 50000000) {
      return costo * 0.01; 
    } else if (costo <= 100000000) {
      return costo * 0.015; 
    } else if (costo <= 150000000) {
      return costo * 0.025; 
    } else {
      return costo * 0.035; 
    }
  } else if (tipo === 'eléctrico') {
    return costo * 0.01; 
  } else {
    return 0; 
  }
}
// Calcular el impuesto para cada vehículo
automoviles.forEach(automovil => {
  automovil.impuesto = calcularImpuesto(automovil.costo, automovil.tipo);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(utiles);
console.log(automoviles);
//Muestra el servidor corriendo de manera efectiva
parcial.get('/',(req,res)=>{
    res.json('Servidor inicado correctamente');
})
//1.Crear un endpoint que liste todos los productos
parcial.get('/utiles',(req,res)=>{
    res.json(utiles);
})
//2.Crear un endpoint que liste todos los productos de una categoría (solicita la categoría por el endpoint) 
parcial.get('/utiles/:categoria',(req,res)=>{
    const categoria = req.params.categoria;
    const busqCategoria = utiles.filter(busqCategoria => busqCategoria.categoria == categoria)
    res.json(busqCategoria);
})
//3.Crear un endpoint que liste todos los automóviles
parcial.get('/automoviles',(req,res)=>{
  res.json(automoviles);
})
//4.Crear un endpoint que liste los productos que sean mayor a 10.000
parcial.get('/utilesmayores',(req,res)=>{
    res.json(utiles.filter(utiles => utiles.valor > 10.00 ));
})
//5.Crear un endpoint que liste todos los productos y calcule el iva para cada producto el iva es del 19%
parcial.get('/utiles', (req, res) => {
  res.json(utiles.map(utiles => ({
    ...utiles,
    precioConIVA: utiles.valor + utiles.iva
  })));
});
//6. Crear un endpoint que liste todos los vehículos de una marca (solicita la marca por el endpoint) 
parcial.get('/automoviles/:marca', (req, res) => {
  const marca = req.params.marca;
  const automovilesMarca = automoviles.filter(automovil => automovil.marca === marca);
  if (automovilesMarca.length === 0) {
    return res.status(404).json({ error: `No se encontraron vehículos de la marca ${marca}` });
  }
  res.json(automovilesMarca);
});
//7.Crear un endpoint que liste todos los vehículos calcula el impuesto vehicular para cada vehículo teniendo en cuenta las siguientes condiciones:
// a. Vehículos a gasolina 
// b. Vehículos eléctricos todos tienen un impuesto de 1%
parcial.get('/automoviles', (req, res) => {
  res.json(automoviles);
});
//Muestra que el servidor inicia de manera efectiva
parcial.listen(port, ()=>{
    console.log(`El servidor a sido iniciado en http://localhost:${port}`)
});