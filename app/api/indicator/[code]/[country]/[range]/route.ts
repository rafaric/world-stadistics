// app/api/indicator/[code]/[country]/[range]/route.ts
import { getIndicatorHistory } from "@/lib/getIndicatorHistory";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  {
    params,
  }: { params: Promise<{ code: string; country: string; range: string }> }
) {
  const { code, country, range } = await params;
  if (!params) {
    return new Response("Missing params context", { status: 400 });
  }

  if (!code || !country || !range) {
    return new Response(JSON.stringify({ error: "Faltan parámetros" }), {
      status: 400,
    });
  }

  const years = Number(range);
  if (isNaN(years) || years <= 0 || years > 50) {
    return new Response(JSON.stringify({ error: "Rango inválido" }), {
      status: 400,
    });
  }

  try {
    const history = await getIndicatorHistory(code, country, years);
    return NextResponse.json(history);
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error al obtener datos" }), {
      status: 500,
    });
  }
}
