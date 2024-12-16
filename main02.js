$(function () {
  $(window).on('scroll', function() {
    var yPos = $(window).scrollTop(); // 현재 스크롤 위치

    // box1에 현재 스크롤 위치 출력
    $('#box1').text(yPos);
  })
  
  const checkItems = document.querySelectorAll(".check-item");
  const overlay = document.querySelector(".overlay");
  let checkedCount = 0;

  checkItems.forEach((item) => {
    item.addEventListener("change", () => {
      if (item.checked) {
        checkedCount++;
      } else {
        checkedCount--;
      }

      // 3개 이상 체크되면 화면 어두워짐
      if (checkedCount >= 3) {
        overlay.style.display = "block";
      } else {
        overlay.style.display = "none";
      }
    });
  });
  
  

});
