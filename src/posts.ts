export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function PostElement(p: Post) {
  const post = document.createElement('article');
  const userId = document.createElement('div');
  const id = document.createElement('div');
  const title = document.createElement('h2');
  const body = document.createElement('p');

  post.className = 'post';
  userId.className = 'post__user-id';
  id.className = 'post__id';
  title.className = 'post__title';
  body.className = 'post__body';

  userId.textContent = `User ID: ${p.userId}`;
  id.textContent = `Post ID: ${p.id}`;
  title.textContent = p.title;
  body.textContent = p.body;

  post.append(userId, id, title, body);

  return post;
}

async function getPosts<T>(url: string): Promise<[T[], Error]> {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return [json, null];
  } catch (e) {
    return [null, e];
  }
}

async function renderPosts(url: string, mountPoint: HTMLElement) {
  const response = await getPosts<Post>(url);
  const [posts, error] = response;
  if (error) {
    mountPoint.append(error.message);
  } else {
    posts.forEach((p) => {
      mountPoint.append(PostElement(p));
    });
  }
}

export { renderPosts };
