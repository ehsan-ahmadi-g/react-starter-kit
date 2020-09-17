import { createModel } from '@rematch/core';
import axios from '../lib/api';

const counter = createModel({
  state: {
    msg: 'some data',
  },

  reducers: {
    login_reducer: (state, payload) => ({
      ...state,
      msg: payload.msg,
    }),
  },

  effects: {
    async login(payload, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.login_reducer(payload);
    },
  },
});

export default counter;
