import {data} from "./data";
import * as R from 'ramda';
import jwt from 'jsonwebtoken';
import dataUsers from "./user";
import {KEY_TOKEN} from "../actions/constants"

// viet ham lay du lieu

function getDataProductByPage(page = 1, limit = 10) {

    let start = (page - 1) * limit ; 
    const products = R.slice(start, start + limit, data);
    return {
        products,
        total: data.length,
        pageSize: limit
    }
}

function getItemById(id) {

    return R.find(R.propEq('id', id))(data);
}

function checkLoginUser(username, password) {

    let token = null;
    //kime tra xem dang nhap dung hay
    for(let i = 0; i < dataUsers.length; i++) {

        if(dataUsers[i].username === username && dataUsers[i].password === password) {
            token = jwt.sign({id: dataUsers[i].id, username: dataUsers[i].username, email: dataUsers[i].email}, KEY_TOKEN, { algorithm: 'HS256' });
            break;
        }

    }

    return token;
}

export const api = {
    getDataProductByPage,
    getItemById,
    checkLoginUser
}
