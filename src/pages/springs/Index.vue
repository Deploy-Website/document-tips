<template>
  <q-page class="tw-p-5">
    <h1 class="tw-text-3xl tw-text-center">Spring Document Tips</h1>
    <div class="q-pa-md">
      <q-table :rows="rows" :columns="columns" row-key="name" class="font-size-16">
        <template #body="props">
          <q-tr>
            <q-td key="stt">{{ props.row.stt }}</q-td>

            <q-td key="Description"
              ><router-link :to="{ name: 'spring-h2database' }">{{
                props.row.title
              }}</router-link></q-td
            >
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>
<script setup>
const rows = [
  {
    stt: 1,
    title: "H2 database trong Spring Boot",
    link: "spring-h2database",
  },
  {
    stt: 1,
    title: "sda Frozen Yogurt",
  },
  {
    stt: 1,
    title: "Frozen Yogurt",
  },
  {
    stt: 1,
    title: "Frozen Yogurt",
  },
  {
    stt: 1,
    title: "Frozen Yogurt",
  },
  {
    stt: 1,
    title: "sda Frozen Yogurt",
  },
  {
    stt: 1,
    title: "Frozen Yogurt",
  },
  {
    stt: 1,
    title: "Frozen Yogurt",
  },
];

const columns = [
  {
    name: "stt",
    required: true,
    label: "#",
    align: "left",
    field: (row) => row.stt,
    sortable: true,
  },
  {
    name: "Description",
    required: true,
    label: "Description",
    align: "left",
    field: (row) => row.title,
    sortable: true,
  },
];
</script>
