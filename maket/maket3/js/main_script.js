var series = [
    {
        bgImgUrl: "../img/series/1.png",
        seriesName: "Wu Assassins",
        actor: "Iko Uwais",
        recens: "Enjoy the best of action packed movies from FOX international...",
        chanel: "../img/chanel_logo/fox.png"
    },
    {
        bgImgUrl: "../img/series/2.png",
        seriesName: "Project Adam",
        actor: "Iko Uwais",
        recens: "Enjoy the best of action packed movies from ABC international...",
        chanel: "../img/chanel_logo/abc.png"
    },
    {
        bgImgUrl: "../img/series/3.png",
        seriesName: "Monster Truck",
        actor: "Emili Watson",
        recens: "Enjoy the best of action packed movies from NBC international...",        
        chanel: "../img/chanel_logo/nbc.png"
    },
    {
        bgImgUrl: "../img/series/4.png",
        seriesName: "Jentelmens",
        actor: "Iko Uwais",
        recens: "Enjoy the best of action packed movies from ESPN international...",        
        chanel: "../img/chanel_logo/espn.png"
    },
    {
        bgImgUrl: "../img/series/5.png",
        seriesName: "Blade Runner",
        actor: "Iko Uwais",
        recens: "Enjoy the best of action packed movies from USA international...",        
        chanel: "../img/chanel_logo/usa.png"
    },
    {
        bgImgUrl: "../img/series/6.png",
        seriesName: "Wu Assassins",
        actor: "Iko Uwais",
        recens: "Enjoy the best of action packed movies from TruTV international...",        
        chanel: "../img/chanel_logo/trutv.png"
    }
];
var rec = document.querySelector('div[data-rec="rec"]')

function DslSeries(){
    var str =''
    for(var i=0; i<series.length; i++){
        str+=`
    <div style="background: url(${series[i].bgImgUrl});">
        <div class="series">
            <div class="name">
                <h4>Showing now</h4>
                <p>${series[i].seriesName}</p>
            </div>
            <div class="actors">
                <h4>Up Next</h4>
                <p>${series[i].actor}</p>
            </div>
            <div class="recens">
                <p>${series[i].recens}</p>
                <button>watch now</button>
            </div>
        </div>
    </div>
        `
}
    
    rec.innerHTML = str
}

DslSeries()