<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        sendTitle() {
            //posso recuperare nella funzione il valore di title nell'input v-model
            this.$emit('title', this.title)
        }
    },
}
</script>

<template lang="">
    <header>
        <h1>BOOLFIX</h1>
        <div>
            <input class="search-bar" type="text" placeholder="Inserisci il titolo" v-model="title">
            <button class="btn-search" @click="sendTitle">Cerca</button>
        </div>
    </header>
</template>

<style lang="scss">
@use '../styles/partials/variables' as *;

header {
    height: 80px;
    background-color: $black;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: $red;
    }

    .search-bar {
        margin-right: 1rem;
    }
}
</style>