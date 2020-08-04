function main() {
    let input = prompt("task-6\n\Введіть число");
    const numbers = [];    
  
    while (input !== null) {
      if (isNaN(input) || (input === '')) {
        alert("Було написано не число, спробуйте ще раз");
      } else {
        numbers.push(input);
      }
      input = prompt("Введіть число");
    }

    let total = 0;
    if (numbers.length > 0) {
        for (let i = 0; i < numbers.length; i++) {
            total += Number(numbers[i]);
        };

        console.log(`Загальна сума чисел дорівнює ${total}`);
    } else {
        console.log("Масив чисел пустий.");
    };    
  }
  
main();