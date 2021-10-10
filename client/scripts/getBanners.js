console.log("script loaded");

// window.addEventListener("DOMContentLoaded", getBanners);

async function getBanners() {
  try {
    const response = await fetch("http://localhost:5000/banners");
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function displayBanners() {
  let banners = await getBanners();
  console.log("banners", banners);

  bannerCarousal(banners);
}

displayBanners();

{
  /* <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        <img src="la.jpg" alt="Los Angeles" style="width:100%;">
      </div>

      <div class="item">
        <img src="chicago.jpg" alt="Chicago" style="width:100%;">
      </div>
    
      <div class="item">
        <img src="ny.jpg" alt="New york" style="width:100%;">
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div> */
}

function bannerCarousal(banners) {
  let banner = document.createElement("div");
  banner.setAttribute("class", "carousel slide");
  banner.setAttribute("id", "myCarousel");
  banner.setAttribute("data-ride", "carousel");

  let ol = document.createElement("ol");
  ol.setAttribute("class", "carousel-indicators");

  for (let i = 0; i < banners.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("data-target", "#myCarousel");
    li.setAttribute("data-slide-to", i);
    if (i == 0) {
      li.setAttribute("class", "active");
    }

    ol.append(li);
  }

  banner.append(ol);

  let wrapper = document.createElement("div");
  wrapper.setAttribute("class", "carousel-inner");

  for (let i = 0; i < banners.length; i++) {
    let banner_container = document.createElement("div");
    if (i == 0) {
      banner_container.setAttribute("class", "item active");
    } else {
      banner_container.setAttribute("class", "item");
    }

    let img = document.createElement("img");
    img.setAttribute("src", banners[i].bannerImageUrl);
    img.setAttribute("alt", banners[i].bannerImageAlt);
    img.setAttribute("style", "width:100%;");

    banner_container.append(img);
    wrapper.append(banner_container);
  }

  banner.append(wrapper);

  let prev_button = document.createElement("a");
  prev_button.setAttribute("class", "left carousel-control");
  prev_button.setAttribute("href", "#myCarousel");
  prev_button.setAttribute("data-slide", "prev");

  let prev_icon = document.createElement("span");
  prev_icon.setAttribute("class", "glyphicon glyphicon-chevron-left");

  prev_button.append(prev_icon);

  let prev_text = document.createElement("span");
  prev_text.setAttribute("class", "sr-only");
  prev_text.innerHTML= "Previous";

  prev_button.append(prev_text);

  banner.append(prev_button);

  let next_button = document.createElement("a");
  next_button.setAttribute("class", "right carousel-control");
  next_button.setAttribute("href", "#myCarousel");
  next_button.setAttribute("data-slide", "next");

  let next_icon = document.createElement("span");
  next_icon.setAttribute("class", "glyphicon glyphicon-chevron-right");

  next_button.append(next_icon);

  let next_text = document.createElement("span");
  next_text.setAttribute("class", "sr-only");
  next_text.innerHTML = "Next";

  next_button.append(next_text);

  banner.append(next_button);

  document.querySelector("#bannerList").appendChild(banner);
}
