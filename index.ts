import './style.css';

const appNode: HTMLDivElement = document.querySelector('.shop');
const cartNode: HTMLDivElement = document.querySelector('.popup-list');
const popupFailed: HTMLDivElement = document.createElement('div');
const dataShop: Product[] = [];

class Icon {
  private img: HTMLImageElement | null;
  private name: HTMLParagraphElement | null;
  private section: HTMLParagraphElement | null;
  private price: HTMLParagraphElement | null;
  private detail: HTMLButtonElement | null;
  private buy: HTMLButtonElement | null;

  constructor(product: Product) {
    const template: DocumentFragment = (
      document.getElementById('icon-temp') as HTMLTemplateElement
    ).content;
    const content: DocumentFragment = document.importNode(template, true);

    this.img = content.querySelector('.perfume-img');
    this.name = content.querySelector('.title');
    this.section = content.querySelector('.section');
    this.price = content.querySelector('.price');
    this.detail = content.querySelector('.detail');
    this.buy = content.querySelector('.buy');

    this.img.src = product.img;
    this.name.innerHTML = product.title;
    this.section.innerHTML = product.section;
    this.price.innerHTML = product.price;
    this.detail.innerHTML = product.detail;
    this.buy.onclick = (): void => this.addToCart(product);
    appNode.appendChild(content);
  }

  addToCart(product: Product): void {
    dataShop.push(product);
    const h5 = document.createElement('h5');
    h5.innerText = product.title + ' ' + product.price;
    popupFailed.appendChild(h5);
  }
}

class Product {
  img: string;
  title: string;
  section: string;
  price: string;
  detail: string;
  constructor(img: string, name: string, section: string, price: string) {
    this.img = img;
    this.title = name;
    this.section = section;
    this.price = price;
    this.detail = 'Подробнее';
  }
}

const product: Product = new Product(
  'https://yslbeauty.com.ru/media/catalog/product/cache/88836f485742952bf5e52c5c259bc291/y/s/ysl_dmi_fraw_bo-edp-extreme_packshot_front_30ml_1500x2000px_3614273256506_rgb_2_1-min.jpg',
  'BLACK OPIUM EXTREME DE PARFUM',
  'ПАРФЮМЕРНАЯ ВОДА',
  '4 837 р.'
);
const product_2: Product = new Product(
  'https://yslbeauty.com.ru/media/catalog/product/cache/88836f485742952bf5e52c5c259bc291/b/l/black-opium-main_1-min.jpg',
  'BLACK OPIUM EAU DE PARFUM',
  'ПАРФЮМЕРНАЯ ВОДА',
  '4 837 р.'
);
const product_3: Product = new Product(
  'https://yslbeauty.com.ru/media/catalog/product/cache/88836f485742952bf5e52c5c259bc291/b/l/black-opium-the-glow-edt-main.jpg',
  'BLACK OPIUM EAU DE PARFUM INTENSE',
  'НОВАЯ ТУАЛЕТНАЯ ВОДА',
  '6 065 р.'
);
const product_4: Product = new Product(
  'https://yslbeauty.com.ru/media/catalog/product/cache/88836f485742952bf5e52c5c259bc291/b/l/black-opium-eau-de-parfum-intense-main.png',
  'BLACK OPIUM EAU DE PARFUM',
  'ПАРФЮМЕРНАЯ ВОДА',
  '5 127 р.'
);
const product_5: Product = new Product(
  'https://yslbeauty.com.ru/media/catalog/product/cache/88836f485742952bf5e52c5c259bc291/b/l/black-opium-eau-de-parfum-neon-main.png',
  'BLACK OPIUM NEON',
  'ПАРФЮМЕРНАЯ ВОДА',
  '8 100 р.'
);
const product_6: Product = new Product(
  'https://yslbeauty.com.ru/media/catalog/product/cache/88836f485742952bf5e52c5c259bc291/w/w/ww-50790ysl-main-packshot_1.jpg',
  'BLACK OPIUM EAU DE PARFUM LIMITED EDITION BOTTLE',
  'ПАРФЮМЕРНАЯ ВОДА ЛИМИТИРОВАННАЯ ВЕРСИЯ',
  '6 825 р.'
);
const product_7: Product = new Product(
  'https://yslbeauty.com.ru/media/catalog/product/cache/88836f485742952bf5e52c5c259bc291/o/p/opium-main.jpg',
  'OPIUM',
  'ПАРФЮМЕРНАЯ ВОДА',
  '4 912 р.'
);
const product_8: Product = new Product(
  'https://yslbeauty.com.ru/media/catalog/product/cache/88836f485742952bf5e52c5c259bc291/b/l/black-opium-promo-main.png',
  'BLACK OPIUM EAU DE PARFUM YSL',
  'ПАРФЮМЕРНАЯ ВОДА',
  '4 837 р.'
);
const product_9: Product = new Product(
  'https://yslbeauty.com.ru/media/catalog/product/cache/88836f485742952bf5e52c5c259bc291/s/e/set_4.jpg',
  'BLACK OPIUM DARK ICONS',
  'ПОДАРОЧНЫЙ НАБОР',
  '9 060 р.'
);
const product_10: Product = new Product(
  'https://yslbeauty.com.ru/media/catalog/product/cache/88836f485742952bf5e52c5c259bc291/3/6/3614273620468.jpg',
  'FRAGRANCE ICONS',
  'ПОДАРОЧНЫЙ НАБОР',
  '3 750 р.'
);
const product_11: Product = new Product(
  'https://yslbeauty.com.ru/media/catalog/product/cache/88836f485742952bf5e52c5c259bc291/3/6/3614273610575.jpg',
  'DANCE ALL NIGHT',
  'ПОДАРОЧНЫЙ НАБОР',
  '4 837 р.'
);
const product_12: Product = new Product(
  'https://yslbeauty.com.ru/media/catalog/product/cache/88836f485742952bf5e52c5c259bc291/3/6/3614273609852.jpg',
  'YOUR COLOR, YOUR CHARACTER',
  'ПОДАРОЧНЫЙ НАБОР',
  '2 700 р.'
);


new Icon(product);
new Icon(product_2);
new Icon(product_3);
new Icon(product_4);
new Icon(product_5);
new Icon(product_6);
new Icon(product_7);
new Icon(product_8);
new Icon(product_9);
new Icon(product_10);
new Icon(product_11);
new Icon(product_12);

const onBasket: HTMLDivElement = document.getElementById('menu-basket');

onBasket.onclick = function openBasket(): void {
  const templateForList: HTMLTemplateElement | null =
    document.querySelector('#popup');
  const listContent: DocumentFragment = templateForList.content.cloneNode(true);
  console.log(listContent);
  const listName: HTMLUListElement = listContent.querySelector('.popup-list');

  const popup: HTMLDivElement = document.getElementById('#icon-temp');

  popupFailed.className = 'popupFailed';
  const fieldPopupInfo: HTMLDivElement =
    document.querySelector('.popupsection');

  dataShop.forEach((temp: Product) => {
    const liNamePrice = document.createElement('h4');
    liNamePrice.innerText = temp.title + ' Цена : ' + temp.price;
    listName.appendChild(liNamePrice);

    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.addEventListener('click', (): void => {
      liNamePrice.remove();
      remove.remove();
      dataShop.splice(dataShop.indexOf(temp), 1);
    });
    listName.appendChild(liNamePrice);
    liNamePrice.appendChild(remove);
  });

  fieldPopupInfo.appendChild(listContent);
  const popupClose: HTMLSpanElement = document.getElementById('popup-close');
  popupClose.onclick = function clickCloseMenuBasket(): void {
    fieldPopupInfo.innerHTML = '';
  };
};
