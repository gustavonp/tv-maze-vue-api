import Vue from 'vue';
import Vuex from 'vuex';

import { dataService } from '../shared';
import * as tvMazeApi from '../shared/api/tvMazeApi';

import {
  ADD_HERO,
  DELETE_HERO,
  GET_HEROES,
  UPDATE_HERO,

  LOAD_TVSHOWS_SUCCESS,
  BEGIN_API_CALL,
  API_CALL_ERROR,

} from './mutation-types';


Vue.use(Vuex);

const state = () => ({
  heroes: [],
  tvShows: [],
  apiCallsInProgress: 0,
});

const mutations = {
  [GET_HEROES](state, heroes) {
    state.heroes = heroes;
  },

  [LOAD_TVSHOWS_SUCCESS](state, tvShows){
    state.tvShows = tvShows;
  },
  
  [BEGIN_API_CALL](state) {
    state.apiCallsInProgress = state.apiCallsInProgress + 1;
  },
  [API_CALL_ERROR](state) {
    state.apiCallsInProgress = state.apiCallsInProgress - 1;
  },
  
};

const actions = {
  // actions let us get to ({ state, getters, commit, dispatch }) {

  async getHeroesAction({ commit }) {
    const heroes = await dataService.getHeroes();
    commit(GET_HEROES, heroes);
  },

  async loadTvshowsAction({ commit }, query = '') {
    const tvShows = await tvMazeApi.getTVShowNames(query);
    commit(LOAD_TVSHOWS_SUCCESS, tvShows);
  },
};

const getters = {
  // parameterized getters are not cached. so this is just a convenience to get the state.
  getHeroById: state => id => state.heroes.find(h => h.id === id),
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
});
