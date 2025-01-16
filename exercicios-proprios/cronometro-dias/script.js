let data = document.querySelector('#data');
let startButton = document.querySelector('#start');
let dias = document.querySelector('#dias');
let horas = document.querySelector('#horas');
let minutos = document.querySelector('#minutos');
let segundos = document.querySelector('#segundos');

let cronometro; // Variável para armazenar o intervalo

// Função para calcular o tempo restante
function atualizarTempo() {
    let dataFutura = new Date(data.value);
    let agora = new Date();

    // Calculando a diferença em milissegundos
    let tempoRestante = dataFutura - agora;

    if (tempoRestante <= 0) {
        // Se o tempo já passou
        dias.innerHTML = "0 dias";
        horas.innerHTML = "0 horas";
        minutos.innerHTML = "0 minutos";
        segundos.innerHTML = "0 segundos";
        alert('O tempo já passou!');
        clearInterval(cronometro); // Parando o cronômetro
        return;
    }

    // Calculando a quantidade de dias, horas, minutos e segundos
    let diasQ = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    let horasQ = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutosQ = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    let segundosQ = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    // Atualizando os elementos da interface
    dias.innerHTML = `${diasQ} dias`;
    horas.innerHTML = `${horasQ} horas`;
    minutos.innerHTML = `${minutosQ} minutos`;
    segundos.innerHTML = `${segundosQ} segundos`;
}

// Evento do botão
startButton.addEventListener('click', () => {
    if (!data.value) {
        alert('Por favor, escolha uma data!');
        return;
    }

    // Evita criar múltiplos cronômetros
    clearInterval(cronometro);

    // Atualizando o cronômetro a cada segundo
    cronometro = setInterval(atualizarTempo, 1000);
});
