import App from './App.svelte';

const app = new App({
	target: document.body,
	/* It's passing the value of `name` to the `App` component. */
	// props: {
	// 	name: 'world'
	// }
});

export default app;