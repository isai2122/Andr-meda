import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";


const productos = [
  {
    id: 1,
    nombre: "Crema nutritiva corporal Tododia cereza y avellana",
    tienda: "Natura",
    precio: "$30.300",
    enlace: "https://www.natura.com.co/p/crema-nutritiva-corporal-tododia-cereza-y-avellana-200ml/NATCOL-23218?position=2&listTitle=manual+showcase+-+tu+rutina+Tododia+Cereza+y+Avellana&consultoria=ortizvallejo",
    imagen: "/images/Images/1.jpg",
    categoria: "Aseo personal",
  },
  {
    id: 2,
    nombre: "Regalo biografía clásico femenino",
    tienda: "Natura",
    precio: "$103.000",
    enlace: "https://www.natura.com.co/p/regalo-biografia-clasico-femenino/NATCOL-189364?position=1&listTitle=category+page+list+showcase+-+perfumeria&consultoria=ortizvallejo",
    imagen: "/images/Images/2.jpg",
    categoria: "Perfumes",
  },
  {
    id: 3,
    nombre: "Una art femenino",
    tienda: "Natura",
    precio: "$251.400",
    enlace: "https://www.natura.com.co/p/eau-de-parfum-una-art-femenino-50ml/NATCOL-168017?position=2&listTitle=manual+showcase+-+nueva+colecci%C3%B3n+UNA+libre&consultoria=ortizvallejo",
    imagen: "/images/Images/3.jpg",
    categoria: "Perfumes",
  },
  {
    id: 4,
    nombre: "Labial extremo confort FPS 25 Una",
    tienda: "Natura",
    precio: "$32.800",
    enlace: "https://www.natura.com.co/p/labial-extremo-confort-fps-25-una-38g/NATCOL-168348?position=3&listTitle=manual+showcase+-+nueva+colecci%C3%B3n+UNA+libre&consultoria=ortizvallejo",
    imagen: "/images/Images/4.jpg",
    categoria: "Maquillaje",
  },
  {
    id: 5,
    nombre: "Aceite trifásico corporal Ekos maracuyá",
    tienda: "Natura",
    precio: "$55.600",
    enlace: "https://www.natura.com.co/p/aceite-trifasico-corporal-ekos-maracuya-200ml/NATCOL-97428?position=1&listTitle=manual+showcase+-+lleva+tus+favoritos+ahora+con+40%25+off&consultoria=ortizvallejo",
    imagen: "/images/Images/5.jpg",
    categoria: "Aseo personal",
  },
  {
    id: 6,
    nombre: "Eau de toilette Kaiak clásico femenino - 100ml",
    tienda: "Natura",
    precio: "$87.900",
    enlace: "https://www.natura.com.co/p/eau-de-toilette-kaiak-clasico-femenino-100ml/NATCOL-111176?position=3&listTitle=manual+showcase+-+lleva+tus+favoritos+ahora+con+40%25+off&consultoria=ortizvallejo",
    imagen: "/images/Images/6.jpg",
    categoria: "Perfumes",
  },
  {
    id: 7,
    nombre: "Pulpa hidratante para manos Ekos castaña",
    tienda: "Natura",
    precio: "$47.300",
    enlace: "https://www.natura.com.co/p/pulpa-hidratante-para-manos-ekos-castana-75g/NATCOL-70983?position=1&listTitle=search+results+list+showcase+-+Pulpa+hidratante+para+manos+Ekos+casta%C3%B1a&consultoria=ortizvallejo",
    imagen: "/images/Images/7.jpg",
    categoria: "Aseo personal",
  },
  {
    id: 8,
    nombre: "Eau de toilette Kaiak océano masculino - 100ml",
    tienda: "Natura",
    precio: "$87.900",
    enlace: "https://www.natura.com.co/p/eau-de-toilette-kaiak-oceano-masculino-100ml/NATCOL-111175?position=1&listTitle=search+results+list+showcase+-+Perfmeria&consultoria=ortizvallejo",
    imagen: "/images/Images/8.jpg",
    categoria: "Perfumes",
  },
  {
    id: 9,
    nombre: "Antitranspirante roll-on Tododia hojas de limón y guanábana",
    tienda: "Natura",
    precio: "$15.700",
    enlace: "https://www.natura.com.co/p/desodorante-antitranspirante-roll-on-tododia-hojas-de-limon-y-guanabana-70ml/NATCOL-123132?position=5&listTitle=manual+showcase+-+lleva+tus+favoritos+ahora+con+40%25+off&consultoria=ortizvallejo",
    imagen: "/images/Images/9.jpg",
    categoria: "Aseo personal",
  },
  {
    id: 10,
    nombre: "Essencial Oud Femenino",
    tienda: "Natura",
    precio: "$123.100",
    enlace: "https://www.natura.com.co/p/eau-de-parfum-essencial-oud-femenino-50ml/NATCOL-93623?color=&consultoria=ortizvallejo",
    imagen: "/images/Images/10.jpg",
    categoria: "Perfumes",
  },
  {
    id: 11,
    nombre: "Crema nutritiva corporal Tododia cereza y avellana (400ml)",
    tienda: "Natura",
    precio: "$49.700",
    enlace: "https://www.natura.com.co/p/crema-nutritiva-corporal-tododia-cereza-y-avellana-400ml/NATCOL-99183?position=3&listTitle=manual+showcase+-+tu+rutina+Tododia+Cereza+y+Avellana&consultoria=ortizvallejo",
    imagen: "/images/Images/11.jpg",
    categoria: "Aseo personal",
  },
  {
    id: 12,
    nombre: "Jabones en barra Tododia cereza y avellana (5x90g)",
    tienda: "Natura",
    precio: "$32.600",
    enlace: "https://www.natura.com.co/p/jabones-en-barra-tododia-cereza-y-avellana-5und-de-90g/NATCOL-95840?position=2&listTitle=search+results+list+showcase+-+Jabones+&consultoria=ortizvallejo",
    imagen: "/images/Images/12.jpg",
    categoria: "Aseo personal",
  },
  {
    id: 13,
    nombre: "Regalo Essencial exclusivo floral femenino",
    tienda: "Natura",
    precio: "$129.900",
    enlace: "https://www.natura.com.co/p/regalo-essencial-exclusivo-floral-femenino/NATCOL-193595?position=3&listTitle=manual+showcase+-+perfumer%C3%ADa+para+mam%C3%A1&consultoria=ortizvallejo",
    imagen: "/images/Images/13.jpg",
    categoria: "Perfumes",
  },
  {
    id: 14,
    nombre: "Jabón líquido corporal Tododia cereza y avellana",
    tienda: "Natura",
    precio: "$35.900",
    enlace: "https://www.natura.com.co/p/jabon-liquido-corporal-tododia-cereza-y-avellana-300ml/NATCOL-95843?position=6&listTitle=manual+showcase+-+tu+rutina+Tododia+Cereza+y+Avellana&consultoria=ortizvallejo",
    imagen: "/images/Images/14.jpg",
    categoria: "Aseo personal",
  },
  {
    id: 15,
    nombre: "Body splash Tododia frutas rojas femenino",
    tienda: "Natura",
    precio: "$29.900",
    enlace: "https://www.natura.com.co/p/body-splash-tododia-frutas-rojas-femenino-200ml/NATCOL-72197?position=4&listTitle=manual+showcase+-+lleva+tus+favoritos+ahora+con+40%25+off&consultoria=ortizvallejo",
    imagen: "/images/Images/15.jpg",
    categoria: "Aseo personal",
  },
  {
    id: 16,
    nombre: "Body splash Tododia frambuesa y pimienta rosa femenino",
    tienda: "Natura",
    precio: "$29.900",
    enlace: "https://www.natura.com.co/p/body-splash-tododia-frambuesa-y-pimienta-rosa-femenino-200ml/NATCOL-76383?position=1&listTitle=category+page+list+showcase+-+perfumeria&consultoria=ortizvallejo",
    imagen: "/images/Images/16.jpg",
    categoria: "Aseo personal", 
  },
  {
    id: 17,
    nombre: "Regalo Tododia cereza y avellana",
    tienda: "Natura",
    precio: "$94.900",
    enlace:"https://www.natura.com.co/p/regalo-tododia-cereza-y-avellana/NATCOL-193608?iprom_id=ne_home_bannercat2&iprom_name=Madres_CO-MainBanner_tododia_desk_1920x675&iprom_creative=cat_comprar-ahora_NATCOL-193608&iprom_pos=1&consultoria=ortizvallejo",
    imagen: "/images/Images/17.jpg",
    categoria: "Perfumes",
  },
  {
    id: 18,
    nombre: "Kaiak aventura femenino ",
    tienda: "Natura",
    precio: "$ 146.600",
    enlace: "https://www.natura.com.co/p/eau-de-toilette-kaiak-masculino-100ml/NATCOL-111177?position=1&listTitle=manual+showcase+-+lleva+tus+favoritos+ahora+con+40%25+off&consultoria=ortizvallejo",
    imagen: "/images/Images/18.jpg",
    categoria: "Perfumes",
  },
   {
  id: 19,
  nombre: "Águas colonia jabuticaba femenino",
  tienda: "Natura",
  precio: "$68.900",
  enlace: "https://www.natura.com.co/p/aguas-colonia-jabuticaba-femenino-150ml/NATCOL-95810?position=10&listTitle=category+page+list+showcase+-+perfumeria&consultoria=ortizvallejo",
  imagen: "/images/Images/19.jpg",
  categoria: "Perfumes",
 },
 {
  id: 20,
  nombre: "Jabones barra Ekos maracuyá",
  tienda: "Natura",
  precio: "$31.000",
  enlace: "https://www.natura.com.co/p/jabones-barra-ekos-maracuya-4und-de-100g/NATCOL-124393?position=4&listTitle=search+results+list+showcase+-+Jabones&consultoria=ortizvallejo",
  imagen: "/images/Images/20.jpg",
  categoria: "Aseo personal",
 },
 {
  id: 21,
  nombre: "Sérum capilar nocturno Ekos murumuru  30 ml",
  tienda: "Natura",
  precio: "$59.800",
  enlace: "https://www.natura.com.co/p/serum-capilar-nocturno-ekos-murumuru-30ml/NATCOL-112892?position=4&listTitle=category+page+list+showcase+-+cabello&consultoria=ortizvallejo",
  imagen: "/images/Images/21.jpg",
  categoria: "Aseo personal"
  },
  {
  id: 22,
  nombre: "Eau de toilette Kaiak Urbe masculino  100 ml",
  tienda: "Natura",
  precio: "$146.600",
  enlace: "https://www.natura.com.co/p/eau-de-toilette-kaiak-urbe-masculino-100ml/NATCOL-111172?position=5&listTitle=category+page+list+showcase+-+perfumeria&consultoria=ortizvallejo",
  imagen: "/images/Images/22.jpg",
  categoria: "Perfumes"
  },
  {
  id: 23,
  nombre: "Regalo Kaiak Aventura femenino",
  tienda: "Natura",
  precio: "$146.600",
  enlace: "https://www.natura.com.co/p/regalo-kaiak-aventura-femenino/NATCOL-193597?position=7&listTitle=category+page+list+showcase+-+regalos&consultoria=ortizvallejo",
  imagen: "/images/Images/23.jpg",
  categoria: "Perfumes"
  },
  {
   id: 24,
   nombre: "Regalo Biografía clásico femenino",
   tienda: "Natura",
   precio: "$151.100",
   enlace: "https://www.natura.com.co/p/regalo-biografia-clasico-femenino/NATCOL-189364?position=5&listTitle=manual+showcase+-+perfumer%C3%ADa+para+mam%C3%A1&consultoria=ortizvallejo",
   imagen: "/images/Images/24.jpg",
   categoria: "Perfumes"
  },
  {
   id: 25,
   nombre: "Regalo Luna ilumina",
   tienda: "Natura",
   precio: "$167.100",
   enlace: "https://www.natura.com.co/p/regalo-luna-ilumina/NATCOL-189348?position=1&listTitle=manual+showcase+-+perfumer%C3%ADa+para+mam%C3%A1&consultoria=ortizvallejo",
   imagen: "/images/Images/25.jpg",
   categoria: "Perfumes"
  },
  {
  id: 26,
  nombre: "Regalo Kriska Shock",
  tienda: "Natura",
  precio: "$143.500",
  enlace: "https://www.natura.com.co/p/regalo-kriska-shock/NATCOL-189360?position=4&listTitle=manual+showcase+-+perfumer%C3%ADa+para+mam%C3%A1&consultoria=ortizvallejo",
  imagen: "/images/Images/26.jpg",
  categoria: "Perfumes"
  },
  {
  id: 27,
  nombre: "Eau de Parfum Homem Corag⃐io masculino – 100 ml",
  tienda: "Natura",
  precio: "$175.800",
  enlace: "https://www.natura.com.co/p/eau-de-parfum-homem-coragio-masculino-100ml/NATCOL-186?position=9&listTitle=category+page+list+showcase+-+perfumeria&consultoria=ortizvallejo",
  imagen: "/images/Images/27.jpg",
  categoria: "Perfumes"
  },
  {
  id: 28,
  nombre: "Eau de toilette Beijo de Humor masculino – 75 ml",
  tienda: "Natura",
  precio: "$140.400",
  enlace: "https://www.natura.com.co/p/eau-de-toilette-beijo-de-humor-masculino-75ml/NATCOL-1921?position=16&listTitle=category+page+list+showcase+-+perfumeria&consultoria=ortizvallejo",
  imagen: "/images/Images/28.jpg",
  categoria: "Perfumes"
  },
  {
  id: 29,
  nombre: "Eau de Parfum Homem Emocione – 100 ml",
  tienda: "Natura",
  precio: "$172.000",
  enlace: "https://www.natura.com.co/p/eau-de-pa rfum-homem-emocione-100ml/NATCOL-97823?position=18&listTitle=category+page+list+showcase+-+perfumeria&consultoria=ortizvallejo",
  imagen: "/images/Images/29.jpg",
  categoria: "Perfumes"
  },
  {
  id: 30,
  nombre: "Perfume para el cabello Plant Inspira – 30 ml",
  tienda: "Natura",
  precio: "$41.500",
  enlace: "https://www.natura.com.co/p/perfume-para-el-cabello-plant-inspira-30ml/NATCOL-80691?position=5&listTitle=category+page+list+showcase+-+cabello&consultoria=ortizvallejo",
  imagen: "/images/Images/30.jpg",
  categoria: "Aseo personal"
  },
  {
  id: 31,
  nombre: "Kit Cabello Rizado completo",
  tienda: "Natura",
  precio: "$159.900",
  enlace: "https://www.natura.com.co/p/kit-cabello-rizado-completo/NATCOL-189630?position=1&listTitle=category+page+list+showcase+-+promociones+kits&consultoria=ortizvallejo",
  imagen: "/images/Images/31.jpg",
  categoria: "Aseo personal"
  },
  {
  id: 32,
  nombre: "Kit Avellana y Casis",
  tienda: "Natura",
  precio: "$149.900",
  enlace: "https://www.natura.com.co/p/kit-avellana-y-casis/NATCOL-189628?position=2&listTitle=category+page+list+showcase+-+promociones+kits&consultoria=ortizvallejo",
  imagen: "/images/Images/32.jpg",
  categoria: "Aseo personal"
  },
  {
  id: 33,
  nombre: "Kit Tododia Nutrición y Definición",
  tienda: "Natura",
  precio: "$129.900",
  enlace: "https://www.natura.com.co/p/kit-tododia-nutricion-y-definicion/NATCOL-189632?position=4&listTitle=category+page+list+showcase+-+promociones+kits&consultoria=ortizvallejo",
  imagen: "/images/Images/33.jpg",
  Categoria:"Aseo personal"
  },
  {
  id: 34,
  nombre: "Kit Antioleosidad básico",
  tienda: "Natura",
  precio: "$119.900",
  enlace: "https://www.natura.com.co/p/kit-antioleosidad-basico/NATCOL-189634?position=6&listTitle=category+page+list+showcase+-+promociones+kits&consultoria=ortizvallejo",
  imagen: "/images/Images/34.jpg",
  categoria: "Aseo personal"
  },
  {
  id: 35,
  nombre: "Kit Anticaída intenso",
  tienda: "Natura",
  precio: "$134.900",
  enlace: "https://www.natura.com.co/p/kit-anticaida-intenso/NATCOL-189640?position=8&listTitle=category+page+list+showcase+-+promociones+kits&consultoria=ortizvallejo",
  imagen: "/images/Images/35.jpg",
  categoria: "Aseo personal"
  },
  {
  id: 36,
  nombre: "Sérum intensivo multiaclarador rostro y cuello Chronos Derma  30 ml",
  tienda: "Natura",
  precio: "$105.400",
  enlace: "https://www.natura.com.co/p/serum-intensivo-multiaclarador-rostro-y-cuello-chronos-derma-30ml/NATCOL-169222?position=3&listTitle=category+page+list+showcase+-+promociones+lanzamientos&consultoria=ortizvallejo",
  imagen: "/images/Images/36.jpg",
  categoria: "Aseo personal"
  },
  {
  id: 37,
  nombre: "Eau de toilette Ekos maracuyá femenino  150 ml",
  tienda: "Natura",
  precio: "$102.600",
  enlace: "https://www.natura.com.co/p/eau-de-toilette-ekos-maracuya-femenino-150ml/NATCOL-73574?position=1&listTitle=category+page+list+showcase+-+perfumeria+para+todos&consultoria=ortizvallejo",
  imagen: "/images/Images/37.jpg",
  categoria: "Perfumes"
  },
  {
  id: 38,
  nombre: "Regalo Rutina Kaiak Clásico femenino",
  tienda: "Natura",
  precio: "$159.900",
  enlace: "https://www.natura.com.co/p/regalo-rutina-kaiak-clasico-femenino/NATCOL-189332?position=6&listTitle=category+page+list+showcase+-+promociones&consultoria=ortizvallejo",
  imagen: "/images/Images/38.jpg",
  categoria: "Perfumes"
  },
  {
  id: 39,
  nombre: "Jabones en barra Tododia cereza y avellana  5 und de 90 g",
  tienda: "Natura",
  precio: "$32.600",
  enlace: "https://www.natura.com.co/p/jabones-en-barra-tododia-cereza-y-avellana-5und-de-90g/NATCOL-95840?position=2&listTitle=category+page+list+showcase+-+promociones+lanzamientos&consultoria=ortizvallejo",
  imagen: "/images/Images/39.jpg",
  categoria: "Aseo personal"
  },
  {
  id: 40,
  nombre: "Body Splash Tododia cereza y avellana femenino  200 ml",
  tienda: "Natura",
  precio: "$37.400",
  enlace: "https://www.natura.com.co/p/body-splash-tododia-cereza-y-avellana-femenino-200ml/NATCOL-95841?position=11&listTitle=category+page+list+showcase+-+perfumeria&consultoria=ortizvallejo",
  imagen: "/images/Images/40.jpg",
  categoria: "Aseo personal"
  },
  {
  id: 41,
  nombre: "Limpieza purificante Antioleosidad Chronos Derma  130 g",
  tienda: "Natura",
  precio: "$46.300",
  enlace: "https://www.natura.com.co/p/limpieza-purificante-antioleosidad-chronos-derma-130g/NATCOL-168744?position=6&listTitle=manual+showcase+-+lleva+tus+favoritos+ahora+con+40%25+off&consultoria=ortizvallejo",
  imagen: "/images/Images/41.jpg",
  categoria: "Aseo personal"
  },
  {
    id: 42,
    nombre: "Auriculares inalámbricos Air Earphone Pods Pro 2 con cancelación activa de ruido",
    tienda: "Alibaba",
    precio: "81.746 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601415825502",
    imagen: "/images/Images/42.png",
    categoria: "Tecnología"
  },
  {
    id: 43,
    nombre: "GTR 3 PRO Reloj inteligente 1,43 pulgadas AMOLED Full Touch IP 68 impermeable Ritmo cardíaco temperatura corporal fitness Smartwatch",
    tienda: "Alibaba",
    precio: "83.920 COP",
    enlace: "https://offer.alibaba.com/cps/06ulu8mk?bm=cps&src=saf",
    imagen: "/images/Images/43.jpg",
    categoria: "Ala moda"
  },
  {
    id: 44,
    nombre: "Auriculares inalámbricos BT con diadema de conducción ósea, productos de tendencia 2024",
    tienda: "Alibaba",
    precio: "16.552 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=62110229155",
    imagen: "/images/Images/44.jpg",
    categoria: "Ala moda"
  },
  {
    id: 45,
    nombre: "Altavoz Inteligente Alexa Dot de 5.ª Generación, con Iluminación LED RGB, Subwoofer Inalámbrico de Escritorio, Base Portátil",
    tienda: "Alibaba",
    precio: "24.953 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601407316627",
    imagen: "/images/Images/45.jpg",
    categoria: "Tecnologia"
  },
  {
    id: 46,
    nombre: "Reloj Inteligente con Pantalla AMOLED G12 3ATM Impermeable para Hombre con NFC, Brújula, Asistente de Voz, Llamadas Bluetooth y GPS",
    tienda: "Alibaba",
    precio: "186.642 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601369540642",
    imagen: "/images/Images/46.jpg",
    categoria: "Ala moda"
  },
  {
    id: 47,
    nombre: "Auriculares F9 Tws Bluetooth 5,0 auriculares inalámbricos Mini auriculares cómodos de calidad de sonido verdadero para venta al por mayor",
    tienda: "Alibaba",
    precio: "8.733 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601089475194",
    imagen: "/images/Images/47.jpg",
    categoria: "Ala moda"
  },
  {
    id: 48,
    nombre: "Audífonos Profesionales de Diadema, Duraderos, de Alta Calidad, al Mejor Precio, Venta al por Mayor de Fábrica",
    tienda: "Alibaba",
    precio: "23,400 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600551853892",
    imagen: "/images/Images/48.jpg",
    categoria: "Ala moda"
  },
  {
    id: 49,
    nombre: "Nuevo diseño de ordenadores todo en uno de 27, 32 y 23,8 pulgadas con pantalla táctil, Core I7, Windows, base giratoria para PC todo en uno",
    tienda: "Alibaba",
    precio: "2,983,500 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601272546128",
    imagen: "/images/Images/49.jpg",
    categoria: "Tecnologia"
  },
  {
    id: 50,
    nombre: "Anillo Inteligente Tkyuan para Hombre, Go2Sleep Digital a Prueba de Agua con Sensor de Temperatura Corporal, Frecuencia Cardíaca y Presión Arterial",
    tienda: "Alibaba",
    precio: "$54.561 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601123876985",
    imagen: "/images/Images/50.jpg",
    categoria: "Tecnologia"
  },
  {
    id: 51,
    nombre: "Auriculares inalámbricos A40 PRO TWS, alta calidad, ANC + ENC, cancelación de ruido, impermeables, superventas",
    tienda: "Alibaba",
    precio: "85.332 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600512543080",
    imagen: "/images/Images/51.jpg",
    categoria: "Ala moda"
  },
  {
    id: 52,
    nombre: "HBNKH El Mejor Reloj Inteligente Reproductor MP3 Pantalla Táctil Reloj Bluetooth Fitness a Prueba de Agua Cuenta Regresiva Reserva de Energía Muñeca Muestra Gratis Mp4",
    tienda: "Alibaba",
    precio: "120.120 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601307924961",
    imagen: "/images/Images/52.jpg",
    categoria: "Ala moda"
  },
  {
    id: 53,
    nombre: "2025 nuevo Mini ventilador portátil de escritorio Usb, ventilador eléctrico giratorio de 360 grados enfriador de aire de escritorio de verano ventilador de alta calidad para el hogar",
    tienda: "Alibaba",
    precio: "8.346 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601417451831",
    imagen: "/images/Images/53.jpg",
    categoria: "Tecnologia"
  },
  {
    id: 54,
    nombre: "Audífonos Gen4 Pro2 Gen3 de Segunda y Tercera Generación de Alta Calidad con Envío Gratuito en EE. UU. y la UE",
    tienda: "Alibaba",
    precio: "81959 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601007657401",
    imagen: "/images/Images/54.jpg",
    categoria: "Ala moda"
  },
  {
    id: 55,
    nombre: "WH35Max Nuevos Auriculares Inalámbricos Ultra Bluetooth Kopfhorer Auriculares de Diadema con Función Impermeable P9 PRO MAX Audifonos Bluetooth",
    tienda: "Alibaba",
    precio: "29.132 COP",
    enlace: "https://offer.alibaba.com/cps/t5vaosi3?bm=cps&src=saf",
    imagen: "/images/Images/55.jpg",
    categoria: "Ala moda"
  },
  {
    id: 56,
    nombre: "Reloj inteligente deportivo ZL02, original, de moda e informal, para hombres y mujeres, con monitor de ritmo cardíaco y sueño, ideal para iOS y Android.",
    tienda: "Alibaba",
    precio: "37.117 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600240506195",
    imagen: "/images/Images/56.jpg",
    categoria: "Ala moda"
  },
  {
    id: 57,
    nombre: "Original altavoz portátil Bluetooth para fiestas Partybox Ultimate de 1100 W",
    tienda: "Alibaba",
    precio: "8.631 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=11000021885746",
    imagen: "/images/Images/57.jpg",
    categoria: "Tecnologia"
  },
  {
    id: 58,
    nombre: "Auriculares intrauditivos inalámbricos con cancelación de ruido Air Pods Pro 2 Pods 3 ANC con logotipo y número de serie.",
    tienda: "Alibaba",
    precio: "16,227 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601415759761",
    imagen: "/images/Images/58.jpg",
    categoria: "Ala moda"
  },
  {
    id: 59,
    nombre: "Teléfono inteligente Global S24 5G con IA, 16 GB + 1 TB, 7,0 pulgadas, doble SIM, desbloqueado, pantalla grande, Android",
    tienda: "Alibaba",
    precio: "177.644 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601435588301",
    imagen: "/images/Images/59.jpg",
    categoria: "Tecnologia"
  },
  {
    id: 60,
    nombre: "El mejor teléfono inteligente plegable S25 Ultra+ 5g con Android 13, 8800 mAh, 12 GB + 512 GB, 48 GB + 72 MP, de alta calidad, S Fold6.",
    tienda: "Alibaba",
    precio: "153.820 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601383924166",
    imagen: "/images/Images/60.jpg",
    categoria: "Tecnologia"
  },
  {
    id: 61,
    nombre: "Auriculares inalámbricos TWS más vendidos, deportivos, intraaurales, para juegos, con batería alta, pantalla digital y sin cancelación de ruido.",
    tienda: "Alibaba",
    precio: "9.322 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601426294975",
    imagen: "/images/Images/61.jpg",
    categoria: "Ala moda"
  },
  {
    id: 62,
    nombre: "Banco de energía portátil de carga rápida, el más vendido, con 4 salidas USB y 3 puertos de entrada, alta capacidad de 100 000 mAh.",
    tienda: "Alibaba",
    precio: "62581 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601239096199",
    imagen: "/images/Images/62.jpg",
    categoria: "Tecnologia"
  },
  {
    id: 63,
    nombre: "Reloj inteligente de lujo para negocios, deportivo, resistente al agua, de acero inoxidable, para hombre.",
    tienda: "Alibaba",
    precio: "151.058 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601236561420",
    imagen: "/images/Images/63.jpg",
    categoria: "Ala moda"
  },
  {
    id: 64,
    nombre: "Mini auriculares F9-5 con batería externa de 2000 mAh, 2 en 1, inalámbricos, F9 TWS",
    tienda: "Alibaba",
    precio: "17.048 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600404416600",
    imagen: "/images/Images/64.jpg",
    categoria: "Ala moda"
  },
  {
    id: 65,
    nombre: "Funda de lujo transparente a prueba de golpes para Samsung S24 Ultra, S23 Plus, S22+, S22 Ultra, con carga inalámbrica magnética.",
    tienda: "Alibaba",
    precio: "6.431 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601281981547",
    imagen: "/images/Images/65.jpg",
    categoria: "Tecnologia"
  },
  {
    id: 66,
    nombre: "Uniforme táctico HAN WILD / Camisa de camuflaje + Pantalones tácticos / Ropa de senderismo",
    tienda: "Alibaba",
    precio: "86.319 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600264013598",
    imagen: "/images/Images/66.jpg",
    categoria: "Ropa"
  },
  {
    id: 67,
    nombre: "Trajes ajustados de moda para hombre, ropa informal de negocios para hombre, traje de tres piezas para padrino de boda, blazer, chaqueta, pantalones, chaleco, conjuntos",
    tienda: "Alibaba",
    precio: "60.984 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600090669048",
    imagen: "/images/Images/67.jpg",
    categoria: "Ropa"
  },
  {
    id: 68,
    nombre: "Chaquetas largas con capucha y cuello de piel para mujer, abrigos de invierno de talla grande, parkas para mujer",
    tienda: "Alibaba",
    precio: "32.370 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600080460372",
    imagen: "/images/Images/68.jpg",
    categoria: "Ropa"
  },
  {
    id: 69,
    nombre: "Pantalones cargo de trabajo para hombre, estilo europeo, personalizados, con bolsillos para rodilleras",
    tienda: "Alibaba",
    precio: "127.320 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600217036287",
    imagen: "/images/Images/69.jpg",
    categoria: "Ropa"
  },
  {
    id: 70,
    nombre: "Chaquetas de esquí personalizadas para hombre y mujer, para snowboard, alpinas, resistentes al viento, impermeables y para nieve.",
    tienda: "Alibaba",
    precio: "86.319 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600400168833",
    imagen: "/images/Images/70.jpg",
    categoria: "Ropa"
  },
  {
    id: 71,
    nombre: "Leggings SHINBENE de 25\" y 5.0\" HI Cloud sin punta de camello, tiro alto, para entrenamiento, gimnasio, fitness, yoga, para mujer",
    tienda: "Alibaba",
    precio: "53.043 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600214012362",
    imagen: "/images/Images/71.jpg",
    categoria: "Ropa"
  },
  {
    id: 72,
    nombre: "Conjunto de dos piezas de jersey y camiseta holgada deportiva para hombre, para primavera y otoño, con personalización de puntos y pantalones para adolescentes.",
    tienda: "Alibaba",
    precio: "51.619 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600302535879",
    imagen: "/images/Images/72.jpg",
    categoria: "Ropa"
  },
  {
    id: 73,
    nombre: "Blazer para hombre, traje estampado, ajustado, cuello alto, informal, chaqueta fina, trajes juveniles, trajes para hombre",
    tienda: "Alibaba",
    precio: "54.856 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600302563670",
    imagen: "/images/Images/73.jpg",
    categoria: "Ropa"
  },
  {
    id: 74,
    nombre: "Mono deportivo de yoga largo para mujer, suave, de secado rápido, con espalda fruncida y espalda hueca",
    tienda: "Alibaba",
    precio: "60.423 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=60806470165",
    imagen: "/images/Images/74.jpg",
    categoria: "Ropa"
  },
  {
    id: 75,
    nombre: "Abrigo de lana atmosférica de alta gama de moda para hombres de mediana edad de otoño e invierno en el abrigo de lana largo y grueso para hombres",
    tienda: "Alibaba",
    precio: "73.587 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600427379445",
    imagen: "/images/Images/75.jpg",
    categoria: "Ropa"
  },
  {
    id: 76,
    nombre: "Chaqueta universitaria informal de invierno para hombre, de nailon de alta calidad, con diseño de plumas de pato, chaqueta acolchada de talla grande a la moda.",
    tienda: "Alibaba",
    precio: "185.586 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=60702399086",
    imagen: "/images/Images/76.jpg",
    categoria: "Ropa"
  },
  {
    id: 77,
    nombre: "Traje de carreras de aventura anticaída, chaqueta de motociclismo para hombre, chaqueta de ciclismo reflectante con protectores y forro cortavientos.",
    tienda: "Alibaba",
    precio: "151.058 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600208918229",
    imagen: "/images/Images/77.jpg",
    categoria: "Ropa"
  },
  {
    id: 78,
    nombre: "Abrigos largos de invierno de alta calidad personalizados de Liu Ming, chaquetas de lana cruzadas para hombre",
    tienda: "Alibaba",
    precio: "57.100 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=62430180360",
    imagen: "/images/Images/78.jpg",
    categoria: "Ropa"
  },
  {
    id: 79,
    nombre: "Vestido Miyake plisado de manga larga con pétalos, cárdigan con solapa y fajas, vestido verde largo de talla grande 2021, ropa estética para mujer",
    tienda: "Alibaba",
    precio: "103.583 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600181672713",
    imagen: "/images/Images/79.jpg",
    categoria: "Ropa"
  },
  {
    id: 80,
    nombre: "Conjunto de chaqueta y chaleco de punto con cuello en V y botones, estilo holgado, de otoño 2025, con lazo en la cintura y pata de gallo.",
    tienda: "Alibaba",
    precio: "106.172 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600339948158",
    imagen: "/images/Images/80.jpg",
    categoria: "Ropa"
  },
  {
    id: 81,
    nombre: "Chándal de otoño para hombre, conjunto de 2 piezas, sudadera y pantalón deportivo, ropa deportiva con cremallera, sudaderas informales",
    tienda: "Alibaba",
    precio: "34.096 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600307752271",
    imagen: "/images/Images/81.jpg",
    categoria: "Ropa"
  },
  {
    id: 82,
    nombre: "Venta al por mayor OEM Leggings para mujer Pantalones vaqueros con realce de glúteos acolchados",
    tienda: "Alibaba",
    precio: "69.055 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=62318683454",
    imagen: "/images/Images/82.jpg",
    categoria: "Ropa"
  },
  {
    id: 83,
    nombre: "nuevo conjunto de top holgado de manga larga con cuello redondo y pantalones casuales de cintura alta, rectos, ajustados y de pierna ancha.",
    tienda: "Alibaba",
    precio: "66,897 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600293061177",
    imagen: "/images/Images/83.jpg",
    categoria: "Ropa"
  },
  {
    id: 84,
    nombre: "Chaleco formal gris de alta calidad para hombre, oferta especial, YF002",
    tienda: "Alibaba",
    precio: "43,116 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=62145592805",
    imagen: "/images/Images/84.jpg",
    categoria: "Ropa"
  },
  {
    id: 85,
    nombre: "Camiseta de algodón Novationshirt para hombre, de peso pesado, sencilla, OEM, 210 g/m²",
    tienda: "Alibaba",
    precio: "34,527 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600330069998",
    imagen: "/images/Images/85.jpg",
    categoria: "Ropa"
  },
  {
    id: 86,
    nombre: "Zapatero de 7 capas, resistente, a prueba de polvo, puerta simple, entrada de casa, zapatero, sala de alquiler, estante de almacenamiento de hierro para estudiantes",
    tienda: "Alibaba",
    precio: "10.790 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601382399574",
    imagen: "/images/Images/86.jpg",
    categoria: "Para el Hogar"
  },
  {
    id: 87,
    nombre: "Organizador de entrada con marco de metal, 4 estantes para guardar zapatos, perchero para secar ropa, abrigos y sombreros, perchero para entrada con interior",
    tienda: "Alibaba",
    precio: "10.488 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601277700294",
    imagen: "/images/Images/87.jpg",
    categoria: "Para el Hogar"
  },
  {
    id: 88,
    nombre: "Fabricante más vendido, diseño moderno, trapeador mágico con rotación de 360 grados y cubo, trapeador redondo para el hogar, juego de trapeador de limpieza.",
    tienda: "Alibaba",
    precio: "7.078 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601277700294",
    imagen: "/images/Images/88.jpg",
    categoria: "Para el Hogar"
  },
  {
    id: 89,
    nombre: "JUMEIJIA Contenedor de almacenamiento de alimentos de gran tamaño, cajón transparente de alta calidad, caja de cocina con asa",
    tienda: "Alibaba",
    precio: "9.452 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601263323253",
    imagen: "/images/Images/89.jpg",
    categoria: "Para el Hogar"
  },
  {
    id: 90,
    nombre: "Soporte para cepillos de dientes con forma de pingüino, estante de almacenamiento para palillos, cucharas, artículos diversos, maquillaje, bolígrafo, organizador colgante de pared, caja para baño",
    tienda: "Alibaba",
    precio: "2.158 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601029885036",
    imagen: "/images/Images/90.jpg",
    categoria: "Para el Hogar"
  },
  {
    id: 91,
    nombre: "JBL Boombox 3 Music Smart Home God War III - Altavoz inalámbrico Bluetooth, resistente al agua, portátil, anticaídas, para exteriores, audio HiFi",
    tienda: "Alibaba",
    precio: "1.782.484 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601400803186",
    imagen: "/images/Images/91.jpg",
    categoria: "Para el Hogar"
  },
  {
    id: 92,
    nombre: "Plato de paja de trigo con sabor casero, salsa de soja, vinagre para mojar, salsa para mojar, ingredientes japoneses, condimento.",
    tienda: "Alibaba",
    precio: "518 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601276108162",
    imagen: "/images/Images/92.jpg",
    categoria: "Para el Hogar"
  },
  {
    id: 93,
    nombre: "Paraguas automático plegable personalizado promocional, portátil, de 3 pliegues, con logotipo de marca, para viajes y lluvia.",
    tienda: "Alibaba",
    precio: "25.853 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600847936830",
    imagen: "/images/Images/93.jpg",
    categoria: "Para el Hogar"
  },
  {
    id: 94,
    nombre: "Caja de almacenamiento de huevos con cajón para refrigerador, organizador de cocina doble de grado alimenticio para el hogar especial",
    tienda: "Alibaba",
    precio: "16.832 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601268831313",
    imagen: "/images/Images/94.jpg",
    categoria: "Para el Hogar"
  },
  {
    id: 95,
    nombre: "Recipientes de vidrio ecológicos y seguros para almacenar alimentos, sin BPA.",
    tienda: "Alibaba",
    precio: "4.748 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600968302199",
    imagen: "/images/Images/95.jpg",
    categoria: "Para el Hogar"
  },
  {
    id: 96,
    nombre: "Recipientes de vidrio ecológicos y seguros para el microondas",
    tienda: "Alibaba",
    precio: "76.392 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600968302199",
    categoria: "Para el Hogar",
    imagen: "/images/Images/96.jpg"
  },
  {
    id: 97,
    nombre: "Regalo de Navidad: 3 termos de acero inoxidable con caja",
    tienda: "Alibaba",
    precio: "6.474 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601293143576",
    categoria: "Para el Hogar",
    imagen: "/images/Images/97.jpg"
  },
  {
    id: 98,
    nombre: "Fregadero de cocina inteligente con pantalla digital",
    tienda: "Alibaba",
    precio: "311.827 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601370462093",
    categoria: "Para el Hogar",       
    imagen: "/images/Images/98.jpg"
  },
  {
    id: 99,
    nombre: "Papel tapiz de vinilo de PVC de alta calidad con textura moderna",
    tienda: "Alibaba",
    precio: "11.221 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601196970766",
    categoria: "Para el Hogar",
    imagen: "/images/Images/99.jpg"
  },
  {
    id: 100,
    nombre: "Papel tapiz de vinilo de PVC de alta calidad con textura moderna",
    tienda: "Alibaba",
    precio: "10.790 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601374926267",
    categoria: "Para el Hogar",
    imagen: "/images/Images/100.jpg"
  },
  {
    id: 101,
    nombre: "Regalo Ekos Rutina Completa Edición Especial",
    tienda: "Natura",
    precio: "242.600 COP",
    enlace: "https://www.natura.com.co/p/regalo-ekos-rutina-completa-edicion-especial/NATCOL-185840?position=2&listTitle=manual+showcase+-+los+favoritos+de+Valerie+para+mam%C3%A1+&consultoria=ortizvallejo",
    imagen: "/images/Images/101.jpg",
    categoria: "Aseo personal"
  },
  {
    id: 102,
    nombre: "Sombra Stick Retráctil UNA 1,4g",
    tienda: "Natura",
    precio: "50.900 COP",
    enlace: "https://www.natura.com.co/p/sombra-stick-retractil-una-14g/NATCOL-168352?position=5&listTitle=manual+showcase+-+nueva+colecci%C3%B3n+UNA+libre&consultoria=ortizvallejo",
    imagen: "/images/Images/102.jpg",
    categoria: "Maquillaje"
  },
  {
    id: 103,
    nombre: "Smartphone Android S24 Ultra 5G 16GB RAM + 1TB ROM",
    tienda: "Alibaba",
    precio: "131.713 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601257315295",
    imagen: "/images/Images/103.jpg",
    categoria: "Tecnología"
  },
  {
    id: 104,
    nombre: "Reloj Inteligente Y13 Bw0242 Smartwatch Multifunción",
    tienda: "Alibaba",
    precio: "22.391 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601391224547",
    imagen: "/images/Images/104.jpg",
    categoria: "Tecnología"
  },
  {
    id: 105,
    nombre: "Reloj Deportivo Inteligente 119Plus con Monitor de Presión Arterial y Podómetro",
    tienda: "Alibaba",
    precio: "8.429 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601117767062",
    imagen: "/images/Images/105.jpg",
    categoria: "Tecnología"
  },
  {
    id: 106,
    nombre: "Ventilador Portátil de Mano Recargable y Plegable",
    tienda: "Alibaba",
    precio: "5.268 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601364946894",
    imagen: "/images/Images/106.jpg",
    categoria: "Tecnología"
  },
  {
    id: 107,
    nombre: "Mini Subwoofer Inalámbrico Alaxe con Alexa",
    tienda: "Alibaba",
    precio: "30.294 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601405444644",
    imagen: "/images/Images/107.jpg",
    categoria: "Tecnología"
  },
  {
    id: 108,
    nombre: "Ventilador de cuello portátil con batería recargable de 800mAh",
    tienda: "Alibaba",
    precio: "7.902 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601405479862",
    imagen: "/images/Images/108.jpg",
    categoria: "Tecnología"
  },
  {
    id: 109,
    nombre: "Auriculares inalámbricos 4 Air Pro 2 Max con cancelación activa de ruido",
    tienda: "Alibaba",
    precio: "68.052 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601419384985",
    imagen: "/images/Images/109.jpg",
    categoria: "Tecnología"
  },
  {
    id: 110,
    nombre: "Botella de agua infantil Magic Bear de gran capacidad con doble pajilla",
    tienda: "Alibaba",
    precio: "5.663 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601400247031",
    imagen: "/images/Images/110.jpg",
    categoria: "Para el hogar"
  },
  {
    id: 111,
    nombre: "Zapatillas deportivas transpirables para hombre",
    tienda: "Alibaba",
    precio: "17.517 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601235294920",
    imagen: "/images/Images/111.jpg",
    categoria: "Ropa"
  },
  {
    id: 112,
    nombre: "Lavadora y secadora semiautomática de doble tina de 5 kg",
    tienda: "Alibaba",
    precio: "177.462 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601063228866",
    imagen: "/images/Images/112.jpg",
    categoria: "Electrodomésticos"
  },
  {
    id: 113,
    nombre: "Ventilador de escritorio de doble cabezal con control remoto",
    tienda: "Alibaba",
    precio: "19.361 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601291620755",
    imagen: "/images/Images/113.jpg",
    categoria: "Tecnología"
  },
  {
    id: 114,
    nombre: "Generador portátil de gasolina de 8000W con motor JET POWER",
    tienda: "Alibaba",
    precio: "439.046 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600335828636",
    imagen: "/images/Images/114.jpg",
    categoria: "Electrodomésticos"
  },
  {
    id: 115,
    nombre: "Mini ventilador portátil de nuevo diseño",
    tienda: "Alibaba",
    precio: "11.546 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601282458870",
    imagen: "/images/Images/115.jpg",
    categoria: "Tecnología"
  },
  {
    id: 116,
    nombre: "Colchón inflable portátil de lujo para exteriores",
    tienda: "Alibaba",
    precio: "81.530 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601283679410",
    imagen: "/images/Images/116.jpg",
    categoria: "Para el Hogar"
  },
  {
    id: 117,
    nombre: "Camiseta unisex de algodón 100% de 230g, modelo MT2006",
    tienda: "Alibaba",
    precio: "20.635 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601101873078",
    imagen: "/images/Images/117.jpg",
    categoria: "Ropa"
  },
  {
    id: 118,
    nombre: "Funda magnética de doble cara con marco metálico para Samsung Galaxy S23 Ultra",
    tienda: "Alibaba",
    precio: "36.396 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601013584008",
    imagen: "/images/Images/118.jpg",
    categoria: "Tecnología"
  },
  {
    id: 119,
    nombre: "Lavaplatos inteligente de acero inoxidable 304 con grifo LED",
    tienda: "Alibaba",
    precio: "304.610 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601242126264",
    imagen: "/images/Images/119.jpg",
    categoria: "Para el Hogar"
  },
  {
    id: 120,
    nombre: "Reloj inteligente parlante Bluetooth Y13 GT20",
    tienda: "Alibaba",
    precio: "21.952 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601263226238",
    imagen: "/images/Images/120.jpg",
    categoria: "Tecnología"
  },
  {
    id: 121,
    nombre: " Conjunto de Ropa de Yoga con Leggings de Cintura Alta y Manga Larga con Cremallera, Ropa Deportiva de Alta Resistencia, Mono de Yoga para Gimnasio y Entrenamiento para Mujer",
    tienda: "Alibaba",
    precio: "43.816 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1600449321068",
    imagen: "/images/Images/121.jpg",
    categoria: "Ropa"
  },
  {
    id: 122,
    nombre: "Gancho adhesivo multiusos para pared, organizador de escoba y fregona",
    tienda: "Alibaba",
    precio: "2.200 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601350136679",
    imagen: "/images/Images/122.jpg",
    categoria: "Hogar"
  },
  {
    id: 123,
    nombre: "Gancho adhesivo multiusos para pared, organizador de escoba y fregona",
    tienda: "Alibaba",
    precio: "4.400 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601283551037",
    imagen: "/images/Images/123.jpg",
    categoria: "Hogar"
  },
  {
    id: 124,
    nombre: "Gancho adhesivo multiusos para pared, organizador de escoba y fregona",
    tienda: "Alibaba",
    precio: "4.400 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601154250185",
    imagen: "/images/Images/124.jpg",
    categoria: "Hogar"
  },
  {
    id: 125,
    nombre: "Toallas sanitarias de algodón orgánico para mujer",
    tienda: "Alibaba",
    precio: "8.720 COP",
    enlace: "https://offer.alibaba.com/cps/70tc2r7a?bm=cps&src=saf&productId=1601267349701",
    imagen: "/images/Images/125.jpg",
    categoria: "Aseo personal"
  },
  {
   id: 126,
   nombre: "Reloj de buceo San Martin 38mm NH35   automático",
   tienda: "AliExpress",
   precio: "186.000 COP",
   enlace:   "https://s.click.aliexpress.com/e/_olMlqDl",
  imagen:"/images/Images/IMG-20250519-WA0044.jpg",
   categoria: "A la moda"
  },


];  

// Componente de Login con modificaciones para búsquedas y favoritos
const Login = ({ onLogin, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificación básica
    if (!email || !password) {
      setError("Por favor ingresa email y contraseña");
      return;
    }

    // Simulamos verificación con localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      // Aseguramos que el usuario tenga las propiedades necesarias
      if (!user.searchHistory) user.searchHistory = [];
      if (!user.favorites) user.favorites = [];

      localStorage.setItem("currentUser", JSON.stringify(user));
      onLogin(user);
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Iniciar Sesión en Andrómeda</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              ¿No tienes cuenta?{" "}
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="text-blue-700 hover:text-blue-900"
              >
                Regístrate aquí
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// Componente de Registro con soporte para favoritos y búsquedas
const Register = ({ onRegister, onSwitchToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!name || !email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Simulamos registro guardando en localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
      setError("Este correo ya está registrado");
      return;
    }

    // Añadimos campos para favoritos y búsquedas recientes
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      favorites: [],
      searchHistory: []
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    onRegister(newUser);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Crear Cuenta en Andrómeda</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirmar Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Registrarse
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              ¿Ya tienes cuenta?{" "}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-blue-700 hover:text-blue-900"
              >
                Inicia sesión
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// Componente de Perfil de Usuario
const UserProfile = ({ user, onLogout, onClose }) => {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-md z-20 p-4">
      <div className="text-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full mx-auto flex items-center justify-center mb-2">
          <span className="text-white text-2xl font-bold">{user.name.charAt(0).toUpperCase()}</span>
        </div>
        <h3 className="font-bold text-lg">{user.name}</h3>
        <p className="text-gray-600 text-sm">{user.email}</p>
      </div>
      <hr className="my-2" />
      <button
        onClick={onLogout}
        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 font-medium"
      >
        Cerrar Sesión
      </button>
      <button
        onClick={onClose}
        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
      >
        Cerrar
      </button>
    </div>
  );
};

// Modificaciones en el componente ProductoCard para mejorar visualización en móvil
const ProductoCard = ({ producto, esFavorito, toggleFavorito }) => {
  return (
    <div className="bg-white bg-opacity-95 rounded-2xl shadow-lg p-4 flex flex-col items-center relative">
      {/* Botón de favorito */}
      <button
        onClick={() => toggleFavorito(producto.id)}
        className="absolute top-2 right-2 z-10"
      >
        {esFavorito ? (
          <HeartSolidIcon className="h-6 w-6 text-red-500" />
        ) : (
          <HeartIcon className="h-6 w-6 text-gray-400" />
        )}
      </button>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-36 h-36 object-contain mb-4"
      />
      <h2 className="text-md font-extrabold text-center text-blue-900 mb-2 leading-tight min-h-14">
        {producto.nombre}
      </h2>
      <p className="text-lg font-semibold text-gray-900 mb-4">
        {producto.precio}
      </p>
      <a
        href={producto.enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold uppercase text-sm px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-center"
      >
        Ver producto
      </a>
    </div>
  );
};

// Modificaciones en el componente principal para mejorar visualización en móvil
export default function Home() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroTienda, setFiltroTienda] = useState("");
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [mostrarCategorias, setMostrarCategorias] = useState(false);
  const [productosMezclados, setProductosMezclados] = useState([]);
  const [productosVisibles, setProductosVisibles] = useState(12);
  const [cargando, setCargando] = useState(false);
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

  // Estados para autenticación
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  // Verificar si hay un usuario guardado al cargar la página
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Cargar productos y mezclarlos aleatoriamente
  useEffect(() => {
    const productosAleatorios = [...productos].sort(() => Math.random() - 0.5);
    setProductosMezclados(productosAleatorios);
  }, []);

  // Función para actualizar la búsqueda y guardarla en el historial del usuario
  const handleBusqueda = (valor) => {
    setBusqueda(valor);

    // Si hay un usuario logueado, guardamos la búsqueda en su historial
    if (user && valor.trim() !== "") {
      const updatedUser = { ...user };

      // Añadir al inicio y eliminar duplicados
      updatedUser.searchHistory = [valor, ...updatedUser.searchHistory.filter(s => s !== valor)];

      // Limitamos a las últimas 10 búsquedas
      if (updatedUser.searchHistory.length > 10) {
        updatedUser.searchHistory = updatedUser.searchHistory.slice(0, 10);
      }

      // Actualizamos el usuario en localStorage y en el estado
      setUser(updatedUser);

      // Actualizar también en el array de usuarios
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userIndex = users.findIndex(u => u.id === user.id);
      if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem("users", JSON.stringify(users));
      }

      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }
  };

  // Función para alternar favoritos
  const toggleFavorito = (productoId) => {
    if (!user) {
      setShowLogin(true);
      return;
    }

    const updatedUser = { ...user };

    // Si ya está en favoritos, lo quitamos
    if (updatedUser.favorites.includes(productoId)) {
      updatedUser.favorites = updatedUser.favorites.filter(id => id !== productoId);
    } else {
      // Si no está, lo añadimos
      updatedUser.favorites.push(productoId);
    }

    // Actualizamos el usuario
    setUser(updatedUser);

    // Actualizar en localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem("users", JSON.stringify(users));
    }

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  };

  // Función para verificar si un producto es favorito
  const esFavorito = (productoId) => {
    return user && user.favorites && user.favorites.includes(productoId);
  };

  // Ordenar productos según el historial de búsquedas del usuario
  const ordenarProductosPersonalizados = (productos) => {
    if (!user || !user.searchHistory || user.searchHistory.length === 0) {
      return productos;
    }

    return [...productos].sort((a, b) => {
      // Puntuación basada en cuántas palabras del historial coinciden con el nombre
      const scoreA = user.searchHistory.reduce((score, term) => {
        return a.nombre.toLowerCase().includes(term.toLowerCase()) ? score + 1 : score;
      }, 0);

      const scoreB = user.searchHistory.reduce((score, term) => {
        return b.nombre.toLowerCase().includes(term.toLowerCase()) ? score + 1 : score;
      }, 0);

      return scoreB - scoreA; // Ordenar de mayor a menor coincidencia
    });
  };

  // Filtrar productos según los criterios de búsqueda, tienda y categoría
  const filtrarProductos = () => {
    let filtrados = productosMezclados;

    // Aplicar filtro de búsqueda
    if (busqueda) {
      filtrados = filtrados.filter(prod =>
        prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    // Aplicar filtro de tienda
    if (filtroTienda) {
      filtrados = filtrados.filter(prod => prod.tienda === filtroTienda);
    }

    // Aplicar filtro de categoría
    if (filtroCategoria) {
      filtrados = filtrados.filter(prod => prod.categoria === filtroCategoria);
    }

    // Aplicar filtro de favoritos
    if (mostrarFavoritos && user && user.favorites) {
      filtrados = filtrados.filter(prod => user.favorites.includes(prod.id));
    }

    // Si el usuario está logueado, ordenar según historial de búsqueda
    if (user && !mostrarFavoritos) {
      filtrados = ordenarProductosPersonalizados(filtrados);
    }

    return filtrados;
  };

  const productosFiltrados = filtrarProductos();

  // Efecto para cargar más productos al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200 &&
        !cargando &&
        productosVisibles < productosFiltrados.length
      ) {
        setCargando(true);
        setTimeout(() => {
          setProductosVisibles((prev) => prev + 8);
          setCargando(false);
        }, 800);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cargando, productosFiltrados.length, productosVisibles]);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleRegister = (userData) => {
    setUser(userData);
    setShowRegister(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    setShowUserProfile(false);
    setMostrarFavoritos(false);
  };

  // Resetear vista cuando cambiamos entre favoritos y todos los productos
  useEffect(() => {
    setProductosVisibles(12);
  }, [mostrarFavoritos]);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/galaxia.jpg')" }}
    >
      {/* Barra de navegación */}
      <nav className="bg-[#0b1c39] bg-opacity-90 text-white px-4 md:px-6 py-4 flex flex-wrap md:flex-nowrap justify-between items-center relative">
        <h1 className="text-2xl font-bold mb-2 md:mb-0 w-full md:w-auto text-center md:text-left">Andrómeda</h1>
        <div className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-3 w-full md:w-auto">
          {/* Botón Comprar en */}
          <div className="relative inline-block mb-2 md:mb-0">
            <button
              onClick={() => setMostrarMenu(!mostrarMenu)}
              className="bg-blue-800 hover:bg-blue-900 px-3 md:px-4 py-2 rounded text-sm md:text-base"
            >
   {mostrarMenu && (
  <div
    className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mt-2 min-w-[13rem] w-max bg-white text-black rounded shadow-md z-50"
    style={{ maxWidth: '98vw', overflow: 'visible' }}
  >
    <button
      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
      onClick={() => {
        setFiltroTienda("Natura");
        setMostrarFavoritos(false);
        setMostrarMenu(false);
      }}
    >
      Natura
    </button>
    <button
      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
      onClick={() => {
        setFiltroTienda("Alibaba");
        setMostrarFavoritos(false);
        setMostrarMenu(false);
      }}
    >
      Alibaba
    </button>
    <button
      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
      onClick={() => {
        setFiltroTienda("AliExpress");
        setMostrarFavoritos(false);
        setMostrarMenu(false);
      }}
    >
      AliExpress
    </button>
    {/* Opción de Favoritos */}
    {user && (
      <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 font-medium"
        onClick={() => {
          setMostrarFavoritos(!mostrarFavoritos);
          setFiltroTienda("");
          setMostrarMenu(false);
        }}
      >
        {mostrarFavoritos ? "Todos los productos" : "Favoritos ❤"}
      </button>
    )}
  </div>
)}
          {/* Botón Quitar filtro */}
          {(filtroTienda || mostrarFavoritos) && (
            <button
              onClick={() => {
                setFiltroTienda("");
                setMostrarFavoritos(false);
              }}
              className="bg-blue-800 hover:bg-blue-900 px-3 md:px-4 py-2 rounded text-sm md:text-base mb-2 md:mb-0"
            >
              Quitar filtro
            </button>
          )}

          {/* Botón Categorías */}
          <div className="relative inline-block mb-2 md:mb-0">
            <button
              onClick={() => setMostrarCategorias(!mostrarCategorias)}
              className="bg-[#700c2f] hover:bg-[#5b0926] px-3 md:px-4 py-2 rounded text-sm md:text-base"
            >
              Categorías
            </button>
            {mostrarCategorias && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-md z-10">
                {[
                  "Perfumes",
                  "Aseo personal",
                  "Maquillaje",
                  "Tecnologia",
                  "Ropa",
                  "Para el Hogar",
                  "Electrodomésticos",
                  "Deportes y entrenamiento",
                  "Ala moda",
                ].map((cat) => (
                  <button
                    key={cat}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setFiltroCategoria(cat);
                      setMostrarCategorias(false);
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Botón Quitar categoría */}
          {filtroCategoria && (
            <button
              onClick={() => setFiltroCategoria("")}
              className="bg-blue-800 hover:bg-blue-900 px-3 md:px-4 py-2 rounded text-sm md:text-base mb-2 md:mb-0"
            >
              Quitar categoría
            </button>
          )}

          {/* Icono de usuario o botón de inicio de sesión */}
          {user ? (
            <div className="relative mb-2 md:mb-0">
              <button
                onClick={() => setShowUserProfile(!showUserProfile)}
                className="bg-blue-700 hover:bg-blue-800 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
              >
                <span className="text-white font-bold">{user.name.charAt(0).toUpperCase()}</span>
              </button>
              {showUserProfile && (
                <UserProfile
                  user={user}
                  onLogout={handleLogout}
                  onClose={() => setShowUserProfile(false)}
                />
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-blue-700 hover:bg-blue-800 px-3 md:px-4 py-2 rounded text-sm md:text-base mb-2 md:mb-0"
            >
              Iniciar Sesión
            </button>
          )}
        </div>
      </nav>

      {/* Buscador */}
      <div className="max-w-xl mx-auto px-4 py-4 md:py-6">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => handleBusqueda(e.target.value)}
          className="w-full p-3 rounded border border-gray-300 shadow-sm"
        />
      </div>

      {/* Mostrar título para favoritos */}
      {mostrarFavoritos && (
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white bg-black bg-opacity-40 inline-block px-4 md:px-6 py-1 md:py-2 rounded">
            Tus Productos Favoritos ❤
          </h2>
        </div>
      )}

      {/* Productos - ajustado para mejor visualización en móvil */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
        {productosFiltrados.slice(0, productosVisibles).map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            esFavorito={esFavorito(producto.id)}
            toggleFavorito={toggleFavorito}
          />
        ))}

        {/* Mensaje cuando no hay favoritos */}
        {mostrarFavoritos && productosFiltrados.length === 0 && (
          <div className="col-span-full text-center py-6 md:py-10">
            <div className="bg-white bg-opacity-80 rounded-lg p-4 md:p-6 inline-block">
              <p className="text-lg md:text-xl font-bold mb-2">No tienes productos favoritos</p>
              <p>Añade productos a favoritos haciendo clic en el ícono del corazón</p>
            </div>
          </div>
        )}

        {/* Saturno girando como loader */}
        {cargando && (
          <div className="col-span-full flex justify-center mt-4">
            <video
              src="/images/saturno-loader.mp4"
              autoPlay
              loop
              muted
              className="w-16 h-16 md:w-24 md:h-24"
            />
          </div>
        )}
      </div>

      {/* Modal de Login */}
      {showLogin && (
        <Login
          onLogin={handleLogin}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {/* Modal de Registro */}
      {showRegister && (
        <Register
          onRegister={handleRegister}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </div>
  );
}
