function indonesianDate(my_date) {

    // return my_date

    // return my_date[2] + my_date[1] + my_date[0];
    if(!my_date) {
        return false
    }

    let str = my_date;
    let date = moment(str);

    return date.format('lll')

}


export default indonesianDate;