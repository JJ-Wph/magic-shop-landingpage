<template>
        <div class="d-flex justify-content-around align-items-center">
        <button class=" d-flex justify-content-around align-items-center btn btn-lg btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <p>Cart</p> 
            <p><span class="badge badge-pill badge-danger" v-show="cartCount > 0">{{cartCount}}</span></p>  
        </button>
        <div class="dropdown-menu pixel-borders--2 w-25" aria-labelledby="dropdownMenuButton">
            <div class="d-flex justify-content-around">
                <p class="mr-auto p-2">Name</p>
                <p class="p-2">Count</p>
                <p class="p-2">Price</p>
            </div>
            <br>
            <div class="d-flex justify-content-around" v-for="item in items" :key="item.name">
                <p class="mr-auto p-2">{{item.name}}</p>
                <p class="p-2">{{item.count}}x</p>
                <p class="p-2">{{(item.price * item.count).toFixed(2)}}</p>
            </div>
            <div class="dropdown-divider"></div>
            <p class="d-flex justify-content-center p-2">Total: {{sum}}</p>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed: {
        ...mapState(['cartCount','totalPrice']),

        items() {
            return this.$store.getters['getAddedItems']
        },

        sum() {
            return this.items.reduce((acc, item) => 
                {return acc + (item.price * item.count)
                },0).toFixed(2)
            }
    }
};
</script>

<style scoped>
button {
    width: 8vw;
    height: 6vh;
}

p {
    font-size: 1.6vw;
}

@media (max-width: 1280px){
    button {
        width: 14vw;
        height: 4vh;
    }

    p {
        font-size: 2.2vw;
    }
}
</style>