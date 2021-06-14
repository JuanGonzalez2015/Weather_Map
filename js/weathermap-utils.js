const key = WEATHERMAP_TOKEN;
// if(key === WEATHERMAP_TOKEN) document.getElementById('temp').innerHTML = (WEATHERMAP_TOKEN);



//gets the weather properties based on location for 5 days very 3 hours, and diplays 40 objects on the console
// fetch provides the js  access to manipulate parts of the HTTP
function weatherMap( lat, lon ) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`)
        /// .then method returns a promise takes up to two arguments; callback functions for the success and
        // failure cases of the Promise
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log(data)
            //// first element you get which is the current forecast and the mornging for every other day
            let listOfFiveDays ={}
            data.list.forEach((d )=> {
                const date =new Date(d.dt_txt).getDate()
                listOfFiveDays[date] = listOfFiveDays[date] || {}
                listOfFiveDays[date].days = listOfFiveDays[date].days || []
                listOfFiveDays[date].days.push(d)
            } )
            console.log(listOfFiveDays)
            //returns an array of a given object's own enumerable property names,
            // iterated in the same order that a normal loop would
            Object.keys(listOfFiveDays).map((value,index)=> {
                drawWeather(listOfFiveDays[value].days[0], index, data.city)
            })

            // function skips 8 objects to get you to the next day,
            // but the weather for the the actual time so 2100 it will give you the next at 2100
            // for(let i =0; i<data.list.length;i+=8){
            //     drawWeather(data.list[i],i/8||0,data.city)
            // }
        })
        .catch(function(error) {
            console.log(error)
            // catch any errors
        })

}








