<script>
export default {
    props: {
        film: Object
    }
}
</script>

<template lang="">
    <div>
        <p>
            {{ film.original_title }}
        </p>
        <p>
            {{ film.title }}
        </p>
        <p>
            {{ film.original_language }}
        </p>
        <p>
            {{ film.vote_average }}
        </p>
    </div>
</template>

<style lang="scss">

</style>