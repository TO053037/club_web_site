export default function Activity(props) {
	const seasonList = ['spring', 'summer', 'fall', 'winter'];
    const seasonNum = seasonList.indexOf(props.season);

	const titleList = [
		"春（4～6月)",
		"夏（７～9月)",
		"秋（10月～11月)",
		"冬（12月～3月)",
	];

	const textList = [
		"スタジオ行くついでに公園で花見したり、鬼ごっこやシャボン玉で遊んだりしました！（小学生か笑）小樽観光もたのしかったです！！！お世話になっているスタジオ様にプロの演奏家のリサイタルチケットをいただき、ピアノリサイタルも見に行きましたよ♪",
		"7月にはスタジオ近くの豊平川で花火、8、9月にはキロロやルスツでアクティビティを全力で楽しみました！通常のピアノ交流会も充実して楽しかったです！！！",
		"10月には大学祭のための演奏動画の撮影や、（去年は北海学園大学の第70回学園祭に出演させていただきました）さらに広い部屋を借りてハロウィン会をしました！変装しながらパーティーゲーム、お菓子交換等をしてとても楽しい1日でした！笑 2次会には変装しながらカラオケで歌いました（中々カオスな空間でした笑)",
		"12月にはクリスマス会をまるまるマンション1室借りて、全員サンタになりきり、プレゼント交換、パーティーゲーム等をしました～！",
	];


	return (
		<div className="season-text">
			<p className="season-title">{titleList[seasonNum]}</p>
			<p className="text">{textList[seasonNum]}</p>
		</div>
	);
}
