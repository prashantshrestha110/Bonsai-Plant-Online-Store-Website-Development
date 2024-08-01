//image slider of the home page
var images = ['images/a.png', 'images/b.png', 'images/c.png'];

var x = 0;
var imgs = document.getElementById('img');

setInterval(slider, 2000);

function slider() {

  if (x < images.length) 
    {
    x = x + 1;
    } 

  else 
    {
    x = 1;
    }


  imgs.innerHTML = "<img src=" + images[x - 1] + ">";
}

//toggle function of the blog page 
function toggle()
		{
			var p1 = document.getElementById('1');
			var p2 = document.getElementById('2');

			if(p1.style.display == "none")
			{
				p1.style.display = "block";
				p2.style.display = "none";
			}

			else
			{
                p1.style.display = "none";
                p2.style.display = "block";
			}
		}
		document.getElementById('1').style.display = "block";
