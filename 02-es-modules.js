// In package.json we hae to add a type of "module" in order for us to use ES Modules
const posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three"},
  { id: 4, title: "Post four"},
  { id: 5, title: "Post five" },
  { id: 6, title: "Post six" },
  { id: 7, title: "Post seven" },
  { id: 8, title: "Post eight" },
  { id: 9, title: "Post nine" },
  { id: 10, title: "Post ten" },
]

// Named export
// export const getPosts = () => posts;

const getPosts = () => posts;

export const getPostLength = () => posts.length;

export default getPosts;