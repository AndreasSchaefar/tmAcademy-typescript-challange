import { renderPosts } from './posts';
import './style.css';

const root = document.querySelector('#posts') as HTMLDivElement;
renderPosts('https://jsonplaceholder.typicode.com/posts', root);
