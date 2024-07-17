class IPhone4 {
    constructor(id, ASIN, display, camera, bluetooth, color, dimensions, resolution, bluetoothVersion) {
        // Initialize properties
        this.id = id;
        this.ASIN = ASIN;
        this.display = display;
        this.camera = camera;
        this.bluetooth = bluetooth;
        this.color = color;
        this.dimensions = dimensions;
        this.resolution = resolution;
        this.bluetoothVersion = bluetoothVersion;
    }

    // Methods
    dial() {
        return "tring.. tring...";
    }

    sendMessage() {
        return "Sending message...";
    }

    cameraClick() {
        return "Camera clicked";
    }

    connectBluetooth() {
        return "Bluetooth connected successfully...";
    }
}



let i4 = new IPhone4(
    1,
    "B09X67JBQV",
    7.8,
    "IOS",
    "128mb",
    "Gray",
    "90mm",
    "2.0 MP",
    "5.1"
);

// Accessing properties
console.log(i4.id); // Outputs: 1
console.log(i4.ASIN); // Outputs: "B09X67JBQV"
console.log(i4.display); // Outputs: 7.8
console.log(i4.camera); // Outputs: "IOS"
console.log(i4.bluetooth); // Outputs: "128mb"
console.log(i4.color); // Outputs: "Gray"
console.log(i4.dimensions); // Outputs: "90mm"
console.log(i4.resolution); // Outputs: "2.0 MP"
console.log(i4.bluetoothVersion); // Outputs: "5.1"

// Invoking methods
console.log(i4.dial()); // Outputs: "tring.. tring..."
console.log(i4.sendMessage()); // Outputs: "Sending message..."
console.log(i4.cameraClick()); // Outputs: "Camera clicked"
console.log(i4.connectBluetooth()); // Outputs: "Bluetooth connected successfully..."
