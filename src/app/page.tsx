import Image from "next/image";
import Link from "next/link";
import { Links } from "./components/links";
import PostList from "./blog/PostList";

export default function Home() {
  const postData = [
    { id: "1", slug: "aaaa", title: "aaa" },
    { id: "2", slug: "bbbb", title: "bbb" },
    { id: "3", slug: "cccc", title: "ccc" },
  ];
  return (
    <>
      <Link href="/dashboard">
        {/* <h1 className={"text-4xl text-orange-600"}>Hello Home Page</h1> */}
        Dashboard
      </Link>
      <Links></Links>
      <PostList posts={postData}></PostList>
    </>
  );
}
