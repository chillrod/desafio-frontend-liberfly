<template>
  <div class="container">
    <ul>
      <li v-for="(cartItem, id) in cartItems" :key="id">
        <div class="cart-container" v-motion-slide-top>
          <div class="cart-image-container">
            <img
              :src="`${cartItem.thumbnail.path}.${cartItem.thumbnail.extension}`"
              alt="Comic books!"
              aria-label="Image of the comics of our website."
            />
          </div>
          <div class="span-price-container">
            <p>{{ cartItem.title }}</p>
            <div class="cta">
              <span>${{ cartItem.cartPrice }},00</span>
              <button @click="handleDeleteCartItem(cartItem)">
                <v-icon>mdi-delete</v-icon>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="checkout-container">
      <div>
        <p>Subtotal:</p>
        <span>$ {{ sumOfCartSubtotal() }},00</span>
      </div>
      <div>
        <p>Discount:</p>
        <span>$ {{ discountValidated }},00</span>
      </div>
      <div>
        <p>Total:</p>
        <span>$ {{ sumOfTotal(sumOfCartSubtotal())(discountValidated) }},00</span>
      </div>
      <label for="discount">Discount Coupon:</label>
      <div class="btn-input">
        <input
          readonly
          type="text"
          :value="appliedCoupom.value"
          name="coupom"
          id="discount"
          placeholder="Go to your profile page"
        />
        <button @click="handleValidateCoupom(appliedCoupom.value)" type="submit">
          {{ validateMsg }}
        </button>
      </div>
      <button @click="handleFinalizeOrder()" class="order-btn">Buy</button>
    </div>
  </div>
</template>

<script>
import { computed, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import useState from '../../shared/utils/useState';

export default {
  name: 'Checkout',
  setup() {
    const store = useStore();
    const router = useRouter();

    const cartItems = computed(() => store.getters.get_cart_items);
    const cartItemLength = computed(() => store.getters.get_cart_total);
    const appliedCoupom = computed(() => store.getters.get_added_coupon);
    const isCoupom = computed(() => store.getters.get_coupom_applied);

    const [discountValidated, setDiscountValidated] = useState(0);
    const [validateMsg, setValidateMsg] = useState('Validate');

    const { $toast } = getCurrentInstance().ctx;

    const handleDeleteCartItem = (value) => {
      store.dispatch('deleteSelectedComic', value);
    };

    const sumOfCartSubtotal = () => {
      let sum = 0;

      // eslint-disable-next-line no-return-assign
      cartItems.value.forEach((cartItem) => (sum += cartItem.cartPrice));

      return sum;
    };

    const sumOfTotal = (subtotal) => (discount) => {
      let auxTotal = null;

      if (subtotal - discount <= 0) {
        auxTotal = 0;
        return auxTotal;
      }

      auxTotal = subtotal - discount;

      return auxTotal;
    };

    const handleValidateCoupom = (validateCoupom) => {
      setValidateMsg('Validating...');

      setTimeout(() => {
        if (
          // eslint-disable-next-line operator-linebreak
          validateCoupom === 'LIBERFLY2021' ||
          // eslint-disable-next-line operator-linebreak
          validateCoupom === 'REMEMBERINGSTANLEE' ||
          validateCoupom === 'MARVEL'
        ) {
          $toast.success('Coupom Valid! Discount set.');
          setDiscountValidated(appliedCoupom.value.discountValue);
          setValidateMsg('Valid!');
          return;
        }
        setValidateMsg('Oh no!');
        $toast.show('Invalid or expired coupom');
      }, 1200);
    };

    setTimeout(() => {
      if (!isCoupom.value) {
        $toast.show('You have new Coupons! Check your profile page');
      }
    }, 800);

    const handleFinalizeOrder = () => {
      if (!cartItemLength.value) {
        router.push('/');
        return;
      }

      router.push('/thankyou');
    };

    return {
      appliedCoupom,
      discountValidated,
      handleValidateCoupom,
      handleDeleteCartItem,
      sumOfCartSubtotal,
      sumOfTotal,
      handleFinalizeOrder,
      cartItems,
      validateMsg,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
ul {
  max-height: 55vh;
  overflow-y: auto;

  @media (min-width: 600px) {
    grid-column: 1;
    max-height: 100vh;
  }
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 600px) {
    flex-flow: row wrap;
  }
  gap: var(--sm);
}

li {
  padding-top: var(--sm);
  list-style-type: none;
  margin-bottom: var(--sm);

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  transition: transform 150ms ease;

  &:hover {
    transform: translateY(-3%);
  }

  @media (min-width: 600px) {
    width: 500px;
  }
}
.cart-container {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr 0.5fr;
  padding: var(--sm);

  .cart-image-container {
    grid-column: 1;
    img {
      padding-right: var(--sm);
      width: 180px;
      height: 180px;
      object-fit: contain;
    }
  }

  p {
    font-size: var(--fsm);
    font-weight: bolder;
    display: -webkit-box;
    line-height: 1.6;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

    @media (min-width: 600px) {
      max-width: 300px;
    }
  }
  .span-price-container {
    width: 100%;
    grid-column: 2;
    justify-self: start;

    span {
      font-size: var(--fm);
    }

    .cta {
      margin-top: auto;
      grid-row: 3;
      align-self: end;
      display: flex;
      justify-content: space-between;
    }

    button {
      display: inline-block;
      padding: 0.5em var(--sm);
      border-radius: var(--bsm);
      background: var(--red);

      cursor: pointer;
      transition: transform 150ms ease;
    }

    i {
      color: var(--primary);
    }
  }
  .checkout-container {
    display: flex;
    flex-direction: column;
    padding: var(--sm);

    @media (min-width: 600px) {
      grid-column: 2;
      grid-row: 1;
      align-self: start;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .btn-input {
    display: flex;

    input {
      flex: 1;

      background: var(--primary);
      outline: none;

      padding: var(--sm);
    }

    button {
      background: var(--red);
      padding: var(--sm);
      color: var(--primary);
      font-weight: bolder;
    }
  }
  .order-btn {
    background: var(--red);
    padding: var(--sm);
    margin-top: var(--sm);
    color: var(--primary);
    font-weight: bolder;
  }
}
</style>
