import { BsCheck2Circle } from "react-icons/bs";

const Benevit = ({benevit}) => {
    return (
        <div className="flex items-center">
            <BsCheck2Circle className="mr-5 text-2xl text-rose-700" />
            <p>{benevit}</p>
        </div>
    );
};
export default Benevit;
