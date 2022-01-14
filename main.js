// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}
const addWheels = (chassisObject) => {
    chassisObject.wheels = 4

    return chassisObject
}
const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"

    return chassisObject
}
const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"

    return chassisObject
}
const addBody = (chassisObject) => {
    // Use dot notation to add a new property
    chassisObject.body = "Fever"

    // Return the chassis that now has a body property on it
    return chassisObject
}
const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two Weel Drive"

    return chassisObject
}


let chassis = createChassis()
console.log(chassis)

let chassisWithBody = addBody(chassis)
console.log(chassisWithBody)
> { body: "Fever" }

let chassisWithWheels = addWheels(chassisWithBody)
console.log(chassisWithWheels)

let chassisWithEngine = addEngine(chassisWithWheels)
console.log(chassisWithEngine)

let chassisWithSteeringWheel = addSteeringWheel(chassisWithEngine)
console.log(chassisWithSteeringWheel)


let chassisWithDriveTrain = addDriveTrain(chassisWithSteeringWheel)
console.log(chassisWithDriveTrain)