<template>
    <H1>Welcome</H1>
    <p>Hello {{ name }}, welcome to your first Inertia app!</p>
</template>

<script>
import Layout from '../Layouts/MainLayout';

export default {
  // Using a render function...
  layout: (h, page) => h(Layout, [page])
}
</script>

<script>
export default {
    props: {
        name: String,
    },
    data() {
        return {};
    },
};
</script>
