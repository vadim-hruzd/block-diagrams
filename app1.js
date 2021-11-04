let x = [3, 6, 4, 5];
let y = [1, 2, 7, 4];

for (let i=0; i<4; i++)
{
    x[i] = Math.sqrt(x[i]);
    y[i] = Math.pow(y[i],2);
    x[i]++;
    y[i] += x[i];
    console.log(y[i]);
}