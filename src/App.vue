<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="goates/gareth">Goates</router-link></li>
            </ul>
        </div>

        <router-view></router-view>
    </div>
</template>

<script lang="ts">
export default {
    name: 'app'
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

ul, li {
    display: inline-block
    
}
</style>
