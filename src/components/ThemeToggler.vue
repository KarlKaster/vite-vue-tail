<script setup lang="ts">
import { useThemeStore } from '../store/theme';

const themeStore = useThemeStore();

function toggleTheme() {
    themeStore.toggleTheme();
}

// debugging actions
themeStore.$onAction(
    ({
        name, // name of the action
        args, // array of parameters passed to the action
        after, // hook after the action returns or resolves
        onError, // hook if the action throws or rejects
    }) => {
        // a shared variable for this specific action call
        const startTime = Date.now();
        // this will trigger before an action on `store` is executed
        console.log(`Start "${name}" with params [${args.join(', ')}].`);

        // this will trigger if the action succeeds and after it has fully run.
        // it waits for any returned promised
        after(() => {
            console.log(
                `Finished "${name}" after ${
                    Date.now() - startTime
                }ms.\nResult: ${themeStore.getTheme}.`
            );
        });

        // this will trigger if the action throws or returns a promise that rejects
        onError((error) => {
            console.warn(
                `Failed "${name}" after ${
                    Date.now() - startTime
                }ms.\nError: ${error}.`
            );
        });
    }
);
</script>

<template>
    <div>
        <button
            class="p-2 text-red-400 dark:text-cyan-600 rounded-full border"
            @click="toggleTheme"
        >
            Theme Toggle
        </button>
    </div>
</template>
