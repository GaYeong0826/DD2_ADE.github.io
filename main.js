$(function() {
  // pill01 클릭 이벤트
  $('#pill01').on('mouseenter', function() {
    var yPos = $(window).scrollTop(); // 현재 스크롤 위치
    if (yPos <= 400) {
      $(this).stop(true).animate({'left': '40%'}, 600);
      $('#first-text').stop(true).animate({'left': '50%', 'opacity': 1}, 300);
    } else {
      $('#first-text').stop(true).animate({'left': '900px', 'opacity': 0}, 600);
    }
  });

  // 스크롤 이벤트 처리
  $(window).on('scroll', function() {
    var yPos = $(window).scrollTop(); // 현재 스크롤 위치

    // box1에 현재 스크롤 위치 출력
    $('#box1').text(yPos);

    if (yPos >=200) {
      $('#first-text').animate({'opacity':0})
    }

    if(yPos>=1100) {
      $("#pill01").stop(true).css({'opacity':0})
    } else {
      $("#pill01").stop(true).css({'opacity':1})
    }

    // pill01 애니메이션
    if (yPos >= 400 && yPos <=1400) {
      $('#pill01').stop(true).css({
        transition: "all 1s ease",
        top: '40%',
        left: '80%',
        transform: 'rotate(-80deg) scale(0.4)'
      });
      $('#pill-text01').animate({'opacity': 1}, 500);

    } else {
      $('#pill01').stop(true).css({
        transition: "all 1s ease",
        top: '50%',
        left: '50%',
        transform: 'rotate(0deg) scale(1)'
      });
      $('#pill-text01').stop(true).animate({'opacity': 0}, 100);

    }
    // pill02 애니메이션
    if (yPos >= 600 && yPos <=1000) {
      $('#pill02').stop(true).css({
        transition: "all 1s ease",
        opacity: '1',
        top: '70%',
        left: '53%',
        transform: 'rotate(-10deg) scale(0.7)'
      });
      $('#pill-text02').stop(true).animate({'opacity': 1}, 500);
    } else {
      $('#pill02').stop(true).css({
        transition: "all 1s ease",
        opacity: '0',
        top: '50%',
        left: '80%',
        transform: 'rotate(-100deg) scale(0.4)'
      });
      $('#pill-text02').stop(true).animate({'opacity': 0}, 100);
    }
    //pill03 애니메이션
    if (yPos >= 800 && yPos <=1400) {
      $('#pill03').stop(true).css({
        transition: "all 1s ease",
        opacity: '1',
        top: '25%',
        left: '25%',
        transform: 'rotate(70deg) scale(1)'
      });
      $('#pill-text03').stop(true).animate({'opacity': 1}, 500);
    } else {
      $('#pill03').stop(true).css({
        transition: "all 1s ease",
        opacity: '0',
        top: '70%',
        left: '53%',
        transform: 'rotate(-20deg) scale(0.7)'
      });
    }
    //pill03 애니메이션 (스크롤 1200 이상)
    if (yPos >= 1200) {
      $('#pill03').stop(true).css({
        transition: "all 1s ease",
        opacity: '1',
        top: '40%',
        left: '20%',
        transform: 'rotate(90deg) scale(1.7)'
      });
      $('#pill-text03').stop(true).animate({'opacity': 0}, 100);
    }

    // pill03 클릭 시 조건 확인 후 이동 (스크롤 1200 이상일 때만)
    if (yPos >= 1200) {
      $('#pill03').off('click').on('click', function() {
        // 클릭 시 1200 이상일 때만 이동
        window.location.href = '/main02.html'; // 이동할 페이지 URL을 지정
      });
    }


  });
});
