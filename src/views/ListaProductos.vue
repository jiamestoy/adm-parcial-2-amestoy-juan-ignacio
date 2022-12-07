<template>
  <section>
    <h2>Listado de Productos</h2>

    <div class="filtros">
      <button type="button" name="filtros" id="todos" class="btn" checked v-on:click="seleccionaTodos" :class="(cat1 == true) && (cat2 == true) && (cat3 == true) && (cat4 == true) ? 'boton-filtro-sleccionado' : 'boton-filtro'">Todos</button>
      <button type="button" name="filtros" id="fantasia" class="btn" v-on:click="seleccionaCat1" :class="cat1 == true ? 'boton-filtro-sleccionado' : 'boton-filtro'">Fantasía</button>
      <button type="button" name="filtros" id="ciencia-ficcion" class="btn" v-on:click="seleccionaCat2" :class="cat2 == true ? 'boton-filtro-sleccionado' : 'boton-filtro'">Ciencia Ficción</button>
      <button type="button" name="filtros" id="terror" class="btn" v-on:click="seleccionaCat3" :class="cat3 == true ? 'boton-filtro-sleccionado' : 'boton-filtro'">Terror</button>
      <button type="button" name="filtros" id="policial" class="btn" v-on:click="seleccionaCat4" :class="cat4 == true ? 'boton-filtro-sleccionado' : 'boton-filtro'">Policial</button>
    </div>

    <div class="grupo-cards">
      <ListaProductos v-for="(item, key) in productos" 
        v-bind:nombre="item.nombre" 
        v-bind:cantidad="item.cantidad"
        v-bind:precio="item.precio" 
        v-bind:categoria="item.categoria" 
        v-bind:autor="item.autor"
        v-bind:img="item.img" 
        v-bind:imgalt="item.imgalt" 
        v-bind:observacion="item.observacion" 
        v-bind:codigo="key"
        v-bind:key="key"
        v-if="(item.categoria === 'Fantasía' && cat1 === true) || (item.categoria === 'Ciencia Ficción' && cat2 === true) || (item.categoria === 'Terror' && cat3 === true) || (item.categoria === 'Policial' && cat4 === true)">
      </ListaProductos>
    </div>
    
  </section>
</template>


<script>
import ListaProductos from '../components/ListaProductos.vue'

export default {
  components: {
    ListaProductos
  },

  
  created: function() {
    if (localStorage.productos) {
      const productosGuardados = JSON.parse(localStorage.getItem("productos"));
      this.productos = productosGuardados
    }
  },

  data: () => ({
    cat1: true,
    cat2: true,
    cat3: true,
    cat4: true,
    productos: [
      {
        nombre: 'El Señor de los Anillos',
        autor: 'JRR Tolkien',
        cantidad: 0,
        precio: 5000,
        categoria: 'Fantasía',
        img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/ed/77/ed77b8615c4e99183fa8531a90736da2.jpg',
        imgalt: 'Portada de El Señor de los Anillos: La Comunidad del Anillo',
        observacion: '',
        mostrar: false,
      },
      {
        nombre: 'Dune',
        autor: 'Frank Herbert',
        cantidad: 0,
        precio: 4350,
        categoria: 'Ciencia Ficción',
        img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/e7/25/e725760e5c93acdeccf44903ff2fcb94.jpg',
        imgalt: 'Portada de Dune',
        observacion: '',
        mostrar: false,
      },
      {
        nombre: '1984',
        autor: 'George Orwell',
        cantidad: 0,
        precio: 3600,
        categoria: 'Ciencia Ficción',
        img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/10/42/10426f9e9ae4f7cd9eb5d33cef5aa143.jpg',
        imgalt: 'Portada de 1984',
        observacion: '',
        mostrar: false,
      },
      {
        nombre: 'El Resplandor',
        autor: 'Stephen King',
        cantidad: 0,
        precio: 4350,
        categoria: 'Terror',
        img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/df/f6/dff6e1ce324ef328e378029002402afa.jpg',
        imgalt: 'Portada de El Resplandor',
        observacion: '',
        mostrar: false,
      },
      {
        nombre: 'Los hombres que no amaban a las mujeres',
        autor: 'Stieg Larsson',
        cantidad: 0,
        precio: 3950,
        categoria: 'Policial',
        img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/3a/ae/3aae236bb98307f1f64ccbbb8a4894bf.jpg',
        imgalt: 'Portada de Los hombres que no amaban a las mujeres',
        observacion: '',
        mostrar: false,
      },
      {
        nombre: 'Fundación',
        autor: 'Isaac Asimov',
        cantidad: 0,
        precio: 2300,
        categoria: 'Ciencia Ficción',
        img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/85/03/8503014635292675de0774a42898fa4a.jpg',
        imgalt: 'Portada de Fundación',
        observacion: '',
        mostrar: false,
      },
      {
        nombre: 'Juego de Tronos',
        autor: 'George RR Martin',
        cantidad: 0,
        precio: 4100,
        categoria: 'Fantasía',
        img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/c6/27/c6276b30f0c71980dd7ec2a84c41a8b7.jpg',
        imgalt: 'Portada de Juego de Tronos',
        observacion: '',
        mostrar: false,
      },
      {
        nombre: 'Las Cronicas de Narnia',
        autor: 'CS Lewis',
        cantidad: 0,
        precio: 3850,
        categoria: 'Fantasía',
        img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/3e/b7/3eb7fa1d683c5ef60c2e6cc56ce8d40d.jpg',
        imgalt: 'Portada de Las Cronicas de Narnia',
        observacion: '',
        mostrar: false,
      },
      {
        nombre: 'Cronicas Marcianas',
        autor: 'Ray Bradbury',
        cantidad: 0,
        precio: 2750,
        categoria: 'Ciencia Ficción',
        img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/bf/9d/bf9ddc9a99fdcf099a43df45f163b32d.jpg',
        imgalt: 'Portada de Cronicas Marcianas',
        observacion: '',
        mostrar: false,
      },
      {
        nombre: 'Perdida',
        autor: 'Gillian Flynn ',
        cantidad: 0,
        precio: 4450,
        categoria: 'Policial',
        img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/8c/12/8c121e22e1ac90198221fff13a0c932f.jpg',
        imgalt: 'Portada de Perdida',
        observacion: '',
        mostrar: false,
      },
      {
        nombre: 'Los Mitos de Cthulhu',
        autor: 'HP Lovecraft',
        cantidad: 0,
        precio: 5500,
        categoria: 'Terror',
        img: 'https://images.cdn2.buscalibre.com/fit-in/360x360/c4/1f/c41fe3d413a60270ff7db9a9208264f8.jpg',
        imgalt: 'Portada de Cuentos de los Mitos de Cthulhu 1: Los Orígenes',
        observacion: '',
        mostrar: false,
      },
    ]
  }),

  methods: {
    seleccionaTodos: function() {
      this.cat1 = true;
      this.cat2 = true;
      this.cat3 = true;
      this.cat4 = true;
    },

    seleccionaCat1: function() {
      this.cat1 = true;
      this.cat2 = false;
      this.cat3 = false;
      this.cat4 = false;
    },

    seleccionaCat2: function() {
      this.cat1 = false;
      this.cat2 = true;
      this.cat3 = false;
      this.cat4 = false;
    },

    seleccionaCat3: function() {
      this.cat1 = false;
      this.cat2 = false;
      this.cat3 = true;
      this.cat4 = false;
    },

    seleccionaCat4: function() {
      this.cat1 = false;
      this.cat2 = false;
      this.cat3 = false;
      this.cat4 = true;
    },
  }
}
</script>
