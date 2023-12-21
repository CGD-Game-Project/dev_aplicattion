<script>
    import { board, criação_da_tabela, GAME_WORD, colors, gameInfo, guess, gameOver } from "../grade"
    import Board from "./board.svelte";

    const playAgain = () => {

        const wordList = ['CARNE', 'CORTE', 'TERMO', 'MEXER', 'SENSO', 'NOBRE', 'AFETO', 'FAZER', 'PLENA', 'VIGOR', 'DURMA', 'PODER', 'MORAL', 'SOBRE', 'JUSTO', 'IDEIA', 'AMIGO', 'HONRA', 'LAPSO', 'EXPOR', 'DENGO', 'TEMPO', 'SUTIL', 'CERTO', 'VIRIL', 'ORDEM', 'OLHAR', 'OUVIR', 'OBTER', 'OPACO', 'OMBRO', 'OSTRA', 'URINA', 'URUBU', 'UNIDO', 'USADA', 'UNHAS', 'BREGA', 'BRAVO', 'BRISA', 'BREVE', 'BIRRA', 'BANDO', 'BESTA', 'BICHO', 'BIOMA', 'BOLSA', 'BARRO', 'BEBER', 'BAHIA', 'BOATE', 'BLOCO', 'COMUM', 'CALMA', 'CESTA', 'CRUEL', 'CHUVA', 'COMER', 'CAIXA', 'CALDA', 'CLIMA', 'LOUCO', 'LENDA', 'LEITE', 'LONGE', 'LINHA', 'LETRA', 'LUTAR', 'LUCRO', 'LOMBO', 'LAGOA', 'LISTA', 'LERDO', 'LARVA', 'LAVAR', 'VELHO', 'VETOR', 'VULTO', 'VERBA', 'VIGIA', 'VERDE', 'VENTO', 'VINHO', 'VISGO', 'VOGAL', 'VOZES', 'VASCO', 'GENRO', 'GENTE', 'GRUPO', 'GRUTA', 'GALHO', 'GNOMO', 'GRILO', 'GRIPE', 'GARFO', 'POSTE', 'PRESA', 'PALHA', 'POBRE', 'PAPEL', 'PLANO', 'PEIXE', 'PRAIA', 'PEDRA', 'PORTA', 'PIADA', 'POEMA', 'CACTO', 'PLACA', 'PULGA', 'PORCO', 'PULAR', 'CORNO', 'LIVRE', 'TURMA', 'DENTE', 'SAGAZ']

        const word = wordList[Math.floor(Math.random() * wordList.length)];
        GAME_WORD.set(word)
        gameInfo.set({
            tentativa: 0, caracter: 0
        });
        guess.set("");
        colors.set(criação_da_tabela());
        board.set(criação_da_tabela());
        gameOver.set(false);
    }
</script>

<div class="center">
    <h3>A palavra certa era: <strong>{$GAME_WORD}</strong></h3>
    <h3>Ultima palavra digitada: <strong>{$guess}</strong></h3>
</div>

<Board />

<div class="center">
    <button on:click={playAgain}>Jogar Novamente</button>
</div>

<style>
    strong {
        font-weight: 200;
        color: white;
    }
    h3 {
        font-size: 2em;
        color: white;
    }

    button {
        background-color:#421d87;
        color: white;
        cursor: pointer;
        border: none;
        padding: 1em;
    }

    .center {
        margin-top: 7vh;
        margin-left: auto;
        margin-right: auto;
        width: fit-content;
        text-align: center;
    }
</style>