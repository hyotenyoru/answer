//4~6
const employeeType = [
    {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
    {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
    {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

var employeestypeTime=new Array;
var employeestypeTotal=0;
const employees = [
    {id: 1, name: "Alice", type: 2},
    {id: 2, name: "Bob", type: 3},
    {id: 3, name: "John", type: 2},
    {id: 4, name: "Karen", type: 1},
    {id: 5, name: "Miles", type: 3},
    {id: 6, name: "Henry", type: 1}
];

const tasks = [
    {id: 1, title: "task01", duration: 60 },//min
    {id: 2, title: "task02", duration: 120},
    {id: 3, title: "task03", duration: 180},
    {id: 4, title: "task04", duration: 360},
    {id: 5, title: "task05", duration: 30},
    {id: 6, title: "task06", duration: 220},
    {id: 7, title: "task07", duration: 640},
    {id: 8, title: "task08", duration: 250},
    {id: 9, title: "task09", duration: 119},
    {id: 10, title: "task10", duration: 560},
    {id: 11, title: "task11", duration: 340},
    {id: 12, title: "task12", duration: 45},
    {id: 13, title: "task13", duration: 86},
    {id: 14, title: "task14", duration: 480},
    {id: 15, title: "task15", duration: 900}
];

//4. Count total hours worked in 1 day ? // => 39
//做一個時間表
//加總

employees.forEach(input => {
    index=input.type;
    count=0;
    if (employeestypeTime[index]==undefined)//尋找對照表=>若沒有就搜尋
        timeSelect(index);
    employeestypeTotal+=employeestypeTime[index];
});

//搜尋
function timeSelect(index){
    var node=index;
    employeeType.forEach(Output=>{
        if(Output.id==node){
            employeestypeTime[node]=time(Output.work_begin,Output.work_end);
            //console.log(employeestypeTime[node]);
        }
    });
}

//計算每個班的小時數
function time(strstart,strend) {
    var time;
    var indexstart=strstart.split(":");
    var indexend=strend.split(":");
    time=indexend[0]-indexstart[0];
    if(time<0)
        time+=24;
    //console.log(time);
    return time;
}

console.log("總計工作:"+employeestypeTotal);

//5. Make a function that take as parameters dayTime and return number of employee working // howManyEmployeeByTime(time) => int
//查詢現在時間點有幾個員工

function howManyEmployeeByTime(dayTime) {
    var time=new Date(dayTime);//設置時間
    var timegetHours=time.getHours();
    var index=new Array;
    var startTime=new Date(time);
    var endTime=new Date(time);
    var count=0;
    employeeType.forEach(input=>{
        var indexStart=input.work_begin.split(":");
        var indexEnd=input.work_end.split(":");
        var startnumber=Number(indexStart[0]);
        var endnumber=Number(indexEnd[0]);
    
        //console.log(indexEnd[0]);
        endTime.setHours(indexEnd[0]);
        endTime.setMinutes(indexEnd[1]);
        endTime.setSeconds(indexEnd[2]); 

        startTime.setHours(indexStart[0]);
        startTime.setMinutes(indexStart[1]);
        startTime.setSeconds(indexStart[2]);
        if (endnumber>startnumber) {
            if (startTime<=time&&endTime>=time) {
                index.push(input.id);
            }   
        }else{
            start=Number(indexStart[0])*60*60+Number(indexStart[1])*60+Number(indexStart[2]);
            end=Number(indexEnd[0]+24)*60*60+Number(indexEnd[1])*60+Number(indexEnd[2]);
            timeNumber=Number(time.getHours())*60*60+Number(time.getMinutes())*60+Number(time.getSeconds());
            if (Number(timegetHours)<startnumber&&Number(timegetHours)<=endnumber) {
            timeNumber=Number(time.getHours()+24)*60*60+Number(time.getMinutes())*60+Number(time.getSeconds());
            }
            if (start<=timeNumber&&end>=timeNumber) {
                index.push(input.id);
            }   
        }
        
    });
    index.forEach(input => {//console.log(input);
        employees.forEach(Output => {
            if(Output.type==input)
                count++;
        });
    });
    return count;
}

//測試程序
for (let index = 0; index <=10 ;index++) {
    var time=Date();
    var time=new Date(time);
    var Minutes="00";//測試分鐘
    var Seconds="01";//測試秒數
    time.setHours(index);//設置小時
    time.setMinutes(Minutes);//設置分鐘
    time.setSeconds(Seconds);//設置秒數
    var number=howManyEmployeeByTime(time);
    console.log(time+":"+number);//輸出結果
}

//6. How many days of work needed to done all tasks ? // => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.
//統計工作所需時間
var totalTime=0;
var day=0;
var hours=0;

function next(index) {
    var time=Date();
    var time=new Date(time);
    var Minutes="00";//測試分鐘
    var Seconds="01";//測試秒數
    time.setHours(index);//設置小時
    time.setMinutes(Minutes);//設置分鐘
    time.setSeconds(Seconds);//設置秒數
    count=howManyEmployeeByTime(time);
    return count;
}


tasks.forEach(input=>{
    totalTime+=input.duration;
 });

totalTime=Math.ceil(totalTime/60);
for (let index = 0; index!=-1; index++) {
    if (totalTime<=0){
        day=parseInt(index/24);
        hours=index%24-9;
        break;
    }
    work=next(index);
    totalTime=totalTime-work;
    //console.log(totalTime);
}
console.log("預計要花費"+day+"天"+hours+"小時");

