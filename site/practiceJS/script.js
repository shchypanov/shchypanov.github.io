// task 1

task1();

function task1() {

  let input = document.querySelectorAll('#task1 input[name=inputNumber]');
  let btn = document.querySelector('#task1 button');
  let result = document.querySelector('#task1 input[name=result]');


  btn.addEventListener('click', resultBtn);

  function resultBtn() {
    let inputSum = 0;

    for (let i = 0; i < input.length; i++) {

      inputSum += +input[i].value;
    }
    result.value = inputSum;
  }

}

// task 2

task2();

function task2() {

  let num = document.querySelectorAll('#task2 .num');
  let btn = document.querySelector('#task2 button');
  let result = document.querySelector('#task2 .result');


  btn.addEventListener('click', resBtn);

  function resBtn() {
    let sum = 0;


    for (let i = 0; i < num.length; i++) {
      sum += +num[i].value;
    }

    result.innerHTML = sum;
  }

}

// task 3

task3();

function task3() {

  let input = document.querySelector('#task3 .num');

  input.addEventListener('blur', count);

  function count() {
    let sum = 0;
    let str = input.value;
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
      sum += +arr[i];
    }

    let result = document.querySelector('#task3 .result span');
    result.innerHTML = sum;

  }

}

// task 4

task4();

function task4() {

  let input = document.querySelector('#task4 .num');

  input.addEventListener('blur', count);

  function count() {
    let sum = 0;
    let str = input.value;
    let arr = str.split(',');
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i]);
    }


    let average = sum / arr.length;

    let result = document.querySelector('#task4 .result span');
    result.innerHTML = average;

  }

}

// task 5

task5();

function task5() {

  let input = document.querySelector('#task5 input[name=fullName]');
  let name = document.querySelectorAll('#task5 input[name=name]');

  input.addEventListener('blur', splitting);

  function splitting() {

    let arr = input.value.split(' ');

    for (let i = 0, j = 0; i < arr.length, j < name.length; i++, j++) {
      name[j].value = arr[i];
    }

  }

}

// task 6

task6();

function task6() {

  let input = document.querySelector('#task6 input[name=fullName]');

  input.addEventListener('blur', capitalLetter);

  // берет строку, разбивает слова на массивы, делает первую букву слов заглавной, возвразает обратно строку
  function firstBigLetter(str) {
    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }
    str = arr.join(' ');
    return str;
  }

  // строка в инпуте выполняет предыдущую функцию - делает первые буквы заглавными
  function capitalLetter() {
    input.value = firstBigLetter(input.value);
  }
}


// task 7

task7();

function task7() {

  let input = document.querySelector('#task7 input[name=text]');

  input.addEventListener('blur', countLetter);

  function countLetter() {
    let num = 0;
    let arr = input.value.split(' ');
    for (let i = 0; i < arr.length; i++) {

      num++

    }

    let result = document.querySelector('#task7 .result span');
    result.innerHTML = num;

  }

}


// task 8

task8();

function task8() {

  let input = document.querySelector('#task8 input[name=symbols]');

  input.addEventListener('blur', quantitySymbols);

  function quantitySymbols() {
    let arr = input.value.split(' ');
    let max = 0;
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
      let num = 0;

      arr2 = arr[i].split('');
      for (let j = 0; j < arr2.length; j++) {
        num++;
      }
      if (num > max) {
        max = num;
      }
    }

    let result = document.querySelector('#task8 .result span');
    result.innerHTML = max;
  }


}

// task 9

task9();

function task9() {

  let input = document.querySelector('#task9 input[name=data]');

  input.addEventListener('blur', changeData);

  function reverseData(data, arr2 = []) {

    let arr = data.split('.');
    arr2 = arr.reverse();

    data = arr2.join('-');
    return data;

  }

  function changeData() {
    input.value = reverseData(input.value);
  }

}

// task 10

task10();

function task10() {

  let input = document.querySelector('#task10 input[name=data]');
  let btn = document.querySelector('#task10 button');
  let result = document.querySelector('#task10 .result span');

  btn.addEventListener('click', countAge);

  function countAge() {
    let year = input.value;
    let date = new Date();
    let yearNow = date.getFullYear();
    result.innerHTML = yearNow - year;

  }
}

// task 11

task11();

function task11() {

  let input = document.querySelector('#task11 input[name=date]');
  let result = document.querySelector('#task11 .result span');

  input.addEventListener('blur', dayOfTheWeek);

  function dayOfTheWeek() {
    let week = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
    ];

    let arr = input.value.split('.');
    let reverseArr = arr.reverse();
    let strDate = reverseArr.join(',');
    let date = new Date(strDate);
    let day = date.getDay();

    result.innerHTML = week[day];

  }
}

// task 12

task12();

function task12() {

  let input = document.querySelector('#task12 input[name=mirror]');
  let result = document.querySelector('#task12 .result span');
  let btn = document.querySelector('#task12 button');

  btn.addEventListener('click', mirrorWord);

  function mirrorWord() {

    let arr = input.value.split('');
    let arr2 = input.value.split('').reverse();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr2[i]) {
        result.innerHTML = 'НЕТ';
      }
      else {
        result.innerHTML = 'ДА';
      }
    }

  }

}

// task 13

task13();

function task13() {

  let input = document.querySelector('#task13 input[name=number]');
  let result = document.querySelector('#task13 .result span');

  input.addEventListener('blur', hasThree);

  function hasThree() {
    let arr = input.value.split('');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '3') {
        return result.innerHTML = 'Содержит';

      }
    }

    return result.innerHTML = 'Не содержит';
  }
}

// task 14

task14();

function task14() {

  let paragraph = document.querySelectorAll('#task14 p');
  let btn = document.querySelector('#task14 button');

  btn.addEventListener('click', pNumber);

  function pNumber() {
    for (let i = 0; i < paragraph.length; i++) {

      paragraph[i].innerHTML = paragraph[i].innerHTML + ' ' + (i + 1);
    }
  }


}

// task 15

task15();

function task15() {

  let paragraph = document.querySelectorAll('#task15 p');
  let btn = document.querySelector('#task15 button');
  let input = document.querySelector('#task15 input[name=numbers]');

  btn.addEventListener('click', rase);

  function rase() {

    let arr = [];

    for (let i = 0; i < paragraph.length; i++) {
      arr[i] = paragraph[i].innerHTML;
    }

    input.value = arr.sort(sortArr).join(',');
  }

  function sortArr(a, b) {
    return a - b;
  }

}

// task 16

task16();

function task16() {

  let link = document.querySelectorAll('#task16 a');

  start();

  function start() {
    for (let i = 0; i < link.length; i++) {
      link[i].innerHTML = link[i].innerHTML + `(${link[i].href})`;
    }
  }

}

// task 17

task17();

function task17() {

  let link = document.querySelectorAll('#task17 a');

  arrowLast();

  function arrowLast() {

    for (let i = 0; i < link.length; i++) {
      if (link[i].href.indexOf('http://') === 0) {
        link[i].innerHTML = link[i].innerHTML + '&rarr;';
      }
    }

  }


}

// task 18

task18();

function task18() {

  let paragraph = document.querySelectorAll('#task18 p');

  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].addEventListener('click', func);
  }

  function func() {
    this.innerHTML = this.innerHTML * this.innerHTML;
  }


}

// task 19

task19();

function task19() {

  let img = document.querySelectorAll('#task19 img');

  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', raseImg);
  }

  function raseImg() {
    this.height = this.height * 2;
    this.width = this.width * 2;
  }


}

// task 20

task20();

function task20() {

  let img = document.querySelectorAll('#task20 img');

  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', riseToggleImg);
  }

  function riseToggleImg() {
    this.height = this.height * 2;
    this.width = this.width * 2;
    this.removeEventListener('click', riseToggleImg);
    this.addEventListener('click', reRiseToggleImg);
  }

  function reRiseToggleImg() {
    this.height = this.height / 2;
    this.width = this.width / 2;
    this.removeEventListener('click', reRiseToggleImg);
    this.addEventListener('click', riseToggleImg);

  }

}

// task 21

task21();

function task21() {

  let img = document.querySelectorAll('#task21 .smallImg');
  let newImg = document.querySelector('#task21 .newImg');

  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', resizeImg);
  }

  function resizeImg() {
    newImg.src = this.src;
  }

}

// task 22

task22();

function task22() {

  let input = document.querySelector('#task22 input[name=input]');
  let changeValue = document.querySelectorAll('#task22 input[name=changeValue]');

  for (let i = 0; i < changeValue.length; i++) {
    changeValue[i].addEventListener('click', func);
  }

  function func() {
    let sum = +input.value + +this.value;
    if (sum >= input.value) {
      input.value = sum;
    } else {
      input.value = 0;
    }
  }
}

// task 23

task23();

function task23() {

  let input = document.querySelector('#task23 input[name=number]');

  input.addEventListener('blur', checkNumber);

  function checkNumber() {
    if (this.value >= 1 && this.value <= 100) {
      this.style.border = '2px solid green';
    } else {
      this.style.border = '2px solid red';
    }
  }

}

// task 24

task24();

function task24() {

  let input = document.querySelector('#task24 input[name=anyText]');

  document.documentElement.addEventListener('mouseup', func);

  function func() {
    let content = window.getSelection().toString();
    input.value = content;
  }
}

// task 25

task25();

function task25() {

  let numbers = document.querySelectorAll('#task25 p');
  let btn = document.querySelector('#task25 button');

  btn.addEventListener('click', compare);

  function compare() {
    let newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      newNumbers[i] = numbers[i].innerHTML;

    }
    let sortNewNumbers = newNumbers.sort(mySort);
    let number = sortNewNumbers[sortNewNumbers.length - 1];

    for (let i = 0; i < sortNewNumbers.length; i++) {
      if (numbers[i].innerHTML === number) {
        numbers[i] = numbers[i].style.color = 'red';
      }

    }

  }


  function mySort(a, b) {
    return a - b;
  }
}

// task 26

task26();

function task26() {

  let paragraph = document.querySelectorAll('#task26 p');
  let input = document.querySelector('#task26 input[name=result]');

  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].addEventListener('click', func);
  }

  let count = 0;

  function func() {
    count++;
    input.value = count;
  }

}

// task 27

task27();

function task27() {

  let input = document.querySelector('#task27 input[name=result]');

  start();

  function start() {
    window.setInterval(timer, 1000);
  }

  function timer() {
    input.value = input.value * input.value;
  }

}

// task 28

task28();

function task28() {

  let input = document.querySelector('#task28 input[name=randomStr]');
  let btn = document.querySelector('#task28 button');

  btn.addEventListener('click', random);

  function random() {
    let str = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 8; i++) {
      str += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    input.value = str;
  }

}

// task 29

task29();

function task29() {

  let inputLength = document.querySelector('#task29 input[name=length]');
  let input = document.querySelector('#task29 input[name=randomStr]');
  let btn = document.querySelector('#task29 button');

  btn.addEventListener('click', random);

  function random() {
    let str = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < inputLength.value; i++) {
      str += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    input.value = str;
  }

}

// task 30

task30();

function task30() {

  let inputLength = document.querySelector('#task30 input[name=length]');
  let inputSymbol = document.querySelector('#task30 input[name=symbol]');
  let input = document.querySelector('#task30 input[name=randomStr]');
  let btn = document.querySelector('#task30 button');

  btn.addEventListener('click', random);

  function random() {
    let str = '';
    let possible = inputSymbol.value;

    for (let i = 0; i < inputLength.value; i++) {
      str += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    input.value = str;
  }

}

// task 31

task31();

function task31() {

  let paragraph = document.querySelector('#task31 p');

  start();

  function start() {
    window.setInterval(blink, 1000);
  }

  function blink() {


    if (paragraph.style.color === 'red') {
      paragraph.style.color = 'green';
    } else {
      paragraph.style.color = 'red'
    }
  }

}

// task 32

task32();

function task32() {

  let input = document.querySelector('#task32 input[name=number');
  let result = document.querySelector('#task32 p');

  input.addEventListener('blur', func);

  function func() {
    window.funcId = window.setInterval(go, 1000);
  }


  function go() {
    result.innerHTML = input.value;

    if (parseInt(result.innerHTML) > 0) {
      result.innerHTML--;
    }
    if (parseInt(result.innerHTML) === 0) {
      stop();
    }
  }

  function stop() {
    window.clearInterval(window.funcId);
  }
}

// task 33

task33();

function task33() {

  let result = document.querySelector('#task33 p');

  let colors = ['red', 'blue', 'grey', 'orange', 'green'];

  window.setInterval(changeColor, 1000);
  let i = 0;

  function changeColor() {
    result.style.color = colors[i];
    i++;
    if (i >= colors.length) i = 0;
  }

}

// task 34

task34();

function task34() {

  let paragraph = document.querySelector('#task34 p');
  let link = document.querySelector('#task34 a');
  let strArr = ['один', 'два', 'три', 'четыре', 'пять'];
  let i = 1;
  link.addEventListener('click', changeParagraph);

  paragraph.innerHTML = strArr[0];

  function changeParagraph(event) {
    event.preventDefault();

    paragraph.innerHTML = strArr[i];
    i++;


    if (i >= strArr.length) i = 0;
  }

}

// task 35

task35();

function task35() {

  let input = document.querySelectorAll('#task35 input');
  let num = 1,
    i = 0;

  window.setInterval(valueInputs, 1000);

  function valueInputs() {

    input[i].value = num;
    num++;
    i++;
    if (i >= input.length) i = 0;


  }


}

// task 36

task36();

function task36() {

  let link = document.querySelector('#task36 a');
  let checkbox = document.querySelector('#task36 input');

  link.addEventListener('click', check);

  function check(event) {
    event.preventDefault();
    if (checkbox.checked) {
      checkbox.checked = false;
    }
    else {
      checkbox.checked = true;
    }

  }
}

// task 37

task37();

function task37() {

  let checkboxes = document.querySelectorAll('#task37 input');
  let btn = document.querySelector('#task37 button');

  btn.addEventListener('click', checkAll);

  function checkAll() {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
  }

}

// task 38

task38();

function task38() {

  let radios = document.querySelectorAll('#task38 input');
  let result = document.querySelector('#task38 p span');

  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', func);
  }

  function func() {
    result.innerHTML = this.value;
  }

}

// task 39

task39();

function task39() {

  let checkboxes = document.querySelectorAll('#task39 input');
  let result = document.querySelector('#task39 p span');
  let arr = [];

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', func);
  }

  function func() {
    if (this.checked) {
      arr.push(this.value);
      result.innerHTML = arr;
    }
  }
}

// task 40

task40();

function task40() {

  let checkbox = document.querySelector('#task40 input[name=check]');
  let input = document.querySelector('#task40 input[name=text]');


  checkbox.addEventListener('change', func);

  function func() {
    if (!checkbox.checked) {
      input.style.display = 'none';
    }
    else {
      input.style.display = 'inline';
    }
  }
}

// task 41

task41();

function task41() {


  let checkbox = document.querySelectorAll('#task41 input');

  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', func);

    if (!checkbox[i].checked) {
      checkbox[i].nextElementSibling.style.display = 'none';
    }

  }

  function func() {

    if (!this.checked) {
      this.nextElementSibling.style.display = 'none';
    } else {
      this.nextElementSibling.style.display = 'inline';
    }
  }
}

// task 42

task42();

function task42() {


  let input = document.querySelector('#task42 input');
  let li = document.querySelectorAll('#task42 li');

  input.addEventListener('change', func);
  let n = 0;

  function func() {
    n = this.value;
    li[n - 1].style.color = 'red';
  }


}

// task 43

task43();

function task43() {


  let paragraph = document.querySelector('#task43 p');
  let checkboxes = document.querySelectorAll('#task43 input');

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', changeP);
  }

  function changeP() {
    if (this.checked) {
      paragraph.style.cssText += this.value;
    }
    else {
      paragraph.style.cssText = 'none';
    }
  }
}

// task 44

task44();

function task44() {


  let btn = document.querySelectorAll('#task44 button');

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', func);
  }

  function func() {
    this.parentElement.style.display = 'none';
  }

}

// task 45

task45();

function task45() {

  let input = document.querySelector('#task45 input[name=country]');
  let btn = document.querySelector('#task45 button');
  let ul = document.querySelector('#task45 ul');

  btn.addEventListener('click', separation);

  function separation() {
    let arrCountry = input.value.split(',');
    for (let i = 0; i < arrCountry.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = arrCountry[i];
      ul.appendChild(li);

    }
  }
}

// task 46

task46();

function task46() {

  let input = document.querySelector('#task46 input[name=country]');
  let paragraph = document.querySelector('#task46 p');

  input.addEventListener('keypress', countriesList);

  function countriesList(event) {
    if (event.which === 13) {
      paragraph.innerHTML += input.value + ', ';
    }
  }
}

// task 47

task47();

function task47() {

  let div = document.querySelectorAll('#task47 div');
  let btn = document.querySelector('#task47 button');

  btn.addEventListener('click', cut);

  function cut() {

    for (let i = 0; i < div.length; i++) {
      div[i].innerHTML = div[i].innerHTML.slice(0, 10) + '...';
    }

  }

}

// task 48

task48();

function task48() {

  let td = document.querySelectorAll('#task48 td');
  let btn = document.querySelector('#task48 button');

  btn.addEventListener('click', func);

  let max = '';
  let n = 0;

  function func() {
    for (let i = 0; i < td.length; i++) {
      if (+td[i].innerHTML > max) {
        max = +td[i].innerHTML;
        n = i;
      }
    }
    td[n].style.backgroundColor = 'red';
  }

}

// task 49

task49();

function task49() {

  let td = document.querySelectorAll('#task49 td');
  let btn = document.querySelector('#task49 button');
  let input = document.querySelector('#task49 input');

  btn.addEventListener('click', func);

  function func() {

    let arr = [];

    for (let i = 0; i < td.length; i++) {
      arr.push(td[i].innerHTML);
    }

    arr.sort(mySort);
    input.value = arr.join(', ');

  }

  function mySort(a, b) {
    return a - b;
  }


}

// task 50

task50();

function task50() {

  let tr = document.querySelectorAll('#task50 tr');
  let btn = document.querySelector('#task50 button');

  btn.addEventListener('click', func);

  function func() {
    let arr = [];

    for (let i = 0; i < tr.length - 1; i++) {
      for (let j = 0; j < tr[i].children.length; j++) {
        if (arr[j] === undefined) arr[j] = 0;
        arr[j] += Number(tr[i].children[j].innerHTML);
      }
    }

    for (let k = 0; k < tr[tr.length - 1].children.length; k++) {
      tr[tr.length - 1].children[k].innerHTML = arr[k];
    }
  }
}

// task 51

task51();

function task51() {
  let td = document.querySelectorAll('#task51 td');
  let btnGo = document.querySelector('#task51 .go');
  let btnClear = document.querySelector('#task51 .clear');
  let result = document.querySelector('#task51 p span');

  for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', function () {
      this.classList.add('red');
    })
  }

  btnGo.addEventListener('click', function () {
    let active = document.querySelectorAll('#task51 .red');
    let sum = 0;
    for (let i = 0; i < active.length; i++) {
      sum += Number(active[i].innerHTML);
    }
    result.innerHTML = sum;
  });

  btnClear.addEventListener('click', function () {
    let active = document.querySelectorAll('#task51 .red');
    for (let i = 0; i < active.length; i++) {
      active[i].classList = [];
    }
  })

}

// task 52

task52();

function task52() {

  let td = document.querySelectorAll('#task52 td');
  for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', function () {
      let newValue = this.innerHTML;
      this.style.display = 'none';

      let newInput = document.createElement('input');
      newInput.value = newValue;

      newInput.addEventListener('change', function () {
        this.previousElementSibling.innerHTML = this.value;
        this.previousElementSibling.style.display = '';
        this.parentElement.removeChild(this);
      });
      this.parentElement.insertBefore(newInput, this.nextSibling);
    });
  }

}

// task 53

task53();

function task53() {

  let paragraph = document.querySelectorAll('#task53 p');

  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].addEventListener('click', show);
  }

  function show() {
    this.nextElementSibling.style.display = 'block';
    removeEventListener('click', show);
    this.addEventListener('click', hide);

  }

  function hide() {
    this.nextElementSibling.style.display = 'none';
    removeEventListener('click', hide);
    this.addEventListener('click', show);
  }
}

// task 54

task54();

function task54() {

  let cityArr = {
    'aus': ['Мельбурн', 'Сидней', 'Аделаида', 'Брисбен', 'Хобарт'],
    'jap': ['Токио', 'Киото', 'Осака', 'Иокогама'],
    'sar': ['Кейптаун', 'Йоханесбург'],
  };

  let countriesSelect = document.querySelector('#task54 .country');
  countriesSelect.addEventListener('change', toCities);
  countriesSelect.addEventListener('change', toParagraph);

  let citiesSelect = document.querySelector('#task54 .cities');
  citiesSelect.addEventListener('change', toParagraph);

  function toCities() {
    citiesSelect.innerHTML = '';
    let selectedCountry = countriesSelect.value;
    for (let i = 0; i < cityArr[selectedCountry].length; i++) {
      let newOption = document.createElement('option');
      newOption.innerHTML = cityArr[selectedCountry][i];
      citiesSelect.appendChild(newOption);
    }
  }

  let paragraph = document.querySelector('#task54 p');
  function toParagraph() {
    paragraph.innerHTML = '';
    paragraph.innerHTML = countriesSelect.options[countriesSelect.selectedIndex].text + ','
    +citiesSelect.options[citiesSelect.selectedIndex].text;
  }
}


