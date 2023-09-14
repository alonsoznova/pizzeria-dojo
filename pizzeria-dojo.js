function pizzaOven(tipoCorteza, tipoSalsa, quesos, toppings){
    let Pizza = {};
    Pizza.corteza = tipoCorteza;
    Pizza.salsa = tipoSalsa;
    Pizza.quesos = quesos;
    Pizza.toppings = toppings;
    return Pizza;
}
var p1 = pizzaOven("Estilo Chicago", "Tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
var p2 = pizzaOven("Lanzada a mano" , "Marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
var p3 = pizzaOven("Napolitana", "tradicional", ["mozzarella"], ["piña, tomate, jamón"]);
var p4 = pizzaOven("Romana", "tradicional", ["mozarella"], ["jamón, champiñon, oliva"]);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);