<script>
    import { } from "../../styles/teclado.css";
    import { } from "../../styles/global.css";
</script>

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
</head>

<main>   
   <header>
        <div class="container-1">
            <div class="menu">
                <nav>
                    <button class="home"><a href="/"><i class="bi bi-house"></i></a></button>
                    <button class="duvida">?</button>
                </nav>
            </div>
            <div class="titulo">pitaco</div>
        </div>
   </header> 
   
     <div id="principal">
        <!-- Array externo que representa a linha -->
        {#each Array(6) as _, i}
            <div id="linha_{i + 1}" class="linha">
                <!-- Array interno que representa a coluna -->
                {#each Array(5) as _, j}
                    <div id="l{i + 1}_coluna_{j + 1}" class="caixa" />
                {/each}
            </div>
        {/each}
    </div>

    <div class="container">
        <div class="teclado">
            <div class="row1">
                <button class="tecla">Q</button>
                <button class="tecla">W</button>
                <button class="tecla">E</button>
                <button class="tecla">R</button>
                <button class="tecla">T</button>
                <button class="tecla">Y</button>
                <button class="tecla">U</button>
                <button class="tecla">I</button>
                <button class="tecla">O</button>
                <button class="tecla">P</button>
            </div>
            <div class="row2">
                <button class="tecla">A</button>
                <button class="tecla">S</button>
                <button class="tecla">D</button>
                <button class="tecla">F</button>
                <button class="tecla">G</button>
                <button class="tecla">H</button>
                <button class="tecla">J</button>
                <button class="tecla">K</button>
                <button class="tecla">L</button>
                <button class="delete"><i class="bi bi-backspace"></i></button>
            </div>
            <div class="row3">
                <button class="tecla">Z</button>
                <button class="tecla">X</button>
                <button class="tecla">C</button>
                <button class="tecla">V</button>
                <button class="tecla">B</button>
                <button class="tecla">N</button>
                <button class="tecla">M</button>
                <button class="enter">ENTER</button>
            </div>
        </div>
    </div>
    
</main>

<style>

    main {
        width: 100%;  
    }

    .container-1{
        max-width: 120vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        }

    header{
    width: 100%;
    }

    .titulo{
        font-size: 4vh;
        font-weight: 600;
        line-height: 6vh;
        height: 4vh;
        margin: 0;
        padding: 0;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff ;
        position: absolute;
        font-family: 'Galindo', sans-serif;
        margin-top: 7vh;
    }
    .menu{
        width: 40%;  
        position: absolute;
        margin-top: 7vh;
    }

    #principal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 5vh;
        margin-top: 8%;
    }

    .linha {
        display: inherit;
    }

    div.caixa {
        background-color: #CCB3A7;
        border: none;
        width: 8vh;
        height: 8vh;
        margin-top: 1vh;
        margin-right: 0.8vh;
        border-radius: 1vh;
        cursor: pointer;
    }

    .home, .duvida{
       cursor: pointer;
       padding: 0;
       width: 4vh;
       height: 4vh;
       background-color: transparent;
       color: #B7AEB4;
       line-height: 1em;
       font-size: 2vh;
       font-weight: 400;
       border: 2px solid #B7AEB4;
       border-radius: 20%;
       margin: 0 0.25vh;
    }
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #B7AEB4;
    }

</style>