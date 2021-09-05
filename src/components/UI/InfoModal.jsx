export default function InfoModal(props) {
  const { status, text } = props;

  return <div className={"info-modal" + ` ${status}`}>{text}</div>;
}
