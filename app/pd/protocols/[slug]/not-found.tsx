import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 text-center">
      <h1 className="text-4xl font-bold">Protocol Not Found</h1>
      <p className="text-lg text-muted-foreground">
        The protocol you're looking for doesn't exist.
      </p>
      <Link href="/pd">
        <Button>Back to Protocols</Button>
      </Link>
    </div>
  );
}

