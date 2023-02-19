import { useSelector } from "react-redux";

const Comparison = () => {

    const transactions = useSelector((state) => state.transactions.value);

    const tr = transactions;
    console.log(tr);

    tr.sort((a,b) => new Date(a.fecha) - new Date(b.fecha));
    console.log(tr);

    const last = transactions[transactions.length-1];
    const before = transactions[transactions.length-2];
    console.log(last)
    console.log(before)
    return(
        <>
            <p>
                {last}
            </p>
            <p>
                {before}
            </p>
        </>

    )
}

export default Comparison;