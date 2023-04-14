

// function makeSaver(func) {
//    let result;
//    let called = false;
//    return function () {
//       if (!called) {
//          result = func();
//          called = true;
//       }
//       return result;
//    };
// }


// function myBind(func, context, defaultArgs) {
//    return function (...args) {
//       const mergedArgs = [];
//       let defaultArgsIndex = 0;

//       // проходимося по всіх переданих параметрах
//       for (let i = 0; i < args.length; i++) {
//          // якщо параметр не undefined, додаємо його в масив з аргументами
//          if (args[i] !== undefined) {
//             mergedArgs.push(args[i]);
//          } else {
//             // якщо параметр === undefined, беремо значення за замовчуванням з масиву defaultArgs
//             if (defaultArgs[defaultArgsIndex] !== undefined) {
//                mergedArgs.push(defaultArgs[defaultArgsIndex]);
//             }
//             defaultArgsIndex++;
//          }
//       }

//       // додаємо усі параметри, які не були undefined, з масиву defaultArgs, якщо вони є
//       if (defaultArgsIndex < defaultArgs.length) {
//          mergedArgs.push(...defaultArgs.slice(defaultArgsIndex));
//       }

//       // викликаємо функцію з об'єднаними параметрами та контекстом виконання
//       return func.apply(context, mergedArgs);
//    }
// }



// function checkResult(original, validator) {
//    function wrapper(...params) {
//       let result;
//       do {
//          result = original.apply(this, params);
//       } while (!validator(result));
//       return result;
//    }
//    return wrapper;
// }
// // RandomHigh - повертає довільне число в діапазоні від 0.5 до 1
// const RandomHigh = checkResult(
//    () => Math.random() * 0.5 + 0.5,
//    x => typeof x === 'number' && x >= 0.5 && x <= 1
// );

// // AlwaysSayYes - повертає true поки користувач не натисне OK
// const AlwaysSayYes = checkResult(
//    () => confirm("Do you agree?"),
//    x => x === true
// );

// // respectMe - відображає prompt поки користувач не введе текст
// const respectMe = checkResult(
//    () => prompt("Please enter some text"),
//    x => typeof x === 'string' && x.trim().length > 0
// );
// const random = RandomHigh(); // повинно повернути десяткове число в діапазоні від 0.5 до 1
// const agreed = AlwaysSayYes(); // повинно повернути true, якщо користувач натиснув OK
// const text = respectMe(); // повинно повернути текст, який користувач ввів в prompt
