const button = document.querySelector("button");

button.addEventListener("click", () => {
  // Push Notifications are built arount the Notification Object.
  // This obj allows you to do everything you need to do with push notification.
  // In order to send push notifications, u need to request permission from the user.
  // U can't just send notifications without them allowing you explicit permission to do so
  Notification.requestPermission().then((perm) => {
    // alert(perm);
    if (perm === "granted") {
      const notification = new Notification("Example Notification", {
        // The body allows you to add more info to the notification
        body: "This is more text",

        // Data is a custom data you add to the notification that you can use later
        data: { Supp: "mate" },

        // Icon allows us to set a logo or icon
        icon: "Icon name",

        // Tag allows us to give it a unique id
        tag: "Welcome Message",
      });

      // Anytime we access our notification, we can get the data property to access that notification
      notification.addEventListener("close", (e) => {
        console.log(e);
      });
    }
  });
});

// Whenever you try to go to the new tab, a notification will pop up with the text which is written below
let notification;

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    notification = new Notification("COME BACK USER!!", {
      body: "COME BACK!!",
      tag: "USER!!!",
    });
  } else {
    notification.close(); // This will close the notification
  }
});

// If u wanna get rid of the notification, just say & define the notification below
// If we go to the new tab, the notfication will pop up.
// But if we go back to the original page, the notification will automatically close itself
let notification;

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    notification = new Notification("COME BACK USER!!", {
      body: "COME BACK!!",
      tag: "USER!!!",
    });
  } else {
    notification.close(); // This will close the notification
  }
});

// Let's set an interval that constantly updates the notification
let notification;
let interval;

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    // If u wanna set the actual no of seconds
    const leaveDate = new Date();

    interval = setInterval(() => {
      notification = new Notification("COME BACK USER!!", {
        body: `You have been gone for ${
          Math.round(new Date() - leaveDate) / 1000
        } seconds`,
        tag: "USER!!!",
      });
    }, 100);
  } else {
    if (interval) clearInterval(interval);
    if (notification) notification.close();
  }
});
