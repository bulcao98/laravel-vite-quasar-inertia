<template>
    <MainLayout>
        <div class="q-px-md">
            <h3>Second Page</h3>
            <p>This is the second Page!!!</p>
        </div>

        <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card bg-secondary text-white">
                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                </q-card-section>

                <q-card-section>
                    {{ lorem }}
                </q-card-section>

                <q-separator dark />

                <q-card-actions>
                    <q-btn flat>Action 1</q-btn>
                    <q-btn flat>Action 2</q-btn>
                </q-card-actions>
            </q-card>

            <q-card class="my-card">
                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                </q-card-section>

                <q-separator />

                <q-card-actions vertical>
                    <q-btn flat>Action 1</q-btn>
                    <q-btn flat>Action 2</q-btn>
                </q-card-actions>
            </q-card>

            <q-card class="my-card bg-purple text-white">
                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                </q-card-section>

                <q-card-actions>
                    <q-btn flat>Action 1</q-btn>
                    <q-btn flat>Action 2</q-btn>
                </q-card-actions>
            </q-card>

            <q-card flat bordered class="my-card" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">
                <q-card-section>
                    <div class="row items-center no-wrap">
                        <div class="col">
                            <div class="text-h6">Our Planet</div>
                            <div class="text-subtitle2">by John Doe</div>
                        </div>

                        <div class="col-auto">
                            <q-btn color="grey-7" round flat icon="fa fa-ellipsis-v">
                                <q-menu cover auto-close>
                                    <q-list>
                                        <q-item clickable>
                                            <q-item-section>Remove Card</q-item-section>
                                        </q-item>
                                        <q-item clickable>
                                            <q-item-section>Send Feedback</q-item-section>
                                        </q-item>
                                        <q-item clickable>
                                            <q-item-section>Share</q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-menu>
                            </q-btn>
                        </div>
                    </div>
                </q-card-section>

                <q-card-section>
                    {{ lorem }}
                </q-card-section>

                <q-separator />

                <q-card-actions>
                    <q-btn flat>Action 1</q-btn>
                    <q-btn flat>Action 2</q-btn>
                </q-card-actions>
            </q-card>
        </div>
    </MainLayout>
</template>

<script setup>
import { ref } from 'vue';
import MainLayout from './Layouts/MainLayout.vue';

const lorem = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
</script>
