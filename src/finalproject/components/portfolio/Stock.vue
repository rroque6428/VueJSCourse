<template>
  <div class="card-group">
    <div class="card">
      <img src="../../../assets/logo.png" class="card-img-top" alt="Company logo">
      <div class="card-body">
        <h5 class="card-title">{{ stock.name }}</h5>
        <p class="card-text">US$ {{ stock.price }} | Qty: {{ stock.quantity }}</p>
        <div class="input-group">
            <input class="form-control" type="number" placeholder="Quantity" v-model.number="quantity">
            <div class="input-group-append" id="button-addon4">
                <button class="btn btn-success" 
                    @click="sellStock"
                    :disabled="quantity <= 0 || !Number.isInteger(quantity) || this.quantity > this.stock.quantity">
                    Sell
                </button>
            </div>
        </div>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: ["stock"],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            ...mapActions('finalprojectPortfolio', 
                { placeSellOrder: 'sellStock' }
            ),
            sellStock() {
                if (this.quantity <= this.stock.quantity) {
                    const order = {
                        stockId: this.stock.id,
                        stockPrice: this.stock.price,
                        quantity: this.quantity
                    };
                    this.placeSellOrder(order);
                    this.quantity = 0;
                }
            }
        }
    };
</script>
