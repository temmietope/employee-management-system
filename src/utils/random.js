export const salaryRand=()=>{
    const salary = ["3,200", "5,000", "8,000", "7,500", "4,000", "2,000", "5,500", "3,800", "1,000", "4,000"];
    return salary[Math.floor(Math.random() * 9)]
  }
export const jobtitleRand=()=>{
    const jobtitle=["Software Engineer", "Project Manager", "Support Manager", "Dev Ops"];
    return jobtitle[Math.floor(Math.random() * 3)]
  }
export const statusRand=()=>{
    const status=["test period", "worker"]
    return status[Math.floor(Math.random() * 2)]
  }
export const durationRand=()=>{
    const duration=["1 year", "2 years", "1.5 years", "7 months"]
    return duration[Math.floor(Math.random() * 3)]
  }
export const timeRand=()=>{
    const time=["full-time", "part-time"]
    return time[Math.floor(Math.random() * 2)]
  }

