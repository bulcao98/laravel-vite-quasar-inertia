<template>
    <q-layout view="lHh lpR fFf">
        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-btn dense flat round icon="fa fa-bars" @click="toggleLeftDrawer" />

                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
                    </q-avatar>
                    {{ title }}
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <q-item>
                <q-item-section avatar>
                    <q-icon name="fa fa-home" />
                </q-item-section>
                <q-item-section>
                    <Link class="" href="/">Home</Link>
                </q-item-section>
            </q-item>

            <q-item>
                <q-item-section avatar>
                    <q-icon name="fa fa-wrench" />
                </q-item-section>
                <q-item-section>
                    <Link class="" href="/secondLink">Second Page</Link>
                </q-item-section>
            </q-item>
        </q-drawer>

        <q-page-container>
            <slot></slot>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { Link } from '@inertiajs/vue3'

const leftDrawerOpen = ref(false);


defineProps({ title: String })

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
