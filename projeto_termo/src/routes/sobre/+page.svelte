<main>
    <div><h1><a href="/">Voltar</a>DESENVOLVEDORES</h1></div>
   
    <div class="container">
        <div class="card">
            <div class="img-box">
                <img src="/images/Alyson.jpg" alt="Membro1">
            </div>
            <div class="card-content">
                <h2>Alyson Vinicius</h2>
                <p>FRONT-END DEVELOPER</p>
            </div>
        </div>
        <div class="card">
            <div class="img-box">
                <img src="/images/Aristoteles.jpg" alt="Membro2">
            </div>
            <div class="card-content">
                <h2>Aristoteles Lins</h2>
                <p>BACK-END DEVELOPER</p>
            </div>
        </div>
        <div class="card">
            <div class="img-box">
                <img src="/images/Brenno.jpg" alt="Membro3">
            </div>
            <div class="card-content">
                <h2>Brenno Victor</h2>
                <p>FRONT-END DEVELOPER</p>
            </div>
        </div>
        <div class="card">
            <div class="img-box">
                <img src="/images/Ewellin.jpg" alt="Membro4">
            </div>
            <div class="card-content">
                <h2>Ewellyn Kamili</h2>
                <p>FRONT-END DEVELOPER</p>
            </div>
        </div>
        <div class="card">
            <div class="img-box">
                <img src="/images/Dolly.jpg" alt="Membro5">
            </div>
            <div class="card-content">
                <h2>João Pedro</h2>
                <p>BACK-END DEVELOPER</p>
            </div>
        </div>
        <div class="card">
            <div class="img-box">
                <img src="/images/Joyce.jpg" alt="Membro6">
            </div>
            <div class="card-content">
                <h2>Joyce Kelle</h2>
                <p>BACK-END DEVELOPER</p>
            </div>
        </div>
    </div>
   
</main>

<style>
    
    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-family: 'Galindo', sans-serif;
        font-size: 6vh;
    }

    h2, p{
        font-family: sans-serif;
        color: #612F74;
    }

    div a{
        position: relative;
        right: 40vh;
        font-size: 2vh;
        color: #612F74;
        text-decoration: none;
        border-radius: 2vh;
        background: white;
        border: none;
        width: 10vh;
        height: 4vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 90vh;
    }

    .card {
        display: flex;
        justify-content: center;
        width: 270px;
        height: 290px;
        position: relative;
        background-color: #fff;
        border-radius: 20px;
        margin: 1vh;
    }

    .card:hover{
        height: 300px;
    }

    .card .img-box{
        position: absolute;
        width: 18vh;
        height: 23vh;
        top: 1vh;
        transition: 0.5s;
        object-fit: cover;
    }

    .card:hover .img-box{
        top: -70px;
        scale: 0.75;
    }

    .card .img-box img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card .card-content{
        display: flex;
        flex-direction: column;
        gap: 18px;
        position: absolute;
        top: 250px;
        width: 100%;
        padding: 0px 30px;
        text-align: center;
        height: 30px;
        overflow: hidden;
        transition: 0.5s;
    }

    .card:hover .card-content{
        top: 130px;
        height: 250px;
    }
</style>