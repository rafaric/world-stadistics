"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center">
      <div className="text-6xl">⚠️</div>
      <h2 className="text-2xl font-bold">Algo salió mal</h2>
      <p className="text-muted-foreground max-w-md">
        No pudimos cargar esta sección. Podés intentar de nuevo o volver más tarde.
      </p>
      <div className="flex gap-3">
        <Button onClick={reset} variant="default">
          Intentar de nuevo
        </Button>
        <Button onClick={() => (window.location.href = "/")} variant="outline">
          Volver al inicio
        </Button>
      </div>
    </div>
  );
}
