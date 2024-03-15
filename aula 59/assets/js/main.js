function Calculadora () {
    this.display = document.querySelector(".display");

    this.capturaCliques = () => {
        addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear(el);
            if(el.classList.contains('btn-del')) this.del(el);
            if(el.classList.contains('btn-eq')) this.realizaConta(el);
            this.display.focus();
        });
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta()
            }
        })
    }

    this.realizaConta = () =>{
        let conta = this.display.value;

        try {
            conta = eval(conta)

            if(!conta) {
                alert('Conta inválida')
                return
            }

            this.display.value = String(conta); 
        } catch (e) {
            alert('Conta inválida')
            return;
        }
    }

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.clear = () => this.display.value = "";

    this.addNumDisplay = el => this.display.value += el.innerText;

    this.inicia = () => {
        this.capturaCliques();
        this.pressionaEnter();
    };
};

const calculadora = new Calculadora();
calculadora.inicia();