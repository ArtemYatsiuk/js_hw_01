// На счету пользователя есть 35500 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой). При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.
// Напиши скрипт который: Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'. В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice. Проверяет сможет ли пользователь оплатить заказ: если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'. в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

let credits = 35500;
let pricePerDroid=3000;
let numberOfDroid= prompt('Сколько  дроидов хотите купить?')
let totalPrice= numberOfDroid*pricePerDroid
let remnantCredits= credits-totalPrice
if(!numberOfDroid){
   alert('Отменено пользователем!')
} else if(totalPrice<credits){
   alert(`Вы купили ${numberOfDroid} дроидов, на счету осталось ${remnantCredits} кредитов`)
}else {
   alert('Недостаточно средств на счету!')
}











