<template>
    <MainLayout>
        <div class="q-px-md">
            <h3>Welcome</h3>
            <p>Hello {{ name }}, welcome to your first Inertia app!</p>
        </div>
        <div class="q-pa-md">
            <q-toggle v-model="value" />

            <q-toggle v-model="value" color="green" />

            <q-toggle v-model="value" color="yellow" />

            <q-toggle v-model="value" color="red" />
        </div>

        <div class="q-pa-md">
            <q-badge color="secondary">
                Model: {{ standard }} (0 to 50)
            </q-badge>

            <q-slider v-model="standard" :min="0" :max="50" />
            <q-slider v-model="standard" :min="0" :max="50" color="green" />
        </div>

        <div class="q-pa-md flex flex-center">
            <q-knob v-model="standard" size="50px" color="orange" class="q-ma-md" />

            <q-knob v-model="standard" size="90px" :thickness="0.2" color="purple-3" center-color="purple"
                track-color="purple-1" class="q-ma-md" />

            <q-knob v-model="standard" size="45px" :thickness="1" color="grey-8" track-color="light-blue" class="q-ma-md" />

            <q-knob v-model="standard" size="50px" :thickness="0.22" color="orange" track-color="grey-3" class="q-ma-md" />

            <q-knob v-model="standard" size="75px" :thickness="0.6" color="orange" center-color="orange-10" class="q-ma-md" />

            <q-knob v-model="standard" size="40px" :thickness="0.4" color="orange" track-color="orange-3" class="q-ma-md" />
        </div>

        <div class="q-pa-md">
            <q-linear-progress indeterminate />

            <q-linear-progress indeterminate color="warning" class="q-mt-sm" />

            <q-linear-progress indeterminate color="secondary" class="q-mt-sm" />

            <q-linear-progress indeterminate rounded color="accent" class="q-mt-sm" />

            <q-linear-progress indeterminate rounded track-color="orange" color="purple" class="q-mt-sm" />

            <q-linear-progress indeterminate rounded color="negative" class="q-mt-sm" />
        </div>

        <div class="q-pa-md q-gutter-md">
            <div>
                <q-chip icon="fa fa-calendar">Add to calendar</q-chip>
                <q-chip icon="fa fa-bookmark">Bookmark</q-chip>
                <q-chip icon="fa fa-clock" label="Set alarm" />
                <q-chip class="glossy" icon="fa fa-directions">Get directions</q-chip>
            </div>
            <div>
                <q-chip color="primary" text-color="white" icon="fa fa-calendar">
                    Add to calendar
                </q-chip>
                <q-chip color="teal" text-color="white" icon="fa fa-bookmark">
                    Bookmark
                </q-chip>
                <q-chip class="glossy" color="orange" text-color="white" icon-right="fa fa-star">
                    Star
                </q-chip>
                <q-chip color="red" text-color="white" icon="fa fa-clock" label="Set alarm" />
                <q-chip color="deep-orange" text-color="white" icon="fa fa-directions">
                    Get directions
                </q-chip>
                <q-chip>
                    <q-avatar icon="fa fa-bookmark" color="red" text-color="white" />
                    Bookmark
                </q-chip>
                <q-chip>
                    <q-avatar color="red" text-color="white">50</q-avatar>
                    Emails
                </q-chip>
                <q-chip>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                    </q-avatar>
                    John
                </q-chip>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { ref } from 'vue';
import MainLayout from './Layouts/MainLayout.vue';

const value = ref(true);
const standard = ref(10);

defineProps({ name: String })

</script>
