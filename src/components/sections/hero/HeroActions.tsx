import { Button } from "@/components/ui/button";

export default function HeroActions() {
  return (
    <div className="mt-10 flex gap-4">
      <Button size="lg">View Projects</Button>

      <Button size="lg" variant="ghost">
        Resume
      </Button>
    </div>
  );
}
