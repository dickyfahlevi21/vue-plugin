<template>
  <div class="container mx-auto text-center">
    <alert-message v-if="this.message.alert" />
    <div class="flex justify-center my-16">
      <form>
        <div class="inline">
          <search-box v-model="searchValue" @change="filtering"/>
          <p
            v-if="this.searchValue.length > 0"
            class="char inline p-3 rounded-lg ml-2 bg-teal-400 text-white"
          >{{ searchValue.length }}</p>
          <p
            v-if="this.searchValue.length > 0 && this.searchValue.length < 3"
            class="bg-red-200 rounded-lg mt-2"
          >{{ message.character }}</p>
          <p
            v-if="this.message.loading"
            class="bg-blue-200 rounded-lg mt-2"
          >Sedang mencari...</p>
        </div>
      </form>
    </div>

    <cart-list :data="cartItem" v-model="checkCart" @click="removeCart"/>
    <br>
    <list-rendering :data="filteringData" v-model="checkValue" @click="addCart"/>
  </div>
</template>
<script>
// import Data Dummy
import dataDummy from "@/dummy/dataDummy.js"
// import Component
import CartList from "@/components/CartList.vue"
import SearchBox from "@/components/SearchBox.vue"
import ListRendering from "@/components/ListRendering.vue"
import AlertMessage from "@/components/AlertMessage.vue"

export default {
    name: "Product",
    components: {
        SearchBox,
        ListRendering,
        AlertMessage,
        CartList
    },
    data() {
        return {
            message: {
                character: "",
                loading: false,
                alert: ""
            },
            filteringData: [],
            searchValue: "",
            checkValue: [],
            checkCart: [],
            cartItem: [],
            jsonItem: dataDummy,
        };
    },
    created() {
        this.filtering()
    },
    methods: {
        filtering(inputan) {
            const lengthValue = this.searchValue.length
            const resultFilter = this.jsonItem.filter(data => data.title
                .toLowerCase()
                .includes(inputan));
            if (lengthValue > 0 && lengthValue < 3) {
                this.message.character = "Minimal Character 3 Huruf";
                this.filteringData = []
            } else if (lengthValue >= 3) {
                setTimeout(() => {
                    this.message.loading = true;
                }, 200);
                setTimeout(() => {
                    this.message.loading = false;
                }, 500);
                this.filteringData = resultFilter
            } else {
                this.filteringData = this.jsonItem
            }
      },
      addCart (alrt) {
        let self = this
        self.message.alert = alrt
        setTimeout(() => {
            self.message.alert = null
            return self.$emit("click", alrt);
        }, 1000);
        self.filteringData = self.filteringData.filter(data => data.id !== alrt.id);
        self.cartItem.push(alrt);
        self.jsonItem = self.jsonItem.filter(data => data.id != alrt.id);  
      },
      removeCart() {
        let self = this
        self.jsonItem.push(self.checkValue);
        self.filteringData.push(self.checkCart);
        self.cartItem = self.cartItem.filter(data => data.id != self.checkCart.id);
      }
    }
};
</script>

<style scoped>
.bg-red-600:hover {
    background-color: #8f2121 !important;
}
.text-2xl {
    color: #EE4D2D !important;
}
</style>
