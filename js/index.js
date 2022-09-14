const menu = [ //<!-- lugares, tienda, bus, riesgo, eventos, comida, hoteles-->
  {
    id: 1,
    title: "casa vera",
    category: "lugares",
    stars: "3,2k",
    img: "../images/casa_vera.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus assumenda fugiat perspiciatis, sit adipisci sunt?`,
  },
  {
    id: 2,
    title: "tren",
    category: "lugares",
    stars: "2,6k",
    img: "../images/tren.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus assumenda fugiat perspiciatis, sit adipisci sunt?`,
  },
  {
    id: 3,
    title: "cristo blanco",
    category: "lugares",
    stars: "9k",
    img: "../images/cristo.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus assumenda fugiat perspiciatis, sit adipisci sunt?`,
  },
  {
    id: 4,
    title: "rio",
    category: "lugares",
    stars: "1.2k",
    img: "../images/rio.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus assumenda fugiat perspiciatis, sit adipisci sunt?`,
  },
  {
    id: 5,
    title: "nevado",
    category: "lugares",
    stars: "7,4k",
    img: "../images/nevado.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus assumenda fugiat perspiciatis, sit adipisci sunt?`,
  },
  {
    id: 6,
    title: "iglesia",
    category: "lugares",
    stars: "9,4k",
    img: "../images/iglesia.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus assumenda fugiat perspiciatis, sit adipisci sunt?`,
  },
  {
    id: 7,
    title: "tren",
    category: "lugares",
    stars: "2.3k",
    img: "../images/tren.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus assumenda fugiat perspiciatis, sit adipisci sunt?`,
  },
  {
    id: 8,
    title: "tienda",
    category: "tienda",
    stars: "2.3k",
    img: "../images/tienda1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus assumenda fugiat perspiciatis, sit adipisci sunt?`,
  },
  {
    id: 8,
    title: "Hostal san mateo",
    category: "hoteles",
    stars: "2.3k",
    img: "../images/hostal1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus assumenda fugiat perspiciatis, sit adipisci sunt?`,
  },
]

//Areas dinamicas
const categorys = document.querySelector(".categorys");
const galeryGrid = document.querySelector(".galery-grid");

//Mostrar todos los items cuando la página carge
window.addEventListener("DOMContentLoaded", function () {
  displayGaleryItems(menu); //mostrar items de la galeria
  displayOptionCategory(); //mostrar opciones de las categorías
});

//Galery items
function displayGaleryItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<a href="../site.html" class="sites">
              <img src=${item.img} alt=${item.title} class="background">
              <div class="site__info">
                <span class="name-site">${item.title}</span>
                <div class="appreciate">
                  <span class="num">${item.stars}</span>
                  <li class="lnr lnr-star"></li>
                </div>
              </div>
            </a>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  galeryGrid.innerHTML = displayMenu;
}


//Category options
function displayOptionCategory() {
  const categories = menu.reduce (
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["todo"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<div class="category" data-id=${category}>
                <div class="category__icon">
                  <img src="../svg_icon/${category}.svg" alt=${category}>
                </div>
                <p>${category}</p>
              </div>`;
    })
    .join("");

  categorys.innerHTML = categoryBtns;
  const filterBtns = categorys.querySelectorAll(".category");
  console.log(filterBtns);

  filterBtns.forEach (function (btn) {
    btn.addEventListener("click", function (e) {

      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {

        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "todo") {
        displayGaleryItems(menu);
      }else {
        displayGaleryItems(menuCategory)
      }
    });
  });
}
