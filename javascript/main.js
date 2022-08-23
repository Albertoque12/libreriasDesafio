alert("Bienvenido a la tienda en línea. Los prescios son los siguientes: \n Producto 1, $15 \n Prodcuto 2, $10 \n Producto 3, $5 \n Producto 4, $3 \n Producto 5, $20. \n Puedes comprar máximo 1 producto")

let precioProductoUno = {
  precio : 15,
  color : "rojo" }
let precioProductoDos = {
  precio : 10,
  color : "azul" }
let precioProductoTres = {
  precio : 5,
  color : "negro" }
let precioProductoCuatro = {
  precio : 3,
  color : "rosa" }
let precioProductoCinco = {
  precio : 20,
  color : "amarillo" }


for(let i=0; i<1; i++){
  
    CantidadProductosDeseados = prompt("¿Cuántos productos deseas comprar?")
  
  if(CantidadProductosDeseados == 0){
    alert("No debes pagar nada, vuelve pronto")
  }else if(CantidadProductosDeseados == 1){
    alert("Excelente, entendiste la instrucción")  
  }else if(CantidadProductosDeseados > 1){
    alert(`No es posible comprar ${CantidadProductosDeseados}, recuerda que solo puedes comprar un producto`)
  }else if(CantidadProductosDeseados = ESC){
    break
  }
  
}

let productosAComprar = prompt("¿Estás listo para seleccionar tu producto? Qué bien, lo único que debes hacer es ingresar el número del producto que deseas comprar.")



const products1 = document.getElementsByClassName("product1")
const product2 = document.getElementsByClassName("product2")
const product3 = document.getElementsByClassName("product3")
const product4 = document.getElementsByClassName("product4")
const product5 = document.getElementsByClassName("product5")


switch(productosAComprar){
    case "1":
        productosAComprar = precioProductoUno.precio
        products1[0].style.color = "red"
        swal({
          title: "¡Gracias por tu compra!",
          text: "El producto 1 ha sido agregado al carrito",
          icon: "success",
          button: "Pagar",
        });
      
        alert(`Genial, este cuesta $${precioProductoUno.precio}. Solo lo tenemos en color ${precioProductoUno.color}`)
        
        break
    case "2":
        productosAComprar = precioProductoDos.precio
        product2[0].style.color = "red"
        swal({
          title: "¡Gracias por tu compra!",
          text: "El producto 2 ha sido agregado al carrito",
          icon: "success",
          button: "Pagar!",
        });
      
        alert(`Genial, este cuesta $${precioProductoDos.precio}. Solo lo tenemos en color ${precioProductoDos.color}`)
        break
    case "3":
        productosAComprar = precioProductoTres.precio
        product3[0].style.color = "red"
        swal({
          title: "¡Gracias por tu compra!",
          text: "El producto 3 ha sido agregado al carrito",
          icon: "success",
          button: "Pagar",
        });
      
        alert(`Genial, este cuesta $${precioProductoTres.precio}. Solo lo tenemos en color ${precioProductoTres.color}`)
        break
    case "4":
        productosAComprar = precioProductoCuatro.precio
        product4[0].style.color = "red"
        swal({
          title: "¡Gracias por tu compra!",
          text: "El producto 4 ha sido agregado al carrito",
          icon: "success",
          button: "Pagar",
        });
      
        alert(`Genial, este cuesta $${precioProductoCuatro.precio}. Solo lo tenemos en color ${precioProductoCuatro.color}`)
        break
    case "5":
        productosAComprar = precioProductoCinco.precio
        product5[0].style.color = "red"
        swal({
          title: "¡Gracias por tu compra!",
          text: "El producto 5 ha sido agregado al carrito",
          icon: "success",
          button: "Pagar",
        });
      
        alert(`Genial, este cuesta $${precioProductoCinco.precio}. Solo lo tenemos en color ${precioProductoCinco.color}`)
        break
    default:
        productosAComprar = 0
        alert("Ese producto no está en existencia")
}


function comprar(val1, val2){
    let resultado = val1 + val2

    return resultado
}


let totalAPagar = comprar(`Debes pagar $${productosAComprar}`, " más el 16% de impuestos, gracias por tu compra")
alert(totalAPagar)


const productoDeseado = []
let cantidad = 1

do{
  let entrada = prompt("Tu opinión es muy importante para nosotros. Sabemos que nuestro inventario es muy limitado. Si no tenemos el producto que te interesa, indícanoslo, por favor. \n Ingresa el producto")
  productoDeseado.push(entrada)
  console.log(productoDeseado.length)
}while(productoDeseado.length != cantidad)
  
  const nuevaLista = productoDeseado.concat(["Este es el producto que te gustaría tuviéramos en nuestro inventario. Haremos lo posible por conseguirlo y te avisaremos por medio de correo"])
  alert(nuevaLista.join("\n \n"))

  console.log(productoDeseado)



