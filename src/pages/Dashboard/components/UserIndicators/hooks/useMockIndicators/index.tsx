import { Indicator } from "pages/Dashboard/types";

export default function useMockIndicators() {
  const mockIndicators: Indicator[] = [
    {
      indicator: "Capacidad de liderazgo/proactividad",
      value: 88,
    },
    {
      indicator: "Fit con equipo de trabajo",
      value: 68,
    },
    {
      indicator: "Fit con la empresa Mercado Libre",
      value: 91,
    },
    {
      indicator: "Tendencia a permanecer en la empresa",
      value: 76,
    },
    {
      indicator: "Visión estratégica",
      value: 81,
    },
  ];

  mockIndicators.sort((a, b) => {
    return b.value - a.value;
  });

  return { mockIndicators };
}
