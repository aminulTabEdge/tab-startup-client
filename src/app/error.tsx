"use client"; // Ensures this is a client component

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      {/* Display error message if available */}
      <p>{error.message || "An unexpected error occurred"}</p>
      {/* Add a retry button to reset the error */}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
