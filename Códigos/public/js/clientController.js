class ClientController {
    constructor() {
        this.botaoProximo = document.getElementById("botao-prox");
        this.botaoAnterior = document.getElementById("botao-ant");
        this.blocoDiarioBorda = document.getElementById("bloco-diario-borda");
        this.blocoBotaoProx = document.getElementById("bloco-botao-prox");
        this.paginaAtual = "pagina1";

        this.conteudos = {
            pagina1: `
            <div>
                <label for=""></label>
                <input type="text" name="" id="">
                <label for=""></label>
                <input type="text" name="" id="">
                <select name="" id="">
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <div>
                <select name="" id="">
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </div>    
            `,

            pagina2: `<div><label for="campo3">Campo 3:</label><input type="text" id="campo3"></div>
                      <div><label for="campo4">Campo 4:</label><input type="text" id="campo4"></div>`,

            pagina3: `<div><label for="campo5">Campo 5:</label><input type="text" id="campo5"></div>
                      <div><label for="campo6">Campo 6:</label><input type="text" id="campo6"></div>`,

            pagina4: `<div><label for="campo7">Campo 7:</label><input type="text" id="campo7"></div>
                      <div><label for="campo8">Campo 8:</label><input type="text" id="campo8"></div>`,
        };

        this.botaoProximo.addEventListener("click", this.proximaPagina.bind(this));
        this.botaoAnterior.addEventListener("click", this.paginaAnterior.bind(this));

        this.atualizarEstiloNavegacao();
        this.mostrarConteudo();
    }

    fadeIn(element) {
        element.style.opacity = 0;
        element.style.display = "flex";
        let opacity = 0;

        function fade() {
            opacity += 0.1;
            element.style.opacity = opacity;
            if (opacity <= 1) {
                requestAnimationFrame(fade);
            }
        }

        fade();
    }

    atualizarEstiloNavegacao() {
        const botoesNavegacao = document.querySelectorAll(".button-navegation");
        botoesNavegacao.forEach((botao) => {
            botao.classList.remove("pagina-atual");
        });
        const botaoAtual = document.querySelector(
            `.button-navegation[data-pagina="${this.paginaAtual}"]`
        );
        if (botaoAtual) {
            botaoAtual.classList.add("pagina-atual");
        }
    }

    proximaPagina() {
        switch (this.paginaAtual) {
            case "pagina1":
                this.paginaAtual = "pagina2";
                this.blocoBotaoProx.classList.add("space-between");
                this.botaoAnterior.style.display = "flex";
                break;
            case "pagina2":
                this.paginaAtual = "pagina3";
                break;
            case "pagina3":
                this.paginaAtual = "pagina4";
                this.botaoProximo.style.display = "none";
                break;
        }
        this.atualizarEstiloNavegacao();
        setTimeout(() => {
            this.fadeIn(this.blocoDiarioBorda);
            this.mostrarConteudo();
        }, 100);
    }

    paginaAnterior() {
        switch (this.paginaAtual) {
            case "pagina2":
                this.paginaAtual = "pagina1";
                this.blocoBotaoProx.classList.add("space-between");
                this.botaoAnterior.style.display = "none";
                break;
            case "pagina3":
                this.paginaAtual = "pagina2";
                break;
            case "pagina4":
                this.paginaAtual = "pagina3";
                this.botaoProximo.style.display = "flex";
                break;
        }
        this.atualizarEstiloNavegacao();
        setTimeout(() => {
            this.fadeIn(this.blocoDiarioBorda);
            this.mostrarConteudo();
        }, 100);
    }

    mostrarConteudo() {
        this.blocoDiarioBorda.innerHTML = this.conteudos[this.paginaAtual];
    }
}

document.addEventListener("DOMContentLoaded", function () {
    new ClientController();
});
