<template>
    <ul>
        <Game
          @game-clicked="handleGameClick"
          :game="game"
          v-for="game in games"
          :key="game.id"/>
    </ul>
</template>

<script>
import Game from '@/components/Game.vue';

export default {
  name: 'GameList',
  props: {
    games: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleGameClick() {
      // Do something
    },
    /*
    handleGameClick(game) {
      console.log(game);
    },
    */
  },
  components: {
    Game,
  },
};
</script>

<style lang="scss">
ul {
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>
