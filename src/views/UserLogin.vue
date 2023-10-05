<template>
  <div id="bg-blue" class="fixed bg-gray-100 bg-cover w-screen h-screen">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-2xl shadow md:mt-0 sm:max-w-md xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-2 sm:p-8">
          <div class="pt-5 flex justify-center">
            <img
              alt="Rubick Tailwind HTML Admin Template"
              class="self-center w-32"
              src="../assets/images/jdblogo.png"
            />
          </div>
          <div>
            <span id="font-blue" class="text-3xl font-bold flex justify-center"
              >JDB Switch Services</span
            >
          </div>

          <div class="pt-5 space-y-4 md:space-y-6 pl-6 pr-6">
            <div>
              <label
                for="large-input"
                id="font-blue"
                class="block mb-2 text-md font-medium"
                >UserID</label
              >
              <input
                v-model="username"
                id="large-input"
                type="text"
                autocomplete="on"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5"
              />
              <!--Error validate-->
              <!-- <div class="mt-1">
                  <span
                    v-for="error in validate.userId.$errors"
                    :key="error.$uid"
                    class="text-red-500"
                  >
                    {{ error.$message }}
                  </span>
                </div> -->
            </div>

            <div>
              <label
                for="large-input"
                id="font-blue"
                class="block mb-2 text-md font-medium"
                >Password</label
              >

              <div class="relative mb-6">
                <button
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-3 flex items-center pl-3.5 text-gray-400"
                >
                  <EyeSlashIcon v-if="!showPassword" class="w-5 h-5" />
                  <EyeIcon v-if="showPassword" class="w-5 h-5" />
                </button>
                <input
                  v-model="password"
                  id="large-input"
                  :type="showPassword ? 'text' : 'password'"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5"
                  @keydown.enter="login"
                />
                <!--Error validated-->
                <!-- <div class="mt-1">
                  <span
                    v-for="error in validate.password.$errors"
                    :key="error.$uid"
                    class="text-red-500"
                  >
                    {{ error.$message }}
                  </span>
                </div> -->
              </div>
            </div>

            <div class="pt-4 pb-5">
              <button
                @click="login"
                id="btn-signIn"
                type="summit"
                class="flex justify-center w-full text-white font-medium rounded-lg text-md px-5 py-2.5 text-center"
              >
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Main from "../components/Main.vue";

const router = useRouter();
let username = ref("");
let password = ref("");
const userInfo = ref();

async function login() {
  const data = await fetch("config.json");
  userInfo.value = await data.json();

  if (
    userInfo.value.username === username.value &&
    userInfo.value.password === password.value
  ) {
    localStorage.setItem('usr', window.btoa(username.value))
    localStorage.setItem('pw', window.btoa(password.value))
    router.push("/");
  } else {
    alert("invalid username or Password");
  }
}
</script>

<style scoped>
#bg-blue {
  background-color: rgb(209 213 219);
}

#btn-signIn {
  background-color: #2a5ba7;
}

#btn-signIn:hover {
  background-color: #265699;
}

#font-blue {
  color: #2a5ba7;
}
.alert {
  background-color: #f2dede;
  color: #a94442;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ebccd1;
  border-radius: 4px;
}
</style>
