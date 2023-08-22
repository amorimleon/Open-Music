import { products, categories } from "./productsData.js";
import { themeAnalysis } from "./theme.js";
const renderButtons = (categories) => {
  const buttonsContainer = document.querySelector(".buttons__container");

  buttonsContainer.innerHTML = "";

  categories.forEach((element, index) => {
    const filterButton = document.createElement("li");
    const buttonCategory = document.createElement("button");
    
    buttonCategory.id = index;

    if (element == 'Todos') {
      buttonCategory.classList.add("selected-button");
    }
    filterButton.classList.add("filter__button");
    buttonCategory.classList.add("button__category");

    buttonCategory.innerText = element;

    filterButton.appendChild(buttonCategory);

    buttonsContainer.appendChild(filterButton);
  });
};

const render = (array) => {
  // pegando a ul
  const cardsContainer = document.querySelector(".cards__container");
  // limpando ao inicializar
  cardsContainer.innerHTML = "";

  //percorredo a lista de prosutos
  array.forEach((element) => {
    const card = createCard(element);

    cardsContainer.appendChild(card);
  });
};

const createCard = ({ img, band, title, price }) => {
  // Criando elementos
  const albumCard = document.createElement("li");
  const imgContainer = document.createElement("div");
  const imgCard = document.createElement("img");
  const bandName = document.createElement("p");
  const albumTitle = document.createElement("h2");
  const spanContainer = document.createElement("span");
  const albumPrice = document.createElement("p");
  const buyButton = document.createElement("button");

  // Atribuindo classe
  albumCard.classList.add("album__card");
  imgContainer.classList.add(`img-container`);
  imgCard.classList.add("img__card");
  bandName.classList.add("band__name");
  albumTitle.classList.add("album__title");
  spanContainer.classList.add("span__container");
  albumPrice.classList.add("album__price");
  buyButton.classList.add("buy__button");

  // atribuindo valores

  imgCard.src = img;
  bandName.innerText = band;
  albumTitle.innerText = title;
  albumPrice.innerText = `R$ ${price}`;
  buyButton.innerText = "Comprar";

  // Atribuindo hierarquia
  spanContainer.append(albumPrice, buyButton);

  imgContainer.appendChild(imgCard);

  albumCard.append(imgContainer, bandName, albumTitle, spanContainer);

  return albumCard;
};

const noProduct = (text) => {
  const cardsContainer = document.querySelector(".cards__container");
  const menssage = document.querySelector(".menssage");
  cardsContainer.innerHTML = "";
  menssage.innerHTML = "";

  menssage.innerText = text;

  return cardsContainer;
};

const handleFilter = (categories, products) => {
  const buttons = document.querySelectorAll(".button__category");
  const showPrice = document.querySelector(".show__price");
  const inputRange = document.querySelector(".input__range");
  showPrice.innerText = `Até R$ ${inputRange.value}`;
  let arrayFilter = products;

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      

      const textBtt = event.target.innerText;

      const indexBtt = categories.indexOf(textBtt);

      arrayFilter = products.filter((product) => {
        if (indexBtt === product.category) {
          return products;
        } else if (indexBtt === 0) {
          return products;
        }
      });

      if (arrayFilter.length === 0) {
        const text = "Não há produtos com esse gênero";
        noProduct(text);
      } else {
        const text = `Álbuns Encontrados`;
        noProduct(text);
        render(arrayFilter);
      }
    });
  });

  inputRange.addEventListener("input", () => {
    
    showPrice.innerText = `Até R$ ${inputRange.value}`;
    const filterProsuctRange = arrayFilter.filter((product) => {
      if (product.price <= inputRange.value) {
        return product;
      }
    });
    
    if (filterProsuctRange.length == 0) {
      const text = "Não há produtos com esse valor.";
      noProduct(text);
    } else {
      const text = `Álbuns Encontrados`;
      noProduct(text);
      render(filterProsuctRange);
    }
  });
};


const selectedButton = ()=>{
  const buttons = document.querySelectorAll(".button__category")

  buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
      buttons.forEach((elt)=>{
        if(elt.classList.contains('selected-button')){
          elt.classList.remove('selected-button')
        }
      })
      button.classList.add('selected-button')
      
    })
  })
}
themeAnalysis();
renderButtons(categories);
handleFilter(categories, products);
render(products);
selectedButton()
