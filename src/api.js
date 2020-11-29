const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
    const month = new Date().getMonth() +1;
    if (month < 10) {
        return `0${month}`;
    }else {
        return month;
    }
};

getCurrentMonth();

const getCurrrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`;
    }else {
        return day;
    }
}

getCurrrentDay();

//Current year/month/day
const currentYear = new Date().getFullYear();
 const currentMonth = getCurrentMonth();
 const currentDay = getCurrrentDay();
 const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
 const lastYear = `${currentYear -1}-${currentMonth}-${currentDay}`;
 const nextYear = `${currentYear +1}-${currentMonth}-${currentDay}`;
 console.log(currentDate);
 console.log(lastYear);
 console.log(nextYear);

 //url for most popular games.
 const popular_games = `games?dates=${lastYear},${nextYear}&ordering=rating&page_size=10`;

export  const popularGamesURL = () => `${base_url}${popular_games}`;

 console.log(popularGamesURL());