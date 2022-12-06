<template>
  <div :style="(modalConfirmarAgregar == true) || (modalConfirmarEliminar == true) || (modalConfirmarModificar == true) ? 'opacity:0.5' : 'opacity: 1'">
  <ul class="nav nav-tabs fixed-bottom barra-navegacion">
    <li class="nav-item">
      <router-link to="/listado"><img src="../src/assets/lista.png"> Listado</router-link>
    </li>

    <li class="nav-item">
      <router-link to="/modificar"><img src="../src/assets/editar.png"> Modificar</router-link>
    </li>

    <li class="nav-item">
      <router-link to="/agregar"><img src="../src/assets/agregar.png"> Agregar</router-link>
    </li>
  </ul>

  <CabeceraApp></CabeceraApp>

  <router-view/>

</div>
</template>


<script>
import CabeceraApp from './components/CabeceraApp.vue';

export default {
name: 'App',
components: {
  CabeceraApp,
},

created: function() {
  if (localStorage.productos) {
    const productosGuardados = JSON.parse(localStorage.getItem("productos"));
    this.productos = productosGuardados
  }
},

data: () => ({
  modalConfirmarAgregar: false,
  modalConfirmarModificar: false,
  modalConfirmarEliminar: false,
}),
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  background: #0e0b29;
  font-family: 'Mukta', sans-serif;
  margin-top: 50px;
}

h1, h2, h3 {
  color: #dedaff
}
h2 {
  font-size: 36px;
}

.enlace-ancla {
  position:relative;
  bottom: 100px;
}

@media screen and (min-width: 760px) {
  body {
      width: 760px;
      margin-right: auto;
      margin-left: auto;
      display:block;
  }
}

.barra-navegacion {
  background-color: #dedaff;
  border: solid #0e0b29;
  border-width: 2px 2px;  
}

.barra-navegacion li {
  display: block;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 33%;
}

.barra-navegacion li img {
  display: block;
  margin: auto;
}

.barra-navegacion li a {
  display: block;
  color:#0e0b29;
  text-decoration: none;
  text-align: center;
}

h1 {
  display: none;
}

.banner {
  background-color: #dedaff;
  width: 100%;
  border: solid #0e0b29;
  border-width: 2px 2px;  
}

.banner img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
}

.filtros {
  margin-bottom: 15px;
  width: 760px;
  display: flex;
}

.card-productos {
  max-width: 760px;
  background-color: #dedaff;
}

.vinculo-modificar {
  text-decoration: none;
  font-weight: bold;
  color:#0e0b29;
}

.vinculo-modificar:hover {
  color:#49494e;
}

.sin-stock {
  background-color: rgb(156, 47, 47);
  color:#dedaff;
  width: 80px;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
}

.con-stock {
  background-color: rgb(105, 156, 47);
  color: #0e0b29;
  width: 100px;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
}

.modificar-producto {
  padding: 15px;
  display: flex;
  flex-direction: column;
  max-width: 760px;
  margin-top: 30px;
  border: solid #dedaff;
  border-radius: 15px;
  border-width: 3px 3px;
}

#modificar, .agregar-producto {
  margin-top: 50px;
}

.agregar-producto {
  margin-top: 50px;
  margin-bottom: 100px;
  padding: 15px;
  border: solid #dedaff;
  border-radius: 15px;
  border-width: 3px 3px;
}

label {
  display: none;
}

button {
  background-color: #dedaff;
  border: none;
  color:#0e0b29;
  border-radius: 5px;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 200px;
  margin-top: 20px;
  border: solid #0e0b29;
  border-width: 1px 1px;
}

.boton-filtro {
  padding: 10px 20px;
  color:#dedaff;
  background-color:#0e0b29;
  border: solid #dedaff;
  border-width: 1px 1px;
}

.boton-filtro-sleccionado{
  padding: 10px 20px;
  background-color: #dedaff; 
  color:#0e0b29;
  border: solid #0e0b29;
  border-width: 1px 1px;
}

.modalConfirmarAgregar, .modalConfirmarEliminar, .modalConfirmarModificar {
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color:#dedaff;
  padding: 120px;
  border-radius: 5px;
}

.modalConfirmarAgregar button, .modalConfirmarEliminar button, .modalConfirmarModificar button {
  background-color: #0e0b29;
  color:#dedaff;
}

.modalConfirmarAgregar h3, .modalConfirmarEliminar h3, .modalConfirmarModificar h3 {
  color:#0e0b29;
  text-align: center;
}

.grupo-botones {
  display:flex;
  justify-content: space-around;
}

.boton-unico {
  width: 100%;
}

input, select {
  margin-top: 10px;
}

.modificar-producto span, .div-campo {
  margin-top: 10px;
  background-color: #0e0b29;
  color:#dedaff;
}

.div-campo-rojo {
  margin-top: 10px;
  background-color: rgb(156, 47, 47);
  color:#dedaff;
}

.rotulo {
  margin: 0;
}

.error {
  font-size: 12px;
  margin: 0;
}

.input-group-text {
  display: flex;
  flex-direction: column;
}
</style>