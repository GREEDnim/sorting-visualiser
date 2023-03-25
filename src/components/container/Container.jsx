import { useState } from "react"
import Bars from "../Bars/Bars";
import './style.css'

function  Container()
{
    const limit=50;
    function callAllSorts(){
        // console.log("hi")
        
        bubbleSort();
        selectionSort();
        mergeSort(0,limit-1);
        quickSort(0,limit-1);
    }
    function getRandomElement(){
        return Math.random()*100;
    }
    function getRandomArray(){
        let arr=[];
        for(let i=0;i<limit;i++)
        {
            arr.push(getRandomElement());
        }
        return arr;
    }
    const array=getRandomArray();
    const [arrayB,setArrayB]=useState([...array]);
    const [arrayS,setArrayS]=useState([...array]);
    const [arrayM,setArrayM]=useState([...array]);
    const[arrayQ,setArrayQ]=useState([...array]);

    
    
    async function bubbleSort()
    {
        for(let i=0;i<arrayB.length-1;i++)
            {
                for(let j=i+1;j<arrayB.length;j++)
                {
                    if(arrayB[i]>arrayB[j])
                    {
                        await new Promise((resolve) => setTimeout(resolve, 50));
                        let temp=arrayB[i];
                        arrayB[i]=arrayB[j];
                        arrayB[j]=temp;
                        setArrayB([...arrayB])
                        // console.log(arrayB);
                    }
                }
            }
    }

    async function selectionSort()
    {
        for(let i=0;i<arrayS.length-1;i++)
        {
            let min=arrayS[i];
            let minIndex=i;
            for(let j=i+1;j<arrayS.length;j++)
            {
                if(min>arrayS[j]){
                    min=arrayS[j];
                    minIndex=j;
                }
            }
            if(min<arrayS[i])
            {
                await new Promise((resolve) => setTimeout(resolve, 500));
                let temp=arrayS[i];
                arrayS[i]=arrayS[minIndex];
                arrayS[minIndex]=temp;
                setArrayS([...arrayS]);
                // console.log(arrayS);
            }
        }
    }

    async function mergeSort(s,e){

        if(s===e) return;
        let m = Math.floor(s + (e - s) / 2);
        await mergeSort(s,m);
        await mergeSort(m+1,e);
        await merge(s,m,m+1,e);
    }
    async function merge(s1,e1,s2,e2)
    {
        let ogS=s1;
        
        let dummy=[];
        while(s1<=e1 && s2<=e2){
            if(arrayM[s1]>arrayM[s2]) dummy.push(arrayM[s2++]);
            else dummy.push(arrayM[s1++]);
        }
        while(s1<=e1) dummy.push(arrayM[s1++]);
        while(s2<=e2) dummy.push(arrayM[s2++]);

        for(let i = 0; i < dummy.length; i++) {
            await new Promise((resolve) => setTimeout(resolve, 50));
            arrayM[ogS++] = dummy[i];
            setArrayM([...arrayM]);
          }

    }

    async function quickSort(s,e)
    {
        if(s>=e) return;
        let m = Math.floor(s + (e - s) / 2);
        let p=arrayQ[m];
        let os=s;
        let oe=e;
        while(s<=e)
        {
            while(arrayQ[s]<p) s++;
            while(arrayQ[e]>p) e--;
            
            if(s<=e){
                await new Promise((resolve) => setTimeout(resolve, 50));
                let temp=arrayQ[s];
                arrayQ[s]=arrayQ[e];
                arrayQ[e]=temp;
                setArrayQ([...arrayQ]);
                s++;
                e--;
            }
        }
        await quickSort(os,e);
        await quickSort(s,oe);
    }

    return(
    <div className="container">

        <div className="title">SORTING ALGORITHMS</div>
        <div className="main">
        <Bars array={arrayB} name={"Bubble Sort"}></Bars>
        <Bars array={arrayS} name={"Selection Sort"}></Bars>
        <Bars array={arrayM} name={"Merge Sort"}></Bars>
        <Bars array={arrayQ} name={"Quick Sort"}></Bars>
        </div>
        
        <button className="btn-sort" onClick={callAllSorts}> SORT </button>
    </div>
    )
    
}
export default Container;