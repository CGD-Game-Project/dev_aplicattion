<script>
    import global from "../../styles/global.css";
    import teclado from "../../styles/teclado.css";
</script>

<main>
    <header>
        <nav class="nav-bar">
            <div class="titulo">
                <h1>TERMO</h1>
            </div>

            <div class="nav-list">
                <ul>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Início</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Sobre</a>
                    </li>
                    <li class="nav-item">?</li>
                </ul>
            </div>
        </nav>
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
            <div class="row">
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
            <div class="row">
                <button class="tecla">A</button>
                <button class="tecla">S</button>
                <button class="tecla">D</button>
                <button class="tecla">F</button>
                <button class="tecla">G</button>
                <button class="tecla">H</button>
                <button class="tecla">J</button>
                <button class="tecla">K</button>
                <button class="tecla">L</button>
                <button class="delete">DELETE</button>
            </div>
            <div class="row">
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
    nav {
        background-color: black;
        color: white;
        text-align: center;
        font-weight: bold;
        padding: 10px;
        font-size: 2em;
    }
    .nav-list {
        display: flex;
        align-items: left;
    }
    .nav-list ul{
        display: flex;
        justify-content: center;
        list-style: none;
        
    }
    .nav-item {
        margin: 0 15px;
    }    
    .nav-link{
        text-decoration: none;
        font-size: 1.15rem;
        color: #fff;
        font-weight: 400;
    }

    #principal {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px;
    }

    .linha {
        display: inherit;
    }

    div.caixa {
        background-color: #ccb3a7;
        width: 67px;
        height: 67px;
        margin-top: 5px;
        margin-right: 5px;
        border-radius: 7px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #9c5b74;
    }
</style>
