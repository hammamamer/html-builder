$("#paragraphe").click(function()
{
  
  $("#area").append("<p>&lt;p&gt; hello &lt;/p&gt;</p>");
  $("#translatecontainer").append("<p>hello</p>")
  


})
$("#titre").click(function()
{
  
  $("#area").append("<p>&lt;h1&gt; hello &lt;/h1&gt;</p>");
  $("#translatecontainer").append("<h1>hello</h1>")
  


})

$("#image").click(function()
{
  
  $("#area").append('<p>&lt;img src="res/gomycode.png"&gt;</p>');
  $("#translatecontainer").append('<p><img src="res/gomycode.png"></p>')
  


})
$("#ol").click(function()
{
  
  $("#area").append('<p>&lt;ol&gt;<br> &lt;li&gt;aceuil&lt;/li&gt;<br>&lt;li&gt;service&lt;/li&gt;<br> &lt;li&gt;contact&lt;/li&gt;<br>&lt;/ol&gt;</p>');
  $("#translatecontainer").append('<ol><li>aceuil</li><li>service</li><li>contact</li></ol>')
  


})
$("#ul").click(function()
{
  
  $("#area").append('<p>&lt;ul&gt;<br> &lt;li&gt;aceuil&lt;/li&gt;<br>&lt;li&gt;service&lt;/li&gt;<br> &lt;li&gt;contact&lt;/li&gt;<br>&lt;/ul&gt;</p>');
  $("#translatecontainer").append('<ul><li>aceuil</li><li>service</li><li>contact</li></ul>')
})
$(".changep").click(function()
{
  var a=prompt("chose a paragraphe");
  $(".spanp").html(a);
  $(".changep2").html(a);
})
$("#video").click(function()
{
  
  $("#area").append('<p>&lt;video src="res/mov_bbb.mp4" autoplay controls &gt;</p>') 
  $("#translatecontainer").append('<video src="res/mov_bbb.mp4" autoplay controls>')
})
$("#audio").click(function()
{
  
  $("#area").append('<p>&lt;audio src="res/anotherlove.mp3" controls &gt;</p>') 
  $("#translatecontainer").append('<audio src="res/anotherlove.mp3" controls>')
})
$("#form").click(function()
{
  $(".formscontainer").toggle(500);
  $(".formscontainer").css("display","block");

  



})
$("#text").click(function()
{
  
  $("#area").append('<p>&lt;form method="get(or post)" action="pagedetraitement.php"  &gt; <br>&ltlabel&gt; texte &lt/label&gt; &lt;input type="text" &gt; <br>&lt;/form&gt;</p>') 
  $("#translatecontainer").append('<form><label>texte</label><input type="text"></form>')
})
$("#number").click(function()
{
  
  $("#area").append('<p>&lt;form method="get(or post)" action="pagedetraitement.php"  &gt; <br>&ltlabel&gt; number &lt/label&gt; &lt;input type="number" &gt; <br>&lt;/form&gt;</p>') 
  $("#translatecontainer").append('<form><label>number</label><input type="number"></form>')
})
$("#dateortime").click(function()
{
  
  $("#area").append('<p>&lt;form method="get(or post)" action="pagedetraitement.php"  &gt; <br>&ltlabel&gt; date &lt/label&gt; &lt;input type="date" &gt; <br>&lt;/form&gt;</p>') 
  $("#translatecontainer").append('<form><label>date</label><input type="date"></form>')
  $("#area").append('<p>&lt;form method="get(or post)" action="pagedetraitement.php"  &gt; <br>&ltlabel&gt; time &lt/label&gt; &lt;input type="time" &gt; <br>&lt;/form&gt;</p>') 
  $("#translatecontainer").append('<form><label>time</label><input type="time"></form>')
})
$("#email").click(function()
{
  
  $("#area").append('<p>&lt;form method="get(or post)" action="pagedetraitement.php"  &gt; <br>&ltlabel&gt; email &lt/label&gt; &lt;input type="email" &gt; <br>&lt;/form&gt;</p>') 
  $("#translatecontainer").append('<p><form><label>mail</label><input type="email"></form></p>')
})
$("#password").click(function()
{
  
  $("#area").append('<p>&lt;form method="get(or post)" action="pagedetraitement.php"  &gt; <br>&ltlabel&gt; password &lt/label&gt; &lt;input type="password" &gt; <br>&lt;/form&gt;</p>') 
  $("#translatecontainer").append('<p><form><label>password</label><input type="password"></form></p>')
})
$("#color").click(function()
{
  
  $("#area").append('<p>&lt;form method="get(or post)" action="pagedetraitement.php"  &gt; <br>&ltlabel&gt; color &lt/label&gt; &lt;input type="color" &gt; <br>&lt;/form&gt;</p>') 
  $("#translatecontainer").append('<form><label>color</label><input type="color"></form>')
})