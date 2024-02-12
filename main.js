
    function askForDate(response) {
        if (response === 'yes') {
            showHappyCat();
        } else if (response === 'no') {
            moveButtonAway();
        }
    }

    function showHappyCat() {
        var valentineContent = document.getElementById('valentineContent');
        var loveText = document.getElementById('loveText');
        var happyCatImage = document.getElementById('happyCat');

        valentineContent.innerHTML = '<div id="valentineText">I love you!</div>';
        loveText.innerHTML = 'Happy Valentine\'s Day!';
        happyCatImage.style.display = 'block';
    }

    function moveButtonAway() {
        var noButton = document.querySelector('.valentine-button:nth-child(2)');
        var maxX = window.innerWidth - noButton.offsetWidth;
        var maxY = window.innerHeight - noButton.offsetHeight;

        var newX = Math.floor(Math.random() * maxX);
        var newY = Math.floor(Math.random() * maxY);

        noButton.style.transform = 'translate(' + newX + 'px, ' + newY + 'px)';
    }
