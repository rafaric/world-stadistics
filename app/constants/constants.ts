export const countries = [
  { code: "AR", name: "Argentina" },
  { code: "BR", name: "Brasil" },
  { code: "US", name: "Estados Unidos" },
  { code: "FR", name: "Francia" },
];

export const categories = [
  {
    title: "Demografía",
    href: "/dashboard/demografia",
    image: "/images/demografia.png",
    description: "Indicadores como población, natalidad y esperanza de vida",
  },
  {
    title: "Economía",
    href: "/dashboard/economia",
    image: "/images/economia.png",
    description: "Inflación, PIB, desempleo, inversión extranjera",
  },
  {
    title: "Medio Ambiente",
    href: "/dashboard/ambiente",
    image: "/images/ambiente.png",
    description: "CO₂, energía renovable, consumo energético",
  },
  {
    title: "Educación",
    href: "/dashboard/educacion",
    image: "/images/educacion.png",
    description: "Gasto público, matrícula, cobertura",
  },
  {
    title: "Tecnología",
    href: "/dashboard/tecnologia",
    image: "/images/tecnologia.png",
    description: "Internet, celulares, innovación",
  },
  {
    title: "Comercio",
    href: "/dashboard/comercio",
    image: "/images/comercio.png",
    description: "Exportaciones, importaciones, cuenta corriente",
  },
];

export const ECONOMIC_INDICATORS = {
  pib: { label: "PIB", unit: "USD", code: "NY.GDP.MKTP.CD" },
  inflacion: { label: "Inflación anual", unit: "%", code: "FP.CPI.TOTL.ZG" },
  desempleo: { label: "Desempleo", unit: "%", code: "SL.UEM.TOTL.ZS" },
  inversion: {
    label: "Inversión extranjera directa",
    unit: "USD",
    code: "BX.KLT.DINV.CD.WD",
  },
};
export const DEMOGRAPHIC_INDICATORS = {
  poblacion: {
    label: "Población total",
    unit: "personas",
    code: "SP.POP.TOTL",
  },
  natalidad: {
    label: "Tasa de natalidad",
    unit: "por cada 1.000 personas",
    code: "SP.DYN.CBRT.IN",
  },
  esperanzaVida: {
    label: "Esperanza de vida",
    unit: "años",
    code: "SP.DYN.LE00.IN",
  },
  fertilidad: {
    label: "Tasa de fertilidad",
    unit: "hijos por mujer",
    code: "SP.DYN.TFRT.IN",
  },
  crecimiento: {
    label: "Crecimiento poblacional",
    unit: "% anual",
    code: "SP.POP.GROW",
  },
  migracion: {
    label: "Migración neta",
    unit: "personas",
    code: "SM.POP.NETM",
  },
  urbanos: {
    label: "Población urbana",
    unit: "% población total",
    code: "SP.URB.TOTL.IN.ZS",
  },
  densidad: {
    label: "Densidad poblacional",
    unit: "personas/km²",
    code: "EN.POP.DNST",
  },
  adultosMayores: {
    label: "Proporción adultos mayores",
    unit: "% población total",
    code: "SP.POP.65UP.TO.ZS",
  },
  jovenes: {
    label: "Proporción jóvenes",
    unit: "% población total",
    code: "SP.POP.0014.TO.ZS",
  },
};

export const ENVIRONMENT_INDICATORS = {
  emisionesCO2: {
    label: "Emisiones de CO₂ per cápita",
    unit: "toneladas por persona",
    code: "EN.ATM.CO2E.PC",
  },
  energiaRenovable: {
    label: "Consumo de energía renovable",
    unit: "% del consumo total",
    code: "EG.FEC.RNEW.ZS",
  },
  accesoAgua: {
    label: "Acceso a agua potable",
    unit: "% de población",
    code: "SH.H2O.SAFE.ZS",
  },
  accesoSaneamiento: {
    label: "Acceso a saneamiento mejorado",
    unit: "% de población",
    code: "SH.STA.SMSS.ZS",
  },
  areasProtegidas: {
    label: "Áreas protegidas terrestres y marinas",
    unit: "% del territorio",
    code: "ER.PTD.TOTL.ZS",
  },
  extraccionAgua: {
    label: "Extracción anual de agua dulce",
    unit: "% de recursos internos",
    code: "ER.H2O.FWTL.ZS",
  },
  coberturaForestal: {
    label: "Cobertura forestal",
    unit: "% del área de tierra",
    code: "AG.LND.FRST.ZS",
  },
  usoEnergia: {
    label: "Consumo energético per cápita",
    unit: "kg equivalente petróleo",
    code: "EG.USE.PCAP.KG.OE",
  },
  contaminacionPM25: {
    label: "Exposición a contaminación PM2.5",
    unit: "µg/m³",
    code: "EN.ATM.PM25.MC.M3",
  },
  produccionRenovable: {
    label: "Producción de electricidad renovable",
    unit: "% de la producción total",
    code: "EG.ELC.RNEW.ZS",
  },
};
export const EDUCATION_INDICATORS = {
  escolaridadPrimaria: {
    label: "Inscripción escolar primaria (% neto)",
    unit: "%",
    code: "SE.PRM.ENRR",
  },
  escolaridadSecundaria: {
    label: "Inscripción escolar secundaria (% neto)",
    unit: "%",
    code: "SE.SEC.ENRR",
  },
  escolaridadTerciaria: {
    label: "Inscripción escolar terciaria (% bruto)",
    unit: "%",
    code: "SE.TER.ENRR",
  },
  graduacionTerciaria: {
    label: "Tasa de graduación en educación terciaria",
    unit: "%",
    code: "SE.TER.CUAT.BA.ZS",
  },
  gastoPorAlumnoTerciario: {
    label: "Gasto por alumno en educación terciaria (% del PIB per cápita)",
    unit: "%",
    code: "SE.XPD.TERT.ZS",
  },
  proporcionMujeresTerciario: {
    label: "Proporción de mujeres en educación terciaria",
    unit: "%",
    code: "SE.TER.ENRR.FE.ZS",
  },
  alfabetizacionAdultos: {
    label: "Tasa de alfabetización adultos",
    unit: "%",
    code: "SE.ADT.LITR.ZS",
  },
  gastoEducacion: {
    label: "Gasto público en educación (% del PIB)",
    unit: "%",
    code: "SE.XPD.TOTL.GD.ZS",
  },
};

export const TECHNOLOGY_INDICATORS = {
  internet: {
    label: "Usuarios de Internet",
    unit: "% población",
    code: "IT.NET.USER.ZS",
  },
  celulares: {
    label: "Suscripciones móviles",
    unit: "por cada 100 personas",
    code: "IT.CEL.SETS.P2",
  },
  investigacion: {
    label: "Gasto en I+D",
    unit: "% PIB",
    code: "GB.XPD.RSDV.GD.ZS",
  },
  exportacionesTech: {
    label: "Exportaciones de tecnología",
    unit: "USD",
    code: "TX.VAL.TECH.CD",
  },
  patentes: {
    label: "Patentes otorgadas",
    unit: "cantidad",
    code: "IP.PAT.RESD",
  },
  electricidad: {
    label: "Acceso a electricidad",
    unit: "% población",
    code: "EG.ELC.ACCS.ZS",
  },
  energia: {
    label: "Consumo energético",
    unit: "kg equivalente petróleo",
    code: "EG.USE.PCAP.KG.OE",
  },
};
export const TRADE_INDICATORS = {
  exportaciones: {
    label: "Exportaciones de bienes y servicios",
    unit: "% del PIB",
    code: "NE.EXP.GNFS.ZS",
  },
  importaciones: {
    label: "Importaciones de bienes y servicios",
    unit: "% del PIB",
    code: "NE.IMP.GNFS.ZS",
  },
  balanzaComercial: {
    label: "Balanza comercial",
    unit: "% del PIB",
    code: "NE.RSB.GNFS.ZS",
  },
  aperturaEconomica: {
    label: "Apertura económica (export + import)",
    unit: "% del PIB",
    code: "NE.TRD.GNFS.ZS",
  },
};
