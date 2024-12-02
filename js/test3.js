class Time
{
    constructor(hours,minutes,seconds)
    {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }
    addHours(hour)
    {
        this.hours+=hour
        if(this.hours>=24)
        {
            this.hours-=24
        }
    }
    addMinutes(minute)
    {
        this.minutes+=minute
        if(this.minutes>=60)
        {
            this.minutes-=60
            this.addHours(1)
        }
    }
    addSeconds(second)
    {
        this.seconds+=second
        if(this.seconds>=60)
        {
            this.seconds-=60
            this.addMinutes(1)
        }
    }
    showTime()
    {
        alert(`${this.hours}:${this.minutes}:${this.seconds}`)
    }
}
let time = new Time(23,59,30)
time.showTime()
time.addSeconds(31)
time.showTime()