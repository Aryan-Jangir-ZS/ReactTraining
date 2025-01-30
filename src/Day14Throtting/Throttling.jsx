

const Throttling = () => {
    let check = 0;
    let prevTime ;
    if( check ==0){
    prevTime = new Date();
    check++;
    }

    const logValue = () => {
        let currTime = new Date();
        let diff = currTime - prevTime;

const  hours = Math.floor(diff / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((diff % (1000 * 60)) / 1000);

console.log(`Time difference: ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
       

    }
    let value =0;
    const throttling = (func, limit) => {

        let flag = true;
        return () => {
            if (flag && value!=0) {
                func();
                flag = false;
                setTimeout(() => {
                    flag = true;
                }, limit);
            }
            setTimeout(()=>{value+=1},limit);
        }
    }

    const showValue = throttling(logValue, 3000);

    return (
        <div>
            <button onClick={showValue}>
                click me
            </button>
        </div>
    )
}

export default Throttling;