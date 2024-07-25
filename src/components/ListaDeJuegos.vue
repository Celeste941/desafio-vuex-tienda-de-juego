<template>
  <div>
    <header>
      <h1>TIENDA 32 BITS</h1>
      <p>Lista de juegos</p>
    </header>
    <table class="games-table">
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Color</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" :key="game.codigo">
          <td>{{ game.codigo }}</td>
          <td>{{ game.nombre }}</td>
          <td>{{ game.stock }}</td>
          <td>{{ game.precio }}</td>
          <td>{{ game.color }}</td>
          <td>
            <button class="action-button increment" @click="incrementarStock(game.codigo)">+</button>
            <button class="action-button decrement" @click="decrementarStock(game.codigo)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';
  
  export default {
    name: 'ListaDeJuegos',
    computed: {
      ...mapState(['games'])
    },
    methods: {
      ...mapActions(['incrementarStock', 'decrementarStock'])
    }
  };
  </script>
  
  <style>
  header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  h1 {
    font-family: 'Arial', sans-serif;
    font-size: 2.5em;
    color: #4A90E2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin: 0;
  }
  
  p {
    font-size: 1.2em;
    color: #666;
    margin-top: 10px;
  }
  
  .games-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    text-align: left;
  }
  
  .games-table th, .games-table td {
    padding: 12px;
    border: 1px solid #ddd;
  }
  
  .games-table th {
    background-color: #f4f4f4;
    color: #333;
    font-weight: bold;
  }
  
  .games-table tr:hover {
    background-color: #f1f1f1;
  }
  
  .action-button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  
  .increment {
    background-color: #4CAF50;
  }
  
  .increment:hover {
    background-color: #45a049;
  }
  
  .decrement {
    background-color: #f44336;
  }
  
  .decrement:hover {
    background-color: #e53935;
  }
  </style>
  