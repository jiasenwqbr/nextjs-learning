export default function Page({ params }: { params: { slug: string } }) {
  return <div>My shop Post:{params.slug}</div>;
}
