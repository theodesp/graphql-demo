import articlesRepository from '../respositories/article';

const index = {
  Query: {
    version: () => process.env.npm_package_version,
    article: (parent, { id } ) =>  {
      return articlesRepository.findById(id);
    },
    articles: () => {
      return articlesRepository.findAll();
    }
  }
};

export default index;
