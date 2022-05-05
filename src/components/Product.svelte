<script lang="ts">
import { cart } from "../stores/productStore";



export let product:any;

const handleAddCart = () =>{
    cart.set([...$cart, product])
    console.log($cart)
}
</script>

<div class="card m-3" style="width:18rem">
    <img 
        src={product.img} 
        alt={product.nombre} 
        class="card-img-top" 
        loading="lazy">
    <div class="card-body">
        <h5 class="card-title">{product.nombre}</h5>
        <p class="card-text">${product.precio} USD</p>
        <button
            on:click="{handleAddCart}" 
            class="btn btn-primary">
            Agregar al carrito
        </button>
    </div>
</div>