import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-5xl font-bold">
        ShipFlow AI
        <Button className="ml-4">
          Get Started
        </Button>
      </h1>
    </main>
  );
}