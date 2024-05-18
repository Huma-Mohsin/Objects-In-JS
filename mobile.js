//objects are fundamental data structures, used to organize a data.
//objects are used to store collection of data having key and its value.
//objects provide flexiblity as well as versatility in a code.
//syntax:
//objects are declared:
// let obj={
// Declare and initialize the mobile object
var mobile = {
    name: "Apple iPhone 15 Pro Max",
    Technology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
    Launch: "2023, September 12",
    Status: "Available",
    body: {
        Dimensions: "159.9 x 76.7 x 8.3 mm (6.30 x 3.02 x 0.33 in)",
        Weight: "221 g (7.80 oz)",
        Build: "Glass front (Corning-made glass), glass back (Corning-made glass), titanium frame (grade 5)",
        SIM: ["Nano-SIM and eSIM - International, Dual eSIM with multiple numbers - USA ,Dual SIM (Nano-SIM, dual stand-by) - China"]
    },
    display: {
        Type: "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)",
        Size: "6.7 inches, 110.2 cm2 (~89.8% screen-to-body ratio)",
        Resolution: "1290 x 2796 pixels, 19.5:9 ratio (~460 ppi density)",
        Protection: "Ceramic Shield glass",
    },
    Misc: {
        Colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
        Models: ["A2849", "A3105", "A3106", "A3108", "iPhone16,2"],
    },
    sound: function () {
        return "Loudspeaker: Yes, with stereo speakers";
    },
    Features: {
        Sensors: ["Face ID", "accelerometer", "gyro", "proximity", "compass", "barometer",
            "Ultra Wideband 2 (UWB) support", "Emergency SOS via satellite (SMS sending/receiving)"]
    },
    Platform: {
        OS: ["iOS 17, upgradable to iOS 17.5"]
    },
};
// Calling the sound function
console.log(mobile.sound()); // Output: Loudspeaker: Yes, with stereo speakers
console.log(mobile); // For testing purpose, log all data.
// To access properties in an object individually.
// There are two ways to access properties of an object.
// 1. Access property by object name.key
console.log("Display:", mobile.display);
console.log("Sound:", mobile.sound()); // Calling a function in log.
console.log("Features:", mobile.Features);
// 2. Access property by key only, i.e., bracket notation
console.log("Miscellaneous:", mobile["Misc"]);
console.log("Platform:", mobile["Platform"]);
// To add something to an object
// Adding new property by dot notation
mobile.Main_camera = ["48 MP", "sensor-shift OIS-12 MP", "5x optical zoom"];
console.log(mobile.Main_camera);
console.log(mobile);
mobile.Memory_Internal = ["256GB 8GB RAM", "512GB 8GB RAM", "1TB 8GB RAM"];
console.log(mobile.Memory_Internal);
console.log(mobile);
// Adding another property using bracket notation
mobile["Front_Camera"] = ["12 MP", "SL 3D"];
console.log(mobile.Front_Camera);
console.log(mobile);
// To delete something
delete mobile.Status;
console.log(mobile);
// To check existence property in an object
if ('Main_camera' in mobile) {
    console.log("Main_camera property exists in mobile object");
}
else {
    console.log("Main_camera property does not exist in mobile object");
}
// To access properties in an object using a loop in JavaScript or TypeScript
for (var key in mobile) {
    if (Object.prototype.hasOwnProperty.call(mobile, key)) {
        console.log("For...In Loop: ".concat(key, ": ").concat(mobile[key]));
    }
}
//Author-Huma Mohsin
