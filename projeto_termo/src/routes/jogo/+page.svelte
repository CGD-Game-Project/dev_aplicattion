<script>
    import { gameOver } from "../../grade";
    import { fade } from "svelte/transition"
    import Board from "../../components/board.svelte"
    import Keyboard from "../../components/keyboard.svelte";
    import GameOver from "../../components/GameOver.svelte";
    import { Modal, Content, Trigger } from "sv-popup"
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
                    <Modal  button ={false}>
                        <Content>
                            <img class="frame" src="/images/PopUp.png" alt="img">
                        </Content>
                        <Trigger>
                            <button class="duvida">?</button>
                        </Trigger>
                    </Modal>
                </nav>
            </div>
            <div class="titulo">pitaco</div>
        </div>
   </header> 

    {#if $gameOver}
    <div in:fade={{duration: 1000}}>
        <GameOver />
    </div>
    {:else}
        <div in:fade={{duration: 800}}>
            <Board />
            <Keyboard />
        </div>
    {/if}
</main>
<style>
    .container-1{
        max-width: 120vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2vh;
        margin-bottom: 7vh;
        margin-left: auto;
        margin-right: auto;
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

    .home, .duvida{
       cursor: pointer;
       padding: 0;
       width: 4vh;
       height: 4vh;
       background-color: transparent;
       color: var(--marrom);
       line-height: 1vh;
       font-size: 2vh;
       font-weight: 400;
       border: 2px solid var(--marrom);
       border-radius: 20%;
       margin: 0 0.25vh;
    }

    .frame {
        margin-left: 7vh;
        margin-top: -10vh;
    }

    a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--marrom);
    }

</style>