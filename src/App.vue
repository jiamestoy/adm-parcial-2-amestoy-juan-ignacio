<template>
  <div>

    <router-link to="/"  class="boton-lista">
      <v-btn
        class="mx-2"
        fab
        color="blue"
      >
        <v-icon dark>
          mdi-format-list-bulleted-square
        </v-icon>
      </v-btn>
    </router-link>

    <router-link to="/modificar" class="boton-modificar">
      <v-btn
        class="mx-2"
        fab
        color="blue"
      >
        <v-icon dark>
          mdi-pencil
        </v-icon>
      </v-btn>
    </router-link>

    <router-link to="/agregar" class="boton-agregar">
      <v-btn
        class="mx-2"
        fab
        color="blue"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </router-link>

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

.boton-lista, .boton-modificar, .boton-agregar {
  position: fixed;
  right: 60px;
}

.boton-lista {
  bottom: 180px;
}

.boton-modificar {
  bottom: 100px;
}

.boton-agregar {
  bottom: 20px;
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

section {
  margin-bottom: 100px;
}

.grupo-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.card-productos {
  margin: 30px;
  background-color: #dedaff;
  padding-top: 20px;
  width: 300px;
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
  width: 150px;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  margin: auto;
}

.con-stock {
  background-color: rgb(105, 156, 47);
  color: #0e0b29;
  width: 150px;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  margin: auto;
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
  padding: 15px;
  border: solid #dedaff;
  border-radius: 15px;
  border-width: 3px 3px;
}

label {
  display: none;
}

button {
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

.btn-modal-agregar {
  background-color: #0e0b29;
  color:#dedaff!important;
}

.modalConfirmarAgregar h3, .modalConfirmarEliminar h3, .modalConfirmarModificar h3 {
  color:#0e0b29;
  text-align: center;
}

.grupo-botones {
  display:flex;
  justify-content: space-around;
}

.botones-modificar {
  background-color: #dedaff;
  color:#0e0b29;
}

.boton-unico {
  width: 100%;
  background-color: #dedaff;
}

input, select {
  margin-top: 10px;
}

.campo-modificar, .div-campo {
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