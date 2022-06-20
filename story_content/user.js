function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YtntSlupIX":
        Script1();
        break;
      case "6KtPeBd2s4J":
        Script2();
        break;
      case "6RiHg7Jyzm2":
        Script3();
        break;
      case "5WVbbe0LxSS":
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

