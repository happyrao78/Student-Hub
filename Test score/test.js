// Sample data for test scores
const chapterData = {
    chapter1: [85, 90, 75, 88, 92],
    chapter2: [78, 82, 80, 85, 79],
    chapter3: [92, 88, 85, 90, 87]
  };
  
  let currentChapter = 'chapter1'; // Default chapter
  
  document.addEventListener('DOMContentLoaded', function() {
    showGraph(currentChapter); // Show default graph on page load
  });
  
  function showGraph(chapter) {
    currentChapter = chapter;
  
    // Update active button
    const buttons = document.querySelectorAll('.chapter-btn');
    buttons.forEach(btn => {
      if (btn.id === `${chapter}-btn`) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  
    // Prepare data for chart
    const scores = chapterData[chapter];
    const labels = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'];
  
    // Clear previous chart if exists
    if (window.scoreChart) {
      window.scoreChart.destroy();
    }
  
    // Create new chart using Chart.js
    const ctx = document.getElementById('scoreChart').getContext('2d');
    window.scoreChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: `Chapter ${chapter.slice(-1)} Scores`,
          data: scores,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Tests'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Scores'
            },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    });
  }
  