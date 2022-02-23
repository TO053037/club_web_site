import { Html } from "next/document";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Activity from "../components/activity";
import ShowPicture from "../components/showPicture";
import PicSwitch from "../components/picSwitch";
import React, {useState} from 'react';

export default function Index() {
	const [springFlag, setSpringFlag] = useState(false);
	const [summerFlag, setSummerFlag] = useState(false);
	const [fallFlag, setFallFlag] = useState(false);
	const [winterFlag, setWinterFlag] = useState(false);
	const seasonList = ['spring', 'summer', 'fall', 'winter'];
	const catchphrase = "----------------------------------------------";
	const aboutText =
		"ストピ同好会とは、主にピアノのまったりとした交流会を開いたり、定期的に季節ごとのイベント（例えば夏に花火、ハロウィンやクリスマスなどなど・・・）をしてみんなで楽しさをモットーに20人の部員と共に感染対策を踏まえたうえで活動しています！！！";
	const activity_spring =
		"スタジオ行くついでに公園で花見したり、鬼ごっこやシャボン玉で遊んだりしました！（小学生か笑）小樽観光もたのしかったです！！！お世話になっているスタジオ様にプロの演奏家のリサイタルチケットをいただき、ピアノリサイタルも見に行きましたよ♪";


	const changeSpringFlag = () => {
		if (springFlag == true) {
			setSpringFlag(false);
		} else {
			setSpringFlag(true);
		}
	}

	const changeSummerFlag = () => {
		if (summerFlag) {
			setSummerFlag(false);
		} else {
			setSummerFlag(true);
		}
	}

	const changeFallFlag = () => {
		if (fallFlag) {
			setFallFlag(false);
		} else {
			setFallFlag(true);
		}
	}

	const changeWinterFlag = () => {
		if (winterFlag) {
			setWinterFlag(false);
		} else {
			setWinterFlag(true);
		}
	}

	return (
		<html>
			<Head>
				<title>club_web_site</title>
			</Head>

			<Header></Header>

			<main>
				<div id="about" className="wrapper">
					<p className="content-title">About</p>
					<p className="text">{aboutText}</p>
				</div>

				<div id="catchphrase" className="wrapper">
					<p className="content-title">キャッチフレーズ</p>
					<p className="text">{catchphrase}</p>
				</div>

				<div id="activity-log" className="wrapper">
					<div className="season">
						<Activity season="spring"></Activity>
						<ShowPicture flag={springFlag} season='spring'></ShowPicture>
						
						<button onClick={() => changeSpringFlag()}><PicSwitch flag={springFlag}></PicSwitch></button>
						
					</div>
					<div className="season">
						<Activity season="summer"></Activity>
						<ShowPicture flag={summerFlag} season='summer'></ShowPicture>
						<button onClick={() => changeSummerFlag()}><PicSwitch flag={summerFlag}></PicSwitch></button>
					</div>
					<div className="season">
						<Activity season="fall"></Activity>
						<ShowPicture flag={fallFlag} season='fall'></ShowPicture>
						<button onClick={() => changeFallFlag()}><PicSwitch flag={fallFlag}></PicSwitch></button>
					</div>
					<div className="season">
						<Activity season="winter"></Activity>
						<ShowPicture flag={winterFlag} season='winter'></ShowPicture>
						<button onClick={() => changeWinterFlag()}><PicSwitch flag={winterFlag}></PicSwitch></button>
					</div>
				</div>
			</main>
		</html>
	);
}
