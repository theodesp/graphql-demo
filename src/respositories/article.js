export let articles = [
  { id: 1, title: "First Post", body: "Lorem Ipzum", posted: 1575396693},
  { id: 2, title: "Second Post", body: "Bacon Ipzum" }
];

export class ArticleRepository {
  constructor(articles) {
    this.articles = articles;
  }

  findAll() {
    return this.articles;
  }

  findById(id) {
    return this.articles.find(article => article.id === id)
  }
}

export default new ArticleRepository(articles);
