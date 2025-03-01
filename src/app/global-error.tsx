"use client"; // Ensures this is a client component

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <head>
        <title>Error occurred</title>
      </head>
      <body>
        <h2>Something went wrong!</h2>
        <p>{error.message || "An unexpected error occurred"}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
