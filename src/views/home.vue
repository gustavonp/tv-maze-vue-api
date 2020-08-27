<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">TV Series</h2>

          <div>
            <div class="card">
              <div class="card-content">
                <div class="content">
                  
                  <div class="field">
                    <input class="input" name="firstName" placeholder="Tv series" v-model="searchQuery" />
                  </div>
              
                </div>
              </div>
              <footer class="card-footer">
                <button class="link card-footer-item" @click="searchSeries()">
                  <i class="fas fa-search"></i>
                  <span>Search</span>
                </button>
              </footer>
            </div>

          </div>

          <ul>
            <li v-for="tv in tvShows" :key="tv.id">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div class="name">{{tv.show.name}}</div>
                    <img v-bind:src="tv.show.image !== null ? tv.show.image.medium : 'https://via.placeholder.com/210x295.png?text=Cover+unavailable' " /> 
                  </div>
                </div>
                <footer class="card-footer">
                  <button
                    class="link card-footer-item"
                    @click="viewMore(tv.show)"
                  >
                    <i class="fas fa-plus"></i>
                    <span>View more</span>
                  </button>
                </footer>
              </div>
            </li>
          </ul>

        </div>
        <div class="notification is-info" v-show="message">{{ message }}</div>
      </div>
    </div>
    <Modal
      :show="this.displayShow"
      :isOpen="showModal"
      @handleClose="closeModal"
    >
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Modal from '@/components/modal';

export default {
  name: 'TvShows',
  data() {
    return {
      searchQuery: '',
      displayShow: {},
      message: '',
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  async created() {
    // await this.loadTvShows();
    // console.log(this.tvShows[0].show);
  },
  methods: {
    ...mapActions(['loadTvshowsAction']),
    viewMore(serie) {
      this.displayShow = serie;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async loadTvShows(){
      this.message = 'Loading TV shows!';
      await this.loadTvshowsAction();
      this.message = '';
    },

    async searchSeries() {
      this.message = 'Loading TV shows!';
      await this.loadTvshowsAction(this.searchQuery);
      this.message = '';
    },
  },
  computed: {
    ...mapState(['tvShows']),
  },
};
</script>
