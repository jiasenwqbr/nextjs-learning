"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>error</h2>
      <button onClick={() => reset()}>rest</button>
    </div>
  );
}
