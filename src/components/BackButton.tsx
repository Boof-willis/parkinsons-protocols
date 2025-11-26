import { Button } from "./ui/button";

export default function BackButton() {
  return (
    <a href="/">
      <Button variant="outline" className="mb-6">
        ← Back to Protocols
      </Button>
    </a>
  );
}

