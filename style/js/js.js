// const keys = [];
// const values = [];
// const advert = {
// service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
// if (apartment.hasOwnProperty(key)) {
// keys.push(key);
// }
// }

// console.log(keys);
// console.log(values);

// !============================

// const a = [1, 2, 3];
// const b = a;
// console.log([1, 2, 3] === b)

// !==========================

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    const result = [];
    if (result.some((item) => item.name === product.name)) {
      product.quantity = product.quantity + 1;
    } else {
      result.push({ ...product, quantity: 1 });
    }
    console.log("result", this.items);
    this.items = result;

    console.log("result", this.items);
    //   for (const item of this.items) {

    //     if (item.name === product.name) {
    //       item.quantity += 1;

    //       return;

    //     }
    //   }

    //   const newProduct = {
    //     ...product,
    //     quantity: 1,
    //   };

    //   this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];

      if (productName === item.name) {
        console.log("нашли такой продукт ", productName);
        console.log("индекс: ", i);

        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
        return;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity -= 1;
        return;
      }
    }
  },
};

//   console.log(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 60 });
//   cart.add({ name: '🍋', price: 60 });
//   cart.add({ name: '🍋', price: 60 });
//   cart.add({ name: '🍓', price: 110 });
//   cart.add({ name: '🍓', price: 110 });
//   cart.add({ name: '🍓', price: 110 });
//   cart.add({ name: '🍋', price: 60 });
//   cart.add({ name: '🍋', price: 60 });
//   cart.add({ name: 'sova', price: 100 });

//   cart.increaseQuantity('🍓');

//   console.table(cart.getItems());

//   console.log('Total: ', cart.countTotalPrice());

//   cart.remove('🍇');
//   console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

//   console.log('Total: ', cart.countTotalPrice());

console.table(cart.items);

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// !============================
