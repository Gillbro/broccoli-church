export type EventItem = {
	slug: string;
	date: string;
	label: string;
	time: string;
	place: string;
	title: string;
	/** 一覧カード用の短い説明 */
	body: string;
	/** 詳細ページ用の本文（段落） */
	content: string[];
	/** 任意：参加方法などの補足見出し付きセクション */
	sections?: { heading: string; paragraphs: string[] }[];
	image: string;
	imageAlt: string;
};

export const eventItems: EventItem[] = [
	{
		slug: 'ブロ教DJ',
		date: '定期開催',
		label: '定期開催',
		time: '21:00~23:00 JST',
		place: 'VRChat / ブロ教DJワールド',
		title: 'ブロ教DJ',
		body: 'ブロッコリーと共に流れる音楽を楽しみます。',
		content: [
			'ブロ教DJは、ブロッコリーを眺めながら音楽に身をゆだねる定期イベントです。選曲は回ごとに変わり、幅広いジャンルが流れます。',
			'おしゃべりしても、静かに聴いても大丈夫。ブロッコリー好きも、音楽好きも、どちらも集まれる夜です。',
			'当グループオリジナルマスコットキャラクターのブロッコリーの妖精「Minibro」を配置しています。是非ブロッコリーになりながら音楽をお楽しみください。',
		],
		sections: [
			{
				heading: '開催について',
				paragraphs: [
					'定期開催です。基本的には第3週か第4週の日曜21時開場です。月一開催になります。',
					'会場は VRChat 内の「ブロ教DJワールド」です。開催案内はグループで随時お伝えします。',
				],
			},
			{
				heading: 'こんな方へ',
				paragraphs: [
					'音楽を聴きながらゆるく過ごしたい方、ブロッコリーと一緒に夜を過ごしたい方におすすめです。',
				],
			},
		],
		image: '/images/events/buro_dj.png',
		imageAlt: 'DJイベントの様子',
	},
	{
		slug: 'ブロ教Bar',
		date: '定期開催',
		label: '定期開催',
		time: '22:00~23:00 JST',
		place: 'VRChat / Green Grown',
		title: 'ブロ教Bar',
		body: 'ブロッコリー料理のみを提供するBarです。',
		content: [
			'ブロ教Barは、メニューがブロッコリーづくしのバーイベントです。そして、さまざまなブロッコリー料理の話題で盛り上がります。',
			'料理は全て実際に作れられたメニューであり、そのすべてにレシピが存在します。',
			'ブロッコリーの魅力に興味がある方、ブロッコリー料理が気になる方は是非気軽にお越しください。',
			'会場は VRChat 内の「Green Grown」です。開催案内はグループで随時お伝えします。'
		],
		sections: [
			{
				heading: '開催について',
				paragraphs: [
					'定期開催です。基本的には第2週、第4週の水曜22時開店です。（都合につき日付が前後する可能性があります。）',
					'飲食そのものは各自の現実世界におまかせ。仮想のカウンター越しに、ブロッコリー愛を分かち合いましょう。',
				],
			},
		],
		image: '/images/events/buro_bar.png',
		imageAlt: 'Barイベントの様子',
	},
	{
		slug: 'ブロ教集会場',
		date: '常時展示',
		label: '常時展示',
		time: '時間指定なし',
		place: 'VRChat / ブロ教集会場',
		title: 'ブロ教集会場',
		body: 'ブロッコリーとチルしよう。',
		content: [
			'ブロ教集会場は、いつでも立ち寄れる常設の憩いの場です。イベントが無い日でも、ブロッコリーに囲まれてゆっくりできます。',
			'フレンドとの待ち合わせても、ひとりでぼんやりしても構いません。その気持ちを共有できる場所としてご利用ください。',
			'よく探してみると、謎が隠れているかもしれません。',
		],
		sections: [
			{
				heading: '利用について',
				paragraphs: [
					'時間指定はありません。公開中はいつでも入場できます。',
					'※現在大幅アップデートを予定しています。詳細はX（@gillbro_vrc）をご確認ください。',
				],
			},
		],
		image: '/images/events/buro_shuukai.png',
		imageAlt: '集会場のイメージ',
	},
];

export function getEventBySlug(slug: string) {
	return eventItems.find((item) => item.slug === slug);
}
