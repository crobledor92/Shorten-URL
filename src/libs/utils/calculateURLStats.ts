import { IUrlDocument } from "../types";

type stats = {
    monthlyAverage: number,
    weeklyAverage: number,
    daylyAverage: number
}

export const calculateURLStats = (urlData: IUrlDocument): stats => {
    
    const startDate = new Date(urlData.createdAt);
    const currentDate = new Date();

    const msPerDay = 24 * 60 * 60 * 1000

    const startTimestamp = startDate.getTime()
    const currentTimestamp = currentDate.getTime()

    const totalDays = (currentTimestamp - startTimestamp) / msPerDay
    const totalWeeks = totalDays / 7
    const totalMonths = totalDays / 30

    const totalVisits = urlData.visits.length
  
    const monthlyAverage = totalVisits === 0 ? 0 : totalMonths < 1 ? totalVisits : Number((totalVisits / totalMonths).toFixed(1))
    const weeklyAverage = totalVisits === 0 ? 0 : totalWeeks < 1 ? totalVisits : Number((totalVisits / totalWeeks).toFixed(1))
    const daylyAverage = totalVisits === 0 ? 0 : totalDays < 1 ? totalVisits : Number((totalVisits / totalDays).toFixed(1))

    return {
        monthlyAverage,
        weeklyAverage,
        daylyAverage
    }
}