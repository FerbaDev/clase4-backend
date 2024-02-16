import express from "express";

//creamos la app de express

const app = express();

//creamos la ruta de contacto

app.get("/", (req, res) => {
  res.send("Mi primer server de express");
});

//declaramos el puerto
const PUERTO = 8080;
//ponemos a escuchar el server

app.listen(PUERTO, () => {
  console.log(`Escuchando en http://localhost:${PUERTO}`);
});

//declaramos otra ruta
app.get("/contacto", (req, res) => {
  res.send("seccion contacto");
});

const misProductos = [
  { id: 1, nombre: "Fideos", precio: 150 },

  { id: 2, nombre: "Arroz", precio: 250 },

  { id: 3, nombre: "Pan", precio: 350 },

  { id: 4, nombre: "Helado", precio: 450 },

  { id: 5, nombre: "Galletitas", precio: 550 },

  { id: 6, nombre: "Mermelada", precio: 650 },

  { id: 7, nombre: "Queso", precio: 750 },

  { id: 8, nombre: "Gaseosa", precio: 850 },
];

//creamos una ruta que retorne todos los productos

app.get("/productos", (req, res) => {
  res.send(misProductos);
});

//que retorne un producto segun id
//req.params---------------
app.get("/productos/:id", (req, res) => {
  let id = req.params.id;
  //aca se usa el doble igual para comparar pq el id es un num y lo que viene de params es un string
  let producto = misProductos.find((prod) => prod.id == id);
  producto ? res.send(producto) : res.send("Producto no encontrado");
});

//req.query

app.get("/clientes", (req, res) => {
  let nombre = req.query.nombre;
  let apellido = req.query.apellido;

  res.send(`Bienvenido ${nombre} ${apellido}`);
});
//y en el vavegador http://localhost:8080/clientes?nombre=Fer&apellido=Barron

////////////////////////////////////
// ejercicio: usamos query para pedir la cantidad de elementos que debe retornar un array (endpoint)

app.get("/product", (req, res) => {
  let limit = parseInt(req.query.limit);
  let productos = misProductos.slice(0, limit);
  //el metodo slice genera una copia parcial del array.
  res.send(productos);
});
