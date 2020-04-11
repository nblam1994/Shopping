import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects';
import history from "../history/history";
import {LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR, CLIENT_UNSET_TOKEN, LOGOUT} from "../actions/constants";
import {setTokenClient, unsetTokenClient} from "../actions/loginAction";
import {api} from "../api/api";


function* loginUser(username, password) {

    let token = null;
    try {
        token = yield call(api.checkLoginUser, username, password)
        console.log(token);
        if(token) {
            yield put(setTokenClient(token));
            yield put({type: LOGIN_SUCCESS})
            localStorage.setItem('token', JSON.stringify(token));
            //console.log(localStorage.getItem('token'));
            // quay ve trang home
            history.push("/home");
        }
        else {
            yield put(unsetTokenClient());
            yield put({type: LOGIN_ERROR, error: ['username or password is wrong']});
            localStorage.removeItem('token');
            history.push("/login");
        }

    } catch(error) {
        yield put({type: LOGIN_ERROR, error})

    } finally {
        if(yield cancelled()) {
            history.push("/login");
        }
    }
}


function* logout() {

    yield put(unsetTokenClient());
    localStorage.removeItem('token');
    history.push("/home");
}


export function* watchLoginUser() {
    while(true) {
        // chi chay khi co cai LOGIN_REQUESTING vi do take quy dinh
        const {username, password} = yield take(LOGIN_REQUESTING);
        const taskLogin = yield fork(loginUser, username, password);

        const actionLogout = yield take([CLIENT_UNSET_TOKEN, LOGIN_ERROR]);
        if(actionLogout.type === CLIENT_UNSET_TOKEN){
            yield cancel(taskLogin);
        }
        yield call(logout);
    }
}

export function* watchLogoutUser() {

    while(true) {
        yield take(LOGOUT);
        const taks = yield fork(logout);
        const action = yield take(LOGIN_SUCCESS);
        if(action.type === LOGIN_SUCCESS){
            yield cancel(taks);
        }
    }
}

