<template>
    <div>
        <h1>{{ fullMessage }}</h1>
    </div>
</template>

<script lang="ts">

import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';

@Component({})
export default class Goates extends Vue {
    message: string = 'Fit like en?';

    @Prop() gareth: string 

    get fullMessage() {
        return `${this.message} : ${this.gareth}`;
    }
}
</script>

<style scoped>
h1, h2 {
    font-weight: normal;
}
</style>
