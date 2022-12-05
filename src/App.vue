<template>
  <div :style="(modalConfirmarAgregar == true) || (modalConfirmarEliminar == true) || (modalConfirmarModificar == true) ? 'opacity:0.5' : 'opacity: 1'">
    <ul class="nav nav-tabs fixed-bottom barra-navegacion">
      <li class="nav-item">
        <a href="#listado"><img src="img/lista.png"> Listado</a>
      </li>

      <li class="nav-item">
        <a href="#modificar"><img src="img/editar.png"> Modificar</a>
      </li>

      <li class="nav-item">
        <a href="#agregar"><img src="img/agregar.png"> Agregar</a>
      </li>
    </ul>

    <CabeceraApp></CabeceraApp>

    <main>
      <div id="listado" class="enlace-ancla"></div>
      <section>
        <h2>Listado de Productos</h2>

        <div class="filtros">
          <button type="button" name="filtros" id="todos" class="btn" checked v-on:click="seleccionaTodos" :class="(cat1 == true) && (cat2 == true) && (cat3 == true) && (cat4 == true) ? 'boton-filtro-sleccionado' : 'boton-filtro'">Todos</button>
          <button type="button" name="filtros" id="fantasia" class="btn" v-on:click="seleccionaCat1" :class="cat1 == true ? 'boton-filtro-sleccionado' : 'boton-filtro'">Fantasía</button>
          <button type="button" name="filtros" id="ciencia-ficcion" class="btn" v-on:click="seleccionaCat2" :class="cat2 == true ? 'boton-filtro-sleccionado' : 'boton-filtro'">Ciencia Ficción</button>
          <button type="button" name="filtros" id="terror" class="btn" v-on:click="seleccionaCat3" :class="cat3 == true ? 'boton-filtro-sleccionado' : 'boton-filtro'">Terror</button>
          <button type="button" name="filtros" id="policial" class="btn" v-on:click="seleccionaCat4" :class="cat4 == true ? 'boton-filtro-sleccionado' : 'boton-filtro'">Policial</button>
        </div>

        <div>
          <ListaProductos v-for="(item, key) in productos" v-bind:nombre="item.nombre" v-bind:cantidad="item.cantidad"
            v-bind:precio="item.precio" v-bind:categoria="item.categoria" v-bind:autor="item.autor"
            v-bind:img="item.img" v-bind:imgalt="item.imgalt" v-bind:observacion="item.observacion" v-bind:codigo="key"
            v-if="(item.categoria === 'Fantasía' && cat1 === true) || (item.categoria === 'Ciencia Ficción' && cat2 === true) || (item.categoria === 'Terror' && cat3 === true) || (item.categoria === 'Policial' && cat4 === true)">
          </ListaProductos>
        </div>
      </section>

      <div id="modificar" class="enlace-ancla"></div>
      <section>
        <h2>Modificar Productos</h2>
        <div>
          <div v-for="(item, key) of productos">
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
                      <button type="button" v-on:click="modificarProducto()">Guardar Cambios</button>
                      <button type="button" v-on:click="eliminarProducto()">Eliminar Libro</button>
                      <button type="button" v-on:click="ocultarFormulario(item)">Ocultar Formulario</button>
                  </div>

                  <div v-show="modalConfirmarModificar" class="modalConfirmarModificar">
                    <h3>¿Estás seguro que querés modificar el libro {{item.nombre}}?</h3>
                    <div class="grupo-botones">
                        <button type="button" v-on:click="confirmarModificarProducto()">Si, confirmar</button>
                        <button type="button" v-on:click="cancelarModificarProducto()">No, cancelar</button>
                    </div>
                  </div>

                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div id="agregar" class="enlace-ancla"></div>
      <section class="agregar-producto">
        <h2>Agregar Productos</h2>
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

          <button type="button" v-on:click="agregarLibro()" data-toggle="modal" data-target="#exampleModal" class="boton-unico">Agregar Libro</button>
        </form>
      </section>
    </main>

  </div>

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
        <button type="button" v-on:click="guardarLibro()">Si, confirmar</button>
        <button type="button" v-on:click="cancelarGuardar()">No, cancelar</button>
    </div>
  </div>

  <div v-show="modalConfirmarEliminar" class="modalConfirmarEliminar">
    <h3>¿Estás seguro que querés eliminar el libro {{libroParaEliminar}}?</h3>
    <div class="grupo-botones">
      <button type="button" v-on:click="confirmarEliminarProducto()">Si, confirmar</button>
      <button type="button" v-on:click="cancelarEliminarProducto()">No, cancelar</button>
    </div>
  </div>
</template>

<script>
import CabeceraApp from './components/CabeceraApp.vue';
import ListaProductos from './components/ListaProductos.vue';



export default {
  name: 'App',
  components: {
    CabeceraApp,
    ListaProductos
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
