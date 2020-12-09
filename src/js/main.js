let XHR;
let response;
let navLivestream = document.getElementsByClassName("liveStream");

function amistreaming(access_token){
    let client_ID = "ai39gxsqlfglpxv89jb3abka37vdpe";

    XHR = new XMLHttpRequest();
    XHR.open("GET", "https://api.twitch.tv/helix/streams/?user_login=tamberlanecomic");
    XHR.setRequestHeader('Client-ID', client_ID);
    XHR.setRequestHeader("Authorization", access_token);

    XHR.send();
    XHR.onload = function() {
        response = JSON.parse (this.response);
        isLive(response);
        console.log(response);
    };
}

function isLive(response) {
    if (response.data[0]) {
        navLivestream[0].style.display = "grid";
    } else {
        navLivestream[0].style.display = "none";
    }
}

function patreon_total() {
    let pledge_sum = document.getElementById("pledge-sum");
    let patron_count = document.getElementById("patron-count");

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    XHR = new XMLHttpRequest();
    XHR.open("GET", "https://patreon.cvilbrandt.com/get_patreon_count.php");
    XHR.send();
    console.log(XHR.response);
    XHR.onload = function() {
        response = JSON.parse (this.response);
        let sum = formatter.format((response.pledge_sum/100));
        let fetch_pledge_sum = sum.substr(0,sum.length-3);
        let fetch_patron_count = response.patron_count + " Patrons";
        pledge_sum.innerText = fetch_pledge_sum;
        patron_count.innerText = fetch_patron_count;
    };

    // XHR = new XMLHttpRequest();
    // XHR.open("GET", "/comic_git/comic/page_info_list.json");
    // XHR.send();
    // XHR.onload = function() {
    //     let response = JSON.parse(this.response);
    //     let scheduled_posts = response.scheduled_post_count;
    //     let scheduled_text;
    //
    //     if (scheduled_posts === 1 ) {
    //         scheduled_text = "next week's page!"
    //     } else if (scheduled_posts === 2) {
    //         scheduled_text = "2 extra pages!"
    //     } else if (scheduled_posts > 2 ) {
    //         scheduled_text = "up to " + scheduled_posts + " extra pages!"
    //     } else {
    //         scheduled_text = "all pages before they're made public!"
    //     }
    //
    //     document.getElementById("patreon-buffer").innerText = scheduled_text;
    // };
}



    let button = document.getElementById("mobile-menu-button");
    let menu = document.getElementById("mobile-menu");
console.log(menu);
    button.onclick = function toggleMobileMenu() {
        // If class is open, then set display to none and set innertext to Menu
        // Else set display to block and set class to open and change innertext to Hide Menu
    // if () {
            if (menu.classList.contains("open")) {
                menu.style.display = null;
                button.innerHTML = `<h3>Menu</h3>`;
                button.style.backgroundColor = "#341A09";
                button.style.color = "#f5debd";
                button.style.textShadow = "0 0 3px #F35E36";
                menu.classList.remove("open");
            } else {
                menu.style.display = "grid";
                button.innerHTML = `<h3>Hide Menu</h3>`;
                button.style.backgroundColor = "#140a05";
                button.style.color = "#c58b7a";
                button.style.textShadow = "none";
                menu.classList.add("open");
            }
        // }
    };
