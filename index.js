document.getElementById("btn").addEventListener("click", function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("activity-name").textContent = data.activity;
      document.getElementById("title").textContent = " 🦾 Do not get bored 🦿";
      document.getElementById("container").style.background = "linear-gradient(to left, #799F0C, #FFE000)";
        setTimeout(() => {
      
      }, 500);
        setTimeout(() => {
        document.getElementById("title").textContent = " 🤖 I got bored again 🤖";
        document.getElementById("activity-name").textContent = "";
        document.getElementById("container").style.removeProperty("background");
      }, 5000);
    })
})

/*
background: linear-gradient(to left, #799F0C, #FFE000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
