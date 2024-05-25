class ClientController {
    constructor() {
        this.botaoProximo = document.getElementById("botao-prox");
        this.botaoAnterior = document.getElementById("botao-ant");
        this.blocoDiarioBorda = document.getElementById("bloco-principal");
        this.blocoBotaoProx = document.getElementById("bloco-botao-prox");
        this.paginaAtual = "pagina1";
        this.botaoSalvar = document.getElementById("btn-save");
        this.botaoSalvar.addEventListener("click", () => {
            this.mostrarPopup();
        });
        this.modal = document.getElementById("modal");
        this.btnCancel = document.getElementById("cancelar");
        this.btnConfirmar = document.getElementById("confirmar");
        this.btnClose = document.getElementsByClassName("close")[0];


        this.conteudos = {
            pagina1: `
            <div class="row">
                <div class="col">
                    <label for="">Data Viagem</label>
                    <input type="date" name="" id="">
                </div>
                <div class="col">
                    <label for="">Inicio</label>
                    <input type="time" name="" id="">
                </div>
                <div class="col">
                    <label for="">Motorista</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div class="col">
                    <label for="">Depósito</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="">Fábrica</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div class="col">
                    <label for="">Cavalo</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div class="col">
                    <label for="">Carreta</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
            </div>    
            `,

            pagina2: `
            <div class="row">
                <div class="col">
                    <label for="">Parada 1</label>
                    <select name="parada1" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div class="col">
                    <label for="">Parada 2</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div class="col">
                    <label for="">Parada 3</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div class="col">
                        <label for="">Parada 4</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="">Inicio</label>
                    <input type="time" name="inicio1" id="inicio1">
                </div>
                <div class="col">
                    <label for="">Inicio</label>
                    <input type="time" name="inicio2" id="inicio2">
                </div>
                <div class="col">
                    <label for="">Inicio</label>
                    <input type="time" name="inicio3" id="inicio3">
                </div>
                <div class="col">
                    <label for="">Inicio</label>
                    <input type="time" name="inicio4" id="inicio4">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="">Fim</label>
                    <input type="time" name="fim1" id="fim1">
                </div>
                <div class="col">
                    <label for="">Fim</label>
                    <input type="time" name="fim2" id="fim2">
                </div>
                <div class="col">
                    <label for="">Fim</label>
                    <input type="time" name="fim3" id="fim3">
                </div>
                <div class="col">
                    <label for="">Fim</label>
                    <input type="time" name="fim4" id="fim4">
                </div>
            </div>
            <div>
            </div>`,

            pagina3: `
            <div class="row">
                <div class="col">
                    <label for="">Refeição</label>
                    <select name="refeicao" id="refeicao">
                        <option value=""></option>
                    </select>
                </div>
                <div class="col">
                    <label for="">Tempo de espera</label>
                    <select name="tempoEspera" id="tempoEspera">
                        <option value=""></option>
                    </select>
                </div>
                <div class="col">
                    <label for="">Encerramento de viagem</label>
                    <label for="">Retorno</label>
                    <select name="retorno" id="retorno">
                        <option value=""></option>
                    </select>
                </div>
                <div class="col">
                        <label for="">Id viagem</label>
                        <input type="text" name="idViagem" id="idViagem">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="">Inicio</label>
                    <input type="time" name="inicio1" id="inicio1">
                </div>
                <div class="col">
                    <label for="">Inicio</label>
                    <input type="time" name="inicio2" id="inicio2">
                </div>
                <div class="col">
                    <label for="">Hora</label>
                    <input type="time" name="hora" id="hora">
                </div>
                <div class="col">
                    
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="">Fim</label>
                    <input type="time" name="fim1" id="fim1">
                </div>
                <div class="col">
                    <label for="">Fim</label>
                    <input type="time" name="fim2" id="fim2">
                </div>
                <div class="col">
                </div>
                <div class="col">
                    
                </div>
            </div>
            `,

            pagina4: `
            <div class="row">
            <div class="col">
                <label for="">Parada 1</label>
                <select name="parada1" id="">
                    <option value=""></option>
                </select>
            </div>
            <div class="col">
                <label for="">Parada 2</label>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <div class="col">
                <label for="">Parada 3</label>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <div class="col">
                    <label for="">Parada 4</label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="">Inicio</label>
                <input type="time" name="inicio1" id="inicio1">
            </div>
            <div class="col">
                <label for="">Inicio</label>
                <input type="time" name="inicio2" id="inicio2">
            </div>
            <div class="col">
                <label for="">Inicio</label>
                <input type="time" name="inicio3" id="inicio3">
            </div>
            <div class="col">
                <label for="">Inicio</label>
                <input type="time" name="inicio4" id="inicio4">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="">Fim</label>
                <input type="time" name="fim1" id="fim1">
            </div>
            <div class="col">
                <label for="">Fim</label>
                <input type="time" name="fim2" id="fim2">
            </div>
            <div class="col">
                <label for="">Fim</label>
                <input type="time" name="fim3" id="fim3">
            </div>
            <div class="col">
                <label for="">Fim</label>
                <input type="time" name="fim4" id="fim4">
            </div>
        </div>
        <div>
        </div>
            `,
        };

        this.botaoProximo.addEventListener("click", this.proximaPagina.bind(this));
        this.botaoAnterior.addEventListener("click", this.paginaAnterior.bind(this));

        this.atualizarEstiloNavegacao();
        this.mostrarConteudo();
    }

    fadeIn(element) {
        element.style.opacity = 0;
        element.style.display = "block";
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
        if (this.paginaAtual === "pagina4") {
            this.botaoSalvar.disabled = false; // Habilita o botão de salvar
        } else {
            this.botaoSalvar.disabled = true; // Desabilita o botão de salvar
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

    mostrarPopup() {
        this.modal.style.display = "block";
        this.btnConfirmar.addEventListener("click", () => {
            console.log("Dados salvos!");
            this.fecharPopup();
        });
        this.btnCancel.addEventListener("click", () => {
            console.log("Ação de salvar cancelada pelo usuário."); // Ação cancelada pelo usuário
            this.fecharPopup();
        });
        this.btnClose.addEventListener("click", () => {
            this.fecharPopup();
        });
    }
    fecharPopup() {
        this.modal.style.display = "none";
        this.btnConfirmar.removeEventListener("click", null);
        this.btnCancel.removeEventListener("click", null);
    }

    
    
}

document.addEventListener("DOMContentLoaded", function () {
    new ClientController();
});
