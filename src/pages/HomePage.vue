<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import HelloWorld from "@/components/HelloWorld.vue";
import { LocalNotifications } from "@capacitor/local-notifications";

const counterStore = useCounterStore();

// log permission status
(async () => console.log(await LocalNotifications.checkPermissions()))();

async function sendTestNotification(
  msg = "Hello I'm notification from vue3 + capacitor"
) {
  const permissionStatus = await LocalNotifications.checkPermissions();
  if (permissionStatus.display !== "granted") {
    const permission = await LocalNotifications.requestPermissions();
    console.log(permission);
  }
  LocalNotifications.schedule({
    notifications: [
      {
        id: 1,
        title: "Test notification",
        body: msg,
      },
    ],
  });
}
</script>

<template>
  <HelloWorld msg="Hello Capacitor Android 📱" />
  <div class="p10">
    <button
      type="button"
      class="btn ma block"
      @click="counterStore.increment()"
    >
      count is {{ counterStore.count }}
    </button>

    <button
      type="button"
      class="btn mt-4 ma block"
      @click="sendTestNotification()"
    >
      Call for test Notification
    </button>
  </div>
</template>
