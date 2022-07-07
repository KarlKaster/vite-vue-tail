<script lang="ts" setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { reactive } from 'vue';
import * as yup from 'yup';

const state = reactive({
    passwordRules: yup.string().required().min(8),
});
</script>

<template>
    <div>
        Form validation with vee-validate and yup
        <Form>
            <div>
                <label for="password">Password</label>
            </div>
            <Field
                name="password"
                type="password"
                placeholder="Enter password..."
                class="border"
                :rules="state.passwordRules"
            />
            <div>
                <ErrorMessage name="password" />
            </div>
            <button class="btn btn-square loading"></button>
        </Form>
    </div>
</template>
