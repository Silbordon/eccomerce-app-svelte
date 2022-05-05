<script lang="ts">
    import { onMount } from "svelte";
    import { products } from "../stores/productStore";
    import { db } from "../models/db";
import Product from "./Product.svelte";

    //cada vez que montamos el componente 
    onMount(() =>{
        products.set(db);
    })


</script>
<!-- con el signo $ accedemos al valor y sus funciones segun el tipo del writable o readable -->
<div class="row mt-3">
    {#each $products as product}
        <div class="col-12 col-md-4">
            <Product {product} />
        </div>
    {/each}
</div>
