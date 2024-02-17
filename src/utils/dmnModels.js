export const dmnModels = [
  {
    id: 1,
    name: "ModC_REV_PAR_01-v5.ifc",
    size: 1811151,
    dmn: [
      {
        "model-namespace" : "https://kiegroup.org/dmn/_DD0007C9-3C2E-4290-A92E-3D03AD41E47F",
        "model-name" : "AlturaMax",
        "dmn-context" :
        {
          "construccion" :
          {
          "alturaConstruccion" : 8
          },
          "padron" :
          {
              "alturaMaxima": 27
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_89D1B161-19C8-4863-8C0F-C071D7613D3F",
        "model-name" : "FOS",
        "dmn-context" :
        {
          "construccion" :
          {
             "areaTotalConstruccionPlanta": 145,
      
          },
          "padron" :
          {
              "FOS": 1,
              "superficie": 650
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_EB5C8F23-46E2-40D1-AB79-D74003DCD81F",
        "model-name" : "ConstrucciónBasamento",
        "dmn-context" :
        {
          "construccion" :
          {
              "retiroDesdePlanoFachada": 4,
              "tieneBasamento": false,
              "alturaBasamento": 0,
              "alturaConstruccion" : 8
      
      
          },
          "padron" :
          {
              "esFrentista": false,
              "anchoVia": 9,
              "alturaMaxima": 27
          }
        }
      },
       //---------------------
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
              "cantDormitorio" : 3
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
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_ADA50AD4-ABB6-49C6-BD16-28E0F133D903",
        "model-name" : "ConstruccionGalibo",
        "dmn-context" :
        {
          "construccion" :
          {
              "alturaConstruccion" :8,
              "tieneGalibo" :true,
              "alturaGalibo" :3,
              "retiroDeGaliboDePlanoFachada" : 4
       },
          "padron" :
          {
              "alturaMaxima" :27
          }
        }
    },
     //---------------------
    {
      "model-namespace" : "https://kiegroup.org/dmn/_9CBEDDEB-89C9-469A-AE41-9D6D98984371",
      "model-name" : "SuperficieTotalMinimaVivienda-Dormitorios",
      "dmn-context" :
      {
        "vivienda" :
        {
            "cantDormitorio" : 3,
            "areaTotal" : 145
       }
      
      }
    },
     //---------------------
    {
      "model-namespace" : "https://kiegroup.org/dmn/_CFB0FAFD-07FF-4478-B0F6-781C9862B894",
      "model-name" : "MedianerasVistas",
      "dmn-context" :
      {
        "construccion" :
        {
            "alturaConstruccion" :8,
            "lineaEdificacionConstruccionIzquierda": 10,
            "lineaEdificacionConstruccionDerecha": 10
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
    //-----------------------------------------------------------------------------------------------
  {
    id: 2,
    name: "ModB_BLE_PAR_01-v2.ifc",
    size: 1823135,
    dmn: [
      {
        "model-namespace" : "https://kiegroup.org/dmn/_DD0007C9-3C2E-4290-A92E-3D03AD41E47F",
        "model-name" : "AlturaMax",
        "dmn-context" :
        {
          "construccion" :
          {
          "alturaConstruccion" : 27
          },
          "padron" :
          {
              "alturaMaxima": 27
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_89D1B161-19C8-4863-8C0F-C071D7613D3F",
        "model-name" : "FOS",
        "dmn-context" :
        {
          "construccion" :
          {
             "areaTotalConstruccionPlanta": 1800,
      
          },
          "padron" :
          {
              "FOS": 1,
              "superficie": 1800
          }
        }
      },
       //---------------------
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
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_4300BED8-A4F3-4816-AB54-B789423CCE3C",
        "model-name" : "ConstitucionDeVivienda",
        "dmn-context" :
        {
          "vivienda" :
          {
              "cantBano" : 3,
              "cantCocina" : 1,
              "cantEstar" : 1,
              "cantDormitorio" : 3
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
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_ADA50AD4-ABB6-49C6-BD16-28E0F133D903",
        "model-name" : "ConstruccionGalibo",
        "dmn-context" :
        {
          "construccion" :
          {
              "alturaConstruccion" : 27,
              "tieneGalibo" :true,
              "alturaGalibo" : 6,
              "retiroDeGaliboDePlanoFachada" : 4
       },
          "padron" :
          {
              "alturaMaxima" :27
          }
        }
    },
     //---------------------
    {
      "model-namespace" : "https://kiegroup.org/dmn/_9CBEDDEB-89C9-469A-AE41-9D6D98984371",
      "model-name" : "SuperficieTotalMinimaVivienda-Dormitorios",
      "dmn-context" :
      {
        "vivienda" :
        {
            "cantDormitorio" : 3,
            "areaTotal" : 100
       }
      
      }
    },
     //---------------------
    {
      "model-namespace" : "https://kiegroup.org/dmn/_CFB0FAFD-07FF-4478-B0F6-781C9862B894",
      "model-name" : "MedianerasVistas",
      "dmn-context" :
      {
        "construccion" :
        {
            "alturaConstruccion" :27,
            "lineaEdificacionConstruccionIzquierda": 27,
            "lineaEdificacionConstruccionDerecha": 27
     },
        "padron" :
        {
            "lineaEdificacionPadronDerecha": 27,
            "lineaEdificacionPadronIzquierda": 27
        } 
      }
    },
    ],
  },
  //-----------------------------------------------------------------------------------------------
  {
    id: 3,
    name: "ModC_REV_PAR_02-v1.ifc",
    size: 291323,
    dmn: [
      {
        "model-namespace" : "https://kiegroup.org/dmn/_DD0007C9-3C2E-4290-A92E-3D03AD41E47F",
        "model-name" : "AlturaMax",
        "dmn-context" :
        {
          "construccion" :
          {
          "alturaConstruccion" : 24
          },
          "padron" :
          {
              "alturaMaxima": 27
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_89D1B161-19C8-4863-8C0F-C071D7613D3F",
        "model-name" : "FOS",
        "dmn-context" :
        {
          "construccion" :
          {
             "areaTotalConstruccionPlanta": 1200,
      
          },
          "padron" :
          {
              "FOS": 1,
              "superficie": 2100
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_EB5C8F23-46E2-40D1-AB79-D74003DCD81F",
        "model-name" : "ConstrucciónBasamento",
        "dmn-context" :
        {
          "construccion" :
          {
              "retiroDesdePlanoFachada": 8,
              "tieneBasamento": false,
              "alturaBasamento": 0,
              "alturaConstruccion" : 24
      
      
          },
          "padron" :
          {
              "esFrentista": true,
              "anchoVia": 12,
              "alturaMaxima": 27
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_4300BED8-A4F3-4816-AB54-B789423CCE3C",
        "model-name" : "ConstitucionDeVivienda",
        "dmn-context" :
        {
          "vivienda" :
          {
              "cantBano" : 3,
              "cantCocina" : 1,
              "cantEstar" : 1,
              "cantDormitorio" : 3
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
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_ADA50AD4-ABB6-49C6-BD16-28E0F133D903",
        "model-name" : "ConstruccionGalibo",
        "dmn-context" :
        {
          "construccion" :
          {
              "alturaConstruccion" : 24,
              "tieneGalibo" :true,
              "alturaGalibo" : 3,
              "retiroDeGaliboDePlanoFachada" : 4
       },
          "padron" :
          {
              "alturaMaxima" :27
          }
        }
    },
     //---------------------
    {
      "model-namespace" : "https://kiegroup.org/dmn/_9CBEDDEB-89C9-469A-AE41-9D6D98984371",
      "model-name" : "SuperficieTotalMinimaVivienda-Dormitorios",
      "dmn-context" :
      {
        "vivienda" :
        {
            "cantDormitorio" : 3,
            "areaTotal" : 50
       }
      
      }
    },
     //---------------------
    {
      "model-namespace" : "https://kiegroup.org/dmn/_CFB0FAFD-07FF-4478-B0F6-781C9862B894",
      "model-name" : "MedianerasVistas",
      "dmn-context" :
      {
        "construccion" :
        {
            "alturaConstruccion" :24,
            "lineaEdificacionConstruccionIzquierda": 27,
            "lineaEdificacionConstruccionDerecha": 27
     },
        "padron" :
        {
            "lineaEdificacionPadronDerecha": 24,
            "lineaEdificacionPadronIzquierda": 24
        } 
      }
    }
    ],
  },
    //-----------------------------------------------------------------------------------------------
  {
    id: 4,
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
          "alturaConstruccion" : 9
          },
          "padron" :
          {
              "alturaMaxima": 27
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_89D1B161-19C8-4863-8C0F-C071D7613D3F",
        "model-name" : "FOS",
        "dmn-context" :
        {
          "construccion" :
          {
             "areaTotalConstruccionPlanta": 60,
      
          },
          "padron" :
          {
              "FOS": 1,
              "superficie": 350
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_EB5C8F23-46E2-40D1-AB79-D74003DCD81F",
        "model-name" : "ConstrucciónBasamento",
        "dmn-context" :
        {
          "construccion" :
          {
              "retiroDesdePlanoFachada": 4,
              "tieneBasamento": false,
              "alturaBasamento": 0,
              "alturaConstruccion" : 9
      
      
          },
          "padron" :
          {
              "esFrentista": false,
              "anchoVia": 9,
              "alturaMaxima": 27
          }
        }
      },
       //---------------------
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
              "cantDormitorio" : 4
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
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_ADA50AD4-ABB6-49C6-BD16-28E0F133D903",
        "model-name" : "ConstruccionGalibo",
        "dmn-context" :
        {
          "construccion" :
          {
              "alturaConstruccion" : 9,
              "tieneGalibo" :false,
              "alturaGalibo" : 0,
              "retiroDeGaliboDePlanoFachada" : 4
       },
          "padron" :
          {
              "alturaMaxima" :27
          }
        }
    },
     //---------------------
    {
      "model-namespace" : "https://kiegroup.org/dmn/_9CBEDDEB-89C9-469A-AE41-9D6D98984371",
      "model-name" : "SuperficieTotalMinimaVivienda-Dormitorios",
      "dmn-context" :
      {
        "vivienda" :
        {
            "cantDormitorio" : 4,
            "areaTotal" : 60
       }
      
      }
    },
     //---------------------
    {
      "model-namespace" : "https://kiegroup.org/dmn/_CFB0FAFD-07FF-4478-B0F6-781C9862B894",
      "model-name" : "MedianerasVistas",
      "dmn-context" :
      {
        "construccion" :
        {
            "alturaConstruccion" :9,
            "lineaEdificacionConstruccionIzquierda": 27,
            "lineaEdificacionConstruccionDerecha": 27
     },
        "padron" :
        {
            "lineaEdificacionPadronDerecha": 5,
            "lineaEdificacionPadronIzquierda": 5
        } 
      }
    }
    ],
  },
    //-----------------------------------------------------------------------------------------------
  {
    id: 5,
    name: "ModD_REV_PAR_01-v3.ifc",
    size: 2914820,
    dmn: [
      {
        "model-namespace" : "https://kiegroup.org/dmn/_DD0007C9-3C2E-4290-A92E-3D03AD41E47F",
        "model-name" : "AlturaMax",
        "dmn-context" :
        {
          "construccion" :
          {
          "alturaConstruccion" : 60
          },
          "padron" :
          {
              "alturaMaxima": 27
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_89D1B161-19C8-4863-8C0F-C071D7613D3F",
        "model-name" : "FOS",
        "dmn-context" :
        {
          "construccion" :
          {
             "areaTotalConstruccionPlanta": 600,
      
          },
          "padron" :
          {
              "FOS": 1,
              "superficie": 600
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_EB5C8F23-46E2-40D1-AB79-D74003DCD81F",
        "model-name" : "ConstrucciónBasamento",
        "dmn-context" :
        {
          "construccion" :
          {
              "retiroDesdePlanoFachada": 6,
              "tieneBasamento": false,
              "alturaBasamento": 0,
              "alturaConstruccion" : 60
      
      
          },
          "padron" :
          {
              "esFrentista": true,
              "anchoVia": 16,
              "alturaMaxima": 27
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_4300BED8-A4F3-4816-AB54-B789423CCE3C",
        "model-name" : "ConstitucionDeVivienda",
        "dmn-context" :
        {
          "vivienda" :
          {
              "cantBano" : 1,
              "cantCocina" : 1,
              "cantEstar" : 1,
              "cantDormitorio" : 3
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
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_ADA50AD4-ABB6-49C6-BD16-28E0F133D903",
        "model-name" : "ConstruccionGalibo",
        "dmn-context" :
        {
          "construccion" :
          {
              "alturaConstruccion" : 60,
              "tieneGalibo" :true,
              "alturaGalibo" : 3,
              "retiroDeGaliboDePlanoFachada" : 2
       },
          "padron" :
          {
              "alturaMaxima" :27
          }
        }
    },
     //---------------------
    {
      "model-namespace" : "https://kiegroup.org/dmn/_9CBEDDEB-89C9-469A-AE41-9D6D98984371",
      "model-name" : "SuperficieTotalMinimaVivienda-Dormitorios",
      "dmn-context" :
      {
        "vivienda" :
        {
            "cantDormitorio" : 3,
            "areaTotal" : 50
       }
      
      }
    },
     //---------------------
    {
      "model-namespace" : "https://kiegroup.org/dmn/_CFB0FAFD-07FF-4478-B0F6-781C9862B894",
      "model-name" : "MedianerasVistas",
      "dmn-context" :
      {
        "construccion" :
        {
            "alturaConstruccion" :60,
            "lineaEdificacionConstruccionIzquierda": 27,
            "lineaEdificacionConstruccionDerecha": 27
     },
        "padron" :
        {
            "lineaEdificacionPadronDerecha": 60,
            "lineaEdificacionPadronIzquierda": 60
        } 
      }
    }
    ],
  },
    //-----------------------------------------------------------------------------------------------
  {
    id: 6,
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
          "alturaConstruccion" : 3
          },
          "padron" :
          {
              "alturaMaxima": 27
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_89D1B161-19C8-4863-8C0F-C071D7613D3F",
        "model-name" : "FOS",
        "dmn-context" :
        {
          "construccion" :
          {
             "areaTotalConstruccionPlanta": 40,
      
          },
          "padron" :
          {
              "FOS": 1,
              "superficie": 280
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_EB5C8F23-46E2-40D1-AB79-D74003DCD81F",
        "model-name" : "ConstrucciónBasamento",
        "dmn-context" :
        {
          "construccion" :
          {
              "retiroDesdePlanoFachada": 4,
              "tieneBasamento": false,
              "alturaBasamento": 0,
              "alturaConstruccion" : 3
      
      
          },
          "padron" :
          {
              "esFrentista": false,
              "anchoVia": 6,
              "alturaMaxima": 27
          }
        }
      },
       //---------------------
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
              "independencia": false
          }  ,
        "dormitorio" :
          {
              "independencia": true
          }
        }
      },
       //---------------------
      {
        "model-namespace" : "https://kiegroup.org/dmn/_ADA50AD4-ABB6-49C6-BD16-28E0F133D903",
        "model-name" : "ConstruccionGalibo",
        "dmn-context" :
        {
          "construccion" :
          {
              "alturaConstruccion" : 3,
              "tieneGalibo" :false,
              "alturaGalibo" : 0,
              "retiroDeGaliboDePlanoFachada" : 4
       },
          "padron" :
          {
              "alturaMaxima" :27
          }
        }
    },
     //---------------------
    {
      "model-namespace" : "https://kiegroup.org/dmn/_9CBEDDEB-89C9-469A-AE41-9D6D98984371",
      "model-name" : "SuperficieTotalMinimaVivienda-Dormitorios",
      "dmn-context" :
      {
        "vivienda" :
        {
            "cantDormitorio" : 2,
            "areaTotal" : 40
       }
      
      }
    },
     //---------------------
    {
      "model-namespace" : "https://kiegroup.org/dmn/_CFB0FAFD-07FF-4478-B0F6-781C9862B894",
      "model-name" : "MedianerasVistas",
      "dmn-context" :
      {
        "construccion" :
        {
            "alturaConstruccion" :3,
            "lineaEdificacionConstruccionIzquierda": 27,
            "lineaEdificacionConstruccionDerecha": 27
     },
        "padron" :
        {
            "lineaEdificacionPadronDerecha": 3,
            "lineaEdificacionPadronIzquierda": 3
        } 
      }
    }
    ],
  },
];
