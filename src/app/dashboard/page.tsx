import Link from "next/link";
export default function Page() {
  return (
    <section>
      <h1 className={"text-3xl text-blue-500"}>Hello Dashboard Page</h1>
      <Link href="/">
        <h2 className={"text-3xl text-orange-500"}>back to main</h2>
      </Link>

      <section id="settings1">
        <div style={{ height: "500px" }}></div>
        <p>settings1settings1settings1settings1settings1settings1settings1</p>
      </section>
      <section id="settings">
        <div style={{ height: "500px" }}></div>
        <p>
          settingssettingssettingssettingssettingssettingssettingssettingssettingssettingssettingssettings
        </p>
        <div style={{ height: "500px" }}></div>
      </section>
    </section>
  );
}
