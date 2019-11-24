function setSecondSlideContent() {
	let strings = [
		{
			black: [
				'Архитектура&nbsp;сайта&nbsp;&mdash;&nbsp;структур',
				'сайта.&nbsp;В&nbsp;нее&nbsp;входит&nbsp;навигация,',
				'страницы&nbsp;категорий,&nbsp;файл',
				'Архитектура&nbsp;помогает&nbsp;визуальн',
				'что&nbsp;очень&nbsp;важно&nbsp;в'
			],
			white: [
				'а&nbsp;страниц&nbsp;и&nbsp;программной&nbsp;части',
				'сеть&nbsp;ссылок,&nbsp;«хлебные&nbsp;крошки»,',
				'ы,&nbsp;карты&nbsp;сайта&nbsp;и&nbsp;так далее.',
				'о&nbsp;представить&nbsp;все&nbsp;разделы&nbsp;сайта,',
				'процессе&nbsp;разработки.'
			]
		},
		{
			black: [
				'Архитектура&nbsp;сайта&nbsp;&mdash;&nbsp;структу',
				'части&nbsp;сайта.&nbsp;В&nbsp;нее&nbsp;входит',
				'«хлебные&nbsp;крошки»,&nbsp;страниц',
				'сайта&nbsp;и&nbsp;так&nbsp;далее.&nbsp;Архите',
				'представить&nbsp;все&nbsp;разделы',
				'процессе&nbsp;р'
			],
			white: [
				'ра&nbsp;страниц&nbsp;и&nbsp;программной',
				'навигация,&nbsp;сеть&nbsp;ссылок,',
				'ы&nbsp;категорий,&nbsp;файлы,&nbsp;карты',
				'ктура&nbsp;помогает&nbsp;визуально',
				'сайта,&nbsp;что&nbsp;очень&nbsp;важно&nbsp;в',
				'азработки.'
			]
		}
	];

	let size =  (window.innerWidth >= 1200) ? strings[0] : strings[1];
	let whiteBlock = document.querySelector('.white-block');
	whiteBlock.innerHTML = '<h1 class="slide-title black right-align">Архитект</h1>';
	let darkBlock = document.querySelector('.dark-block');
	darkBlock.innerHTML = '<h1 class="slide-title white">ура сайта</h1>';

	whiteBlock.innerHTML += size['black'].map(elem => `<p class="slide-text black right-align">${elem}</p>`).join('');
	darkBlock.innerHTML += size['white'].map(elem => `<p class="slide-text white">${elem}</p>`).join('');
}

window.addEventListener('load', function() {
	setSecondSlideContent();
});