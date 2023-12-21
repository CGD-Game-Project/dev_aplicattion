<script>
// @ts-nocheck

    /**
     * @type {string}
     */
    export let caracter;
    // @ts-ignore
    export let keyPress;
    const keyClass = (caracter == "ENTER" || caracter == "DEL")? "key special" : "key";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={keyClass} on:click={() => keyPress(caracter.toUpperCase())}>
    {caracter.toUpperCase()}
</div>

<style>
    .key {
        background-color: #421d87;
        color: white;
        padding: 20px 18px;
        margin: 4px 3px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color .3s;
    }
    .key:hover {
        background-color: transparent;
    }

    .special {
        padding: 20px 25px;
    }
</style>