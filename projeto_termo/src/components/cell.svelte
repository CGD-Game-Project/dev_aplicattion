<script>
    import { board, colors} from "../grade"
    // @ts-ignore
    export let i;
    // @ts-ignore
    export let j;
   // @ts-ignore
     $: letra = $board[j][i];
     $: cor = $colors[j][i];
</script>

<div class = {`cell ${cor}`}>
    {letra}
</div>

<style>
    .cell {
        background-color: #CCB3A7;
        border: none;
        width: 8vh;
        height: 8vh;
        margin-top: 1vh;
        margin-right: 0.8vh;
        border-radius: 1vh;
        cursor: pointer;
        color: black;
        font-size: 36px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color .7s;
    }

    .correto {
        background-color: var(--ciano);
    }
    .meiocerta{
        background-color: var(--laranja);
    }
    .errado{
        background-color: var(--marrom);
    }
</style>