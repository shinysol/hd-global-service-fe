<script lang="ts">
import { Form, Field, FormContext } from "vee-validate";
import { useAxios } from "../controllers/api/useAxios";
import { logIn } from "../states/localStorage/userLoginStore";
const axios = useAxios();
export default {
  components: {
    Form,
    Field,
  },
  methods: {
    async onSubmit(values: FormContext["values"]) {
      const result = await axios.post("/login", values);
      if (result?.data?.success) {
        logIn(result?.data?.json);
      }
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <div class="w-full h-full flex justify-center items-center">
    <Form @submit="onSubmit">
      <div class="w-80 bg-red-100 flex flex-col gap-5 p-2">
        <div class="flex flex-col gap-1 text-2xl">Log in</div>
        <div class="flex flex-col gap-1">
          <div class="text-sm">ID (E-mail)</div>
          <Field name="id" type="text" />
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-sm">Password</div>
          <Field name="password" type="password" />
        </div>
        <div class="flex justify-between text-xs">
          <div class="flex gap-1">
            <input name="chb" type="checkbox" id="chb_login_stay_signed" />
            <label for="chb_login_stay_signed">Stay signed in</label>
          </div>
          <div>Forgot ID ? / Forgot Password ?</div>
        </div>
        <div class="flex flex-col">
          <input
            name="submit"
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
    </Form>
  </div>
</template>
