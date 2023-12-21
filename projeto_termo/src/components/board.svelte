<script>
    import { board } from "../grade";
    import Cell from "./cell.svelte";
</script>

<div class="game-board">
    {#each $board as column, j}
        <div class="linha">
            {#each column as linha, i}
                <Cell {j} {i}/>
            {/each}
        </div>
    {/each}
</div>

<style>
    .game-board {
        margin: 6vh auto;
        width: fit-content;
    }
    .linha {
        display: flex;
    }
</style>