const findDeviceById = (devices, targetId) => {
    for (const device of devices) {
        if (device.id === targetId) {
            return device;
        }
    }

    return null;
};

const updateDevice = (devices, targetId, updatedData) => {
    const targetDevice = findDeviceById(devices, targetId);
    if (targetDevice === null) {
        return false;
    }

    if (updatedData.name !== undefined) {
        targetDevice.name = updatedData.name;
    }

    if (updatedData.isActive !== undefined) {
        targetDevice.isActive = updatedData.isActive;
    }

    if (updatedData.powerWatts !== undefined) {
        targetDevice.powerWatts = updatedData.powerWatts;
    }

    return true;
};

const devices = [
    {
        id: "D01",
        name: "Điều hòa phòng khách",
        isActive: true,
        powerWatts: 1500
    },
    {
        id: "D02",
        name: "Đèn ngủ",
        isActive: true,
        powerWatts: 60
    }
];

updateDevice(devices, "D01", {
    isActive: false
});

updateDevice(devices, "D02", {
    powerWatts: 0
});

console.log("DANH SÁCH THIẾT BỊ SAU KHI CẬP NHẬT");

for (const device of devices) {
    console.log(
        device.id + " | " +
        device.name + " | " +
        "isActive: " + device.isActive + " | " +
        "powerWatts: " + device.powerWatts
    );
}

