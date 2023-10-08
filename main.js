const customerName = prompt("Por favor, indique su nombre");

alert(`Hola ${customerName}! ¡Estás a bordo de Captain's Cache Hosting!`);

// Validación del producto seleccionado

function hostingService() {
    let product;
    while (true) {
        product = prompt("¿Qué tipo de hosting deseas contratar, Web o Server? Solo debe ingresar 'web' o 'server'").toLocaleLowerCase();
        if (product === "web" || product === "server") {
            const confirmation = confirm(`${customerName} has seleccionado ${product}, ¿deseas continuar?`);
            if (confirmation) {
                break;
            } else {
                alert("Por favor, elige nuevamente.");
            }
            break;
        } else {
            alert("Por favor, ingrese 'web' o 'server'");
        }
    }

    return product;
}

//llamar a la función para seleccionar el tipo de hosting
const hosting = hostingService();

// determinar paquetes a ofrecer de acuerdo al producto seleccionado
//preparar variables necesarias
let size;
let smPrice = 1000;
let mdPrice = 1400;
let lgPrice = 2500;

switch (hosting) {
    case "web":
        size = `PEQUEÑO ${smPrice}/mes (1 dominio, 50gb de Almacenamiento, 5 Bases de datos), MEDIANO ${mdPrice}/mes (1 dominio, Certificado SSL, 100gb de Almacenamiento, 1 Base de datos) o GRANDE ${lgPrice}/mes(1 dominio, Certificado SSL, 200gb de Almacenamiento, 30 Base de datos)`;
        break;
    case "server":
        size = `PEQUEÑO ${smPrice}/mes (1 CPU, 4GB, 50gb de Almacenamiento), MEDIANO ${mdPrice}/mes (4 CPU, 8GB, 100gb de Almacenamiento) o GRANDE ${lgPrice}/mes(8 CPU, 16GB, 200gb de Almacenamiento)`;
        break;
}

// selección de tamaño

function hostingSize() {
    while (true) {
        size = prompt(`¿Qué tamaño de ${hosting} deseas contratar, ${size}? Todos los planes incluyen backup`).toLocaleLowerCase();
        if (size === "pequeño" || size === "mediano" || size === "grande") {
            const confirmation = confirm(`${customerName} has seleccionado ${size}, ¿deseas continuar?`);
            if (confirmation) {
                break;
            } else {
                alert("Por favor, elige nuevamente.");
            }
            break;
        } else {
            alert("Por favor, ingrese 'pequeño', 'mediano' o 'grande'");
        }
    }

    return size;
}

//llamar a la función para seleccionar el tamaño del plan
hostingSize();

// confirmar plan adquirido y calcular precio

//variables necesarias

let plan;
let price;
let finalPrice;
let confirmation;

//preparar el mensaje

switch (size) {
    case "pequeño":
        plan = `El costo de la suscripción mensual es de ${smPrice}/mes, podemos ofrecerte 15% de descuento por 12 meses o 25% por 24 meses. Por favor ingresa, 1, 12 o 24`;
        break;
    case "mediano":
        plan = `El costo de la suscripción mensual es de ${mdPrice}/mes, podemos ofrecerte 15% de descuento por 12 meses o 25% por 24 meses. Por favor ingresa, 1, 12 o 24`;
        break;
    case "grande":
        plan = `El costo de la suscripción mensual es de ${lgPrice}/mes, podemos ofrecerte 15% de descuento por 12 meses o 25% por 24 meses. Por favor ingresa, 1, 12 o 24`;
        break;
}

//calcular descuento

function discount(price) {
    if (price === 12) {
        return 12 * (mdPrice - (mdPrice * 0.15));
    } else {
        return 24 * (lgPrice - (lgPrice * 0.25));
    }
}

//confirmar compra

function pricing() {
    while (true) {
        price = prompt(plan);
        price = parseInt(price)
        if (!isNaN(price)) {
            if (price === 1) {
                confirmation = confirm(`${customerName} has seleccionado el plan ${size} a ARS${smPrice}/mes, ¿deseas continuar?`);
                if (confirmation) {
                    break;
                } else {
                    alert(`Muchas gracias por tu visita ${customerName}`);
                }
                break;
            } else {
                finalPrice = discount(price);
                confirmation = confirm(`${customerName} has seleccionado el plan ${size} por ${price} meses a ARS${finalPrice}, ¿deseas continuar?`);
                if (confirmation) {
                    break;
                } else {
                    alert(`Muchas gracias por tu visita ${customerName}`);
                    break;
                }
            }
        } else {
            return "Por favor, ingresa un 1, 12 o 24.";
        }
    }
}

//llamar a la función para confirmar compra

pricing();

//cierre compra
let customerEmail;

//validar correo
function validateEmail(customerEmail) {
    const emailFilter = /\S+@\S+\.\S+/;
    if (customerEmail.match(emailFilter)) {
      return true;
    } else {
      return false;
    }
  }

//solicitar correo

function closing () {
    if (confirmation) {
        customerEmail = prompt(`Para finalizar, por favor indique su correo para confirmar el pago y los datos de acceso a su cuenta en Captain's Cache Hosting`).toLocaleLowerCase();
        while (true) {
            if (validateEmail(customerEmail)) {
                alert(`${customerName}, el correo ha sido enviado a ${customerEmail}. Gracias por tu compra!`);
                break;
            } else {
                alert("Por favor, ingresa un correo válido.");
            }
        }
    } else {
        alert(`Tu transacción ha sido cancelada. Gracias por visitar Captain's Cache Hosting, ${customerName}.`);
    }
}

//llamar a la función de cierre
closing();

