let name = prompt("C'est quoi ton blaze ?");

let welcomeTitle = document.getElementById("welcomeTitle");
welcomeTitle.innerText = "Bienvenue dans le monde de l'art " + name + " ❤";

let isOK = prompt("Ca va ? oui ou non")


if ((isOK == "Oui") || (isOK == "oui") || (isOK == "yui") || (isOK == "Yes") || (isOK == "yes") || (isOK == "YES") || (isOK == "OUI"))
{	
	console.log("L'utilisatrice va bien")
}
else if ((isOK == "non") || (isOK == "Non") || (isOK == "nan") || (isOK == "no") || (isOK == "NON") || (isOK == "No") || (isOK == "NO") || (isOK == "Bof") || (isOK == "bof") || (isOK == "BOF"))
{
	console.log("L'utilisatrice va mal")
}
else
{
	console.log("L'utilisatrice n'a pas compris la demande")
}