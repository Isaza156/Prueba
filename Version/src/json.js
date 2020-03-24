export const Classifications = [
  {
    type: "select",
    options: [
        {
            Id: 0,
            Classification: "",
            SizeDescription: ""
          },
      {
        Id: 1,
        Classification: "Micro",
        SizeDescription: "Número de trabajadores menor o igual a 10"
      },
      {
        Id: 2,
        Classification: "Pequeña",
        SizeDescription: "Número de trabajadores entre 11 y 50"
      },
      {
        Id: 3,
        Classification: "Mediana",
        SizeDescription: "Número de trabajadores entre 51 y 200"
      },
      {
        Id: 4,
        Classification: "Grande",
        SizeDescription: "Número de trabajadores mayor a 200"
      }
    ]
  }
];

export const Risks = [
  {
    type: "select",
    options: [
       { Id: 0,
        Class: "",
        Level: "",
        Description:
          "La mayoría de las actividades comerciales y financieras, trabajos de oficina, centros educativos y restaurantes"},
      {
        Id: 1,
        Class: "I",
        Level: "Mínimo",
        Description:
          "La mayoría de las actividades comerciales y financieras, trabajos de oficina, centros educativos y restaurantes"
      },
      {
        Id: 2,
        Class: "II",
        Level: "Bajo",
        Description:
          "Algunos procesos manufactureros como la fabricación de tapetes, tejidos, confecciones y flores artificiales; almacenes por departamentos y algunas labores agrícolas"
      },
      {
        Id: 3,
        Class: "III",
        Level: "Medio",
        Description:
          "Procesos manufactureros como fabricación de agujas, alcoholes, alimentos, automotores y artículos de cuero"
      },
      {
        Id: 4,
        Class: "IV",
        Level: "Alto",
        Description:
          "Procesos manufactureros como aceites, cervezas y vidrios; procesos de galvanización, transporte aéreo o terrestre"
      },
      {
        Id: 5,
        Class: "V",
        Level: "Máximo",
        Description:
          "Areneras, manejo de asbestos, bomberos, manejo de explosivos, construcción, explotación petrolera y minera, entre otros"
      }
    ]
  }
];
