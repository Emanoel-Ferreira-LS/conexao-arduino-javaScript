const { Board, Sensor, Led } = require('johnny-five');

const board = new Board({ port: 'COM3' }); // Substitua 'COM3' pelo caminho da porta serial correta no seu sistema (ex: '/dev/ttyACM0' no Linux)

let led; // Declaração global da variável led

  board.on('ready', () => {
    led = new Led(13); // Inicialização do LED no pino 13
    const ldr = new Sensor({
        pin: 'A0', // Pino analógico conectado ao LDR no Arduino (por exemplo, A0)
        freq: 500 // Frequência de leitura em milissegundos (opcional, neste exemplo leitura a cada 1 segundo)
  });

  var lum;

  ldr.on('data', function() {
    console.log('Valor do sensor LDR:', this.value);
    // Aqui você pode fazer o que quiser com o valor do sensor, como enviá-lo para algum serviço ou tratá-lo de alguma forma.
    lum = this.value;
    if (lum < 20) {
      led.blink(500);
    } else {
      led.stop().off();
    }
  });
});
