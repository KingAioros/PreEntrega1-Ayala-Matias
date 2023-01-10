// Variables
let menuP;
let peso = 0;
let altura = 0;
let escMenu = false;

function saludar() {
    alert("¡¡Bienvenidos!!");;
    alert("No importa si quieres perder peso, hacer algo por tu salud o si estás ganando masa muscular, el Índice de Masa Corporal (IMC en su abreviatura) es, en la mayoría de los casos, el primer valor que se calcula. En función de tu IMC podrás elaborar tu próximo programa de entrenamiento y nutrición. Pero, ¿qué es exactamente el IMC? Y, ¿cómo se calcula?.");
}
    saludar();
do {

  menuP = parseInt(
    prompt(
      `CALCULADORA DE ÍNDICE DE MASA CORPORAL (IMC)
      Ingrese los siguientes datos:
      1 - ¿Qué es el IMC? 
      2 - ¿Cómo se calcula el IMC?
      3 - bodyCheck
      4 - Salir del menu`
    )
  );
  function bodyCheck() {
    let peso = prompt("Por favor, ingrese su peso como el siguiente ejemplo = 70.2")
    ;
    let altura = prompt("Por favor, ingrese su altura como el siguiente ejemplo = 1.70")
    ;
    let imcDecimales = (peso) / (altura * altura);
    const imc = imcDecimales.toFixed(1);
    

    if (imc < 18.5) {
        alert(
          "Su peso actual es: " +
          imc + "." + " " + "La delgadez puede deberse a diversos factores, tales como genéticos y dietéticos. Independiente de su causa, es importante para tu bienestar mantener un peso saludable."
        );}if (imc >= 18.5 && imc <= 24.9) {
        alert(
          "Su peso actual es: " +
          imc + "." + " " + "El equilibrio del organismo -su homeostasis- se obtiene con mayor facilidad si el peso de una persona es normal. Una dieta balanceada y ejercicio ayudan a mantenerse en esta categoría."
        );
        }if (imc >= 25 && imc <= 34.9) {
        alert(
          "Su peso actual es: " +
          imc + "." + " " + "Una mala alimentación y hábitos sedentarios pueden contribuir a acumular grasa en tu cuerpo, lo que puede llevar a problemas médicos en el futuro."
        );
        } if (imc >= 35 && imc <= 39.9) {
        alert(
        "¡Cuidado! Su peso actual es: " +
        imc + "." + " " + "La obesidad genera complicaciones mayores en el organismo y acorta la vida. Es esencial abordar este estado con una dieta balanceada, ejercicio y, en determinadas ocasiones, con cirugía."
        );
        } if (imc >= 40) {
        alert(
        "¡¡¡Cuidado!!! Su peso actual es: " +
        imc + "." + " " + "La obesidad genera complicaciones mayores en el organismo y acorta la vida. Es esencial abordar este estado con una dieta balanceada, ejercicio y, en determinadas ocasiones, con cirugía."
      );
    }
  }
  //Menu de opciones
  switch (menuP) {
    case 1:
      alert("El IMC es un valor orientativo y de medida que permite realizar una valoración del peso corporal. Se obtiene de la relación entre el peso corporal y la altura. En la evaluación se distingue entre las siguientes categorías: bajo peso, peso normal, sobrepeso y obesidad. ");
      break;

    case 2:
      alert("¿Cómo puedes calcular tu IMC? Es muy sencillo. El cálculo se realiza según la siguiente fórmula del Índice de Masa Corporal : IMC = peso corporal [kg] / (altura [m])² Ejemplo=  Una mujer pesa 60 kg y mide 1,69 m. Cálculo= (60 kg)/(1,69 m)² = 21. Por tanto, la mujer tiene un IMC de 21. Calcula ahora tu IMC individualizado de forma gratuita en nuestro Body Check");
      break;

    case 3:
      bodyCheck();
      break;
    case 4:
      alert("¡¡¡Gracias por elegirnos!!!");
      escMenu = true;
      break;
  }
} while (!escMenu);