<script>
    import Key from "./key.svelte";
    import { board, colors, gameInfo, GAME_WORD, guess, gameOver } from "../grade";

    const linha1 = ['q','w','e','r','t','y','u','i','o','p'];
    const linha2 = ['a','s','d','f','g','h','j','k','l'];
    const linha3 = ['ENTER','z','x','c','v','b','n','m','DEL'];

    const handleDel = () => {
        if($gameInfo.caracter === 0)
            return;

        gameInfo.update((prev) => {
            return{
                caracter: prev.caracter - 1,
                tentativa: prev.tentativa
            }
        });

        board.update((prevBoard) => {
            const newBoard = prevBoard;
            newBoard[$gameInfo.tentativa][$gameInfo.caracter] = "";
            return newBoard;
        });
    
    }
    const handleEnter = () => {
        let { tentativa, caracter} = $gameInfo

        if (caracter !== 5)
            return;

        gameInfo.set({
            tentativa: tentativa + 1,
            caracter: 0
        });

        const prevTentativa = $gameInfo.tentativa - 1;
        const newColorsBoard = $colors;

        const caracteresduplicados = new Set();
        
        for(let i = 0; i < 5; i++){
            let caracter = $board[prevTentativa][i].toUpperCase();
            guess.update((prevCaracteres) => prevCaracteres + caracter);

            if($GAME_WORD[i].toUpperCase() === caracter)
                newColorsBoard[prevTentativa][i] = "correto";

            else if($GAME_WORD.toUpperCase().includes(caracter)){

                if(!caracteresduplicados.has(caracter)) {
                    newColorsBoard[prevTentativa][i] = "meiocerta";
                    caracteresduplicados.add(caracter);
                }
                
            } else newColorsBoard[prevTentativa][i] = "errado";
        }

        colors.set(newColorsBoard)

        //checar o fim do jogo

        if($guess == $GAME_WORD.toUpperCase() || prevTentativa == 5)
            gameOver.set(true);

        else guess.set("");
        
    }

    const keyPress = (key = "") => {

        if (key == "DEL")
            handleDel();

        else if (key == "ENTER")
            handleEnter();

        else {
            let { tentativa, caracter } = $gameInfo;
            if (caracter > 4)
                return

            board.update((prevBoard) => {
                const newBoard = prevBoard;
                newBoard[tentativa][caracter++] = key;
                return newBoard;
            });

            gameInfo.set({tentativa, caracter})
        }
    }


</script>

<div class="keyboard">
    <div class="row">
        {#each linha1 as caracter}
            <Key {caracter} {keyPress}/>
        {/each}
    </div>

    <div class="row">
        {#each linha2 as caracter}
            <Key {caracter} {keyPress}/>
        {/each}
    </div>

    <div class="row">
        {#each linha3 as caracter}
            <Key {caracter} {keyPress}/>
        {/each}
    </div>
</div>

<style>
    .keyboard {
        position: relative;
        width: fit-content;
        bottom: 0.5vh;
        left: 50%;
        transform: translate(-50%, 0%);
    }
    .row {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
</style>