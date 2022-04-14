// 8.4 useMemo getAverage가 list내용이 바뀔때만 호출 = > 자원 효율성 최적화 
// 8.5 useCallback


import React,{useState,useMemo,useCallback} from 'react'

const getAverage = numbers=>{
    console.log('평균값 계산 중...')
    if (numbers.length ===0 ) return 0;
    const sum=numbers.reduce((a,b)=>a+b);
    return sum/numbers.length;
};

const Average=()=>{
    const [list,setList]=useState([])
    const [number,setNumber]=useState('');
    /** 
    const onChange = e =>{
        setNumber(e.target.value);
    };
    const onInsert = e =>{
        console.log(list)
        console.log("==")
        console.log(e,number)
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };
*/

    const onChange = useCallback(e=>{
        setNumber(e.target.value);
    },[]); //컴퍼넌트가 처음 렌더링될때만 함수 생성
    const onInsert=useCallback(()=>{
        const nextList=list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    },[number,list]);
    const avg=useMemo(()=>getAverage(list),[list]);

    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값1:</b> {getAverage(list)}
                <b>평균값2:</b> {avg}
            </div>
        </div>
    );
}

export default Average
