import InputHeader from "./InputHeader";

export default function LimitInput({
    setInput,
    setOpenType,
}) {
    return (
        <InputHeader backPress={() => {setInput(null); setOpenType(false);}} headerText={"Set Limit"} />
    );
}
