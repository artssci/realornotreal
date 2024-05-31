// a vue instance with data and methods sections
const app = Vue.createApp({
    data() {
      return {  
     
      }
    }, 
  methods:{

  }
  })

 app.mount('#app')

// Define the nextSlide function
function nextSlide(nextId) {
  // Hide the current slide
  if (currentSlide !== null) {
    document.getElementById(currentSlide).style.display = "none";
  }
  
  // Show the next slide
  document.getElementById(nextId).style.display = "block";
  
  // Update the currentSlide variable
  currentSlide = nextId;
}

// Display the first slide container initially
let currentSlide = 'start';
document.getElementById(currentSlide).style.display = 'block';

// JavaScript to handle button click
document.getElementById('StartButton').addEventListener('click', function() {
  nextSlide('part1'); // Assuming 'part1' is the ID of the next slide
});

//correct & incorrect question 1-3
// Function for question 1
function setupQuestion1() {
  document.getElementById('leftText1').addEventListener('click', function() {
    document.getElementById('incorrect1').style.display = 'block';
  });

  document.getElementById('rightText1').addEventListener('click', function() {
    document.getElementById('correct1').style.display = 'block';
  });
}

// Function for question 2
function setupQuestion2() {
  document.getElementById('leftText2').addEventListener('click', function() {
    document.getElementById('incorrect2').style.display = 'block';
  });

  document.getElementById('rightText2').addEventListener('click', function() {
    document.getElementById('correct2').style.display = 'block';
  });
}

// Function for question 3
function setupQuestion3() {
  document.getElementById('leftText3').addEventListener('click', function() {
    document.getElementById('correct3').style.display = 'block';
  });

  document.getElementById('rightText3').addEventListener('click', function() {
    document.getElementById('incorrect3').style.display = 'block';
  });
}

// Call functions to set up event listeners for each question
setupQuestion1();
setupQuestion2();
setupQuestion3();


// interactivity for questions 4-10

//question 4
function setupQuestion4() {
  document.getElementById('yes4').addEventListener('click', function() {
    document.getElementById('correct4').style.display = 'block';
  });

  document.getElementById('no4').addEventListener('click', function() {
    document.getElementById('incorrect4').style.display = 'block';
  });
}

// Function to set up event listeners for question 5
function setupQuestion5() {
  document.getElementById('yes5').addEventListener('click', function() {
    document.getElementById('incorrect5').style.display = 'block';
  });

  document.getElementById('no5').addEventListener('click', function() {
    document.getElementById('correct5').style.display = 'block';
  });
}

// Function to set up event listeners for question 6
function setupQuestion6() {
  document.getElementById('yes6').addEventListener('click', function() {
    document.getElementById('correct6').style.display = 'block';
  });

  document.getElementById('no6').addEventListener('click', function() {
    document.getElementById('incorrect6').style.display = 'block';
  });
}

// Function to set up event listeners for question 7
function setupQuestion7() {
  document.getElementById('yes7').addEventListener('click', function() {
    document.getElementById('correct7').style.display = 'block';
  });

  document.getElementById('no7').addEventListener('click', function() {
    document.getElementById('incorrect7').style.display = 'block';
  });
}

// Function to set up event listeners for question 8
function setupQuestion8() {
  document.getElementById('yes8').addEventListener('click', function() {
    document.getElementById('correct8').style.display = 'block';
  });

  document.getElementById('no8').addEventListener('click', function() {
    document.getElementById('incorrect8').style.display = 'block';
  });
}

// Function to set up event listeners for question 9
function setupQuestion9() {
  document.getElementById('yes9').addEventListener('click', function() {
    document.getElementById('incorrect9').style.display = 'block';
  });

  document.getElementById('no9').addEventListener('click', function() {
    document.getElementById('correct9').style.display = 'block';
  });
}

// Function to set up event listeners for question 10
function setupQuestion10() {
  document.getElementById('yes10').addEventListener('click', function() {
    document.getElementById('correct10').style.display = 'block';
  });

  document.getElementById('no10').addEventListener('click', function() {
    document.getElementById('incorrect10').style.display = 'block';
  });
}

// call functions
setupQuestion4();
setupQuestion5();
setupQuestion6();
setupQuestion7();
setupQuestion8();
setupQuestion9();
setupQuestion10();

// JavaScript function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
}

// Call the scrollToTop function whenever you transition to the next slide
document.getElementById('nextpart1').addEventListener('click', function() {
  nextSlide('question1');
  scrollToTop();
});
document.getElementById('next1').addEventListener('click', function() {
  nextSlide('question2');
  scrollToTop();
});
document.getElementById('next2').addEventListener('click', function() {
  nextSlide('question3');
  scrollToTop();
});
document.getElementById('next3').addEventListener('click', function() {
  nextSlide('part2');
  scrollToTop();
});
document.getElementById('nextpart2').addEventListener('click', function() {
  nextSlide('question4');
  scrollToTop();
});
document.getElementById('next4').addEventListener('click', function() {
  nextSlide('question5');
  scrollToTop();
});
document.getElementById('next5').addEventListener('click', function() {
  nextSlide('question6');
  scrollToTop();
});
document.getElementById('next6').addEventListener('click', function() {
  nextSlide('question7');
  scrollToTop();
});
document.getElementById('next7').addEventListener('click', function() {
  nextSlide('question8');
  scrollToTop();
});
document.getElementById('next8').addEventListener('click', function() {
  nextSlide('question9');
  scrollToTop();
});
document.getElementById('next9').addEventListener('click', function() {
  nextSlide('question10');
  scrollToTop();
});
document.getElementById('next10').addEventListener('click', function() {
  nextSlide('end');
  scrollToTop();
});
document.getElementById('restart').addEventListener('click', function() {
  nextSlide('start');
  scrollToTop();
});