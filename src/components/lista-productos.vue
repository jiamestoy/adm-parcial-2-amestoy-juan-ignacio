<template>
    <div class="card mb-3 card-productos">
      <div class="row g-0">
          <div class="col-md-4">
              <img :src="img" class="img-fluid rounded-start" :alt="imgalt">
          </div>
          <div class="col-md-8">
              <div class="card-body">
                  <h5 class="card-title">{{nombre | mayuscula}}</h5>
                  <p>{{autor | mayuscula}}</p>
                  <p v-if="cantidad > 1" class="con-stock"> {{cantidad}} UNIDADES</p>
                  <p v-else-if="cantidad == 1" class="con-stock"> ÚLTIMA UNIDAD</p>
                  <p v-else class="sin-stock">SIN STOCK</p>
                  <p>$ {{precio}}</p>
                  <p v-if="observacion != ''">Observación: {{observacion | mayuscula}}</p>
                  <p><small class="text-muted">{{categoria}}</small></p>
                  <a v-bind:href="'#' + codigo" class="vinculo-modificar">Modificar</a>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'lista-productos',
    props: ['nombre', 'cantidad', 'precio', 'categoria', 'autor', 'img', 'imgalt', 'observacion', 'codigo']
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>  