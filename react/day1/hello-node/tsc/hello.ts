let message = 'Hello, World!';
let x:number = 90;
// message = 100;
console.log(message);

class Student {

    nume: string;
    nota: number;

    constructor(nume: string, nota: number) {
        this.nume = nume;
        this.nota = nota;
    }

    saluta(): void {
        console.log('Salut, ' + this.nume + '! Nota este: ' + this.nota);
    }

    incrementeazaNota(): number {
        return ++this.nota;
    }

}

let vasilica:Student = new Student('Vasilica', 7);
vasilica.saluta();
console.log(vasilica);
vasilica.incrementeazaNota();
console.log(vasilica);

interface Car {
    make: string;
    model: string;
    km: number;
}

let teslaModel3:Car = {
    make: 'Tesla',
    model: 'Model3',
    km: 100,
};
console.log(teslaModel3);

interface Post {
    id: number;
    title: string;
    author: string;
}

const fakeUrlPosts = 'http://localhost:3000/posts';
fetch(fakeUrlPosts).then((response) => {
    return response.json()
}).then((data: any) => {
    const posts: Post[] = data;
    console.log(posts);
    for (let post of posts) {
        console.log(post.id, post.title, post.author);
    }
});