<script lang="ts">
	import { onMount } from "svelte";
	import { firebase } from "./firebase/config";
	import Router from "svelte-spa-router";
	import NavBar from "./components/NavBar.svelte";
	import { routes } from "./router/router";
	import { user } from "./stores/authStore";
	import Cart from "./components/Cart.svelte";

	onMount(() => {
		firebase.auth().onAuthStateChanged((userLog) => {
			if (userLog) {
				user.set(userLog);
			} else {
				user.set(null);
			}
		});
	});
</script>

<div>
	<NavBar />
	<div class="container text-center">
		<Cart />
	</div>
	<Router {routes} />
</div>
