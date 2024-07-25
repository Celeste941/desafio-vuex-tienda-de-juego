import { createStore } from 'vuex'

export default createStore({
  state: {
    games: [
      {
        "codigo": "0001",
        "nombre": "The Forest",
        "stock": "43",
        "precio": "30000",
        "color": "red"
      },
      {
        "codigo": "0002",
        "nombre": "Call of Duty",
        "stock": "55",
        "precio": "25000",
        "color": "blue"
      },
      {
        "codigo": "0003",
        "nombre": "Counter Strike",
        "stock": "12",
        "precio": "15000",
        "color": "green"
      },
      {
        "codigo": "0004",
        "nombre": "Skyrim",
        "stock": "56",
        "precio": "35000",
        "color": "black"
      },
      {
        "codigo": "0005",
        "nombre": "Bloodborne",
        "stock": "12",
        "precio": "10000",
        "color": "blue"
      },
      {
        "codigo": "0006",
        "nombre": "Forza Horizon 4",
        "stock": "4",
        "precio": "20000",
        "color": "red"
      }
    ]
  },
  mutations: {
    incrementoStock(state, codigo) {
      const game = state.games.find(game => game.codigo === codigo);
      if (game) {
        game.stock++;
        //console.log(game);
      }
    },
    decrementoStock(state, codigo) {
      const game = state.games.find(game => game.codigo === codigo);
      if (game && game.stock > 0) {
        game.stock--;
        //console.log(game);
      }
    },
  },
  actions: {
    incrementarStock(context, codigo) {
      context.commit('incrementoStock', codigo);
    },
    decrementarStock(context, codigo) {
      context.commit('decrementoStock', codigo);
    }
  },  
})
