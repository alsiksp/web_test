import { Component } from '@angular/core';

interface Book {
  title: string;
  author: string;
  year: number;
  genre: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  colors: string[] = ["black", "pink", "red", "white"];

  books: Book[] = [
    { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967, genre: 'Роман' },
    { title: 'Преступление и наказание', author: 'Фёдор Достоевский', year: 1866, genre: 'Роман' },
    { title: 'Война и мир', author: 'Лев Толстой', year: 1869, genre: 'Роман' },
    { title: '1984', author: 'Джордж Оруэлл', year: 1949, genre: 'Антиутопия' },
    { title: 'Гарри Поттер и философский камень', author: 'Джоан Роулинг', year: 1997, genre: 'Фэнтези' }
  ];

  constructor() {}
}