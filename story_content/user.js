function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6J8B2gnlW1J":
        Script1();
        break;
      case "5rFCCX6ObvH":
        Script2();
        break;
      case "6AlMp5sCsd1":
        Script3();
        break;
      case "6idEIeTw6LF":
        Script4();
        break;
      case "5hBLkOIbysk":
        Script5();
        break;
  }
}

function Script1()
{
  var player=GetPlayer();
var pagetitle=player.GetVar("PageTitle");
ga('send', 'screenview', {screenName: 'PageTitle'});
}

function Script2()
{
  ga('send', 'event', 'Button', 'click', 'OSSIX Bone');
}

function Script3()
{
  ga('send', 'event', 'Button', 'click', 'OSSIX Volumax');
}

function Script4()
{
  ga('send', 'event', 'Button', 'click', 'OSSIX Plus');
}

function Script5()
{
  ga('send', 'event', 'Button', 'click', 'GLYMATRIX');
}

