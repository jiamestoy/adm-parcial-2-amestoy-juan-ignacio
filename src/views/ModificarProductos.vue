<template>
  <section>
    <h2>Modificar Productos</h2>
    <div :style="(modalConfirmarEliminar == true) || (modalConfirmarModificar == true) ? 'opacity:0.5' : 'opacity: 1'">
      <div v-for="(item, key) of productos" v-bind:key="key">
        <form>
          <div class="modificar-producto">
            <div v-bind:id="key" class="enlace-ancla"></div>      
            <h3>{{item.nombre | mayuscula}}</h3>
            <button type="button" v-on:click="mostrarFormulario(item)" v-show="!item.mostrar" class="boton-unico">Mostrar Formulario</button>

            <div v-show="item.mostrar">
              <label for="nombre">Modificar Nombre del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">Nombre</span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="nombre" name="nombre" v-model="item.nombre">
            </div>

              <label for="autor">Modificar Autor del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">Autor</span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="autor" name="autor" v-model="item.autor">
              </div>

              <label for="cantidad">Modificar Cantidad de Unidades del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">Cantidad</span>
                <input type="number" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="cantidad" name="cantidad" v-model="item.cantidad"
                  min="0">
              </div>

              <label for="precio">Modificar Precio del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">Precio</span>
                <input type="number" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="precio" name="precio" v-model="item.precio" min="0">
              </div>

              <label for="categoria">Modificar Género del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">Género</span>
                <select class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="categoria" name="categoria" v-model="item.categoria">
                  <option value="Fantasía">Fantasía</option>
                  <option value="Ciencia Ficción">Ciencia Ficción</option>
                  <option value="Terror">Terror</option>
                  <option value="Policial">Policial</option>
                </select>
              </div>

              <label for="img">Modificar URL de la Portada del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">URL de la Portada</span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="img" name="img" v-model="item.img">
              </div>

              <label for="imgalt">Modificar Descripción de la Portada del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">Descripción de la Portada</span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="imgalt" name="imgalt" v-model="item.imgalt">
              </div>

              <label for="observacion">Agregar o Modificar Observacion del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">Observación</span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="observacion" name="observacion"
                  v-model="item.observacion">
              </div>
              <div class="grupo-botones">
                  <button type="button" v-on:click="modificarProducto(item)">Guardar Cambios</button>
                  <button type="button" v-on:click="eliminarProducto(item)">Eliminar Libro</button>
                  <button type="button" v-on:click="ocultarFormulario(item)">Ocultar Formulario</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>


    <div v-show="modalConfirmarModificar" class="modalConfirmarModificar">
      <h3>¿Estás seguro que querés modificar el libro {{libroParaModificar.nombre}}?</h3>
      <div class="grupo-botones">
          <button type="button" v-on:click="confirmarModificarProducto()">Si, confirmar</button>
          <button type="button" v-on:click="cancelarModificarProducto()">No, cancelar</button>
      </div>
  </div>

    <div v-show="modalConfirmarEliminar" class="modalConfirmarEliminar">
      <h3>¿Estás seguro que querés eliminar el libro {{libroParaEliminar.nombre}}?</h3>
      <div class="grupo-botones">
        <button type="button" v-on:click="confirmarEliminarProducto()">Si, confirmar</button>
        <button type="button" v-on:click="cancelarEliminarProducto()">No, cancelar</button>
      </div>
    </div>
    
  </section>
</template>

<script>

export default {
  created: function() {
    if (localStorage.productos) {
      const productosGuardados = JSON.parse(localStorage.getItem("productos"));
      this.productos = productosGuardados
    }
  },

  data: () => ({
    errorNombre: false,
    errorAutor: false,
    errorCantidad: false,
    errorCantidad2: false,
    errorCantidad3: false,
    errorPrecio: false,
    errorPrecio2: false,
    errorPrecio3: false,
    errorImg: false,
    errorImgalt: false,
    modalConfirmarModificar: false,
    modalConfirmarEliminar: false,
    libroParaModificar: '',
    libroParaEliminar: '',
    productos: [
      {
        nombre: 'El Señor de los Anillos: La Comunidad del Anillo',
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
        nombre: 'Cuentos de los Mitos de Cthulhu 1: Los Orígenes',
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
    
    mostrarFormulario: function(item) {
      item.mostrar = true;
    },

    ocultarFormulario: function(item) {
      item.mostrar = false;
      localStorage.setItem("productos", JSON.stringify(this.productos));
    },

    modificarProducto: function(libro) {
      this.modalConfirmarModificar = true;
      this.libroParaModificar = libro;
    },

    confirmarModificarProducto: function() {
      localStorage.setItem("productos", JSON.stringify(this.productos));
      this.libroParaModificar = '';
      this.modalConfirmarModificar = false;      
    },

    cancelarModificarProducto: function() {
      this.libroParaModificar = '';
      this.modalConfirmarModificar = false;      
    },

    eliminarProducto: function(libro) {
      this.modalConfirmarEliminar = true;
      this.libroParaEliminar = libro;
    },

    confirmarEliminarProducto: function() {

      this.productos.splice(this.productos.indexOf(this.libroParaEliminar), 1);
      localStorage.setItem("productos", JSON.stringify(this.productos));
      this.libroParaEliminar = '';
      this.modalConfirmarEliminar = false;

    },

    cancelarEliminarProducto: function() {
      this.libroParaEliminar = '';
      this.modalConfirmarEliminar = false;      
    },
  },

  filters: {
    mayuscula: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

}
</script>