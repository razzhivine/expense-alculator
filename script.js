let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    obligatoryExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
    obligatoryExpensesHowMuch = prompt("Во сколько обойдется", ""),
    appData = {
        budget : money,
        timeData : time,
        expenses: {
            obligatoryExpenses : obligatoryExpensesHowMuch
        },
        optionalExpenses : {},
        income : [],
        savings : false
    },
    budgetForOneDay = (money - appData.expenses.obligatoryExpenses) / 30;

alert(budgetForOneDay);

console.log("Сколько типов данных существует в JS - 5");
console.log("Как вывести информацию в консоль - console.log('');");
console.log("Какая функция операторов || и && - логическое 'И' и логическое 'ИЛИ'");

