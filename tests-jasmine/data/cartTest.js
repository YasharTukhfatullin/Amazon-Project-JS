import {addToCart, cart} from "../../data/cart";

describe("Test suite: addToCart", () => {
  it("adds a new product to the cart", () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    console.log(localStorage.getItem('cart'));
    
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
  });
});