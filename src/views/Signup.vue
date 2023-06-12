<script setup lang="ts">
import { useForm, useField } from "vee-validate";
const { handleSubmit, errors } = useForm();
const { value: firstName } = useField("firstName");
const { value: lastName } = useField("lastName");
const { value: id } = useField("id");
const { value: password } = useField("password");
const onSubmit = handleSubmit((values) => {
  // TODO 로그인 API 연결
  console.log(values);
});
console.log(errors);
</script>
<template>
  <div class="w-full h-full flex justify-center items-center">
    <form @submit.prevent="onSubmit">
      <div class="w-80 bg-red-100 flex flex-col gap-5 p-2">
        <div class="flex flex-col gap-1 text-2xl">Sign up</div>
        <div class="flex gap-1">
          <div class="flex flex-col gap-1">
            <div class="text-sm">First name</div>
            <input type="text" v-model="firstName" />
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-sm">Last name</div>
            <input type="password" v-model="lastName" />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-sm">ID (E-mail)</div>
          <input type="text" v-model="id" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-sm">Password</div>
          <input
            type="password"
            v-model="password"
            v-validate="'required|min:8'"
          />
        </div>
        <div class="flex flex-col text-xs">
          <!-- ^(?=.*\d)(?=.*[A-Z]).{8,}$ -->
          <div>Your password must include at least</div>
          <div>8 Characters</div>
          <div>1 Number(0-9)</div>
          <div>1 Capital Letter(A-Z)</div>
        </div>
        <div class="flex justify-between text-xs">
          <div>Stay signed in</div>
          <div>Forgot ID ? / Forgot Password ?</div>
        </div>
        <div class="flex flex-col">
          <input
            type="submit"
            class="bg-blue-800 text-white p-2"
            value="Log in"
          />
        </div>
        <div class="flex justify-between text-xs">
          <div>Don't have an account?</div>
          <a href="/signup">Sign up</a>
        </div>
      </div>
    </form>
  </div>
</template>
