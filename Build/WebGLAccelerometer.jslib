// Request permissions for iOS 13+
function requestMotionPermission() {
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          startAccelerometer();
        } else {
          console.error('Accelerometer permission denied.');
        }
      })
      .catch(console.error);
  } else {
    // Permissions not needed or not supported by the browser, attempt to start directly
    startAccelerometer();
  }
}

function startAccelerometer() {
  window.addEventListener('devicemotion', (event) => {
    const x = event.accelerationIncludingGravity.x;
    const y = event.accelerationIncludingGravity.y;
    const z = event.accelerationIncludingGravity.z;

    // Replace UNITY_FUNCTION_NAME_HERE with your Unity function that will receive the accelerometer data
    // Example: Module.ccall('ReceiveAccelerometerData', null, ['number', 'number', 'number'], [x, y, z]);
  });

  // For browsers/platforms that don't auto-prompt for motion sensor permissions
  if (typeof DeviceMotionEvent.requestPermission !== 'function') {
    console.log("No need for permissions, or permissions can't be requested. Listening for accelerometer data.");
  }
}

// Call this function to initiate the accelerometer data flow
requestMotionPermission();
