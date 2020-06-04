import { routerRedux } from 'dva';
import { login } from '../service';
import $$ from 'cmn-utils';

export default {
  namespace: 'login',

  state: {
    loggedIn: false,
    message: '',
    user: {}
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if (pathname.indexOf('/sign/login') !== -1) {
          $$.removeStore('user');
        }
      });
    }
  },

  effects: {
    *login({ payload,callback }, { call, put }) {
      try {
        const response= yield call(login, payload);
        const {data,resultMsg}=response
        if (callback && typeof callback === 'function') {
          callback(response); // 返回结果
        }
        if (data) { 
          $$.setStore('user', data);
          yield put(routerRedux.replace('/'));
        } else {
          yield put({
            type: 'loginError',
            payload: { resultMsg }
          });
        }
      } catch (e) { 
        yield put({
          type: 'loginError',
          payload: { message: e.resultMsg }
        });
      }
    },
    *logout(_, { put }) { }
  },

  reducers: {
    loginSuccess(state, { payload }) {
      return {
        ...state,
        loggedIn: true,
        message: '',
        user: payload
      };
    },
    loginError(state, { payload }) {
      return {
        ...state,
        loggedIn: false,
        message: payload.message
      };
    }
  }
}; 
