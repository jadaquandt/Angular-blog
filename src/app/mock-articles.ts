import { Article } from './article'

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'My First Article',
        content: 'Content',
        description: 'This is my first article. It is great. Please Read it.',
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'https://images.dog.ceo/breeds/pinscher-miniature/n02107312_7703.jpg'
    },
    {
        id: 2,
        title: 'Eco Friendly Shampoo Review',
        content: 'Content',
        description: 'Another article reviewing shampoo',
        key: 'eco-friendly-shampoo',
        date: new Date(),
        imageUrl: 'https://images.dog.ceo/breeds/springer-english/n02102040_742.jpg'
    }
];
