import Link from "next/link";
type Menu = {
  id: string;
  slug: string;
  title: string;
};
type PostListProps = {
  posts: Menu[];
};
export default function PostList({ posts }: PostListProps) {
  return (
    <ul>
      {posts.map((post: Menu) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
