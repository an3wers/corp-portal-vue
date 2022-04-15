<template>
  <div id="auth">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="card-wrapper d-flex align-items-center">
            <div class="card w-100">
              <div class="card-body">
                <form @submit.prevent="handlerAuth">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"
                      >Email address</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      v-model.trim="login"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"
                      >Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      v-model.trim="pass"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">Войти</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import Cookies from 'js-cookie'

export default {
  setup() {
    const login = ref(null);
    const pass = ref(null);

    const handlerAuth = async () => {
        // console.log('Login: ', login.value)
        // console.log('Pass: ', pass.value)
        try {
            const response = await axios.post(`http://webapp/apiuser/login/?login=${login.value}&psw=${pass.value}`)
            console.log(response.data)
            Cookies.set('ASP.NET_SessionId', response.data.responce)
        } catch (error) {
            console.log(error.messege)
        }
    }

    return {
      login,
      pass,
      handlerAuth
    };
  },
};
</script>

<style scoped>
.card-wrapper {
  height: 100vh;
}
</style>
