function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Va3fggLtaM":
        Script1();
        break;
      case "6MitoXKSpwy":
        Script2();
        break;
      case "5xy9sZve09i":
        Script3();
        break;
      case "6UlWsl5Jeaw":
        Script4();
        break;
  }
}

function Script1()
{
  ga('send','event','videos','play','[GLYMATRIX_Video]');
}

function Script2()
{
  ga('send','event','videos','100% video played','[GLYMATRIX_Video]');
}

function Script3()
{
  var player=GetPlayer();
var pagetitle=player.GetVar("PageTitle");
ga('send','screenview',{screenName:pagetitle});
}

function Script4()
{
  ga('send','event','Button','click', OSSIX Bone');'
}

