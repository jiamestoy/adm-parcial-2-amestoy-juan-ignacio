<template>
  <section>
    <h2>Modificar Productos</h2>
    <div :style="(modalConfirmarEliminar == true) || (modalConfirmarModificar == true) ? 'opacity:0.5' : 'opacity: 1'">
      <div v-for="(item, key) of productos" v-bind:key="key">
        <form>
          <div class="modificar-producto">
            <div v-bind:id="key" class="enlace-ancla"></div>      
            <h3>{{item.nombre | mayuscula}}</h3>


            <v-btn
              color="primary"
              depressed
              elevation="4"
              large
              plain
              v-on:click="mostrarFormulario(item)"
              class="boton-unico"
              v-show="!item.mostrar"
            >Mostrar Formulario</v-btn>


        

            <div v-show="item.mostrar">
              <label for="nombre">Modificar Nombre del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text campo-modificar" id="inputGroup-sizing-lg">Nombre</span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="nombre" name="nombre" v-model="item.nombre">
            </div>

              <label for="autor">Modificar Autor del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text campo-modificar" id="inputGroup-sizing-lg">Autor</span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="autor" name="autor" v-model="item.autor">
              </div>

              <label for="cantidad">Modificar Cantidad de Unidades del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text campo-modificar" id="inputGroup-sizing-lg">Cantidad</span>
                <input type="number" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="cantidad" name="cantidad" v-model="item.cantidad"
                  min="0">
              </div>

              <label for="precio">Modificar Precio del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text campo-modificar" id="inputGroup-sizing-lg">Precio</span>
                <input type="number" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="precio" name="precio" v-model="item.precio" min="0">
              </div>

              <label for="categoria">Modificar Género del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text campo-modificar" id="inputGroup-sizing-lg">Género</span>
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
                <span class="input-group-text campo-modificar" id="inputGroup-sizing-lg">URL de la Portada</span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="img" name="img" v-model="item.img">
              </div>

              <label for="imgalt">Modificar Descripción de la Portada del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text campo-modificar" id="inputGroup-sizing-lg">Descripción de la Portada</span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="imgalt" name="imgalt" v-model="item.imgalt">
              </div>

              <label for="observacion">Agregar o Modificar Observacion del Libro</label>
              <div class="input-group input-group-lg">
                <span class="input-group-text campo-modificar" id="inputGroup-sizing-lg">Observación</span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg" id="observacion" name="observacion"
                  v-model="item.observacion">
              </div>
              <div class="grupo-botones">

                <v-btn
                  color="primary"
                  depressed
                  elevation="4"
                  large
                  plain
                  class="botones-modificar"
                  v-on:click="modificarProducto(item)"
                >Guardar Cambios</v-btn>

                <v-btn
                  color="primary"
                  depressed
                  elevation="4"
                  large
                  plain
                  class="botones-modificar"
                  v-on:click="eliminarProducto(item)"
                >Eliminar Libro</v-btn>

                <v-btn
                  color="primary"
                  depressed
                  elevation="4"
                  large
                  plain
                  class="botones-modificar"
                  v-on:click="ocultarFormulario(item)"
                >Ocultar Formulario</v-btn>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>


    <div v-show="modalConfirmarModificar" class="modalConfirmarModificar">
      <h3>¿Estás seguro que querés modificar el libro {{libroParaModificar.nombre}}?</h3>
      <div class="grupo-botones">

        <v-btn
          depressed
          elevation="4"
          large
          plain
          v-on:click="confirmarModificarProducto()"
          class="btn-modal-agregar"
        >Si, confirmar</v-btn>

        <v-btn
          depressed
          elevation="4"
          large
          plain
          v-on:click="cancelarModificarProducto()"
          class="btn-modal-agregar"
        >No, cancelar</v-btn>

      </div>
  </div>

    <div v-show="modalConfirmarEliminar" class="modalConfirmarEliminar">
      <h3>¿Estás seguro que querés eliminar el libro {{libroParaEliminar.nombre}}?</h3>
      <div class="grupo-botones">

        <v-btn
          depressed
          elevation="4"
          large
          plain
          v-on:click="confirmarEliminarProducto()"
          class="btn-modal-agregar"
        >Si, confirmar</v-btn>

        <v-btn
          depressed
          elevation="4"
          large
          plain
          v-on:click="cancelarEliminarProducto()"
          class="btn-modal-agregar"
        >No, cancelar</v-btn>

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