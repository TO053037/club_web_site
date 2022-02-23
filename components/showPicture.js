function createPicPath(seasonName, picNum) {
    const pictureFolderList = [
		"spring_pictures",
		"summer_pictures",
		"fall_pictures",
		"winter-pictures",
	];
	return "/" + seasonName + "_pictures/" + seasonName + "_pic_" + picNum.toString() + ".jpg";
}

export default function ShowPicture(props) {
	const seasonList = ["spring", "summer", "fall", "winter"];
	const seasonNum = seasonList.indexOf(props.season);
	const flag = props.flag;
	

	const countPicList = [7, 10, 7, 4];

    const picIdList = [];
    let maxPic = countPicList[seasonNum];
    if (flag == false) {
        maxPic = 2;
    }

    for (let i = 0; i < maxPic; i ++) {
    picIdList.push(i);
    }

    

    

    return (
        <div className="picture">
            <ul>
                {picIdList.map((id) => (
                    <li><img src={createPicPath(props.season, id)}></img></li>
                ))}
                
            </ul>
            </div>
    )
}
