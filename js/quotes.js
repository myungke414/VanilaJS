const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다",
        author:"키케로",
    },
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author:"로망로랑",
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author:"사무엘존슨",
    },
    {
        quote: "피할수 없으면 즐겨라",
        author:"로버트 엘리엇",
    },
    {
        quote: "먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
        author:"채근담",
    },
    {
        quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
        author:"F.스콧 핏제랄드",
    },
    {
        quote: "계단을 밟아야 계단 위에 올라설수 있다",
        author:"터키",
    },
    {
        quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author:"톰 모나건",
    },
    {
        quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
        author:"제임스 딘",
    },
    {
        quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
        author:"나폴레옹",
    },
    
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "- " + todaysQuote.author;