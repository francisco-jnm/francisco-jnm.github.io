var arr = [
    {"quote":"En lugar de darnos cuenta del sentimiento de tristeza, sentimos 'estoy triste'. </p> En lugar de darnos cuenta del sentimiento de soledad, sentimos 'estoy solo'. </p> En lugar de darnos cuenta del proceso de envejecimiento, sentimos 'me hago viejo'. </p> De esta manera, permitimos que la experiencia se apropie de nuestro ser y de su paz.", "author":"Rupert Spira"},
    {"quote":"El egoismo no consiste en vivir como uno desea, sino en pedir a los demás que vivan como uno desea vivir.", "author":"Oscar Wilde"},
	{"quote":"Mi vida ha estado llena de terribles desgracias, la mayoría de las cuales nunca sucedieron.", "author":"Michel de Montaigne"},
	{"quote":"El conocimiento de Uno Mismo no es una cosa a encontrar en libros, </br> ni es el resultado de una larga y dolorosa práctica o disciplina, </br> sino que es el darse cuenta, momento a momento, de cada pensamiento, emoción, sensación... a medida que surgen.", "author":"Jiddu Krishnamurti"},
	{"quote":"Cuando dejamos ir todo lo que podemos dejar ir, lo que nunca puede abandonarnos, brilla.", "author":"Rupert Spira"}
];

function random(arrayLength)
{
    return Math.floor(Math.random() * arrayLength);             // Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive).
}

function generateRandomQuote()
{
    var randomNumber = random(arr.length);                   // Número aleatorio de 0 a la longitud de la variable arr
    document.getElementById("quote").innerHTML = arr[randomNumber].quote;
    document.getElementById("author").innerHTML = "- " + arr[randomNumber].author;
}