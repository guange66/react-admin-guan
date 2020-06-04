// import $$ from 'cmn-utils';
// import request from '@/utils/request'
// import * as FetchRequest from '@/utils/request'

// export async function login(payload) {
//     return FetchRequest.post('userLogin/login', payload)
// }
// export async function login(payload) {
//     console.log(payload)
//     return $$.post('/user/login', payload);
// }

import $$ from 'cmn-utils';

export async function login(payload) {
    return $$.post('userLogin/login', payload);
}