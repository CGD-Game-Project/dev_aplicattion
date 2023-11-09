<script>
    // @ts-nocheck

    import "../../styles/jogo.css";

    /** @param {string} palpite
     *  @param {string} palavra_secreta
     */
    export function compararPalpite(palpite, palavra_secreta) {
        palpite = palpite.toUpperCase();
        palavra_secreta = palavra_secreta.toUpperCase();
        const resultado = { corretas: 0, incorretas: 0 };
        const saida = {
            letra_0: 0,
            letra_1: 0,
            letra_2: 0,
            letra_3: 0,
            letra_4: 0,
        };

        for (let i = 0; i < palavra_secreta.length; i++) {
            if (palavra_secreta[i] === palpite[i]) {
                resultado.corretas++;
                saida["letra_" + i] = 2;
            } else {
                if (palavra_secreta[i] === "ç" && palpite[i] === "c") {
                    resultado.corretas++;
                    saida["letra_" + i] = 2;
                } else if (
                    "áâã".includes(palavra_secreta[i]) &&
                    palpite[i] === "a"
                ) {
                    resultado.corretas++;
                    saida["letra_" + i] = 2;
                } else if (
                    "éê".includes(palavra_secreta[i]) &&
                    palpite[i] === "e"
                ) {
                    resultado.corretas++;
                    saida["letra_" + i] = 2;
                } else if (palavra_secreta[i] === "í" && palpite[i] === "i") {
                    resultado.corretas++;
                    saida["letra_" + i] = 2;
                } else if (
                    "óôõ".includes(palavra_secreta[i]) &&
                    palpite[i] === "o"
                ) {
                    resultado.corretas++;
                    saida["letra_" + i] = 2;
                } else if (
                    "úû".includes(palavra_secreta[i]) &&
                    palpite[i] === "u"
                ) {
                    resultado.corretas++;
                    saida["letra_" + i] = 2;
                } else {
                    resultado.incorretas++;
                    saida["letra_" + i] = 0;
                }
            }
        }

        if (resultado.corretas !== 5) {
            for (let i = 0; i < palavra_secreta.length; i++) {
                if (saida["letra_" + 0] !== 2) {
                    if (
                        palpite[0] === palavra_secreta[i] &&
                        saida["letra_" + 0] === 0
                    ) {
                        saida["letra_" + 0] = 1;
                    } else {
                        if (
                            palavra_secreta[i] === "ç" &&
                            palpite[0] === "c" &&
                            saida["letra_" + 0] === 0
                        ) {
                            saida["letra_" + 0] = 1;
                        } else if (
                            "áâã".includes(palavra_secreta[i]) &&
                            palpite[0] === "a" &&
                            saida["letra_" + 0] === 0
                        ) {
                            saida["letra_" + 0] = 1;
                        } else if (
                            "éê".includes(palavra_secreta[i]) &&
                            palpite[0] === "e" &&
                            saida["letra_" + 0] === 0
                        ) {
                            saida["letra_" + 0] = 1;
                        } else if (
                            palavra_secreta[i] === "í" &&
                            palpite[0] === "i" &&
                            saida["letra_" + 0] === 0
                        ) {
                            saida["letra_" + 0] = 1;
                        } else if (
                            "óôõ".includes(palavra_secreta[i]) &&
                            palpite[0] === "o" &&
                            saida["letra_" + 0] === 0
                        ) {
                            saida["letra_" + 0] = 1;
                        } else if (
                            "úû".includes(palavra_secreta[i]) &&
                            palpite[0] === "u" &&
                            saida["letra_" + 0] === 0
                        ) {
                            saida["letra_" + 0] = 1;
                        }
                    }
                }
            }
            for (let i = 0; i < palavra_secreta.length; i++) {
                if (saida["letra_" + 1] !== 2) {
                    if (
                        palpite[1] === palavra_secreta[i] &&
                        saida["letra_" + 1] === 0
                    ) {
                        saida["letra_" + 1] = 1;
                    } else {
                        if (
                            palavra_secreta[i] === "ç" &&
                            palpite[1] === "c" &&
                            saida["letra_" + 1] === 0
                        ) {
                            saida["letra_" + 1] = 1;
                        } else if (
                            "áâã".includes(palavra_secreta[i]) &&
                            palpite[1] === "a" &&
                            saida["letra_" + 1] === 0
                        ) {
                            saida["letra_" + 1] = 1;
                        } else if (
                            "éê".includes(palavra_secreta[i]) &&
                            palpite[1] === "e" &&
                            saida["letra_" + 1] === 0
                        ) {
                            saida["letra_" + 1] = 1;
                        } else if (
                            palavra_secreta[i] === "í" &&
                            palpite[1] === "i" &&
                            saida["letra_" + 1] === 0
                        ) {
                            saida["letra_" + 1] = 1;
                        } else if (
                            "óôõ".includes(palavra_secreta[i]) &&
                            palpite[1] === "o" &&
                            saida["letra_" + 1] === 0
                        ) {
                            saida["letra_" + 1] = 1;
                        } else if (
                            "úû".includes(palavra_secreta[i]) &&
                            palpite[1] === "u" &&
                            saida["letra_" + 1] === 0
                        ) {
                            saida["letra_" + 1] = 1;
                        }
                    }
                }
            }
            for (let i = 0; i < palavra_secreta.length; i++) {
                if (saida["letra_" + 2] !== 2) {
                    if (
                        palpite[2] === palavra_secreta[i] &&
                        saida["letra_" + 2] === 0
                    ) {
                        saida["letra_" + 2] = 1;
                    } else {
                        if (
                            palavra_secreta[i] === "ç" &&
                            palpite[2] === "c" &&
                            saida["letra_" + 2] === 0
                        ) {
                            saida["letra_" + 2] = 1;
                        } else if (
                            "áâã".includes(palavra_secreta[i]) &&
                            palpite[2] === "a" &&
                            saida["letra_" + 2] === 0
                        ) {
                            saida["letra_" + 2] = 1;
                        } else if (
                            "éê".includes(palavra_secreta[i]) &&
                            palpite[2] === "e" &&
                            saida["letra_" + 2] === 0
                        ) {
                            saida["letra_" + 2] = 1;
                        } else if (
                            palavra_secreta[i] === "í" &&
                            palpite[2] === "i" &&
                            saida["letra_" + 2] === 0
                        ) {
                            saida["letra_" + 2] = 1;
                        } else if (
                            "óôõ".includes(palavra_secreta[i]) &&
                            palpite[2] === "o" &&
                            saida["letra_" + 2] === 0
                        ) {
                            saida["letra_" + 2] = 1;
                        } else if (
                            "úû".includes(palavra_secreta[i]) &&
                            palpite[2] === "u" &&
                            saida["letra_" + 2] === 0
                        ) {
                            saida["letra_" + 2] = 1;
                        }
                    }
                }
            }
            for (let i = 0; i < palavra_secreta.length; i++) {
                if (saida["letra_" + 3] !== 2) {
                    if (
                        palpite[3] === palavra_secreta[i] &&
                        saida["letra_" + 3] === 0
                    ) {
                        saida["letra_" + 3] = 1;
                    } else {
                        if (
                            palavra_secreta[i] === "ç" &&
                            palpite[3] === "c" &&
                            saida["letra_" + 3] === 0
                        ) {
                            saida["letra_" + 3] = 1;
                        } else if (
                            "áâã".includes(palavra_secreta[i]) &&
                            palpite[3] === "a" &&
                            saida["letra_" + 3] === 0
                        ) {
                            saida["letra_" + 3] = 1;
                        } else if (
                            "éê".includes(palavra_secreta[i]) &&
                            palpite[3] === "e" &&
                            saida["letra_" + 3] === 0
                        ) {
                            saida["letra_" + 3] = 1;
                        } else if (
                            palavra_secreta[i] === "í" &&
                            palpite[3] === "i" &&
                            saida["letra_" + 3] === 0
                        ) {
                            saida["letra_" + 3] = 1;
                        } else if (
                            "óôõ".includes(palavra_secreta[i]) &&
                            palpite[3] === "o" &&
                            saida["letra_" + 3] === 0
                        ) {
                            saida["letra_" + 3] = 1;
                        } else if (
                            "úû".includes(palavra_secreta[i]) &&
                            palpite[3] === "u" &&
                            saida["letra_" + 3] === 0
                        ) {
                            saida["letra_" + 3] = 1;
                        }
                    }
                }
            }
            for (let i = 0; i < palavra_secreta.length; i++) {
                if (saida["letra_" + 4] !== 2) {
                    if (
                        palpite[4] === palavra_secreta[i] &&
                        saida["letra_" + 4] === 0
                    ) {
                        saida["letra_" + 4] = 1;
                    } else {
                        if (
                            palavra_secreta[i] === "ç" &&
                            palpite[4] === "c" &&
                            saida["letra_" + 4] === 0
                        ) {
                            saida["letra_" + 4] = 1;
                        } else if (
                            "áâã".includes(palavra_secreta[i]) &&
                            palpite[4] === "a" &&
                            saida["letra_" + 4] === 0
                        ) {
                            saida["letra_" + 4] = 1;
                        } else if (
                            "éê".includes(palavra_secreta[i]) &&
                            palpite[4] === "e" &&
                            saida["letra_" + 4] === 0
                        ) {
                            saida["letra_" + 4] = 1;
                        } else if (
                            palavra_secreta[i] === "í" &&
                            palpite[4] === "i" &&
                            saida["letra_" + 4] === 0
                        ) {
                            saida["letra_" + 4] = 1;
                        } else if (
                            "óôõ".includes(palavra_secreta[i]) &&
                            palpite[4] === "o" &&
                            saida["letra_" + 4] === 0
                        ) {
                            saida["letra_" + 4] = 1;
                        } else if (
                            "úû".includes(palavra_secreta[i]) &&
                            palpite[4] === "u" &&
                            saida["letra_" + 4] === 0
                        ) {
                            saida["letra_" + 4] = 1;
                        }
                    }
                }
            }
        }

        return saida;
    }

    export let linhaAtual = 1;
    export let selecionado = `l${linhaAtual}_coluna_1`;

    /** @param {string} id */
    export function selecionar(id) {
        if (id.startsWith(`l${linhaAtual}`)) {
            selecionado = id;
        }
    }

    export function teclaPressionada(tecla) {
        let codigoTecla = tecla.keyCode;

        // Código das teclas de A a Z
        if (codigoTecla >= 65 && codigoTecla <= 90) {
            letra(String.fromCharCode(codigoTecla));
        }

        // Código das teclas backspace e delete
        if (codigoTecla === 8 || codigoTecla === 46) {
            deletar();
        }
        // Código das teclas Enter
        if (codigoTecla === 13) {
            enter();
        }
    }

    /** @param {string} letra */
    export function letra(letra) {
        let p = document.createElement("p");
        p.innerText = letra.toUpperCase();

        let elemento = document.getElementById(selecionado);
        elemento.innerHTML = "";
        elemento.appendChild(p);

        let proximo = Number(selecionado[10]) + 1;

        if (proximo <= 5) {
            selecionado = selecionado.substring(0, 10) + proximo;
        }
    }

    export function deletar() {
        let elemento = document.getElementById(selecionado);
        elemento.innerHTML = "";
    }

    export function enter() {
        let palavra = "";

        let linha = document.getElementById(`linha_${linhaAtual}`);

        let colunas = linha.children;

        for (const coluna of colunas) {
            if (coluna.children && coluna.children[0]) {
                palavra += coluna.children[0].innerText;
            }
        }

        if (palavra.length === 5) {
            let resultado = compararPalpite(palavra, "criar");

            for (const letra_ in resultado) {
                let i = letra_[6];

                colunas[i].classList.remove("verde");

                switch (resultado[letra_]) {
                    case 0:
                        colunas[i].classList.add("vermelho");
                        break;
                    case 1:
                        colunas[i].classList.add("laranja");
                        break;
                    case 2:
                        colunas[i].classList.add("azul");
                        break;
                }
            }

            if (
                !(
                    resultado.letra_0 === 2 &&
                    resultado.letra_1 === 2 &&
                    resultado.letra_2 === 2 &&
                    resultado.letra_3 === 2 &&
                    resultado.letra_4 === 2
                )
            ) {
                if (linhaAtual < 6) {
                    linhaAtual += 1;
                    selecionado = `l${linhaAtual}_coluna_1`;
                }
            }
        }
    }
</script>

<h1>TERMO</h1>

<div id="principal">
    <!-- Array externo que representa a linha -->
    {#each Array(6) as _, i}
        <div id="linha_{i + 1}" class="linha">
            <!-- Array interno que representa a coluna -->
            {#each Array(5) as _, j}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div
                    id="l{i + 1}_coluna_{j + 1}"
                    class={selecionado === `l${i + 1}_coluna_${j + 1}`
                        ? "caixa verde"
                        : "caixa"}
                    on:click={() => selecionar(`l${i + 1}_coluna_${j + 1}`)}
                />
            {/each}
        </div>
    {/each}
</div>

<div id="teclado">
    <div class="linha1">
        <button class="botao" on:click={() => letra("q")}>Q</button>
        <button class="botao" on:click={() => letra("w")}>W</button>
        <button class="botao" on:click={() => letra("e")}>E</button>
        <button class="botao" on:click={() => letra("r")}>R</button>
        <button class="botao" on:click={() => letra("t")}>T</button>
        <button class="botao" on:click={() => letra("y")}>Y</button>
        <button class="botao" on:click={() => letra("u")}>U</button>
        <button class="botao" on:click={() => letra("i")}>I</button>
        <button class="botao" on:click={() => letra("o")}>O</button>
        <button class="botao" on:click={() => letra("p")}>P</button>
    </div>
    <div class="linha2">
        <button class="botao" on:click={() => letra("a")}>A</button>
        <button class="botao" on:click={() => letra("s")}>S</button>
        <button class="botao" on:click={() => letra("d")}>D</button>
        <button class="botao" on:click={() => letra("f")}>F</button>
        <button class="botao" on:click={() => letra("g")}>G</button>
        <button class="botao" on:click={() => letra("h")}>H</button>
        <button class="botao" on:click={() => letra("j")}>J</button>
        <button class="botao" on:click={() => letra("k")}>K</button>
        <button class="botao" on:click={() => letra("l")}>L</button>
        <button class="delete" on:click={() => deletar("delete")}>DELETE</button>
    </div>
    <div class="linha3">
        <button class="botao" on:click={() => letra("z")}>Z</button>
        <button class="botao" on:click={() => letra("x")}>X</button>
        <button class="botao" on:click={() => letra("c")}>C</button>
        <button class="botao" on:click={() => letra("v")}>V</button>
        <button class="botao" on:click={() => letra("b")}>B</button>
        <button class="botao" on:click={() => letra("n")}>N</button>
        <button class="botao" on:click={() => letra("m")}>M</button>
        <button class="enter" on:click={() => enter("enter")}>ENTER</button>
    </div>
</div>

<svelte:window on:keydown|preventDefault={teclaPressionada} />
