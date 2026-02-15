"use client";

export default function TestError() {
  // This will trigger the error boundary
  throw new Error("This is a test error to see the 500 error page!");

  return <div>This will never render</div>;
}
