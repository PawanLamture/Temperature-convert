function updateTime() {
    const time = new Date();
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

function updateNetworkStatus() {
    const networkStatus = navigator.onLine ? 'Online' : 'Offline';
    document.getElementById('network-status').textContent = networkStatus;
}

function updateBatteryStatus() {
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            const batteryLevel = (battery.level * 100).toFixed(0) + '%';
            const batteryStatus = battery.level < 0.2 ? 'Low' : 'Good';
            document.getElementById('battery-status').textContent = `Battery: ${batteryLevel} (${batteryStatus})`;
        });
    } else {
        document.getElementById('battery-status').textContent = 'Battery: Unknown';
    }
}

setInterval(function() {
    updateTime();
    updateNetworkStatus();
    updateBatteryStatus();
}, 1000);

document.getElementById("convert-btn").addEventListener("click", function() {
    const inputTemperature = parseFloat(document.getElementById("input-temperature").value);
    const unit = document.getElementById("unit-select").value;
    let resultText = "Please enter a valid temperature.";

    if (!isNaN(inputTemperature)) {
        if (unit === "Celsius") {
            const fahrenheit = (inputTemperature * 9/5) + 32;
            resultText = `${inputTemperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
        } else if (unit === "Fahrenheit") {
            const celsius = (inputTemperature - 32) * 5/9;
            resultText = `${inputTemperature}°F is equal to ${celsius.toFixed(2)}°C`;
        }
    }

    document.getElementById("result").innerText = resultText;
});
