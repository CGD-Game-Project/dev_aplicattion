<script>
    import {  } from "../styles/global.css";
    
</script>

<main>
   <span class="content">
        <span class="n_1">p</span>
        <span class="n_2">i</span>
        <span class="n_3">t</span>
        <span class="n_4">a</span>
        <span class="n_5">c</span>
        <span class="n_6">o</span>
   </span>
   <br><br><br><br><br>
        <a href="/jogo">Jogar</a> 
       <a href="/sobre">Sobre</a>
</main>

<style>

    main{
        width: 100%;
    }

    span{
    display: flex;
    margin: 1vh;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-family: 'Galindo', sans-serif;
    font-size: 30vh;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 1vh 1vh #70B4FD;
    }
    
    .content > span:nth-child(1){
        -webkit-transform: translateX(-1px) translateY(30px) rotate(-12deg);
        transform: translateX(-1px) translateY(30px) rotate(-12deg);
    }
    .content > span:nth-child(2){
        -webkit-transform: translateX(-1px) translateY(15px) rotate(-8deg);
        transform: translateX(-1px) translateY(15px) rotate(-8deg);
    }
    .content > span:nth-child(3){
        -webkit-transform: translateX(-1px) translateY(8px) rotate(-2deg);
        transform: translateX(-1px) translateY(8px) rotate(-2deg);
    }
    .content > span:nth-child(4){
        -webkit-transform: translateX(-1px) translateY(8px) rotate(-2deg);
        transform: translateX(-1px) translateY(8px) rotate(2deg);
    }
    .content > span:nth-child(5){
        -webkit-transform: translateX(-1px) translateY(15px) rotate(7deg);
        transform: translateX(-1px) translateY(15px) rotate(7deg);
    }
    .content > span:nth-child(6){
        -webkit-transform: translateX(-1px) translateY(30px) rotate(-15deg);
        transform: translateX(-1px) translateY(30px) rotate(15deg);
    }

    a{
      text-decoration: none;
      color: #F53098;
      display: flex;
       margin-right: auto;
       margin-left: auto;
       width: 0vh;
       height: 0vh;
       font-family: 'Galindo', sans-serif;
       font-size: 7vh;
       padding-left: auto;
       padding-right: auto;
       margin-bottom: 15vh;
       text-align: center;
       align-items: center;
       justify-content: center;
    }
</style>







