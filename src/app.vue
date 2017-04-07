<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style>
.t-btn {
    font-size: 14px;
    display: block;
    width: 310px;
    margin: 30px auto 0;
    padding: 16px;
    text-align: center;
    text-decoration: none!important;
    color: rgba(255, 255, 255, .9)!important;
    border: 1px solid rgba(255, 255, 255, .3);
    border-radius: 4px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, .12);
    text-shadow: 0 1px 4px rgba(0, 0, 0, .1);
    transition: all .5s;
}

.t-btn:hover {
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.30);
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.12);
    transition: all .5s;
}

#index-main {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    width: 100vw;
    height: 140px;
    color: #505050;
    transition: all .3s ease-in;
}

#index-register {
    margin: auto;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

#index-register-form {
    padding: 25px;
    margin: auto;
    margin-top: 240px;
    width: 300px;
    height: 320px;
    border-radius: 4px;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 1, .1);
    background-color: rgb(255, 255, 255);
}

#index-login {
    margin: auto;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

#index-login-form {
    padding: 25px;
    margin: auto;
    margin-top: 280px;
    width: 300px;
    height: 240px;
    border-radius: 4px;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 1, .1);
    background-color: rgb(255, 255, 255);
}

#index-main h3 {
    font-size: 2rem;
    margin: 0;
}

#index-main p {
    font-size: 1.05rem;
}

#index-main span {
    font-size: 1rem;
    line-height: 33px;
    cursor: pointer;
    transition: all .2s ease-in;
}

#index-main span:hover {
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all .2s ease-in;
}
</style>
