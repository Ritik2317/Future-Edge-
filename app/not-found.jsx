import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Not Found</h2>
      <p className="mb-8 text-gray-600">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" >
        <Button className="px-6 py-2 text-lg hover:cursor-pointer">Return Home</Button>
      </Link>
    </div>
  );
}
