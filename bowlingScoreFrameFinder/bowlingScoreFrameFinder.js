function findScore(rolls)
{
    function calculateFrame(element,index,array)
    { if(index<=10)
        {
        if(count==0 && element!=10)
        {
            count=1;
            sum=sum+element;
            result=result+element;
            temporaryFrame.push(element);
        }else if(count == 1)
        {
            sum=sum+element;
            if(sum == 10)
            {
                result= result+ element;
                result= result+ array[index+1];
                temporaryFrame.push(element);
                temporaryFrame.push(array[index+1]);
            }
            else
            {
                result=result+element;
                temporaryFrame.push(element);
            }
            frame.push(temporaryFrame);
            temporaryFrame=[];
            count=0;
            sum=0;
        }
        else if(count==0 && element == 10 )
        {
            sum=0;
            result = result + 10 ;
            result= result+array[index+1];
            result=result+ array[index+2];
            count=0;
            temporaryFrame.push(element);
            temporaryFrame.push(array[index+1]);
            temporaryFrame.push(array[index+2]);
            frame.push(temporaryFrame);
            temporaryFrame=[];
        }

    }

    }
    let frame=[];
    let result=0;
    let count=0;
    let sum=0;
    let temporaryFrame=[];
    rolls.forEach(calculateFrame);
    return result;
}
function findFrame(rolls)
{
    function calculateFrame(element,index,array)
    { if(index<=10)
        {
        if(count==0 && element!=10)
        {
            count=1;
            sum=sum+element;
            result=result+element;
            temporaryFrame.push(element);
        }else if(count == 1)
        {
            sum=sum+element;
            if(sum == 10)
            {
                result= result+ element;
                result= result+ array[index+1];
                temporaryFrame.push(element);
                temporaryFrame.push(array[index+1]);
            }
            else
            {
                result=result+element;
                temporaryFrame.push(element);
            }
            frame.push(temporaryFrame);
            temporaryFrame=[];
            count=0;
            sum=0;
        }
        else if(count==0 && element == 10 )
        {
            sum=0;
            result = result + 10 ;
            result= result+array[index+1];
            result=result+ array[index+2];
            count=0;
            temporaryFrame.push(element);
            temporaryFrame.push(array[index+1]);
            temporaryFrame.push(array[index+2]);
            frame.push(temporaryFrame);
            temporaryFrame=[];
        }

    }

    }
    let frame=[];
    let result=0;
    let count=0;
    let sum=0;
    let temporaryFrame=[];
    rolls.forEach(calculateFrame);
    return frame;
}
console.log(findScore([10,10,10,10,10,10,10,10,10,10,5,5]));
console.log(findScore([3,7,3,7,1,1]));
console.log(findFrame([10,10,10,10,10,10,10,10,10,10,5,5]));
console.log(findFrame([3,7,3,7,1,1]));