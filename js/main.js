let calc;
let calcResult;
let calcBtns;
let input = '';
let color;
let colorChangeBtn;
let colorPalleteCloseBtn;
let themeBtns;
let calcBtnColor1;
let calcBtnColor2;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	calc = document.querySelector('.calc');
	calcResult = document.querySelector('.calc__result');
	calcBtns = document.querySelectorAll('.calc__btn');
	color = document.querySelector('.color');
	colorChangeBtn = document.querySelector('.calc__color-change');
	colorPalleteCloseBtn = document.querySelector('.color__close-btn');
	themeBtns = document.querySelectorAll('.color__theme-btn');
	calcBtnColor1 = document.querySelectorAll('.calc__btn--color1');
	calcBtnColor2 = document.querySelectorAll('.calc__btn--color2');
};

const prepareDOMEvents = () => {
	colorChangeBtn.addEventListener('click', openColorPallete);
	colorPalleteCloseBtn.addEventListener('click', closeColorPallete);

	themeBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			if (e.target.matches('.color__theme-btn--first')) {
				darkTheme();
				closeColorPallete();
			} else if (e.target.matches('.color__theme-btn--second')) {
				if (calc.classList.contains('calc--dark')) {
					blueTheme();
				}
				closeColorPallete();
			}
		});
	});

	calcBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			if (e.target.innerHTML == '=') {
				input = Function('return ' + input)();
				calcResult.value = input;
			} else if (e.target.innerHTML == 'AC') {
				input = '';
				calcResult.value = '';
			} else if (e.target.innerHTML == '+/-') {
				input = -input;
			} else if (e.target.innerHTML == '%') {
				input = input / 100;
			} else {
				input += e.target.innerHTML;
				calcResult.value = input;
			}
		});
	});
};

const openColorPallete = () => {
	color.classList.add('color--active');
};
const closeColorPallete = () => {
	color.classList.remove('color--active');
};

const darkTheme = () => {
	calc.classList.add('calc--dark');
	calcResult.classList.add('calc__result--dark');

	calcBtns.forEach((btn) => {
		btn.classList.add('calc__btn--dark');
	});
	calcBtnColor1.forEach((btn) => {
		btn.classList.add('calc__btn--color1--dark');
	});
	calcBtnColor2.forEach((btn) => {
		btn.classList.add('calc__btn--color2--dark');
	});
	colorChangeBtn.classList.add('color__theme-btn--dark');
};
const blueTheme = () => {
	calc.classList.remove('calc--dark');
	calcResult.classList.remove('calc__result--dark');

	calcBtns.forEach((btn) => {
		btn.classList.remove('calc__btn--dark');
	});
	calcBtnColor1.forEach((btn) => {
		btn.classList.remove('calc__btn--color1--dark');
	});
	calcBtnColor2.forEach((btn) => {
		btn.classList.remove('calc__btn--color2--dark');
	});
	colorChangeBtn.classList.remove('color__theme-btn--dark');
};

document.addEventListener('DOMContentLoaded', main);
