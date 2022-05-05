
<script lang="ts">

import {replace } from "svelte-spa-router";
const handlerBack = () =>{
    replace("/")
}
//replace borra el historial, se suele usar para borrar errores
</script>
<div class="text-center">
    <h1 class="text-danger mt-5">
        404 Not Found Page
    </h1>
    <button class="btn btn-outline-warning" on:click={handlerBack}>Go to home</button>
</div>
