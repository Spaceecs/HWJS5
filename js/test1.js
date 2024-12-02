class car
{
    constructor(creator,model,age,middleSpeed)
    {
        this.creator = creator
        this.model = model
        this.age = age
        this.middleSpeed = middleSpeed
    }
    show()
    {
        alert(`${this.creator}: ${this.model}: ${this.age}: ${this.middleSpeed}`)
    }
    calculateTime(distance)
    {
        let rawTime = distance/this.middleSpeed
        let fullPeriods = Math.floor(rawTime/4)
        let totalTime = rawTime+fullPeriods
        let hours = Math.floor(totalTime)
        let minutes = Math.round((totalTime-hours)*60)
        return `${hours}h ${minutes}m`
    }

}
let car1 = new car("Toyota","supra",2006,120)
car1.show()
let result = car1.calculateTime(300)
alert(result)