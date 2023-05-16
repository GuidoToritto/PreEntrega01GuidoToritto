alert(" 🤑 ¡Hola, qué tal! Gracias por solicitar el crédito. Por favor introduzca su nombre completo 🤑") 

function obtenerCliente() {
    let nombre;
    let apellido;
    let cliente;
  
    do {
      nombre = prompt("✅ Ingrese su nombre:");
      apellido = prompt("✅ Ingrese su apellido:");
      
      if (!/^[a-zA-Z]+$/.test(nombre) || !/^[a-zA-Z]+$/.test(apellido)) {
        alert("⚠️ El nombre y el apellido solo deben contener letras. Por favor, inténtelo nuevamente. ⚠️");
      }
    } while (!/^[a-zA-Z]+$/.test(nombre) || !/^[a-zA-Z]+$/.test(apellido));
  
    cliente = nombre + " " + apellido;
    return cliente;
  }
  
  let cliente = obtenerCliente();
  console.log("Cliente:", cliente);
  

let ingreso = parseInt(prompt(" Hola " + cliente + " ¿Qué valor desea ingresar? Recuerda que el ingreso debe ser superior a $10.000 y se cobrará un recargo del 20%. "))

if (cliente) {
    if (ingreso >= 10000) {
        console.log("El monto ingresado es: " + ingreso )
        let recargo = 0.20
        let detener = false
        if (ingreso >= 20000) {
            recargo = 0.25
        }
        if (ingreso >= 30000) {
            recargo = 0.30
        }
        if (ingreso >= 40000) {
            recargo = 0.35
        }

        if (ingreso <= 50000) {
            let resultado = ingreso * recargo
            alert( "💲 El ingreso es de: " + ingreso + " El recargo será de: " + resultado + "💲")
            console.log("Este es el monto del recargo: ", resultado)
            alert("💲" + resultado + ingreso + " es el monto total del recargo." + "💲")
            console.log("El total del recargo sería de: ", resultado + ingreso)
        } else {
            alert("⚠️ ¡Advertencia! El monto ingresado excede los $50.000. ⚠️")
            detener = true
        }
        if (detener) {
            alert("⚠️ Monto excedido ⚠️")
            console.log("Monto excedido")
        }
    }
    else {
        alert("⚠️ Disculpe, el monto ingresado no es válido. No podremos realizar la operación ⚠️")
    }

    alert("😄¡Gracias por usar el simulador!😄")

}

