<template>
  <ul>
    <li v-for="(cartItem, id) in cartItems" :key="id">
      <div class="cart-container">
        <div class="cart-image-container">
          <img
            :src="`${cartItem.thumbnail.path}.${cartItem.thumbnail.extension}`"
            alt="Comic books!"
            aria-label="Image of the comics of our website."
          />
        </div>
        <p>{{ cartItem.title }}</p>
        <div class="span-price-container">
          <span>${{ cartItem.cartPrice }},00</span>
          <button @click="handleDeleteCartItem(cartItem)">
            <v-icon>mdi-cart</v-icon>
          </button>
        </div>
      </div>
    </li>
  </ul>
  <div class="checkout-container">
    <div>
      <p>Subtotal:</p>
      <span>$ {{ sumOfCartSubtotal() }}</span>
    </div>
    <div>
      <p>Desconto:</p>
      <span>$ {{ sumOfCartSubtotal() }}</span>
    </div>
    <div>
      <p>Total:</p>
      <span>$ {{ sumOfCartSubtotal() }}</span>
    </div>
  </div>
  <div class="discount-input">
    <form action="submit">
      <label for="discount">Discount Coupon:</label>
      <button @click="handleSubmitDiscount">Validate</button>
      <input type="text" name="text" id="discount" placeholder="hey" />
    </form>
    <button class="order-btn">ORDER</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'CartList',
  setup() {
    const store = useStore();
    const cartItems = computed(() => store.getters.get_cart_items);

    const handleDeleteCartItem = (value) => {
      store.dispatch('deleteSelectedComic', value);
    };

    const sumOfCartSubtotal = () => {
      let sum = 0;

      // eslint-disable-next-line no-return-assign
      cartItems.value.forEach((cartItem) => (sum += cartItem.cartPrice));

      return sum;
    };

    const handleSubmitDiscount = (event) => {
      event.preventDefault();
      store.dispatch('validateDiscount', event.target.value);
    };

    return {
      handleDeleteCartItem,
      handleSubmitDiscount,
      sumOfCartSubtotal,
      cartItems,
    };
  },
};
</script>

<style scoped lang="scss">
ul {
  max-height: 55vh;
  overflow-y: auto;
}
li {
  list-style-type: none;
  margin-bottom: var(--sm);
}
.cart-container {
  width: 100%;
  background: var(--secondary);
  display: grid;

  grid-template-columns: 1.5fr 1.5fr 1fr;
  grid-template-rows: 1fr 1fr;

  padding: var(--sm);

  .cart-image-container {
    grid-column: 1;
    grid-row: 1 / 3;

    img {
      padding-right: var(--sm);
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  p {
    grid-column: 2;
    grid-row: 1;
    font-size: var(--fsm);
    font-weight: bolder;
    display: -webkit-box;
    line-height: 1.6;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .span-price-container {
    grid-column: span 3;
    grid-row: 2;
    align-self: center;
    display: grid;
    grid-template-columns: 2fr 1fr;

    span {
      grid-column: 1;
      font-size: var(--fm);
    }

    button {
      grid-column: 2;
      justify-self: center;
      display: inline-block;
      padding: 0.5em var(--sm);
      border-radius: var(--bsm);
      background: var(--red);

      cursor: pointer;
      transition: transform 150ms ease;
    }
  }
  .checkout-container {
    display: flex;
    flex-direction: column;
    padding: var(--sm);

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .discount-input {
    display: flex;
    flex-direction: column;

    .order-btn {
      background: var(--red);
      padding: var(--sm);
      border-radius: var(--bsm);
      margin-top: var(--sm);
    }

    form {
      display: grid;
      grid-template-columns: 2fr 0.5fr;
      grid-template-rows: 1fr 1fr;

      button {
        grid-column: 2;
        grid-row: 2;
        padding: var(--sm);
        align-self: end;
        justify-self: end;
        background: var(--secondary);
      }

      label {
        font-size: var(--placeholder);
        grid-row: 1;
        align-self: end;
      }

      input {
        grid-column: 1;
        background: var(--secondary);
        padding: var(--sm);
        margin-top: var(--sm);
        color: var(--primary);

        outline: none;

        transition: 200ms transform ease;
        &:focus {
          transform: translateY(-5%);
        }
      }
    }
  }
}
</style>
