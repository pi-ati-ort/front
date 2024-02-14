export const dmnModels = [
  {
    id: 1,
    name: "ModB_BLE_PAR_02-v5.ifc",
    size: 1811151,
    dmn: [
      {
        "model-namespace" : "https://kiegroup.org/dmn/_DD0007C9-3C2E-4290-A92E-3D03AD41E47F",
        "model-name" : "AlturaMax",
        "dmn-context" :
        {
          "construccion" :
          {
          "alturaConstruccion" : 26
          },
          "padron" :
          {
              "alturaMaxima": 27
          }
        }
      },
      {
        "model-namespace" : "https://kiegroup.org/dmn/_89D1B161-19C8-4863-8C0F-C071D7613D3F",
        "model-name" : "FOS",
        "dmn-context" :
        {
          "construccion" :
          {
             "areaTotalConstruccionPlanta": 50
      
          },
          "padron" :
          {
              "FOS": 0.5,
              "superficie": 0
          }
        }
      },
      {
        "model-namespace" : "https://kiegroup.org/dmn/_EB5C8F23-46E2-40D1-AB79-D74003DCD81F",
        "model-name" : "ConstrucciónBasamento",
        "dmn-context" :
        {
          "construccion" :
          {
              "retiroDesdePlanoFachada": 4,
              "tieneBasamento": true,
              "alturaBasamento": 7,
              "alturaConstruccion" : 27
      
      
          },
          "padron" :
          {
              "esFrentista": true,
              "anchoVia": 16,
              "alturaMaxima": 27
          }
        }
      },
      {
        "model-namespace" : "https://kiegroup.org/dmn/_4300BED8-A4F3-4816-AB54-B789423CCE3C",
        "model-name" : "ConstitucionDeVivienda",
        "dmn-context" :
        {
          "vivienda" :
          {
              "cantBano" : 2,
              "cantCocina" : 1,
              "cantEstar" : 1,
              "cantDormitorio" : 2
          },
        "bano" :
          {
              "independencia": true
          }  ,
        "dormitorio" :
          {
              "independencia": true
          }
        }
      },
      {
        "model-namespace" : "https://kiegroup.org/dmn/_ADA50AD4-ABB6-49C6-BD16-28E0F133D903",
        "model-name" : "ConstruccionGalibo",
        "dmn-context" :
        {
          "construccion" :
          {
              "alturaConstruccion" :28,
              "tieneGalibo" :true,
              "alturaGalibo" :3.50,
              "retiroDeGaliboDePlanoFachada" :2
       },
          "padron" :
          {
              "alturaMax" :27
          }
        }
    },
    {
      "model-namespace" : "https://kiegroup.org/dmn/_9CBEDDEB-89C9-469A-AE41-9D6D98984371",
      "model-name" : "SuperficieTotalMinimaVivienda-Dormitorios",
      "dmn-context" :
      {
        "vivienda" :
        {
            "cantDormitorio" : 3,
            "areaTotal" : 3
       }
      
      }
    },
    {
      "model-namespace" : "https://kiegroup.org/dmn/_CFB0FAFD-07FF-4478-B0F6-781C9862B894",
      "model-name" : "MedianerasVistas",
      "dmn-context" :
      {
        "construccion" :
        {
            "alturaConstruccion" :10,
            "lineaEdificacionConstruccionIzquierda": 10,
            "lineaEdificacionConstruccionDerecha": 4
     },
        "padron" :
        {
            "lineaEdificacionPadronDerecha": 10,
            "lineaEdificacionPadronIzquierda": 10
        } 
      }
    },
    ],
  },
  {
    id: 2,
    name: "ModA_C20-FZK-v1.ifc",
    size: 2526544,
    dmn: [
      { 
        "model-namespace" : "https://kiegroup.org/dmn/_DD0007C9-3C2E-4290-A92E-3D03AD41E47F",
        "model-name" : "AlturaMax",
        "dmn-context" :
        {
          "construccion" :
          {
              "alturaContruccion" : 26,
              "retiroDesdePlanoFachada" : null,
              "tieneBasamento" : null,
              "alturaBasamento" : null,
              "areaTotalConstruccionPlanta" : null,
              "tieneGalibo" : false,
              "alturaGalibo" : null,
              "retiroDeGaliboDePlanoFachada" : null,
              "lineaEdificacionConstruccionIzquierda" : null,
              "lineaEdificacionConstruccionDerecha" : null
          },
          "padron" :
          {
            "alturaMaxima" : 27,              
            "esFrentista": false,
            "anchoVia": null,
            "FOS": 100,
            "superficie": null,
            "lineaEdificacionPadronDerecha": null,
            "lineaEdificacionPadronIzquierda": null
      
          },
          "vivienda" : 
          {
            "cantBano" : null,
            "cantCocina" : null,
            "cantEstar" : null,
            "cantDormitorio" : null,
            "areaTotal" : null
          },
          "bano" : 
          {
            "independencia" : true
          },
          "dormitorio" : 
          {
            "independencia" : true
          }
        }
      }
    ],
  },
  {
    id: 3,
    name: "AC20-FZK-Haus.ifc",
    size: 2526544,
    dmn: [
      { 
        "model-namespace" : "https://kiegroup.org/dmn/_DD0007C9-3C2E-4290-A92E-3D03AD41E47F",
        "model-name" : "AlturaMax",
        "dmn-context" :
        {
          "construccion" :
          {
              "alturaContruccion" : 26,
              "retiroDesdePlanoFachada" : null,
              "tieneBasamento" : null,
              "alturaBasamento" : null,
              "areaTotalConstruccionPlanta" : null,
              "tieneGalibo" : false,
              "alturaGalibo" : null,
              "retiroDeGaliboDePlanoFachada" : null,
              "lineaEdificacionConstruccionIzquierda" : null,
              "lineaEdificacionConstruccionDerecha" : null
          },
          "padron" :
          {
            "alturaMaxima" : 27,              
            "esFrentista": false,
            "anchoVia": null,
            "FOS": 100,
            "superficie": null,
            "lineaEdificacionPadronDerecha": null,
            "lineaEdificacionPadronIzquierda": null
      
          },
          "vivienda" : 
          {
            "cantBano" : null,
            "cantCocina" : null,
            "cantEstar" : null,
            "cantDormitorio" : null,
            "areaTotal" : null
          },
          "bano" : 
          {
            "independencia" : true
          },
          "dormitorio" : 
          {
            "independencia" : true
          }
        }
      }
    ],
  },
  {
    id: 4,
    name: "AC20-FZK-Haus.ifc",
    size: 2526544,
    dmn: [
      { 
        "model-namespace" : "https://kiegroup.org/dmn/_DD0007C9-3C2E-4290-A92E-3D03AD41E47F",
        "model-name" : "AlturaMax",
        "dmn-context" :
        {
          "construccion" :
          {
              "alturaContruccion" : 26,
              "retiroDesdePlanoFachada" : null,
              "tieneBasamento" : null,
              "alturaBasamento" : null,
              "areaTotalConstruccionPlanta" : null,
              "tieneGalibo" : false,
              "alturaGalibo" : null,
              "retiroDeGaliboDePlanoFachada" : null,
              "lineaEdificacionConstruccionIzquierda" : null,
              "lineaEdificacionConstruccionDerecha" : null
          },
          "padron" :
          {
            "alturaMaxima" : 27,              
            "esFrentista": false,
            "anchoVia": null,
            "FOS": 100,
            "superficie": null,
            "lineaEdificacionPadronDerecha": null,
            "lineaEdificacionPadronIzquierda": null
      
          },
          "vivienda" : 
          {
            "cantBano" : null,
            "cantCocina" : null,
            "cantEstar" : null,
            "cantDormitorio" : null,
            "areaTotal" : null
          },
          "bano" : 
          {
            "independencia" : true
          },
          "dormitorio" : 
          {
            "independencia" : true
          }
        }
      }
    ],
  },
  {
    id: 5,
    name: "AC20-FZK-Haus.ifc",
    size: 2526544,
    dmn: [
      { 
        "model-namespace" : "https://kiegroup.org/dmn/_DD0007C9-3C2E-4290-A92E-3D03AD41E47F",
        "model-name" : "AlturaMax",
        "dmn-context" :
        {
          "construccion" :
          {
              "alturaContruccion" : 26,
              "retiroDesdePlanoFachada" : null,
              "tieneBasamento" : null,
              "alturaBasamento" : null,
              "areaTotalConstruccionPlanta" : null,
              "tieneGalibo" : false,
              "alturaGalibo" : null,
              "retiroDeGaliboDePlanoFachada" : null,
              "lineaEdificacionConstruccionIzquierda" : null,
              "lineaEdificacionConstruccionDerecha" : null
          },
          "padron" :
          {
            "alturaMaxima" : 27,              
            "esFrentista": false,
            "anchoVia": null,
            "FOS": 100,
            "superficie": null,
            "lineaEdificacionPadronDerecha": null,
            "lineaEdificacionPadronIzquierda": null
      
          },
          "vivienda" : 
          {
            "cantBano" : null,
            "cantCocina" : null,
            "cantEstar" : null,
            "cantDormitorio" : null,
            "areaTotal" : null
          },
          "bano" : 
          {
            "independencia" : true
          },
          "dormitorio" : 
          {
            "independencia" : true
          }
        }
      }
    ],
  },
  {
    id: 6,
    name: "AC20-FZK-Haus.ifc",
    size: 2526544,
    dmn: [
      { 
        "model-namespace" : "https://kiegroup.org/dmn/_DD0007C9-3C2E-4290-A92E-3D03AD41E47F",
        "model-name" : "AlturaMax",
        "dmn-context" :
        {
          "construccion" :
          {
              "alturaContruccion" : 26,
              "retiroDesdePlanoFachada" : null,
              "tieneBasamento" : null,
              "alturaBasamento" : null,
              "areaTotalConstruccionPlanta" : null,
              "tieneGalibo" : false,
              "alturaGalibo" : null,
              "retiroDeGaliboDePlanoFachada" : null,
              "lineaEdificacionConstruccionIzquierda" : null,
              "lineaEdificacionConstruccionDerecha" : null
          },
          "padron" :
          {
            "alturaMaxima" : 27,              
            "esFrentista": false,
            "anchoVia": null,
            "FOS": 100,
            "superficie": null,
            "lineaEdificacionPadronDerecha": null,
            "lineaEdificacionPadronIzquierda": null
      
          },
          "vivienda" : 
          {
            "cantBano" : null,
            "cantCocina" : null,
            "cantEstar" : null,
            "cantDormitorio" : null,
            "areaTotal" : null
          },
          "bano" : 
          {
            "independencia" : true
          },
          "dormitorio" : 
          {
            "independencia" : true
          }
        }
      }
    ],
  },
];
