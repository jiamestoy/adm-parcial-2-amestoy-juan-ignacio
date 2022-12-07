<template>
  <div>
    <h2>Agregar Productos</h2>
    <section class="agregar-producto" :style="(modalConfirmarAgregar == true) ? 'opacity:0.5' : 'opacity: 1'">
      <form>
        <label for="nuevonombre">Nombre</label>
        <div class="input-group input-group-lg">
          <div class="input-group-text" id="inputGroup-sizing-lg" :class="errorNombre == true ? 'div-campo-rojo' : 'div-campo'">
            <p class="rotulo">Nombre del Libro</p>
            <p v-show="errorNombre" class="error">Debe completar el campo</p>
          </div>
          <input type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg" id="nuevonombre" name="nuevonombre">
        </div>

        <label for="nuevoautor">Autor</label>
        <div class="input-group input-group-lg">


          <div class="input-group-text" id="inputGroup-sizing-lg" :class="errorAutor == true ? 'div-campo-rojo' : 'div-campo'">
            <p class="rotulo">Autor del Libro</p>
            <p v-show="errorAutor" class="error">Debe completar el campo</p>
          </div>

          <input type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg" id="nuevoautor" name="nuevoautor">
        </div>

        <label for="nuevacantidad">Cantidad</label>
        <div class="input-group input-group-lg">
          <div class="input-group-text" id="inputGroup-sizing-lg" :class="(errorCantidad == true) || (errorCantidad2 == true) || (errorCantidad3 == true) ? 'div-campo-rojo' : 'div-campo'">
            <p class="rotulo">Cantidad de Unidades</p>
            <p v-show="errorCantidad" class="error">Debe completar el campo</p>
            <p v-show="errorCantidad2" class="error">Debe ingresar un número</p>
            <p v-show="errorCantidad3" class="error">El número no debe ser menor a 0</p>
          </div>
          <input type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg" id="nuevacantidad" name="nuevacantidad" min="0">
          
        </div>

        <label for="nuevoprecio">Precio</label>
        <div class="input-group input-group-lg">
          <div class="input-group-text" id="inputGroup-sizing-lg" :class="(errorPrecio == true) || (errorPrecio2 == true) || (errorPrecio3 == true) ? 'div-campo-rojo' : 'div-campo'">
            <p class="rotulo">Precio del Libro</p>
            <p v-show="errorPrecio" class="error">Debe completar el campo</p>
            <p v-show="errorPrecio2" class="error">Debe ingresar un número</p>
            <p v-show="errorPrecio3" class="error">El número debe ser mayor a 0</p>
          </div>
          <input type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg" id="nuevoprecio" name="nuevoprecio" min="0">
        </div>

        <label for="nuevacategoria">Género</label>
        <div class="input-group input-group-lg">
          <span class="input-group-text div-campo" id="inputGroup-sizing-lg">Género del Libro</span>
          <select class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
            id="nuevacategoria" name="nuevacategoria">
            <option value="Fantasía">Fantasía</option>
            <option value="Ciencia Ficción">Ciencia Ficción</option>
            <option value="Terror">Terror</option>
            <option value="Policial">Policial</option>
          </select>
        </div>

        <label for="nuevoimg">URL de la Portada</label>
        <div class="input-group input-group-lg">
          <div class="input-group-text" id="inputGroup-sizing-lg" :class="errorImg == true ? 'div-campo-rojo' : 'div-campo'">
            <p class="rotulo">URL de la Portada del Libro</p>
            <p v-show="errorImg" class="error">Debe completar el campo</p>
          </div>
          <input type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg" id="nuevoimg" name="nuevoimg">
        </div>

        <label for="nuevoimgalt">Descripción de la Portada</label>
        <div class="input-group input-group-lg">
          <div class="input-group-text" id="inputGroup-sizing-lg" :class="errorImgalt == true ? 'div-campo-rojo' : 'div-campo'">
            <p class="rotulo">Descripción de la Portada del Libro</p>
            <p v-show="errorImgalt" class="error">Debe completar el campo</p>
          </div>
          <input type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg" id="nuevoimgalt" name="nuevoimgalt">
        </div>

        <label for="nuevaobservacion">Observación</label>
        <div class="input-group input-group-lg">
          <span class="input-group-text div-campo" id="inputGroup-sizing-lg">Observación del Libro</span>
          <input type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg" id="nuevaobservacion" name="nuevaobservacion">
        </div>

        <v-btn
          color="primary"
          depressed
          elevation="4"
          large
          plain
          v-on:click="agregarLibro()"
          class="boton-unico"
        >Agregar Libro</v-btn>
        
      </form>      
    </section>

    <div v-show="modalConfirmarAgregar" class="modalConfirmarAgregar">
      <h3>¿Estás seguro que querés agregar el libro?</h3>
      <h4>{{libroParaConfrimar.nombre}}</h4>
      <img :src="libroParaConfrimar.img" :alt="libroParaConfrimar.imgalt">
      <ul>
          <li>Autor: {{libroParaConfrimar.autor}}</li>
          <li>Cantidad: {{libroParaConfrimar.cantidad}} unidades</li>
          <li>Precio: $ {{libroParaConfrimar.precio}}</li>
          <li>Género: {{libroParaConfrimar.categoria}}</li>
          <li>Observación: {{libroParaConfrimar.observacion}}</li>
      </ul>
      <div class="grupo-botones">

        <v-btn
          depressed
          elevation="4"
          large
          plain
          v-on:click="guardarLibro()"
          class="btn-modal-agregar"
        >Si, confirmar</v-btn>

        <v-btn
          depressed
          elevation="4"
          large
          plain
          v-on:click="cancelarGuardar()"
          class="btn-modal-agregar"
        >No, cancelar</v-btn>

      </div>
      
    </div>

  </div>
</template>

<script>

class Producto {
  nombre = '';
  autor = '';
  cantidad = '';
  precio = '';
  categoria = '';
  img = '';
  imgalt = '';
  observacion = '';
  mostrar = '';
}


export default {

  created: function() {
    if (localStorage.productos) {
      const productosGuardados = JSON.parse(localStorage.getItem("productos"));
      this.productos = productosGuardados
    }
  },

  data: () => ({
    modalConfirmarAgregar: false,
    libroParaConfrimar: '',
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
  }),

  methods: {
    
    agregarLibro: function() {
      let libro = new Producto();
      libro.nombre = nuevonombre.value;
      libro.autor = nuevoautor.value;
      libro.cantidad = nuevacantidad.value;
      libro.precio = nuevoprecio.value;
      libro.categoria = nuevacategoria.value;
      libro.img = nuevoimg.value;
      libro.imgalt = nuevoimgalt.value;
      libro.observacion = nuevaobservacion.value;
      libro.mostrar = false;

      if (libro.nombre == '') {
        this.errorNombre = true;
      } else if (libro.autor == '') {
        this.errorNombre = false;
        this.errorAutor = true;
      } else if (libro.cantidad == '') {
        this.errorAutor = false;
        this.errorCantidad = true;
        this.errorCantidad2 = false;
        this.errorCantidad3 = false;
      } else if (isNaN(libro.cantidad)) {
        this.errorAutor = false;
        this.errorCantidad = false;
        this.errorCantidad2 = true;
        this.errorCantidad3 = false;
      } else if (libro.cantidad < 0) {
        this.errorAutor = false;
        this.errorCantidad = false;
        this.errorCantidad2 = false;
        this.errorCantidad3 = true;
      } else if (libro.precio == '') {
        this.errorCantidad = false;
        this.errorCantidad2 = false;
        this.errorCantidad3 = false;
        this.errorPrecio = true;
        this.errorPrecio2 = false;
        this.errorPrecio3 = false;
      } else if (isNaN(libro.precio)) {
        this.errorCantidad = false;
        this.errorCantidad2 = false;
        this.errorCantidad3 = false;
        this.errorPrecio = false;
        this.errorPrecio2 = true;
        this.errorPrecio3 = false;
      } else if (libro.precio <= 0) {
        this.errorCantidad = false;
        this.errorCantidad2 = false;
        this.errorCantidad3 = false;
        this.errorPrecio = false;
        this.errorPrecio2 = false;
        this.errorPrecio3 = true;
      } else if (libro.img == '') {
        this.errorPrecio = false;
        this.errorPrecio2 = false;
        this.errorPrecio3 = false;
        this.errorImg = true;
      } else if (libro.imgalt == '') {
        this.errorImg = false;
        this.errorImgalt = true;
      } else {
        this.errorNombre = false;
        this.errorAutor = false;
        this.errorCantidad = false;
        this.errorCantidad2 = false;
        this.errorCantidad3 = false;
        this.errorPrecio = false;
        this.errorPrecio2 = false;
        this.errorPrecio3 = false;
        this.errorImg = false;
        this.errorImgalt = false;
        this.modalConfirmarAgregar = true;
      }
      this.libroParaConfrimar = libro;
    },

    guardarLibro: function() {
      this.productos.push(this.libroParaConfrimar);
      localStorage.setItem("productos", JSON.stringify(this.productos));
      this.modalConfirmarAgregar = false;
      this.libroParaConfrimar = '';

      this.nuevonombre.value = '';
      this.nuevoautor.value = '';
      this.nuevacantidad.value = '';
      this.nuevoprecio.value = '';
      this.nuevoimg.value = '';
      this.nuevoimgalt.value = '';
      this.nuevaobservacion.value = '';

    },

    cancelarGuardar: function() {
      this.modalConfirmarAgregar = false;
      this.libroParaConfrimar = '';
    }
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