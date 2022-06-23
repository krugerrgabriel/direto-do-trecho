const returnMonthName = (month: String) => {
    var monthName = "";
  switch (month) {
    case "1":
    case "01":
      monthName = "Jan";
      break;
    case "2":
    case "02":
      monthName = "Fev";
      break;
    case "3":
    case "03":
      monthName = "Mar";
      break;
    case "4":
    case "04":
      monthName = "Abr";
      break;
    case "5":
    case "05":
      monthName = "Mai";
      break;
    case "6":
    case "06":
      monthName = "Jun";
      break;
    case "7":
    case "07":
      monthName = "Jul";
      break;
    case "8":
    case "08":
      monthName = "Ago";
      break;
    case "9":
    case "09":
      monthName = "Set";
      break;
    case "10":
    case "10":
      monthName = "Out";
      break;
    case "11":
    case "11":
      monthName = "Nov";
      break;
    case "12":
    case "12":
      monthName = "Dez";
      break;
    default:
      monthName = "NÃO DEFINIDO";
      break;
  }
  return monthName;
}

export const returnFormattedDate = (date: String) => {
    let dateArray = date.split('-');
    return dateArray[2] +' de '+ returnMonthName(dateArray[1]) +'. de '+ dateArray[0];
}