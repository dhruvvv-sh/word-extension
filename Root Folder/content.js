document.addEventListener('mouseup', function() {
    const word = window.getSelection().toString().trim();
    if (word) {
      fetchDefinition(word);
    }
  });
  
  function fetchDefinition(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data[0] && data[0].meanings) {
          const meaning = data[0].meanings[0].definitions[0].definition;
          showTooltip(meaning, word);
        }
      })
      .catch(error => console.error('Error fetching definition:', error));
  }
  
  function showTooltip(meaning, word) {
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = `<strong>${word}</strong>: ${meaning}`;
    document.body.appendChild(tooltip);
    // Tooltip position and behavior goes here
  }
  