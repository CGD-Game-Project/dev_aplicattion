import { writable } from "svelte/store";




export function criação_da_tabela(){
    const tabela = [];

    for (let i = 0; i < 6; i++){
        tabela.push([]);
        for (let j = 0; j < 5; j++){
            // @ts-ignore
            tabela[i][j] = "";
        }
    }
    return tabela;
}

export const gameInfo = writable({
    caracter: 0,
    tentativa: 0,
});

export const gameOver = writable(false);
export const GAME_WORD = writable("CARRO");
export const guess = writable("");
export const colors = writable(criação_da_tabela());
export const board = writable(criação_da_tabela());