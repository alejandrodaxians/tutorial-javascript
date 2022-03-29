// let inicio = prompt ("Nombre de usuario:");

if (inicio == "Admin"){
    let password = prompt("Introduzca contraseña:");
    
    if (password == "TheMaster"){
        alert("¡Bienvenido!");
    }else if (password === null){
        alert("Contraseña incorrecta");
    }else if (password != "TheMaster"){
        alert("Cancelado");
    }
}else if (inicio != "Admin") {
    alert("No te conozco.");
}