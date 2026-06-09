const books = [
  { 
	  title: "React Billionaire", 
	  pages: 250, 
	  author: {
		  name: 'Alice',
		  age: 35
	  },
	  available: false,
	  price: '101€',
	  tags: ['advanced', 'js', 'react', 'senior']
  },
  { 
	  title: "Advanced JS", 
	  pages: 500, 
	  author: {
		  name: 'Bob',
		  age: 20
	  },
	  available: true,
	  price: '25€',
	  tags: ['advanced', 'js', 'mid-senior']
  },
  { 
	  title: "CSS Secrets", 
	  pages: 320, 
	  author: {
		  name: 'Alice',
		  age: 17
	  },
	  available: true,
	  price: '8€',
	  tags: ['html', 'css', 'junior']
  },
  { 
	  title: "HTML Mastery", 
	  pages: 200, 
	  author: {
		  name: 'Charlie',
		  age: 50
	  },
	  available: false,
	  price: '48€',
	  tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];

/*Snack 1 - Filtra e Modifica
Crea una funzione che somma due numeri.
Crea un array (longBooks) con i libri che hanno più di 300 pagine;
Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
Stampa in console ogni titolo nella console.*/

// 2. Array con i libri che hanno PIÙ di 300 pagine
const longBooks = books.filter(book => book.pages > 300);

// 3. Array che contiene solo i TITOLI dei libri in longBooks
const longBooksTitles = longBooks.map(book => book.title);

// 4. Stampa in console di ogni singolo titolo
console.log("Titoli dei libri con più di 300 pagine:");
longBooksTitles.forEach(title => console.log(title));


/*Snack 2 - Il primo libro scontato
Creare un array (availableBooks) che contiene tutti i libri disponibili.
Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).*/

const availableBooks = books.filter(book => book.available);
  console.log("Libri disponibili:", availableBooks);

  const discountedBooks = availableBooks.map(book =>{
	const prezzo = parseFloat(book.price.replace("€", ""));
	const prezzoScontato = (price * 0.8).toFixed(2);
	return{
		...book,
		price:  `${prezzoScontato}`

	}


  });

  const = prezzOScontatoLibro = prezzoScontato.find(book => {
	const prezzo = parseFloat(boook.price.replace("€", ""));
	return price % 1 === 0 ;
  })








  /*Snack 3 - Ordinare gli Autori
Creare un array (authors) che contiene gli autori dei libri.
Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
Ordina l’array authors in base all’età, senza creare un nuovo array.
(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
*/

const authors = books.map(autori => autori.author)
console.log("autori disponibili:", authors);

const areAuthorsAdults = authors.every(autori => autori.age >= 18 );
console.log("autori maggiorenni:", areAuthorsAdults);

authors.sort((a, b) => {

    if(areAuthorsAdults){
        return a.age - b.age;

    } else {
        return b.age - a.age;
    }
    
});

console.log(authors);






/*Snack 4 - Calcola l’età media
Creare un array (ages) che contiene le età degli autori dei libri.
Calcola la somma delle età (agesSum) usando reduce.
Stampa in console l’età media degli autori dei libri.
*/

const ages = books.map(book => book.author.age )
console.log("autori con eta  disponibili:", ages);

const agesSum = ages.reduce((sum, book) => sum + book.author.age, 0);

console.log("Somma totale delle età media :", agesSum);