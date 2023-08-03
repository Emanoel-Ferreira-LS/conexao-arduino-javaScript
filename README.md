# conexao-arduino-javaScript
 Usando a biblioteca Johnny-Five do NodeJS para se comunicar com arduino

  Para utilizar a biblioteca Johnny-Five para dar comandos no Arduino, você precisará seguir alguns passos. Johnny-Five é uma biblioteca do Node.js que permite controlar placas de desenvolvimento, como o Arduino, usando JavaScript. Aqui estão os passos básicos:
 
 1.Configurar o ambiente:
 
 -Certifique-se de ter o Node.js instalado em seu computador. Você pode baixá-lo em https://nodejs.org.
 -Conecte o seu Arduino ao computador usando um cabo USB.
 -Em alguns casos é necessarioo python e o visual studio instalado com o modo de desenvolvimento desktop C++
 
 1.Instalar as dependências:
 
 -Abra um terminal ou prompt de comando e crie uma pasta para o seu projeto.
 -Navegue até a pasta do seu projeto e inicialize um novo projeto Node.js digitando o seguinte comando:

     npm init -y

 Agora, instale as dependências necessárias (Johnny-Five e a biblioteca para se comunicar com o Arduino) usando o seguinte comando:
 
     npm install johnny-five serialport
     
 1.Escrever o código:
 
 -Crie um arquivo JavaScript (por exemplo, index.js) e abra-o em um editor de código.
 
 1.Importar as bibliotecas:
 
 -No início do arquivo, importe as bibliotecas necessárias:
 
     const { Board, Led, Button } = require('johnny-five');
 
 1.Configurar o Arduino:
 -Crie um objeto Board para configurar a comunicação com o Arduino:
 
    const board = new Board({port:'COM3'});
 
 1.Configurar os componentes:
 -Após a configuração do board, você pode inicializar os componentes conectados ao Arduino, como LEDs ou botões.
 -Por exemplo, para controlar um LED conectado ao pino digital 13, você pode fazer o seguinte:
  
     let led;
 
     board.on('ready', () => {
     // Inicializar o LED no pino 13
     led = new Led(13);
     // Fazer o LED piscar a cada 500ms
     led.blink(500);
     });
 
 1.Executar o código:
 -No terminal, navegue até a pasta do seu projeto e execute o seguinte comando para rodar o código:
 
     node index.js
 
 Esses são os passos básicos para começar a usar a biblioteca Johnny-Five com o Arduino. A partir daqui, você pode explorar muitas outras funcionalidades, como controlar motores, sensores, fazer integração com outras APIs, e muito mais! Lembre-se de verificar a documentação oficial do Johnny-Five para mais informações detalhadas e exemplos práticos: https://johnny-five.io/
 
 
 IMPORTANTE:
 ------------------------------------------------------------------------------------------------------------------
 Instalar ocódigo Firmata na Placa arduino:
 Abra o Arduino IDE > Arquivo > Exemplos > Firmata > StandardFirmata

