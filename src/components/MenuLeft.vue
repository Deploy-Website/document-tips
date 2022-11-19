<template>
  <template v-for="(link, index) in linksList" :key="index">
    <q-item clickable tag="li" :href="link.link" class="tw-flex tw-justify-between" :to="{name: 'springs' }">
      <q-item-section v-if="link.icon" avatar>
        <q-icon>
          <img :src="link.icon" />
        </q-icon>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ link.title }}</q-item-label>
      </q-item-section>
      <q-item-section class="items-end" @click="showMenuDown(link.id)">
        <q-icon :name="statusMenuDown(link.id)? 'expand_more' :'chevron_right'" color="primary" size="xs" />
      </q-item-section>
    </q-item>
    <div class="menu-dropdown" v-if="statusMenuDown(link.id)">
      <ul class="tw-block tw-w-full tw-pl-[72px]" v-for="(menu, index) in link.menuDown" :key="index">
        <li>{{menu.name}}</li>
      </ul>
    </div>
  </template>
</template>

<script setup>
import { defineComponent, ref } from "vue";
const linksList = [
  {
    id:1,
    title: "Spring",
    icon: "images/icon/spring.svg",
    menuDown: [
      {name: "Spring Boot"},
      {name: "Spring Data"},
    ]
  },
  {
    id:2,
    title: "Java",
    icon: "images/icon/java.svg",
    menuDown: [
      {name: "Java Core"},
      {name: "Spring Data"},
      {name: "Spring boot"},
    ]
  },
];
const isMenuDown = ref(false);
const menuDownActive = ref(1);
const showMenuDown = (id) => {
  menuDownActive.value = id;
};
const statusMenuDown = (id) => {
  return menuDownActive.value === id;
}
</script>
