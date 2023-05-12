let message = 'Hello, World!';
let x = 90;
// message = 100;
console.log(message);
class Student {
    nume;
    nota;
    constructor(nume, nota) {
        this.nume = nume;
        this.nota = nota;
    }
    saluta() {
        console.log('Salut, ' + this.nume + '! Nota este: ' + this.nota);
    }
    incrementeazaNota() {
        return ++this.nota;
    }
}
let vasilica = new Student('Vasilica', 7);
vasilica.saluta();
console.log(vasilica);
vasilica.incrementeazaNota();
console.log(vasilica);
let teslaModel3 = {
    make: 'Tesla',
    model: 'Model3',
    km: 100,
};
console.log(teslaModel3);
const fakeUrlPosts = 'http://localhost:3000/posts';
fetch(fakeUrlPosts).then((response) => {
    response.json();
}).then((data) => {
    const posts = data;
    console.log(posts);
});
