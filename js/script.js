let acueil =
  '<button class="but">' +
  '<a class="roundIcon" href="index.html"> الرئيسية</a>' +
  "</button>" +
  '<button class="but">' +
  '<a class="roundIcon" href="web/ramadan1447.html"> رمضان 47</a>' +
  "</button>" +
  '<button class="but">' +
  '<a class="roundIcon" href="web/memB.html"> المكتب</a>' +
  "</button>" +
  '<button class="but">' +
  '<a class="roundIcon" href="web/sowar47.html"> صور</a>' +
  "</button>" +
  '<button class="but">' +
  '<a class="roundIcon" href="web/machro.html"> النداء </a>' +
  "</button>" +
  '<button class="but">' +
  '<a class="roundIcon" href="web/marahil.html"> المشروع </a>' +
  "</button>";

let web =
  '<button class="but">' +
  '<a href="../index.html"> الرئيسية</a>' +
  "</button>" +
  '<button class="but">' +
  '<a href="ramadan1447.html"> رمضان 47</a>' +
  "</button>" +
  '<button class="but">' +
  '<a class="roundIcon" href="memB.html"> المكتب</a>' +
  "</button>" +
  '<button class="but">' +
  '<a class="roundIcon" href="sowar47.html"> صور</a>' +
  "</button>" +
  '<button class="but">' +
  '<a class="roundIcon" href="machro.html"> النداء </a>' +
  "</button>" +
  '<button class="but">' +
  '<a class="roundIcon" href="marahil.html"> المشروع </a>' +
  "</button>";

let header =
  "<img src='../images/alam.gif' alt='العلم المغربي' width='60' height='50'><br>" +
  "&#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958;" +
  "&#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958; &#9956; &#9957; &#9958;" +
  "<p>أهلا وسهلا بكم في موقع جمعية الأمال لتسيير شؤون مسجد النهضة بالبرادية إقليم الفقيه بن صالح المملكة المغربية</p>";

let footer =
  '<span style="direction: rtl;">' +
  "© 2026 جمعية الأمال - جميع الحقوق محفوظة</span>";

function inclureMenu(t) {
  document.getElementById("nav").innerHTML = t;
}

function inclureHeader(t) {
  document.getElementById("header").innerHTML = t;
}

function inclureFooter(t) {
  document.getElementById("footer").innerHTML = t;
}
