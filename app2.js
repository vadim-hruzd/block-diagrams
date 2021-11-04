const x = [3, 6, -4, -1];
let y = [];
for(let i=0; i<4; i++)
{
    if(x[i]>0)
    {
        y[i]=2*x[i];
        console.log(y[i]);
    }
    else 
    {
        y[i]=-2*x[i];
        console.log(y[i]);
    }
}