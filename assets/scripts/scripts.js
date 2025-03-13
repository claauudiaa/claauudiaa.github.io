var menu = [
    {
      "nombre": "Hamburguesa Clásica",
      "precio": 8.99,
      "descripcion": "Jugosa hamburguesa de res con queso cheddar, lechuga, tomate y mayonesa en un pan brioche.",
      "imagen": "assets/fotos/hamburguesa.jpg"
    },
    {
      "nombre": "Pizza Margarita",
      "precio": 12.50,
      "descripcion": "Pizza italiana con salsa de tomate, mozzarella fresca y albahaca.",
      "imagen": "assets/fotos/pizza.jpg"
    },
    {
      "nombre": "Ensalada César",
      "precio": 7.99,
      "descripcion": "Crujientes hojas de lechuga romana con aderezo César, crutones y queso parmesano.",
      "imagen": "assets/fotos/cesar.jpg"
    },
    {
      "nombre": "Tacos de Pollo",
      "precio": 9.25,
      "descripcion": "Tres tacos de pollo marinado con cebolla, cilantro y salsa verde en tortillas de maíz.",
      "imagen": "assets/fotos/tacos.jpg"
    },
    {
      "nombre": "Lasaña de Carne",
      "precio": 14.00,
      "descripcion": "Capas de pasta con salsa boloñesa, queso ricotta y bechamel, gratinada al horno.",
      "imagen": "assets/fotos/lasana.jpg"
    },
    {
      "nombre": "Sushi Roll Especial",
      "precio": 13.75,
      "descripcion": "Rollos de sushi rellenos de aguacate, cangrejo y pepino, cubiertos con salmón fresco.",
      "imagen": "assets/fotos/sushi.jpg"
    },
    {
      "nombre": "Limonada Natural",
      "precio": 3.50,
      "descripcion": "Refrescante limonada hecha con jugo de limón fresco y azúcar de caña.",
      "imagen": "assets/fotos/limonada.jpg"
    },
    {
      "nombre": "Brownie de Chocolate",
      "precio": 5.99,
      "descripcion": "Brownie casero con trozos de chocolate y nueces, servido con una bola de helado de vainilla.",
      "imagen": "assets/fotos/brownie.webp"
    }
  ];

var tienda = [
    {
      "nombre": "Camiseta Pokemon",
      "precio": 12.99,
      "descripcion": "Camiseta de algodón con diseño exclusivo de Pokémon. Ideal para fans de Pikachu y compañía.",
      "imagen": "assets/fotos/camiseta.jpg"
    },
    {
      "nombre": "Pantalón Minecraft",
      "precio": 19.50,
      "descripcion": "Pantalón cómodo y ligero inspirado en Minecraft. Perfecto para gamers y amantes de los bloques.",
      "imagen": "assets/fotos/pantalon.webp"
    },
    {
      "nombre": "Gorra Sims 4",
      "precio": 7.99,
      "descripcion": "Gorra ajustable con el icónico logo de Los Sims 4. Dale estilo a tu outfit simulando la vida real.",
      "imagen": "assets/fotos/gorra.jpg"
    },
    {
      "nombre": "Sudadera GTA V",
      "precio": 15.25,
      "descripcion": "Sudadera con capucha inspirada en Grand Theft Auto V. Un must-have para los fanáticos del juego.",
      "imagen": "assets/fotos/sudadera.jpg"
    }
];

function fUsuario() {
  document.querySelector("section").style.display = "none"
  document.querySelector("#div_modal_menu").style.display = "none"
  document.querySelector("#div_modal_tienda").style.display = "none"
  document.querySelector("#div_modal_calendario").style.display = "none"
  document.querySelector("#div_modal_locate").style.display = "none"
  document.querySelector("#div_modal_usuario").style.display = "flex"

}

function fLocate() {
  document.querySelector("section").style.display = "none"
  document.querySelector("#div_modal_menu").style.display = "none"
  document.querySelector("#div_modal_tienda").style.display = "none"
  document.querySelector("#div_modal_calendario").style.display = "none"
  document.querySelector("#div_modal_locate").style.display = "flex"
  document.querySelector("#div_modal_usuario").style.display = "none"
}

function fInicio() {
  document.querySelector("section").style.display = "flex"
  document.querySelector("#div_modal_menu").style.display = "none"
  document.querySelector("#div_modal_tienda").style.display = "none"
  document.querySelector("#div_modal_calendario").style.display = "none"
  document.querySelector("#div_modal_locate").style.display = "none"
  document.querySelector("#div_modal_usuario").style.display = "none"
}

function fMenu() {
    document.querySelector("section").style.display = "none"
    document.querySelector("#div_modal_menu").style.display = "flex"
    document.querySelector("#div_modal_tienda").style.display = "none"
    document.querySelector("#div_modal_calendario").style.display = "none"
    document.querySelector("#div_modal_locate").style.display = "none"
    document.querySelector("#div_modal_usuario").style.display = "none"

    html = "";

    for(i = 0; i < menu.length; i++) {
        html += "<div class='div_menu_comun'>"
        html += "<div class='div_img_comun'><img src='" + menu[i].imagen + "' alt=''></div>"
        html += "<div class='div_datos_comun'>"
            html += "<div class='div_nombre_comun'>" + menu[i].nombre + "</div>"
            html += "<div class='div_precio_comun'>" + menu[i].precio + "€" + "</div>"
            html += "<div class='div_descripcion_comun'>" + menu[i].descripcion + "</div>"
        html += "</div>"
    html += "</div>"
    }

    document.querySelector("#div_modal_menu").innerHTML = html;
}

function fTienda() {
  document.querySelector("section").style.display = "none"
  document.querySelector("#div_modal_tienda").style.display = "flex"
  document.querySelector("#div_modal_menu").style.display = "none"
  document.querySelector("#div_modal_calendario").style.display = "none"
  document.querySelector("#div_modal_locate").style.display = "none"
  document.querySelector("#div_modal_usuario").style.display = "none"

  html = "";

  for(i = 0; i < tienda.length; i++) {
      html += "<div class='div_tienda_comun'>"
      html += "<div class='div_img_tienda'><img src='" + tienda[i].imagen + "' alt=''></div>"
      html += "<div class='div_datos_tienda'>"
          html += "<div class='div_nombre_tienda'>" + tienda[i].nombre + "</div>"
          html += "<div class='div_precio_tienda'>" + tienda[i].precio + "€" + "</div>"
          html += "<div class='div_descripcion_tienda'>" + tienda[i].descripcion + "</div>"
      html += "</div>"
  html += "</div>"
  }

  document.querySelector("#div_modal_tienda").innerHTML = html;
}

function fCalendario() {
  document.querySelector("section").style.display = "none"
  document.querySelector("#div_modal_tienda").style.display = "none"
  document.querySelector("#div_modal_menu").style.display = "none"
  document.querySelector("#div_modal_calendario").style.display = "flex"
  document.querySelector("#div_modal_locate").style.display = "none"
  document.querySelector("#div_modal_usuario").style.display = "none"
}