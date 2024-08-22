particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });  
  
document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const input = document.getElementById("input");
        const output = document.getElementById("output");
        
        // Get the command from the input
        const command = input.value.trim().toLowerCase();

        // Display the command
        output.innerHTML += `<div><span class="prompt">visitor@web-terminal:~$</span> ${command}</div>`;
        
        // Clear the input
        input.value = "";

        // Process the command
        if (command === "help") {
            output.innerHTML += `<div>Available commands: help, clear, about, contact, projects, theme</div>`;
        } else if (command === "clear") {
            output.innerHTML = "";
        } else if (command === "about") {
            output.innerHTML += `<div>Welcome to mitko's Terminal ! Built with care by @Melt0s, this terminal demonstrates cutting-edge design and interactivity.</div>`;
        } else if (command === "contact") {
            output.innerHTML += `<div>You can contact me at: <span style="color: #00ff00;">awkqm12@gmail.com</span></div>`;
        } else if (command === "projects") {
            output.innerHTML += `<div>My latest projects include:<br>1. Interactive Portfolio<br>2. Web-based Game Engine<br>`;
        } else if (command === "theme") {
            output.innerHTML += `<div>Themes not available yet. Stay tuned!</div>`;
        } else if (command === "") {
            // Do nothing if the input is empty
        } else {
            output.innerHTML += `<div style="color: #ff3333;">Command not found: <span style="color: #ff0000;">${command}</span></div>`;
            output.innerHTML += `<div>Type 'help' to see the list of available commands.</div>`;
        }

        // Scroll to the bottom
        output.scrollTop = output.scrollHeight;
    }
});
