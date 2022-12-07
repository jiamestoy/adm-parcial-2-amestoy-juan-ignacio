  <template>


    <v-card
        class="mx-auto card-productos"
        max-width="344"
      >

      <v-img
        contain
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="300"
        max-width="500"
        :src="img"
        :alt="imgalt"
      ></v-img>

        <v-card-title>
          {{nombre | mayuscula}}
        </v-card-title>

        <p v-if="cantidad > 1" class="con-stock"> {{cantidad}} UNIDADES</p>
        <p v-else-if="cantidad == 1" class="con-stock"> ÚLTIMA UNIDAD</p>
        <p v-else class="sin-stock">SIN STOCK</p>


        <v-card-actions>
          <v-btn
            color="orange lighten-2"
            @click="show = !show"
            text
          >
            Ver Más
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              $ {{precio}}
            </v-card-text>
            <v-card-text v-if="observacion != ''">
              Observación: {{observacion | mayuscula}}
            </v-card-text>
            <v-card-text>
              {{categoria}}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
  </template>

  
  
  <script>
  export default {
    name: 'ListaProductos',
    props: ['nombre', 'cantidad', 'precio', 'categoria', 'autor', 'img', 'imgalt', 'observacion', 'codigo'],
    filters: {
        mayuscula: function(value) {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
        }
    },
    data: () => ({
      show: false,
    }),
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>  