
<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="modal-title"></slot>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- NOTE this is basically the same thing as setting an ID as 'modal-body-slot' in vanilla js -->
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <Modal :id="'nasa-' + nasa.id">
    <template #modal-title>
      <h4>{{ nasa.title }}</h4>
    </template>
    <template #modal-body>
      <div class="col-12">
        <img :src="nasa.img" class="img-fluid" alt="" />
        <h4>{{ nasa.title }}</h4>
        <h4>Score: {{ Math.floor(nasa.date) }}</h4>
        <p>{{ nasa.copyright }}</p>
        <div class="d-grid gap-2">
          <!-- <button
            class="btn btn-primary"
            type="button"
            @click="addToWatchlist()"
            v-if="!onWatchlist"
          >
            Add To Watchlist
          </button>
          <button
            class="btn btn-danger"
            type="button"
            @click="removeFromWatchlist()"
            v-else
          >
            Remove from Watchlist
          </button> -->
        </div>
      </div>
    </template>
  </Modal>
</template>