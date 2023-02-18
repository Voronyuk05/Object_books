const BookList = {
    Books: [
        {
            name: "Гаррі Потер",
            author: "Джоан Роулінг,",
            cost: 500,
            link: "https://upload.wikimedia.org/wikipedia/ru/b/b4/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%94_movie.jpg"
        },
        {
            name: "Відьмак",
            author: "Анджей Сапковський",
            cost: 400,
            link: "https://book24.ua/upload/iblock/9c8/9c84e81810555157d12ed344347a54dd.JPG"
        },
        {
            name: "Процес",
            author: "Франс Кафка",
            cost: 450,
            link: "https://content1.rozetka.com.ua/goods/images/big/240455994.jpg"
        },
        {
            name: "Кобзар",
            author: "Тарас Шевченко",
            cost: 300,
            link: "https://book24.ua/upload/iblock/90c/90c48f7589ee7cbd33bc0b67d36cde4c.jpg"
        },
        {
            name: "Берсерк",
            author: "Кентаро Міура",
            cost: 300,
            link: "https://upload.wikimedia.org/wikipedia/ru/b/b7/Berserk_Vol._1.png"
        },
        {
            name: "Голодні ігри",
            author: "Сюзанна Коллінз",
            cost: 400,
            link: "https://upload.wikimedia.org/wikipedia/uk/4/44/Golodni_igry_obl_cut.jpg"
        },
        {
            name: "Маленький принц",
            author: "Антуан де Сент-Екзюпері",
            cost: 250,
            link: "https://content2.rozetka.com.ua/goods/images/original/53223538.jpg"
        },
        {
            name: "451 градус по Фаренгейту",
            author: "Рей Бредбері",
            cost: 500,
            link: "https://cv6.litres.ru/pub/c/cover_200/39507162.jpg"
        },
        {
            name: "У пошуках втраченого часу",
            author: "Марсель Пруст",
            cost: 500,
            link: "https://d25bxi3v5ifga8.cloudfront.net/uploads/base64img/20210407/images-reviews-ann_22_27_0.jpg"
        },
        {
            name: "Війна світів",
            author: "Герберт Велз",
            cost: 600,
            link: "https://eneyida.tv/uploads/posts/2021-11/1637770424_1.jpeg"
        }
        
    ]
}

EnterName = prompt('Введіть назву книги','')

let bookList = BookList.Books;

for (book of bookList) {
    if (EnterName == book.name) {
        alert("Назва книги:" + book.name + "\n" + "Автор:" +book.author + "\n" + "Ціна:" + book.cost + "\n" + "Посилання на обкладинку:" + book.link)
    }
}