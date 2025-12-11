<!DOCTYPE html>
<html>
<head>
    <title>Hack Your Name</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1 id="name">Chetan Moger</h1>

    <button id="info-btn">Click Me</button>

    <script>
        // Basic click alert
        document.getElementById("info-btn").addEventListener("click", () => {
            alert("JS effect working!");
        });

        // Extra interaction 1: Change name color randomly on click
        document.getElementById("info-btn").addEventListener("click", () => {
            const colors = ["red", "blue", "green", "purple", "orange"];
            document.getElementById("name").style.color =
                colors[Math.floor(Math.random() * colors.length)];
        });

        // Extra interaction 2: Animate the name slightly
        document.getElementById("info-btn").addEventListener("click", () => {
            const name = document.getElementById("name");
            name.style.transition = "transform 0.3s";
            name.style.transform = "scale(1.1)";
            setTimeout(() => {
                name.style.transform = "scale(1)";
            }, 300);
        });
    </script>

</body>
</html>