"use client";
import Image from "next/image";
import Link from "next/link";
import { Links } from "./components/links";
import PostList from "./blog/PostList";
import { useRouter } from "next/navigation";

export default function Home() {
  const postData = [
    { id: "1", slug: "aaaa", title: "aaa" },
    { id: "2", slug: "bbbb", title: "bbb" },
    { id: "3", slug: "cccc", title: "ccc" },
  ];
  const router = useRouter();
  return (
    <>
      <Link href="/dashboard">
        {/* <h1 className={"text-4xl text-orange-600"}>Hello Home Page</h1> */}
        Dashboard
      </Link>
      <Links></Links>
      <PostList posts={postData}></PostList>

      <Link href="/dashboard#settings" scroll={true}>
        Settings
      </Link>
      <br />
      <button type="button" onClick={() => router.push("/dashboard")}>
        dashboard
      </button>
    </>
  );
}
