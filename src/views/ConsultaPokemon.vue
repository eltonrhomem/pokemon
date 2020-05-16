<template>
  <div id="ConsultaPokemon">
    <h1>{{data.name}}</h1>
    <!-- <p>{{data.sprites.front_default}}</p> -->
    <img :src="`${urlBaseImagemPokemon}${data.id}.png`">
  </div>
</template>

<script>

import Pokemons from '@/services/pokemonServices'

export default {
  //el: ConsultaPokemon,
  data () {

    return {
      data: {},
      response: null,
      foto: '',
      urlBaseImagemPokemon: 'https://pokeres.bastionbot.org/images/pokemon/',

    }
  },
  

  mounted() {
    this.data = Pokemons.listar()
                .then(
                   respostaApi => {this.data = respostaApi.data; console.log(this.data);}  
                );   
    
  },

}
</script>

<style>

</style>