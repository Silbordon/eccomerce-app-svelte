<script lang="ts">

    import { push, link } from "svelte-spa-router";
    import {user} from "../stores/authStore";
    import {firebase} from "../firebase/config";

    const handlerLogin = () => {
        push("/login")
    };

    const handlerRegister = () => {
        push("/register")
    };

    const handlerLogOut = async() =>{
        await firebase.auth().signOut();
    }

</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <span class="navbar-brand">E-Commerce</span>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a use:link class="nav-link" aria-current="page" href="/"
                        >Home</a
                    >
                </li>
                <li class="nav-item">
                    <a use:link class="nav-link" href="/products">Products</a>
                </li>
            </ul>
            <div class="d-flex">
                <!-- con el signo $ le decimos que esa variable sea reactiva -->
                {#if $user}
                <button
                class="btn btn-danger mx-2"
                on:click={handlerLogOut}>Log out</button
            >
                {:else}
                <button
                class="btn btn-outline-success mx-2"
                on:click={handlerLogin}>Login</button
            >
            <button class="btn btn-outline-info" on:click={handlerRegister}
                >Register</button
            >
                {/if}

            </div>
        </div>
    </div>
</nav>
