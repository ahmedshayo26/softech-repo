class laptop {
    constructor(HDD, RAM, CPUSpeed, batteryLife, screenSize, Manufacturer, price, OS, serialNumber) {
        this.HDD = HDD,
        this.RAM = RAM,
        this.CPU = CPUSpeed,
        this.battery = batteryLife,
        this.screenSize = screenSize,
        this.Manufacturer = Manufacturer,
        this.price = price,
        this.system = OS,
        this.sNumber = serialNumber
    }

    printString(){
        return `Laptop Properties : \n HDD Size : ${this.HDD} \n RAM : ${this.RAM} \n CPU : ${this.CPU} \n Battery Life : ${this.battery} \n Screen Size : ${this.screenSize} \n Manufacturer : ${this.Manufacturer} \n Price : ${this.price} \n Operating System : ${this.system} \n Serial Number : ${this.sNumber}`
    }
    checkRam() {
        if (typeof this.RAM == "number") {
            return true;
        } else {
            return false;
        }
    }
}



module.exports = laptop