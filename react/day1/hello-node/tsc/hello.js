var message = 'Hello, World!';
var x = 90;
// message = 100;
console.log(message);
var Student = /** @class */ (function () {
    function Student(nume, nota) {
        this.nume = nume;
        this.nota = nota;
    }
    Student.prototype.saluta = function () {
        console.log('Salut, ' + this.nume + '! Nota este: ' + this.nota);
    };
    Student.prototype.incrementeazaNota = function () {
        return ++this.nota;
    };
    return Student;
}());
var vasilica = new Student('Vasilica', 7);
vasilica.saluta();
console.log(vasilica);
vasilica.incrementeazaNota();
console.log(vasilica);
var teslaModel3 = {
    make: 'Tesla',
    model: 'Model3',
    km: 100
};
console.log(teslaModel3);
var fakeUrlPosts = 'http://localhost:3000/posts';
fetch(fakeUrlPosts).then(function (response) {
    return response.json();
}).then(function (data) {
    var posts = data;
    console.log(posts);
    for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
        var post = posts_1[_i];
        console.log(post.id, post.title, post.author);
    }
});
