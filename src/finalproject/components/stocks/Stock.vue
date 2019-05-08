<template>
    <div class="card">
      <img src="../../../assets/logo.png" class="card-img-top" alt="Company logo">
      <div class="card-body">
        <h5 class="card-title">{{ stock.name }}</h5>
        <p class="card-text">US$ {{ stock.price }}</p>
        <div class="input-group">
          <input class="form-control" type="number" placeholder="Quantity" v-model.number="quantity" >
          <div class="input-group-append" id="button-addon4">
            <button
              class="btn animated"
              :class="{'btn-success': !insufficientFunds, 'btn-warning': insufficientFunds, 'rubberBand': insufficientFunds}"
              @click="buyStocks"
              :disabled="quantity <= 0 || !Number.isInteger(quantity) || insufficientFunds">
              {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
            </button>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    

    export default {
        props: ["stock"],
        data() {
            return {
                quantity: 0
            };
        },
        computed: {
            ...mapGetters("finalprojectPortfolio", 
                ["funds"]
            ),
            insufficientFunds() {
                return this.stock.price * this.quantity > this.funds;
            }
        },
        methods: {
            ...mapActions("finalprojectStocks", 
                ["buyStock"]
            ),
            buyStocks() {
                const total = this.stock.price * this.quantity;

                if (total <= this.funds) {
                    const order = {
                        stockId: this.stock.id,
                        stockPrice: this.stock.price,
                        quantity: this.quantity
                    };
                    this.buyStock(order);
                    this.quantity = 0;
                }
            }
        }
    };
</script>
