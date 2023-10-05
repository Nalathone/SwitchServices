<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>PRO_ID</th>
          <th>NAME</th>
          <th>SHORT_NAME</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in firstColumn" :key="index" class="bg-white border-b">
            <td class="px-6 py-4">{{ index }}</td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ item }}
            </th>
            <td class="px-6 py-4">{{ getFullName(index) }}</td>
            <td class="px-6 py-4">{{ getShortName(index) }}</td>
          </tr>
          <tr v-for="(item, index) in secondColumn" :key="index + firstColumn.length" class="bg-white border-b">
            <td class="px-6 py-4">{{ index + firstColumn.length }}</td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ item }}
            </th>
            <td class="px-6 py-4">{{ getFullName(index + firstColumn.length) }}</td>
            <td class="px-6 py-4">{{ getShortName(index + firstColumn.length) }}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script setup>
// import postInfo from '../components/postInfo.vue'

import { computed, onMounted} from "vue";

import { useProvinceStore } from "@/stores/provinceInfo";
const provinceStore = useProvinceStore();
const getInfos = computed(() => provinceStore.getProvince);

// Split the original array into two separate arrays
const firstColumn = computed(() => getInfos.value.slice(0, 4));
const secondColumn = computed(() => getInfos.value.slice(4));

// Get the full name and short name for a given index


onMounted(async () => {
  await provinceStore.getProvinceInfo()
  .then((response) => {
    //console.log(response);
    console.log(response.edl);
  })
  .catch((error) => {
    console.log(error);
  })
})

</script>

<style scoped>
#font-blue {
  color: #2a5ba7;
}

.move {
  align-items: center;
  margin-left: 50px;

}

.center {
  text-align: center;
  font-size: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

button {
  background-color: #1b45fd;
  /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}

button:hover {
  background-color: #3e8e41;
  /* Dark green */
}

table {

  width: 100%;
}

th,
td {

  padding: 8px;
  text-align: left}

th {
  background-color: #eee;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

.loading {
  font-style: italic;
  color: gray;
}

.error {
  font-weight: bold;
  color: red;
}
</style>
