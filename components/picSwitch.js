export default function PicSwitch(props) {
    if (props.flag) {
        return <p>表示を減らす</p>
    } else {
        return <p>表示を増やす</p>
    }
}