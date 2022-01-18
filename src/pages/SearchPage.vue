<template>
  <div class="row mt-2">
    <div class="col-12">
      <form @submit.prevent="searchNasa()">
        <div class="form-group d-flex">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            v-model="editable"
          />
          <button class="btn btn-success">Search</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import Pop from "../utils/Pop";
export default {
  setup() {
    return {
      async searchNasa() {
        try {
          await NasaService.searchNasa(value);
        } catch (error) {
          Pop(error.message, "error");
        }
      },
    };
  },
};
</script>
